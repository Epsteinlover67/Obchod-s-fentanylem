function showPage(pageId) {
  // Skryjeme všechny sekce
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Najdeme sekci podle ID a zobrazíme ji
  const activePage = document.getElementById(pageId);
  if (activePage) {
    activePage.classList.add('active');
  }
}