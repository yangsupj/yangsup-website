const languageButton=document.getElementById('lang');
const motionButton=document.getElementById('motion');
let language='en';
let paused=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function updateMotion(){document.body.classList.toggle('paused',paused);if(!motionButton)return;motionButton.setAttribute('aria-pressed',String(paused));const label=language==='ko'?(paused?'움직임 재생':'움직임 멈춤'):(paused?'Play motion':'Pause motion');motionButton.textContent=label;motionButton.setAttribute('aria-label',label)}
languageButton.addEventListener('click',()=>{language=language==='en'?'ko':'en';document.documentElement.lang=language;document.querySelectorAll('[data-en]').forEach(el=>{el.innerHTML=el.dataset[language]});languageButton.textContent=language==='en'?'KR':'EN';languageButton.setAttribute('aria-label',language==='en'?'한국어로 보기':'View in English');updateMotion()});
motionButton?.addEventListener('click',()=>{paused=!paused;updateMotion()});
updateMotion();document.getElementById('year').textContent=new Date().getFullYear();
