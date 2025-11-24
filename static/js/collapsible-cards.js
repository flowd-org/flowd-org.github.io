(function () {
  function initWhyCardsCollapsible() {
    var cards = document.querySelectorAll('.why-card');

    // If no cards found, retry after a short delay
    if (cards.length === 0) {
      console.log('No .why-card elements found yet, retrying...');
      setTimeout(initWhyCardsCollapsible, 100);
      return;
    }

    // Mark that JS is ready for collapsible behavior
    document.documentElement.classList.add('js-collapsible');
    console.log('Initializing collapsible cards, found:', cards.length);

    cards.forEach(function (card) {
      // Skip if already initialized
      if (card.dataset.collapsible === 'true') return;
      card.dataset.collapsible = 'true';

      var header = card.querySelector('h3');
      if (!header) return;

      // Create a toggle button
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'why-toggle';
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Expand card');
      btn.textContent = '+';
      header.appendChild(btn);

      btn.addEventListener('click', function () {
        var expanded = card.classList.toggle('expanded');
        btn.setAttribute('aria-expanded', expanded);
        btn.textContent = expanded ? '-' : '+';
      });

      // Start collapsed by default
      card.classList.remove('expanded');
    });
  }

  // Wait for full page load, not just DOM ready
  if (document.readyState === 'complete') {
    // Page already loaded - add delay to let everything settle
    setTimeout(initWhyCardsCollapsible, 200);
  } else {
    // Wait for the load event (after all resources including CSS)
    window.addEventListener('load', function () {
      setTimeout(initWhyCardsCollapsible, 200);
    });
  }
})();
