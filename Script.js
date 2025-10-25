function showPage(pageId) {
  // Skryjeme všechny sekce
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Najdeme sekci podle ID a zobrazíme ji
  const activePage = document.getElementById(pageId);
  if (activePage) {
    activePage.classList.add('active');
  }
}

const furrytheme = document.getElementById('furrytheme');
let currentTheme = 0;

furrytheme.addEventListener('click', () => {
  currentTheme = (currentTheme + 1) % 2;

  switch (currentTheme) {
    case 0:
      document.documentElement.style.setProperty('--bg-color', '#1e1e2f');
      document.documentElement.style.setProperty('--text-color', '#EAEAEA');
      document.documentElement.style.setProperty('--accent-color', '#7c5cff');
      document.documentElement.style.setProperty('--nav-color', '#2c2c3e');
      break;
    case 1: 
      document.documentElement.style.setProperty("--bg-color", "#1A1025");
      document.documentElement.style.setProperty("--text-color", "#FF80E0");
      document.documentElement.style.setProperty("--accent-color", "#FF5AF1");
      document.documentElement.style.setProperty("--nav-color", "#27143A");
      break;
  }
}); 
      
      