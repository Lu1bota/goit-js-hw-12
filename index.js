import{a as P,S as E,i}from"./assets/vendor-BjRz3xa9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const M="49643579-021fb679616bd716ef3622271";async function p(r,e){return(await P("https://pixabay.com/api/",{params:{key:M,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}})).data}const f=document.querySelector(".loader"),g=document.createDocumentFragment(),y=document.querySelector(".gallery"),d=document.querySelector(".btn-load-more");f.classList.remove("loader");function v(r){r.forEach(e=>{const s=document.createElement("li");s.classList.add("list-item"),s.innerHTML=`
  <div class="image-container">
    <a class="item-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      alt="${e.tags}"
    />
  </a>
  </div>
  <div class="container-item">
  <div class="container-follow">
  <strong>Likes</strong>
  <span>${e.likes}</span>
  </div>
  <div class="container-follow">
  <strong>Views</strong>
  <span>${e.views}</span>
  </div>
  <div class="container-follow">
  <strong>Comments</strong>
  <span>${e.comments}</span>
  </div>
  <div class="container-follow">
  <strong>Downloads</strong>
  <span>${e.downloads}</span>
  </div>
  </div>`,g.append(s)}),y.append(g)}let L=new E(".item-link",{captionsData:"alt",captionDelay:250});function R(){y.innerHTML=""}function b(){f.classList.add("loader")}function c(){f.classList.remove("loader")}function w(){d.hidden=!1,d.classList.add("btn-load-more")}function u(){d.hidden=!0,d.classList.remove("btn-load-more")}const S=document.querySelector(".form"),n=S.querySelector("input"),$=document.querySelector(".btn-load-more");document.querySelector(".gallery");S.addEventListener("submit",I);$.addEventListener("click",O);let a=1,h="";const q=15;u();async function I(r){try{if(r.preventDefault(),R(),!n.value.trim().length)return;h!==n.value&&(a=1),h=n.value,b();const e=await p(n.value,a);if(e.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c();return}v(e.hits),L.refresh();const s=Math.ceil(e.totalHits/q);a>=s?(u(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):w(),c(),a++}catch{i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c()}}async function O(){try{u(),a>1&&b();const r=await p(n.value,a);v(r.hits),a++,L.refresh();const e=Math.ceil(r.totalHits/q);a>=e?(u(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):w(),c();const l=document.querySelector(".list-item").getBoundingClientRect();window.scrollBy({behavior:"smooth",top:l.height*2})}catch{i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c()}}
//# sourceMappingURL=index.js.map
