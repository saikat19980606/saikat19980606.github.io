const menuToggle=document.getElementById('menuToggle');
const navLinks=document.getElementById('navLinks');
menuToggle.addEventListener('click',()=>{
  const open=navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',String(open));
});
navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>navLinks.classList.remove('open')));
const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}
  });
},{threshold:.12});
document.querySelectorAll('.hero-copy,.hero-visual,.section,.contact-section').forEach(el=>{
  el.classList.add('reveal');revealObserver.observe(el);
});
window.addEventListener('scroll',()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  document.getElementById('topProgress').style.width=(max?window.scrollY/max*100:0)+'%';
});
document.getElementById('year').textContent=new Date().getFullYear();
// Before publishing, replace YOUR_EMAIL@example.com and the LinkedIn and WhatsApp URLs in index.html.
