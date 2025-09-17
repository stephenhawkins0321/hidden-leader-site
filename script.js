
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if(saved==='light') root.classList.add('light');

  // Insert mobile toggle button if missing
  const header = document.querySelector('.site-header');
  const nav = header ? header.querySelector('nav') : null;
  if(header && !header.querySelector('.mobile-toggle')){
    const btn = document.createElement('button');
    btn.className = 'mobile-toggle';
    btn.setAttribute('aria-label','Open menu');
    btn.innerText = 'Menu';
    header.insertBefore(btn, nav);
    btn.addEventListener('click', ()=>{
      document.body.classList.toggle('menu-open');
    });
  }

  // Theme toggle existing
  const btnTheme = document.getElementById('themeToggle');
  if(btnTheme){
    btnTheme.addEventListener('click', ()=>{
      root.classList.toggle('light');
      localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
    });
  }

  // Secure external links
  for(const a of document.querySelectorAll('a[target="_blank"]')){ a.rel = "noopener"; }
})();
