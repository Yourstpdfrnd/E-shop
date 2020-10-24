$(function(){

    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btn__prev"><img src="images/icons/arrow-left.svg" alt=""></button>', 
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btn__next"><img src="images/icons/arrow-right.svg" alt=""></button>',
        responsive:[
            {
                breakpoint: 769,
                settings: {
                    arrows: false
                }

            }
        ]
       
    });
    $('.wrapper .search__tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
            $('.wrapper .tabs').find('.search__tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
            
        });


    $('.wrapper .products__tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.wrapper').find('.products__item').removeClass('active').hide();
            $('.wrapper .products__tabs').find('.products__tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active').fadeIn();
            $('.products__slider.slick-initialized').slick("setPosition");
            return false;

            
        });

        


    $('.products-item__favorite').on('click', function(){
        $(this).toggleClass('active');
    })


    $('.products__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="products__slider-btn products__slider-prev"><img src="images/icons/arrow-left-black.svg" alt=""></button>', 
        nextArrow: '<button class="products__slider-btn products__slider-next"><img src="images/icons/arrow-right-black.svg" alt=""></button>',
        responsive:[
            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    dots: true

                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true

                }  
            },
            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true

                }  
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true

                }  
            }

        ]
    });




   

    $('.wrapper .popular__tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.wrapper').find('.popular__item').removeClass('active').hide();
            $('.wrapper .popular__tabs').find('.popular__tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active').fadeIn();
            $('.popular__slider.slick-initialized').slick("setPosition");
            return false;
        });

    $('.popular__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="products__slider-btn products__slider-prev"><img src="images/icons/arrow-left-black.svg" alt=""></button>', 
        nextArrow: '<button class="products__slider-btn products__slider-next"><img src="images/icons/arrow-right-black.svg" alt=""></button>',
        responsive:[
            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    dots: true

                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true

                }  
            },
            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true

                }  
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true

                }  
            }

        ]
       
    });

    $('.popular-item__favorite').on('click', function(){
        $(this).toggleClass('active');
    })


    $('.aside__wrapper .aside-tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.aside__wrapper').find('.aside-tab__item').removeClass('active').hide();
            $('.aside__wrapper .aside-tabs').find('.aside-tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active').fadeIn();
            return false;
        });
        
        $('.filter-style').styler();  
        
        
        $('.filter__item-drop').on('click', function(){
            $(this).toggleClass('filter__item-drop--active');
            $(this).next().slideToggle('200');

        });

        $(".js-range-slider").ionRangeSlider({
            type: "double",
            min: 100000,
            max: 5000000,
        });

     $('.catalog__filter-grid').on('click', function(){
     $(this).addClass('active');
     $('.catalog__filter-line').removeClass('active');
     $('.products-item__wrapper').removeClass('products-item__list');

    });

     $('.catalog__filter-line').on('click', function(){
     $(this).addClass('active');
     $('.catalog__filter-grid').removeClass('active');
     $('.products-item__wrapper').addClass('products-item__list');


    });


    $('.wrapper .tab-card').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.wrapper').find('.tab-card__item').removeClass('active-tab').hide();
            $('.wrapper .tabs-card').find('.tab-card').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });



        $('.wrapper .tab__product-card').on('click', function(event) {
            var id = $(this).attr('data-id');
                $('.wrapper').find('.tab-item__product').removeClass('active-tab').hide();
                $('.wrapper .tabs__product-card').find('.tab__product-card').removeClass('active');
                $(this).addClass('active');
                $('#'+id).addClass('active-tab').fadeIn();
                return false;
            });
            

         
            $('.menu__btn').on('click', function(){
                $('.menu-mobile__list').toggleClass('menu-mobile__list--active')

            });

            $('.footer__top-title').on('click', function(){
                $(this).next().slideToggle();
                $(this).toggleClass('footer__topdrop--active');
            });

            $('.aside__btn').on('click', function(){
                $(this).next().slideToggle();
            });

            var mySwiper = new Swiper('.swiper-container', {
                speed: 400,
                slidesPerView: 1,
            });
           
            
  
        $('.rateYo').rateYo({
            normalFill: "#C4C4C4",
            ratedFill: "#2692c7",
            starWidth: "23px",
            spacing   : "7px",
          });


});