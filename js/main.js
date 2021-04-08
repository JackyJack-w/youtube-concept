const swiper = new Swiper('.channel-slider', {
    
    loop: true,
    slidesPerView: 4,
    
   
  
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  
    
  });

  const swiper1 = new Swiper('.recommended-slider', {
    
    loop: true,
    slidesPerView: 2,
    spaceBetween: 50,
   
  
    // Navigation arrows
    navigation: {
      nextEl: '.rec-button-next',
      prevEl: '.rec-button-prev',
    },
  
    
  });

  const swiper2 = new Swiper('.recommended-channel-slider', {
    
    loop: true,
    slidesPerView: 4,
    
   
  
    // Navigation arrows
    navigation: {
      nextEl: '.rec-channel-button-next',
      prevEl: '.rec-channel-button-prev',
    },
  
    
  });