var local_search=document.getElementById("local-search"),html=document.querySelector("html"),search_mask=document.getElementById("search-mask"),searchFunc=function(e,s,c){fetch(e).then(e=>e.text()).then(e=>(new window.DOMParser).parseFromString(e,"text/xml")).then(function(e){const t=[...e.querySelectorAll("entry")].map(function(e){return{title:e.querySelector("title").textContent,content:e.querySelector("content").textContent,url:e.querySelector("url").textContent}});var e=document.getElementById(s),a=document.getElementById(c);e.addEventListener("input",function(){var m='<ul class="search-result-list">',u=this.value.trim().toLowerCase().split(/[\s\-]+/);a.innerHTML="",this.value.trim().length<=0||(t.forEach(function(e){var a=!0;e.title&&""!==e.title.trim()||(e.title="Untitled");var s,t,c,l,n=e.title.trim().toLowerCase(),r=e.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),o=e.url.startsWith("/")?e.url:"/"+e.url,i=-1,h=-1;""!==r?u.forEach(function(e,t){s=n.indexOf(e),i=r.indexOf(e),s<0&&i<0?a=!1:(i<0&&(i=0),0==t&&(h=i))}):a=!1,a&&(t=e.content.trim().replace(/<[^>]+>/g,""),0<=h&&(c=h+80,(c=0==(e=(e=h-20)<0?0:e)?100:c)>t.length&&(c=t.length),l=t.substring(e,c),u.forEach(function(e){var t=new RegExp(e,"gi");l=l.replace(t,'<span class="search-keyword">'+e+"</span>"),n=n.replace(t,'<span class="search-keyword">'+e+"</span>")}),m+="<li><a href='"+o+"' class='search-result-title'>"+n+"</a>",m+='<p class="search-result">'+l+"...</p>"),m+="</li>")}),m+="</ul>",a.innerHTML=m,window.pjax&&window.pjax.refresh(a))})})};searchFunc($config.search.path,"local-search-input","local-search-result"),document.querySelectorAll(".search-btn").forEach(function(e){e.onclick=function(){search_mask.className="mask","none"==local_search.style.display&&(local_search.style.display="block",html.style.overflow="hidden",local_search.classList.remove("search-animation-min"),local_search.classList.add("search-animation-max"),document.getElementById("local-search-input").focus())}}),document.querySelector(".search-close-button").onclick=function(){local_search.classList.remove("search-animation-max"),local_search.classList.add("search-animation-min"),search_mask.classList.remove("mask"),html.style.overflow="auto",setTimeout(function(){local_search.style.display="none"},500)},search_mask.onclick=function(){local_search.classList.remove("search-animation-max"),local_search.classList.add("search-animation-min"),html.style.overflow="auto",search_mask.className="",setTimeout(function(){local_search.style.display="none"},500)},window.addEventListener("pjax:complete",function(){"none"===local_search.style.display&&(search_mask.className="")});