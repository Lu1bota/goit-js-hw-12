import{a as M,S as P,i as u}from"./assets/vendor-BjRz3xa9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const $="49643579-021fb679616bd716ef3622271";async function h(o,e){return(await M("https://pixabay.com/api/",{params:{key:$,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}})).data}const f=document.querySelector(".loader"),g=document.createDocumentFragment(),y=document.querySelector(".gallery"),c=document.querySelector(".btn-load-more");f.classList.remove("loader");function v(o){o.forEach(e=>{const s=document.createElement("li");s.classList.add("list-item"),s.innerHTML=`
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
  </div>`,g.append(s)}),y.append(g)}let L=new P(".item-link",{captionsData:"alt",captionDelay:250});function E(){y.innerHTML=""}function b(){f.classList.add("loader")}function m(){f.classList.remove("loader")}function w(){c.hidden=!1,c.classList.add("btn-load-more")}function l(){c.hidden=!0,c.classList.remove("btn-load-more")}const S=document.querySelector(".form"),a=S.querySelector("input"),R=document.querySelector(".btn-load-more");document.querySelector(".gallery");S.addEventListener("submit",I);R.addEventListener("click",O);let n=1,p="";const q=15;l();async function I(o){try{if(o.preventDefault(),E(),!a.value.trim().length)return;p!==a.value&&(n=1),p=a.value,b();const e=await h(a.value,n);if(e.hits.length===0){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m();return}v(e.hits),L.refresh();const s=Math.ceil(e.totalHits/q);n>=s?(l(),u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):w(),m(),n++}catch(e){console.error(e.message)}}async function O(){try{l(),n>1&&b();const o=await h(a.value,n);v(o.hits),n++,L.refresh();const e=Math.ceil(o.totalHits/q);n>=e?(l(),u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):w(),m();const i=document.querySelector(".list-item").getBoundingClientRect();window.scrollBy({behavior:"smooth",top:i.height*2})}catch(o){console.error(o.message)}}
//# sourceMappingURL=index.js.map
