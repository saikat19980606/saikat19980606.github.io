const menu=document.getElementById('menu'),links=document.getElementById('links');
menu.addEventListener('click',()=>links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const img=document.getElementById('profile'),placeholder=document.getElementById('placeholder');
img.addEventListener('load',()=>{img.style.display='block';placeholder.style.display='none'});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.hero-copy,.hero-visual,.section,.contact').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;document.getElementById('progress').style.width=(max?scrollY/max*100:0)+'%'});
document.getElementById('year').textContent=new Date().getFullYear();
// Replace the email, LinkedIn and WhatsApp links in index.html before publishing.
