import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface CarouselComponentProps {
    images: string[];
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({images}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    }

    return (
        <div>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`image number ${index + 1}`} className='rounded-xl px-1 h-44 w-80' />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CarouselComponent