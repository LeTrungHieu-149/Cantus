var x=0;
var y=0;

function openNav() {
    document.getElementById("menu").style.width="100%";
}

function closeNav() {
    document.getElementById("menu").style.width="0%";
}

function toggleSocial() {
    x++;
    if(x%2!=0) document.getElementById("social-mobile").style.height="300%";
    else document.getElementById("social-mobile").style.height="0%";
}

function toggleStat() {
    y++;
    if(y%2!=0) document.getElementById("music-player__stat").style.height="100%";
    else document.getElementById("music-player__stat").style.height="0%";
}