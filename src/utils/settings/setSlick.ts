export const setSlick = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    centerMode: false,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1920,
            settings: {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1040,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 830,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
