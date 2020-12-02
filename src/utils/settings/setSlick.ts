export const setSlick = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
