const btn = document.getElementById('btn');
const linkStyle = document.getElementById('linkStyle');
const icon = document.getElementById('icon');

btn.addEventListener('click',function(){
    let mode = linkStyle.getAttribute('href')
    if(mode == "style/style.css"){
        linkStyle.setAttribute("href", "style/dark.css")
        icon.setAttribute("src", "img/sun.png")
    }
    if(mode == "style/dark.css"){
        linkStyle.setAttribute("href", "style/style.css")
        icon.setAttribute("src", "img/moon.png")
    }  
});