
window.addEventListener('load', ()=>{
    const preloader = document.querySelector('.preloader');
    setTimeout(()=>{
        preloader.classList.add('preloader-hidden');
    }, 750)
    preloader.addEventListener('transitionend', ()=>{
        document.body.removeChild('preloader')
    })
})
