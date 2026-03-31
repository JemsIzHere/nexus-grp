// ── Scroll reveal ──
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${(i % 4) * 0.1}s`;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

// ── Mobile hamburger ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// ── Sticky nav shadow ──
const mainHeader = document.getElementById('mainHeader') || document.querySelector('header');
if (mainHeader) {
  window.addEventListener('scroll', () => {
    mainHeader.classList.toggle('shadow-md', window.scrollY > 10);
  });
}

// ── Contact form submit handler ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Sending…';
  setTimeout(() => {
    document.getElementById('contactForm').reset();
    document.getElementById('successMsg').classList.remove('hidden');
    btn.disabled = false;
    btn.textContent = 'Send Message →';
  }, 800);
}
