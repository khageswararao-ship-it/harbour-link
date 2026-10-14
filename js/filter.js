/**
 * HARBOUR LINK - INTERACTIVE CATEGORY FILTER (ES6+)
 * Instant filtering for Parks, Recreation Activities, and Events
 */

document.addEventListener('DOMContentLoaded', () => {
  initCategoryFilters();
});

function initCategoryFilters() {
  const filterButtons = document.querySelectorAll('.filter-pill-btn');
  const filterItems = document.querySelectorAll('.filterable-item');

  if (!filterButtons.length || !filterItems.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Toggle active button
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedCategory = btn.dataset.filter || 'all';

      filterItems.forEach((item) => {
        const itemCategories = (item.dataset.category || '').split(' ');

        if (selectedCategory === 'all' || itemCategories.includes(selectedCategory)) {
          item.style.display = 'flex';
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 30);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}
