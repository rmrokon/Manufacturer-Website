import React from 'react';
import image1 from '../../assets/images/1.png'
import image2 from '../../assets/images/2.png'
import image3 from '../../assets/images/3.png'
import image4 from '../../assets/images/4.png'

const Carousel = () => {
    return (
        <div className='my-24'>
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <img src={image1} class="w-full" alt='' />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src={image2} class="w-full" alt='' />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src={image3} class="w-full" alt='' />
                </div>
                <div id="item4" class="carousel-item w-full">
                    <img src={image4} class="w-full" alt='' />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Carousel;