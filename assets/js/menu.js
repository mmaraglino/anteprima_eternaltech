// ══════════════════════════════════════
// MENU & REVEAL OBSERVER — condiviso su tutte le pagine
// ══════════════════════════════════════
(function () {
  'use strict';

  // Navbar scroll
  const _navbar = document.getElementById('navbar');
  if (_navbar && !_navbar.dataset.scrollBound) {
    _navbar.dataset.scrollBound = '1';
    window.addEventListener('scroll', () => {
      _navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    const backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);

    function blurContent(on) {
      document.querySelectorAll('body > section, body > footer, body > main').forEach(el => {
        el.style.filter     = on ? 'blur(5px)' : '';
        el.style.transition = 'filter 0.25s ease';
      });
    }

    function openMenu() {
      navLinks.classList.add('open');
      hamburger.classList.add('open');
      backdrop.classList.add('open');
      hamburger.setAttribute('aria-expanded', true);
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
      blurContent(true);
    }
    function closeMenu() {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      backdrop.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
      blurContent(false);
    }

    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.contains('open') ? closeMenu() : openMenu();
    });

    backdrop.addEventListener('click', closeMenu);

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        closeMenu();
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target && typeof window.customSmoothScrollTo === 'function') {
            window.customSmoothScrollTo(target, 850);
          }
        }
      });
    });
  }

  // Intersection Observer per animazioni reveal (SEMPRE ATTIVO E INDIPENDENTE)
  const initReveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    if ('IntersectionObserver' in window) {
      const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            revealObs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

      reveals.forEach(el => revealObs.observe(el));
    } else {
      reveals.forEach(el => el.classList.add('in-view'));
    }
  };

  // ══════════════════════════════════════
  // MODALE CONTATTACI (POPUP)
  // ══════════════════════════════════════
  const initContactModal = () => {
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

    // Delegation globale per qualsiasi pulsante o link Contattaci
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
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initReveal();
      initContactModal();
    });
  } else {
    initReveal();
    initContactModal();
  }
})();
