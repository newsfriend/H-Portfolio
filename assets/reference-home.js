(function () {
  function mountHeroCopy() {
    var hero = document.getElementById('hero');
    if (!hero) return false;
    if (hero.querySelector('.reference-home__content')) return true;
    hero.classList.add('reference-home');
    var content = document.createElement('div');
    content.className = 'reference-home__content';
    content.innerHTML = '<p class="reference-home__eyebrow">AI &amp; Full Stack Engineer</p><h1>AI systems. Scalable products. Real impact.</h1><p class="reference-home__copy">7+ years building production web applications with AI integrations. Specializing in React, Next.js, Python, and LLM-powered features.</p><div class="reference-home__actions"><a class="reference-home__button reference-home__button--primary" href="#project">Explore my work <span class="reference-home__arrow">↗</span></a><a class="reference-home__button reference-home__button--secondary" href="#work-together">Start a conversation <span class="reference-home__arrow">↗</span></a></div>';
    content.addEventListener('click', function (event) {
      var link = event.target.closest('a[href^="#"]');
      if (!link) return;
      var target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', link.getAttribute('href'));
    });
    hero.appendChild(content);
    return true;
  }

  document.addEventListener('DOMContentLoaded', mountHeroCopy);
  var attempts = 0;
  var timer = setInterval(function () {
    if (mountHeroCopy() || ++attempts > 50) clearInterval(timer);
  }, 100);
}());
