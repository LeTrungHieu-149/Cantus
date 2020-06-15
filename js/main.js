function fadeAndHide(callback){
    fade();
    setTimeout(hideLoader,2000);
};
    
function hideLoader() {
    document.querySelector(".loader").style.display="none";
};
    
function fade() {
    document.querySelector(".loader").style.opacity="0";
}
  
window.onload=fadeAndHide(hideLoader);

var y=0;

function openNav() {
    document.getElementById("menu").classList.add("menu--open");
    document.getElementsByTagName("body")[0].classList.add("no-scroll");
}

function closeNav() {
    document.getElementById("menu").classList.remove("menu--open");
    document.getElementsByTagName("body")[0].classList.remove("no-scroll");
}

function toggleNav() {
    document.querySelector(".nav__social-share").classList.toggle("social-share-show");
}

function toggleStat() {
    y++;
    if(y%2!=0) 
    {
        document.getElementById("stat-toggle").style.transform="rotate(180deg)"
        document.getElementById("music-player__stat").style.height="100%";
    }
    else 
    {
        document.getElementById("stat-toggle").style.transform="rotate(360deg)"
        document.getElementById("music-player__stat").style.height="0%";
    }
}