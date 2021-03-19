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



  function send(){
    Email.send({
      SecureToken: "7150e9cc-8545-450e-b504-ddbc96762911",
      To : "p.vishwa1976@gmail.com",
      From : document.getElementById('Email').nodeValue,
      Subject : document.getElementById('subject').nodeValue,
      Body : document.getElementById('msg-box').nodeValue
  }).then(
    message => alert("messeage sended")
    
  );
  }

