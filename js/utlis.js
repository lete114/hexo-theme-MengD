function getScript(e,t){var n=document.createElement("script");n.type="text/javascript",void 0!==t&&(n.readyState?(console.log(n.onreadystatechange),n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onreadystatechange=null,t())}):n.onload=function(){t()}),n.src=e,document.body.appendChild(n)}function wrap(e,t,n="",o=""){const a=document.createElement(t);n&&(a.id=n),o&&(a.className=o),e.parentNode.insertBefore(a,e),a.appendChild(e)}function ajax(e){var t;e.type=e.type||"get",e.async=e.async||!0,e.data=e.data||null,t=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),"post"==e.type?(t.open(e.type,e.url,e.async),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),t.send(e.data)):(t.open(e.type,e.url,e.async),t.send()),t.onreadystatechange=function(){4==t.readyState&&(200<=t.status&&t.status<300||304==t.status?e.success&&e.success(t.responseText):e.error&&e.error(t.status))}}function getNodePosition(e){var t=document.documentElement.scrollLeft||document.body.scrollLeft,n=document.documentElement.scrollTop||document.body.scrollTop,e=e.getBoundingClientRect();return{top:e.top+n,right:e.right+t,bottom:e.bottom+n,left:e.left+t}}