// Runs before first paint: ?theme=dark|light sets the choice; the saved choice applies on every page.
(function(){try{var q=new URLSearchParams(location.search).get("theme");if(q==="dark"||q==="light")localStorage.setItem("hga_theme",q);var t=localStorage.getItem("hga_theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}})();
