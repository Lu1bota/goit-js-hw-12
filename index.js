import{a as w,S,i as q}from"./assets/vendor-BjRz3xa9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&f(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function f(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const $="49643579-021fb679616bd716ef3622271";async function g(r,e){return(await w("https://pixabay.com/api/",{params:{key:$,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}})).data}const u=document.querySelector(".loader"),m=document.createDocumentFragment(),p=document.querySelector(".gallery"),i=document.querySelector(".btn-load-more");u.classList.remove("loader");function h(r){r.forEach(e=>{const s=document.createElement("li");s.classList.add("list-item"),s.innerHTML=`
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
  </div>`,m.append(s)}),p.append(m)}let y=new S(".item-link",{captionsData:"alt",captionDelay:250});function E(){p.innerHTML=""}function v(){u.classList.add("loader")}function l(){u.classList.remove("loader")}function L(){i.hidden=!1,i.classList.add("btn-load-more")}function M(){i.hidden=!0,i.classList.remove("btn-load-more")}const b=document.querySelector(".form"),a=b.querySelector("input"),O=document.querySelector(".btn-load-more");b.addEventListener("submit",P);O.addEventListener("click",D);let n=1,d="";async function P(r){try{if(r.preventDefault(),E(),!a.value.trim().length)return;d!==a.value&&(n=1),d=a.value,v();const e=await g(a.value,n);if(console.log(e),e.hits.length===0){q.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l();return}h(e.hits),y.refresh(),l(),n++,console.log(n),L()}catch(e){console.error(e.message)}}async function D(){try{M(),v();const r=await g(a.value,n);h(r.hits),n++,y.refresh(),L(),l(),console.log(n),console.log(d)}catch(r){console.error(r.message)}}
//# sourceMappingURL=index.js.map
