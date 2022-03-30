import React from 'react';
import Carousel from 'react-elastic-carousel';
import './Carousel.css';

function CarouselComponent() {
    var items = [
        { img: "https://i.imgur.com/v8ybu8c.png" },
        { img: "https://i.imgur.com/i8ykrrV.png" },
        { img: "https://i.imgur.com/rT8VU5p.png" },
        { img: "https://i.imgur.com/rXr2DDR.jpg" },
        { img: "https://i.imgur.com/6rpIkSt.png" },
        { img: "https://i.imgur.com/HZwiY7W.jpg" },
        { img: "https://i.imgur.com/Vvvj2sb.jpg" },
    ]

    return (
        <Carousel isRTL={false}>
            {
                items.map(item => (
                    <>
                        <img src={item.img} alt="Item" />
                    </>
                ))
            }
        </Carousel>
    )
}

export default CarouselComponent