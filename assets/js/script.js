
window.addEventListener('load', ()=>{
    const preloader = document.querySelector('.preloader');

    preloader.classList.add('preloader-hidden');
    preloader.addEventListener('transitionend', ()=>{
        document.body.removeChild('preloader')
    })
    console.log(preloader);
})