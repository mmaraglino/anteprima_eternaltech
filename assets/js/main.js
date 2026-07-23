'use strict';

// ══════════════════════════════════════
// PARTICLE SYSTEM
// ══════════════════════════════════════
class ParticleSystem {
  constructor(canvasId, options = {}) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.opts = Object.assign({
      count: 130,
      speed: 0.22,
      minR: 0.5,
      maxR: 1.8,
      linkDist: 110,
      color: [26, 172, 255],
      waveAmp: 80,
      waveFreq: 0.003,
    }, options);
    this.particles = [];
    this.mouse = { x: null, y: null };
    this.animId = null;
    this.time = 0;
    this.colorStr = this.opts.color.join(','); // pre-compiled, avoids template alloc per frame
    this.resize();
    this.init();
    this.bindEvents();
    this.animate();
  }

  resize() {
    const p = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width  = p.width  || window.innerWidth;
    this.canvas.height = p.height || window.innerHeight;
    this.W = this.canvas.width;
    this.H = this.canvas.height;
  }

  init() {
    this.particles = [];
    for (let i = 0; i < this.opts.count; i++) {
      const x = Math.random() * this.W;
      const y = Math.random() * this.H;
      this.particles.push({
        x, y,
        bx: x, by: y,
        vx: (Math.random() - 0.5) * this.opts.speed,
        vy: (Math.random() - 0.5) * this.opts.speed,
        r: this.opts.minR + Math.random() * (this.opts.maxR - this.opts.minR),
        alpha: 0.25 + Math.random() * 0.65,
        phase: Math.random() * Math.PI * 2,
        amp: (0.4 + Math.random() * 0.6) * this.opts.waveAmp,
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => { this.resize(); this.init(); }, { passive: true });
    const el = this.canvas.parentElement;
    el.addEventListener('mousemove', e => {
      const r = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - r.left;
      this.mouse.y = e.clientY - r.top;
    });
    el.addEventListener('mouseleave', () => { this.mouse.x = null; this.mouse.y = null; });
  }

  drawParticle(p) {
    const { ctx, colorStr } = this;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${colorStr},${p.alpha.toFixed(2)})`;
    ctx.fill();
  }

  drawLinks() {
    const { ctx, particles, opts, mouse } = this;
    const [r, g, b] = opts.color;
    for (let i = 0; i < particles.length; i++) {
      const pi = particles[i];
      // particle-to-particle
      for (let j = i + 1; j < particles.length; j++) {
        const pj = particles[j];
        const dx = pi.x - pj.x, dy = pi.y - pj.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < opts.linkDist) {
          ctx.beginPath();
          ctx.moveTo(pi.x, pi.y);
          ctx.lineTo(pj.x, pj.y);
          ctx.strokeStyle = `rgba(${r},${g},${b},${(1 - d / opts.linkDist) * 0.22})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
      // particle-to-mouse
      if (mouse.x !== null) {
        const dx = pi.x - mouse.x, dy = pi.y - mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        const md = opts.linkDist * 1.6;
        if (d < md) {
          ctx.beginPath();
          ctx.moveTo(pi.x, pi.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${r},${g},${b},${(1 - d / md) * 0.45})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }
  }

  update(dt = 0.016) {
    this.time += dt * 0.10;
    const clampedDt = Math.min(dt, 0.033);
    for (const p of this.particles) {
      p.y  = p.by + Math.sin(this.time + p.phase + p.bx * this.opts.waveFreq) * p.amp;
      p.bx += p.vx * clampedDt * 30;
      p.by += p.vy * clampedDt * 30;
      // mouse repulsion
      if (this.mouse.x !== null) {
        const dx = p.x - this.mouse.x, dy = p.y - this.mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 80) {
          const f = (80 - d) / 80 * 0.3 * clampedDt * 30;
          p.bx += (dx / d) * f;
          p.by += (dy / d) * f;
        }
      }
      // wrap
      if (p.bx < -10) p.bx = this.W + 10;
      if (p.bx > this.W + 10) p.bx = -10;
      if (p.by < -10) p.by = this.H + 10;
      if (p.by > this.H + 10) p.by = -10;
    }
  }

  animate(timestamp) {
    if (document.hidden) {
      this.lastTime = null;
      this.animId = requestAnimationFrame(ts => this.animate(ts));
      return;
    }
    if (!this.lastTime) this.lastTime = timestamp || performance.now();
    const now = timestamp || performance.now();
    const dt = Math.min((now - this.lastTime) / 1000, 0.05);
    this.lastTime = now;

    const { ctx, W, H } = this;
    ctx.clearRect(0, 0, W, H);
    this.update(dt);
    this.drawLinks();
    for (const p of this.particles) this.drawParticle(p);
    this.animId = requestAnimationFrame(ts => this.animate(ts));
  }
}

