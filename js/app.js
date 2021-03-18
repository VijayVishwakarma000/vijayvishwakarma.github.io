var typed = new Typed('.text', {
    strings: ["Web Developer", "App Designer","Front-End"],
    typeSpeed: 32,
    backSpeed: 20,
    loop:true
  });
  


  const navbar = document.querySelector('.navbar')
  const burger = document.querySelector('.hamburger')

  burger.addEventListener('click',()=>{
    navbar.classList.toggle('open')
  })

  
  const nav = document.querySelector('.navbar')
  window.addEventListener('scroll',()=>{
   if(window.scrollY>80){
     nav.classList.add('stick')
    }
    else{
      
      nav.classList.remove('stick')
   }
  })