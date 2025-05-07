(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const u=document.querySelector(".footer__map-container"),m="AIzaSyCz2CTJMfx5-b00DYlgi5G3CnOly4_MOhU",p="10",l="Paris, France",g="600x400",f=()=>{const o=`https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(l)}&zoom=${p}&size=${g}&maptype=roadmap&markers=color:red%7C${encodeURIComponent(l)}&key=${m}`;u.innerHTML=`
    <img src="${o}" 
         class="footer__map-img" 
         alt="Carte de localisation"
         loading="lazy"
         >
  `};document.addEventListener("DOMContentLoaded",f);const y=document.querySelector(".copyright__paragraph"),L=new Date().getFullYear(),h=()=>{y.innerHTML=`
              <p class="copyright__paragraph">
                ${L}© By Raphael Garnier-Fagour
              </p>
          `};document.addEventListener("DOMContentLoaded",h);const n=document.querySelector(".burger"),a=document.querySelector(".menu-burger"),r=n.querySelector("i"),b=o=>{n&&(o.stopPropagation(),a.classList.toggle("menu-burger--hidden"),r.classList.toggle("fa-bars"),r.classList.toggle("fa-xmark"))},M=o=>{console.log(r),!a.contains(o.target)&&o.target!==n&&a.classList.add("menu-burger--hidden"),r.classList.remove("fa-xmark"),r.classList.add("fa-bars")},O=new IntersectionObserver(function(o){document.body.classList.toggle("sticky",o[0].isIntersecting===!1)},{root:null,threshold:0,rootMargin:"-60px"});O.observe(document.querySelector(".home"));document.addEventListener("click",M);n.addEventListener("click",b);
