!function(){var t=null,e=function(){var t=[].slice.call(document.querySelectorAll("[data-rwd]")),e=window.innerWidth;for(var i in t){var r=t[i],a=r.getAttribute("data-rwd").split(","),o=r.getAttribute("src").split("_");o.pop(),o=o.join("_")+"_";for(var n in a){var l=a[n].split(":"),d={width:parseFloat(l[0]),widthNext:void 0!==a[parseFloat(n)+1]?parseFloat(a[parseFloat(n)+1].split(":")[0]):void 0,size:parseFloat(l[1])};if(e>=d.width&&(e<d.widthNext||void 0===d.widthNext)){r.setAttribute("src",o+d.size+".jpg");break}}}};e(),window.addEventListener("resize",function(){"number"==typeof t&&clearTimeout(t),t=setTimeout(function(){t=null,e()},100)},!0)}();
