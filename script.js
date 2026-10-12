/* Keep project links in one place. Set this to the real repository URL when known. */
const GITHUB_REPOSITORY_URL = "https://github.com/tejasatvik/atlas-ai";

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
    navigation.classList.toggle('is-open', !isOpen);
  });
  navigation.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
    navigation.classList.remove('is-open');
  }));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      menuButton.click();
      menuButton.focus();
    }
  });
}

const githubLinks = document.querySelectorAll('[data-github-link]');
githubLinks.forEach((link) => {
  if (GITHUB_REPOSITORY_URL) {
    link.href = GITHUB_REPOSITORY_URL;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  } else {
    link.href = '#github';
    link.setAttribute('aria-label', 'GitHub repository link not configured yet');
    link.addEventListener('click', (event) => {
      event.preventDefault();
      link.classList.add('link-unconfigured');
      window.setTimeout(() => link.classList.remove('link-unconfigured'), 1100);
    });
    link.title = 'Configure GITHUB_REPOSITORY_URL in script.js when the repository URL is known';
  }
});

const tooltip = document.querySelector('#diagram-tooltip');
const agentDescriptions = {
  research: 'Research gathers context and evidence for the task.',
  planning: 'Planning turns the objective into sequenced, assignable tasks.',
  coding: 'Coding creates and revises software changes.',
  testing: 'Testing runs checks and experiments in controlled environments.',
  evaluation: 'Evaluation assesses outputs against stated criteria.',
  review: 'Human review keeps people in control of important decisions.'
};
const nodes = [...document.querySelectorAll('[data-agent]')];
function activateNode(node) {
  nodes.forEach((item) => item.classList.toggle('is-active', item === node));
  if (tooltip) tooltip.textContent = agentDescriptions[node.dataset.agent];
}
nodes.forEach((node) => {
  node.addEventListener('pointerenter', () => activateNode(node));
  node.addEventListener('focus', () => activateNode(node));
  node.addEventListener('click', () => activateNode(node));
  node.addEventListener('pointerleave', () => {
    if (!nodes.includes(document.activeElement)) {
      nodes.forEach((item) => item.classList.remove('is-active'));
      if (tooltip) tooltip.textContent = 'Select an agent to explore its role';
    }
  });
});
const orchestrator = document.querySelector('#orchestrator');
if (orchestrator) {
  const toggleOrchestrator = () => {
    const active = orchestrator.classList.toggle('is-active');
    if (tooltip) tooltip.textContent = active ? 'Orchestration coordinates handoffs, state, and recovery.' : 'Select an agent to explore its role';
  };
  orchestrator.addEventListener('click', toggleOrchestrator);
  orchestrator.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggleOrchestrator(); }
  });
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

document.querySelector('#year').textContent = String(new Date().getFullYear());
