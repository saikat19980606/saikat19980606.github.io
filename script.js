const menuBtn=document.getElementById('menuBtn'),navLinks=document.getElementById('navLinks');
menuBtn.addEventListener('click',()=>{const opened=navLinks.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(opened));});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal,.section,.contact-section').forEach(el=>{el.classList.add('reveal');observer.observe(el);});
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;document.getElementById('scrollLine').style.width=(max?scrollY/max*100:0)+'%';});
document.getElementById('year').textContent=new Date().getFullYear();
// Before publishing, replace YOUR_EMAIL@example.com, the LinkedIn URL and the WhatsApp URL in index.html.
