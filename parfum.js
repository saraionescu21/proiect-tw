
function imgSlider(anything){
    document.querySelector('.image').src = anything;
}
function hrefSlider(link){
    document.querySelector('.href').href = link;
}
function changeColor(color){
    const cerc = document.querySelector('.cerc');
    cerc.style.background = color;
}
function toggleMenu(){
    var menuToggle =document.querySelector('.toggle');
    var nav =document.querySelector('.nav');
    menuToggle.classList.toggle('active')
    nav.classList.toggle('active')
}
