
(function(){
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if(saved==='dark') root.classList.add('dark');
  if(btn){
    btn.addEventListener('click', ()=>{
      root.classList.toggle('dark');
      localStorage.setItem('theme', root.classList.contains('dark') ? 'dark':'light');
    });
  }
})();
