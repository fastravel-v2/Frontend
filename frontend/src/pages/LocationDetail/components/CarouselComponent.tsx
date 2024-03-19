import React, { useState } from 'react'
import Slider, {Settings} from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface CarouselComponentProps {
    images: string[];
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({images}) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        beforeChange: (_, newIndex) => setCurrentSlide(newIndex)
    }

    return (
        <div className='relative rounded-xl px-1 h-44 w-80'>
            <div className='h-5 absolute top-2 right-4 px-3 z-10 rounded-full text-white bg-darkGray1 flex justify-center items-center'>
                <p className='text-xs font-light '>{currentSlide + 1} / {images.length}</p>
            </div>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className='outline-none focus:outline-none'>
                        <img src={image} alt={`image number ${index + 1}`} className='rounded-xl px-1 h-44 w-80' /> 
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CarouselComponent