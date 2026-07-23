// ══════════════════════════════════════
// INTERNATIONALIZATION (i18n) — EN (Primary) & IT (Secondary)
// ══════════════════════════════════════

const translations = {
  en: {
    // Menu & Header
    "nav_about": "About",
    "nav_technology": "Technology",
    "nav_ecosystem": "Ecosystem",
    "nav_trust": "Trust",
    "nav_contact": "Get in touch",

    // Hero (#top / #hero)
    "hero_title": "Governed AI infrastructure for digital identity, persistent memory and intelligent agents.",
    "hero_subtitle": "Eternal Tech develops proprietary AI technologies to turn identity, knowledge and memory into systems that are structured, queryable and controllable over time.",
    "hero_scroll": "↓ Scroll for more",

    // About (#about)
    "about_eyebrow": "THE COMPANY",
    "about_title": "A company before its products.",
    "about_p1": "Eternal Tech builds systems — not a single tool that produces an output. Our key word isn't just AI: it's infrastructure. And it isn't abstract: it works on a defined territory — identity, memory, knowledge and agents.",
    "about_p2": "One qualifier is essential: control of use at every step of the lifecycle — consent, sources, permissions, limits, review. It's what makes the technology adoptable.",
    "about_quote": "“AI has learned to generate. Now it has to learn to last: holding context, memory and rules of use over time. Eternal Tech exists to build that infrastructure.”",
    "about_quote_author": "Lorenzo Massaro — CTO",
    "about_cta": "See how we build",

    // Vision (#vision)
    "vision_title": "From output to continuity.",
    "vision_p1": "The first wave of generative AI taught the market to produce content fast. The more mature demand is shifting toward systems that operate inside real workflows, hold context, keep what matters and respect rules of use. It's the shift from AI as an output generator to AI as persistent infrastructure.",
    "vision_p2": "That is where we work: at the meeting point of AI infrastructure, digital representation and persistent memory. For us, value isn't generating more — it's maintaining continuity, context, access and control.",
    "vision_col1_title": "Structure",
    "vision_col1_desc": "Content, documents, voice and knowledge become an ordered system.",
    "vision_col2_title": "Query",
    "vision_col2_desc": "Memory doesn't sit in a static archive: it's accessible on demand.",
    "vision_col3_title": "Control",
    "vision_col3_desc": "Access, sources, limits and updates are part of the value — not an add-on.",

    // Technology (#technology)
    "tech_badge": "TECHNOLOGY",
    "tech_card1_title": "Proprietary technology",
    "tech_card1_desc": "We build the architecture we run: identity engine, semantic ingestion, controlled retrieval and publishing workflows. Components of one stack, not disconnected initiatives.",
    "tech_card2_title": "Persistent AI",
    "tech_card2_desc": "Systems designed to outlast the single session: they hold context, memory and coherence over time.",
    "tech_card3_title": "Controlled digital identity",
    "tech_card3_desc": "Every digital identity has declared sources, authorizations, limits and accountability. Control is content, not a footnote.",
    "tech_card4_title": "Memory as living heritage",
    "tech_card4_desc": "Memory isn't an archive to preserve: it's knowledge to use and pass on — know-how, method, skills, company history and culture.",
    "tech_card5_title": "High-value applications",
    "tech_card5_desc": "The system serves professional, cultural and organizational contexts: training, archives, company history, skills and crafts.",
    "tech_card6_title": "Open Standards",
    "tech_card6_desc": "We build on open, interoperable protocols such as MCP: infrastructure that fits into existing stacks instead of replacing them.",

    // Ecosystem (#ecosistema / #ecosystem)
    "eco_eyebrow": "THE ECOSYSTEM",
    "eco_title": "One architecture, three layers.",
    "eco_intro": "Each component of our stack is designed to integrate with the others. Three layers, one goal: turning data into reliable decisions.",
    "eco_layer1_label": "LAYER 1 — INFRASTRUCTURE · Live",
    "eco_detwin_name": "DeTwin",
    "eco_detwin_desc": "The digital twin platform that replicates, simulates and optimizes physical assets in real time. Cloud-native infrastructure, API-first.",
    "eco_detwin_cta": "Visit DeTwin ↗",
    "eco_layer2_label": "LAYER 2 — PLATFORM · In development",
    "eco_layer2_desc": "Orchestration, model management and data governance — the layer connecting infrastructure and applications.",
    "eco_layer3_label": "LAYER 3 — VERTICAL APPLICATIONS · Coming next",
    "eco_layer3_desc": "Vertical solutions for energy, manufacturing and logistics, built on our stack.",

    // Trust (#trust)
    "trust_badge": "TRUST BY DESIGN",
    "trust_title": "Trust is a requirement, not a promise.",
    "trust_intro": "When technology works on identity, voice, likeness and memory, trust enters the evaluation before the product does. So we treat it as a design principle — with the European regulatory framework as reference — and make it readable in five points.",
    "trust_p1_title": "Authorization",
    "trust_p1_desc": "Who authorizes the use of content, likeness, voice and materials.",
    "trust_p2_title": "Sources and limits",
    "trust_p2_desc": "Which sources feed the system, and which boundaries are set.",
    "trust_p3_title": "Access",
    "trust_p3_desc": "Who can reach a memory or a digital identity, and with which permissions.",
    "trust_p4_title": "Review",
    "trust_p4_desc": "How outputs are checked — and what the technology is not allowed to do.",
    "trust_p5_title": "Data and accountability",
    "trust_p5_desc": "How we handle data, deletion and responsibility of use.",
    "trust_close": "Our Content Policy and Privacy Policy remain the legal references: this page translates them into readable commitments.",

    // Team (#team)
    "team_title": "Behind the project",
    "team_subtitle": "A team combining technical research, product vision and market strategy to build AI infrastructure that is verifiable, controllable and ready for real-world use.",
    "team_c1_role": "Founder / CEO",
    "team_c1_desc": "Company vision, product and intellectual property.",
    "team_c2_role": "Founder / CTO",
    "team_c2_desc": "Infrastructure architecture and technical validation.",
    "team_c3_role": "COO",
    "team_c3_desc": "Operations, strategy and go-to-market.",
    "team_c4_role": "Educator / Brand Ambassador",
    "team_c4_desc": "Technology storytelling and community relations.",
    "team_bar_text": "Discover why to trust us",

    // Closing & Contact (#contact)
    "closing_title": "Continuity is the next<br>frontier of AI.",
    "closing_subtitle": "And it has to be built with rules, sources and control.",
    "closing_cta": "Get in touch",

    // Footer
    "footer_tagline": "Eternal Tech is a technology company specializing in AI infrastructure for digital identity, persistent memory and intelligent agents.",
    "footer_address": "Via Sclafani, 40 · 95024 · Acireale (CT) · Italy",
    "footer_col_nav": "Navigation",
    "footer_col_contact": "Contact",
    "footer_rights": "All rights reserved © 2026 Eternal Tech",
    "footer_privacy": "Privacy Note",
    "footer_cookies": "Cookie Policy",
    "footer_terms": "Terms and Conditions",

    // Modal
    "modal_title": "Get in touch",
    "modal_name_ph": "Full Name*",
    "modal_email_ph": "Email*",
    "modal_msg_ph": "Your Message*",
    "modal_privacy_txt": "I confirm that I have read, understand and agree to the <a href=\"privacy.html\" target=\"_blank\" rel=\"noopener\">Privacy Policy</a>, and I am of legal age*",
    "modal_recaptcha_label": "I'm not a robot",
    "modal_submit_btn": "Send Message",
    "modal_success_msg": "✓ Message sent successfully!<br>We will respond as soon as possible."
  },

  it: {
    // Menu & Header
    "nav_about": "Chi siamo",
    "nav_technology": "Tecnologia",
    "nav_ecosystem": "Ecosistema",
    "nav_trust": "Trust",
    "nav_contact": "Contattaci",

    // Hero (#top / #hero)
    "hero_title": "Infrastruttura AI governata per identità digitale, memoria persistente e agenti intelligenti.",
    "hero_subtitle": "Eternal Tech sviluppa tecnologie AI proprietarie per trasformare identità, conoscenza e memoria in sistemi strutturati, interrogabili e controllabili nel tempo.",
    "hero_scroll": "↓ Scorri per saperne di più",

    // About (#about)
    "about_eyebrow": "LA SOCIETÀ",
    "about_title": "Una società prima dei prodotti.",
    "about_p1": "Eternal Tech costruisce sistemi — non un singolo strumento che produce un output. La nostra parola chiave non è solo AI: è infrastruttura. E non è astratta: lavora su un territorio definito — identità, memoria, conoscenza e agenti.",
    "about_p2": "Un qualificatore è essenziale: controllo d'uso in ogni fase del ciclo di vita — consenso, fonti, permessi, limiti, revisione. È ciò che rende la tecnologia adottabile.",
    "about_quote": "“L'AI ha imparato a generare. Ora deve imparare a durare: mantenere contesto, memoria e regole d'uso nel tempo. Eternal Tech esiste per costruire quell'infrastruttura.”",
    "about_quote_author": "Lorenzo Massaro — CTO",
    "about_cta": "Scopri come costruiamo",

    // Vision (#vision)
    "vision_title": "Dall'output alla continuità.",
    "vision_p1": "La prima ondata di AI generativa ha insegnato al mercato a produrre contenuti velocemente. La domanda più matura si sta spostando verso sistemi che operano all'interno di flussi reali, mantengono il contesto, conservano ciò che conta e rispettano le regole d'uso. È il passaggio dall'AI come generatore di output all'AI come infrastruttura persistente.",
    "vision_p2": "È lì che lavoriamo: al punto d'incontro tra infrastruttura AI, rappresentazione digitale e memoria persistente. Per noi il valore non è generare di più — è mantenere continuità, contesto, accesso e controllo.",
    "vision_col1_title": "Struttura",
    "vision_col1_desc": "Contenuti, documenti, voce e conoscenza diventano un sistema ordinato.",
    "vision_col2_title": "Interrogazione",
    "vision_col2_desc": "La memoria non risiede in un archivio statico: è accessibile su richiesta.",
    "vision_col3_title": "Controllo",
    "vision_col3_desc": "Accesso, fonti, limiti e aggiornamenti sono parte del valore — non un'aggiunta.",

    // Technology (#technology)
    "tech_badge": "TECNOLOGIA",
    "tech_card1_title": "Tecnologia proprietaria",
    "tech_card1_desc": "Sviluppiamo in casa l'architettura che usiamo: identity engine, ingestione semantica, retrieval controllato e flussi di pubblicazione. Componenti di uno stesso stack, non iniziative scollegate.",
    "tech_card2_title": "AI persistente",
    "tech_card2_desc": "Sistemi progettati per durare oltre la singola sessione: mantengono contesto, memoria e coerenza nel tempo.",
    "tech_card3_title": "Identità digitale controllata",
    "tech_card3_desc": "Ogni identità digitale ha fonti dichiarate, autorizzazioni, limiti e responsabilità. Il controllo è contenuto, non nota a margine.",
    "tech_card4_title": "Memoria come patrimonio vivo",
    "tech_card4_desc": "La memoria non è un archivio da conservare: è conoscenza da usare e trasmettere — saperi, metodo, competenze, storia d'impresa e cultura.",
    "tech_card5_title": "Applicazioni ad alto valore",
    "tech_card5_desc": "Il sistema serve contesti professionali, culturali e organizzativi: formazione, archivi, storia d'impresa, competenze e mestieri.",
    "tech_card6_title": "Standard Aperti",
    "tech_card6_desc": "Costruiamo su protocolli aperti e interoperabili, come MCP: l'infrastruttura si integra negli stack esistenti, non li sostituisce.",
    "tech_cta": "Esplora l'ecosistema →",

    // Ecosystem (#ecosistema / #ecosystem)
    "eco_eyebrow": "L'ECOSISTEMA",
    "eco_title": "Un'architettura, tre livelli.",
    "eco_intro": "Ogni componente del nostro stack è progettato per integrarsi con gli altri. Tre livelli, un unico obiettivo: trasformare i dati in decisioni affidabili.",
    "eco_layer1_label": "LIVELLO 1 — INFRASTRUTTURA · Online",
    "eco_detwin_name": "DeTwin",
    "eco_detwin_desc": "La piattaforma di gemelli digitali che replica, simula e ottimizza asset fisici in tempo reale. Infrastruttura cloud-native, API-first.",
    "eco_detwin_cta": "Vai a DeTwin ↗",
    "eco_layer2_label": "LIVELLO 2 — PIATTAFORMA · In sviluppo",
    "eco_layer2_desc": "Orchestrazione, gestione dei modelli e governance dei dati — il layer che connette infrastruttura e applicazioni.",
    "eco_layer3_label": "LIVELLO 3 — APPLICAZIONI VERTICALI · In arrivo",
    "eco_layer3_desc": "Soluzioni verticali per energia, manifattura e logistica, costruite sul nostro stack.",

    // Trust (#trust)
    "trust_badge": "TRUST BY DESIGN",
    "trust_title": "La fiducia è un requisito, non una promessa.",
    "trust_intro": "Quando la tecnologia lavora su identità, voce, volto e memoria, la fiducia entra nella valutazione prima del prodotto. Per questo la trattiamo come principio di progettazione — con il quadro normativo europeo come riferimento — e la rendiamo leggibile in cinque punti.",
    "trust_p1_title": "Autorizzazione",
    "trust_p1_desc": "Chi autorizza l'uso di contenuti, volto, voce e materiali.",
    "trust_p2_title": "Fonti e limiti",
    "trust_p2_desc": "Quali fonti alimentano il sistema e quali confini vengono impostati.",
    "trust_p3_title": "Accesso",
    "trust_p3_desc": "Chi può accedere a una memoria o a un'identità digitale, e con quali permessi.",
    "trust_p4_title": "Revisione",
    "trust_p4_desc": "Come vengono verificati gli output e che cosa la tecnologia non può fare.",
    "trust_p5_title": "Dati e responsabilità",
    "trust_p5_desc": "Come gestiamo dati, cancellazione e responsabilità d'uso.",
    "trust_close": "Content Policy e Privacy Policy restano i riferimenti legali: questa pagina li traduce in impegni leggibili.",

    // Team (#team)
    "team_title": "Dietro il progetto",
    "team_subtitle": "Un team che unisce ricerca tecnica, visione di prodotto e strategia di mercato per costruire un'infrastruttura AI verificabile, controllabile e pronta all'uso reale.",
    "team_c1_role": "Founder / CEO",
    "team_c1_desc": "Visione d'impresa, prodotto e proprietà intellettuale.",
    "team_c2_role": "Founder / CTO",
    "team_c2_desc": "Architettura dell'infrastruttura e validazione tecnica.",
    "team_c3_role": "COO",
    "team_c3_desc": "Operazioni, strategia e go-to-market.",
    "team_c4_role": "Divulgatore / Brand Ambassador",
    "team_c4_desc": "Racconto della tecnologia e relazione con la community.",
    "team_bar_text": "Scopri perché fidarsi di noi",

    // Closing & Contact (#contact)
    "closing_title": "La continuità è la prossima<br>frontiera dell'AI.",
    "closing_subtitle": "E deve essere costruita con regole, fonti e controllo.",
    "closing_cta": "Contattaci",

    // Footer
    "footer_tagline": "Eternal Tech è una società tecnologica specializzata in infrastrutture AI per identità digitali, memoria persistente e agenti intelligenti.",
    "footer_address": "Via Sclafani, 40 · 95024 · Acireale (CT) · Italy",
    "footer_col_nav": "Navigazione",
    "footer_col_contact": "Contatti",
    "footer_rights": "Tutti i diritti riservati © 2026 Eternal Tech",
    "footer_privacy": "Privacy Note",
    "footer_cookies": "Cookie Policy",
    "footer_terms": "Terms and Conditions",

    // Modal
    "modal_title": "Contattaci",
    "modal_name_ph": "Nome completo*",
    "modal_email_ph": "Email*",
    "modal_msg_ph": "Il tuo messaggio*",
    "modal_privacy_txt": "Confermo di aver letto e compreso la <a href=\"privacy.html\" target=\"_blank\" rel=\"noopener\">Privacy Policy</a> e di essere maggiorenne*",
    "modal_recaptcha_label": "Non sono un robot",
    "modal_submit_btn": "Invia messaggio",
    "modal_success_msg": "✓ Messaggio inviato con successo!<br>Ti risponderemo al più presto."
  }
};

(function initI18n() {
  // Primary language: EN. Check localStorage or default to 'en'
  let currentLang = localStorage.getItem('et_lang') || 'en';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('et_lang', lang);
    document.documentElement.lang = lang;

    const dict = translations[lang] || translations['en'];

    // Update text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.placeholder = dict[key];
      }
    });

    // Update Language Switcher UI
    document.querySelectorAll('.lang-switcher-btn').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-current', 'true');
      } else {
        btn.classList.remove('active');
        btn.removeAttribute('aria-current');
      }
    });
  }

  // Global listener for language switcher clicks
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-switcher-btn');
    if (btn) {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang && targetLang !== currentLang) {
        applyLanguage(targetLang);
      }
    }
  });

  // Run on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => applyLanguage(currentLang));
  } else {
    applyLanguage(currentLang);
  }
})();
