var y=0;

function openNav() {
    document.getElementById("menu").classList.add("menu--open");
}

function closeNav() {
    document.getElementById("menu").classList.remove("menu--open");
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