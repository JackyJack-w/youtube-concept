const swiper = new Swiper('.channel-slider', {
    
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints:{
      1900:{
        slidesPerView: 6
      },
      1600: {
        slidesPerView: 5
      },
      1300:{
        slidesPerView: 4
      },
      1100:{
        slidesPerView: 3

      },
      800:{
        slidesPerView:2
      }


    },
    
   
  
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  
    
  });

  const swiper1 = new Swiper('.recommended-slider', {
    
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints:{

      1600:{
        slidesPerView:3
      },
      1100:{
        slidesPerView:2
      }
    },
   
  
    // Navigation arrows
    navigation: {
      nextEl: '.rec-button-next',
      prevEl: '.rec-button-prev',
    },
  
    
  });

  const swiper2 = new Swiper('.recommended-channel-slider', {
    
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints:{
      1900:{
        slidesPerView: 6
      },
      1600: {
        slidesPerView: 5
      },
      1300:{
        slidesPerView: 4
      },
      1100:{
        slidesPerView: 3

      },
      800:{
        slidesPerView:2
      }


    },
   
  
    // Navigation arrows
    navigation: {
      nextEl: '.rec-channel-button-next',
      prevEl: '.rec-channel-button-prev',
    },
  
    
  });

  const searchBtn = document.querySelector('.mobile-search');
  const mobileSearch = document.querySelector('.input-group')
  searchBtn.addEventListener('click', () =>{
    mobileSearch.classList.toggle('is-open');

  });

  if(document.documentElement.scrollWidth <= 640){
    swiper.destroy();
    swiper1.destroy();
    swiper2.destroy();
    
  }