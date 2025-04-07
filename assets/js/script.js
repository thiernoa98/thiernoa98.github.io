
window.addEventListener('load', ()=>{
    const preloader = document.querySelector('.preloader');
    setTimeout(()=>{
        preloader.classList.add('preloader-hidden');
    }, 750)
    preloader.addEventListener('transitionend', ()=>{
        document.body.removeChild('preloader')
    })
})

// day-night switch
let radioBTN = document.querySelector('.enableDarkMode');
let bodyColor = document.querySelectorAll('#main, #navPanel, .close');
let headers = document.querySelectorAll('h2, h3, h4');
let paragraphs = document.querySelectorAll('p, li, span');
let cuny = document.querySelectorAll('.cuny');
let footer = document.querySelector('#footer');
let journey = document.querySelectorAll('.active, a');
let borders = document.querySelectorAll('.split, *, .posts, hr, .box')

radioBTN.onclick = ()=>{
    bodyColor.forEach(body =>{
        body.classList.toggle('colorChanged');
    })
    journey.forEach(item =>{
        item.classList.toggle('journeyColor');
    })
    headers.forEach(header => {
        header.classList.toggle('headerColor');
    })
    paragraphs.forEach(paragraph => {
        paragraph.classList.toggle('paraColor');
    })
    cuny.forEach(item => {
        item.classList.toggle('cunyColor');
    })
    borders.forEach(border => {
        border.classList.toggle('borderColor');
    })
    footer.classList.toggle('footerColor');
}
