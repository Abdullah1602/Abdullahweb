function myFunction() {
  let a = document.querySelector('.learn-more');
  let el = document.querySelector('#About-me');
  
  a.addEventListener('click', function () {
      el.scrollIntoView(false);
  });
  }
  
  function buttonFunction(){
    let a = document.querySelector('#skills-button');
    let el = document.querySelector('.skills');
    
    a.addEventListener('click', function () {
        el.scrollIntoView(false);
    });
  }
  // window.addEventListener(
  //   "scroll",
  //   () => {
  //     document.body.style.setProperty(
  //       "--scroll",
  //       window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
  //     );
  //   },
  //   false
  // );
  