// ══════════════════════════════════════
// INIT CANVASES
// ══════════════════════════════════════
// Defer particle init until browser is idle — doesn't block FCP/LCP
const isMobile = window.innerWidth < 640;
const startParticles = () => {
  if (isMobile) return; // no canvas on mobile → saves CPU + TBT
  window._heroParticles = new ParticleSystem('hero-canvas', {
    count: 50, speed: 0.08, linkDist: 100, waveAmp: 35,
    color: [0, 180, 255]
  });
};

// ══════════════════════════════════════
// NAVBAR SCROLL STATE
// ══════════════════════════════════════
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ══════════════════════════════════════
// ══════════════════════════════════════
// INTERSECTION OBSERVER — reveal
// ══════════════════════════════════════
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ══════════════════════════════════════
// SCROLL ANCHORS — custom smooth scroll
// ══════════════════════════════════════
function customSmoothScrollTo(targetSelector, duration = 850) {
  const target = typeof targetSelector === 'string' ? document.querySelector(targetSelector) : targetSelector;
  if (!target) return;

  const navbar = document.getElementById('navbar');
  const navHeight = navbar ? navbar.offsetHeight : 68;
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;

  if (Math.abs(distance) < 2) return;

  let startTime = null;
  let animId = null;

  const cancel = () => {
    if (animId) cancelAnimationFrame(animId);
    window.removeEventListener('wheel', cancel);
    window.removeEventListener('touchstart', cancel);
  };

  window.addEventListener('wheel', cancel, { passive: true });
  window.addEventListener('touchstart', cancel, { passive: true });

  function step(currentTime) {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Curva cubic ease-in-out per uno scorrimento armonico su qualsiasi frequenza di aggiornamento
    const ease = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, startPosition + distance * ease);

    if (elapsed < duration) {
      animId = requestAnimationFrame(step);
    } else {
      cancel();
    }
  }

  animId = requestAnimationFrame(step);
}
window.customSmoothScrollTo = customSmoothScrollTo;

// Gestione scorrimento fluido all'arrivo da altre pagine con hashtag (#societa, etc.)
if (window.location.hash) {
  const initialHash = window.location.hash;
  const target = document.querySelector(initialHash);
  if (target) {
    window.scrollTo(0, 0);
    window.addEventListener('load', () => {
      setTimeout(() => {
        customSmoothScrollTo(target, 900);
      }, 150);
    });
  }
}

document.querySelector('.hero-scroll')?.addEventListener('click', (e) => {
  e.preventDefault();
  customSmoothScrollTo('#about', 850);
});

// ══════════════════════════════════════
// PILLAR STACKING CARDS (Visione)
// ══════════════════════════════════════
(function setupPillarStack() {
  const pillars = Array.from(document.querySelectorAll('.pillar'));
  if (pillars.length < 2) return;

  function lerp(a, b, t) { return a + (b - a) * Math.min(Math.max(t, 0), 1); }

  const SCALE_MIN = [0.94, 0.97];

  let raf = null;

  function update() {
    const rects = pillars.map(p => p.getBoundingClientRect());

    for (let i = 0; i < pillars.length - 1; i++) {
      const ri    = rects[i];
      const rNext = rects[i + 1];
      // progress: 0 = card successiva non arrivata, 1 = la copre completamente
      const cover = Math.min(1, Math.max(0,
        (ri.bottom - rNext.top) / (ri.height * 0.65)
      ));

      if (cover > 0) {
        const s    = lerp(1, SCALE_MIN[i] ?? 0.97, cover);
        const op   = lerp(1, 0.45, cover);        // 1→0.45 opacity
        pillars[i].style.transform = `scale(${s.toFixed(4)})`;
        pillars[i].style.opacity   = op.toFixed(3);
      } else {
        pillars[i].style.transform = '';
        pillars[i].style.opacity   = '';
      }
    }
    raf = null;
  }

  window.addEventListener('scroll', () => {
    if (!raf) raf = requestAnimationFrame(update);
  }, { passive: true });

  update();
})();





if ('requestIdleCallback' in window) { requestIdleCallback(startParticles, { timeout: 2000 }); } else { setTimeout(startParticles, 200); }

// ══════════════════════════════════════
// MODALE CONTATTACI (POPUP)
// ══════════════════════════════════════
(function initContactModalMain() {
  const modal = document.getElementById('contactModal');
  if (!modal) return;

  const closeBtn = document.getElementById('closeContactModal');
  const form = document.getElementById('modalContactForm');

  function openModal(e) {
    if (e) e.preventDefault();
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-contact], .nav-cta, .btn-cta, a[href*="contattaci"], a[href="#contatti"]');
    if (trigger) {
      e.preventDefault();
      openModal();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const sendBtn = document.getElementById('modalSendBtn');
      if (sendBtn) {
        sendBtn.textContent = 'Invio in corso...';
        sendBtn.disabled = true;
      }

      setTimeout(() => {
        form.innerHTML = '<div class="contact-success-msg">✓ Messaggio inviato con successo!<br>Ti risponderemo al più presto.</div>';
        setTimeout(() => {
          closeModal();
        }, 2200);
      }, 800);
    });
  }
})();
