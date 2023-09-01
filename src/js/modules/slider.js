export function make() {
  $(".slider").slick({
    // arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000, //default 300
    easing: "ease", //default 'linear'
    infinite: true, //default true
    initialSlide: 1, //default 0 start slide
    autoplay: true, //default false
    autoplaySpeed: 500, //default 3000
    pauseOnFocus: true, //default true
    pauseOnHover: true, //default true
    pauseOnDotsHover: true, //default true
    draggable: true, //disabped swipe on PC
    swipe: true, //disabled swipe on touch screens
    touchTreshold: 10, //момент срабатывания слайда //default 5
    touchMove: true,
    waitForAnimate: false, //default true. Если выключить, то при быстром нажатии на стрелку будет быстро переключаться. не ждать окончания анимации
    centerMode: true, // текущая картинка по центру
    variableWidth: true, //default false. Используем, если хотим автоматический адаптивный слайдер
    rows: 0,
  });
}
