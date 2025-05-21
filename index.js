import{a as m,S as p,i as a}from"./assets/vendor-Bz4lgVUE.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function h(i){const r={key:"50422817-e50accda15a7155d4d1bff625",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get("https://pixabay.com/api/",{params:r}).then(o=>o.data)}const c=document.querySelector(".loader"),l=document.querySelector(".gallery"),g=new p(".gallery a");function y(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:d,downloads:f})=>`<li class="photo-card">
    <a href="${n}">
    <img src="${o}" alt="${e}" loading="lazy"/>
    </a>
    <div class="info">
            <p class="info-item"><b>Likes</b><br>${t}</p>
            <p class="info-item"><b>Views</b><br>${s}</p>
            <p class="info-item"><b>Comments</b><br>${d}</p>
            <p class="info-item"><b>Downloads</b><br>${f}</p>

    </div>
    </li>`).join("");l.insertAdjacentHTML("beforeend",r),g.refresh()}function b(){l.innerHTML=""}function L(){c.classList.remove("hidden")}function w(){c.classList.add("hidden")}const u=document.querySelector(".form"),q=u.elements["search-text"];u.addEventListener("submit",i=>{i.preventDefault();const r=q.value.trim();if(!r){a.warning({message:"Please enter a search query!"});return}b(),L(),h(r).then(o=>{o.hits.length===0?a.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):y(o.hits)}).catch(o=>{console.error(o),a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{w()})});
//# sourceMappingURL=index.js.map
