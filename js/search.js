var local_search=document.getElementById("local-search"),html=document.querySelector("html"),search_mask=document.getElementById("search-mask"),searchFunc=function(e,l,s){fetch(e).then(e=>e.text()).then(e=>(new window.DOMParser).parseFromString(e,"text/xml")).then(function(e){const c=[...e.querySelectorAll("entry")].map(function(e){return{title:e.querySelector("title").textContent,content:e.querySelector("content").textContent,url:e.querySelector("url").textContent}});c.forEach(function(e){var t,a=document.getElementById(l);a&&(t=document.getElementById(s),a.addEventListener("input",function(){var m='<ul class="search-result-list">',u=this.value.trim().toLowerCase().split(/[\s\-]+/);t.innerHTML="",this.value.trim().length<=0||(c.forEach(function(e){var a=!0;e.title&&""!==e.title.trim()||(e.title="Untitled");var c,t,l,s,r=e.title.trim().toLowerCase(),n=e.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),o=e.url.startsWith("/")?e.url:"/"+e.url,i=-1,h=-1;""!==n?u.forEach(function(e,t){c=r.indexOf(e),i=n.indexOf(e),c<0&&i<0?a=!1:(i<0&&(i=0),0==t&&(h=i))}):a=!1,a&&(t=e.content.trim().replace(/<[^>]+>/g,""),0<=h&&(l=h+80,(l=0==(e=(e=h-20)<0?0:e)?100:l)>t.length&&(l=t.length),s=t.substring(e,l),u.forEach(function(e){var t=new RegExp(e,"gi");s=s.replace(t,'<span class="search-keyword">'+e+"</span>"),r=r.replace(t,'<span class="search-keyword">'+e+"</span>")}),m+="<li><a href='"+o+"' class='search-result-title'>"+r+"</a>",m+='<p class="search-result">'+s+"...</p>"),m+="</li>")}),m+="</ul>",t.innerHTML=m,window.pjax&&window.pjax.refresh(t))}))})})};searchFunc($config.search.path,"local-search-input","local-search-result"),document.querySelectorAll(".search-btn").forEach(function(e){e.onclick=function(){search_mask.className="mask",""==local_search.style.opacity&&(local_search.style.display="",local_search.style.opacity=1,html.style.overflow="hidden",local_search.classList.remove("search-animation-min"),local_search.classList.add("search-animation-max"))}}),document.querySelector(".search-close-button").onclick=function(){local_search.style.opacity=0,local_search.classList.remove("search-animation-max"),local_search.classList.add("search-animation-min"),search_mask.classList.remove("mask"),html.style.overflow="auto",setTimeout(function(){local_search.style.display="none",local_search.style.opacity=""},500)},search_mask.onclick=function(){local_search.style.opacity=0,local_search.classList.remove("search-animation-max"),local_search.classList.add("search-animation-min"),html.style.overflow="auto",search_mask.className="",setTimeout(function(){local_search.style.display="none",local_search.style.opacity=""},500)};