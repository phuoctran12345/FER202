import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => (
    <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        <Carousel>
            <Carousel.Item>
                <img
                    src="/images/pizza1.png"
                    alt="Pizza 1"
                    style={{
                        width: "100%",
                        maxHeight: "400px",
                        objectFit: "cover",
                        borderRadius: "10px"
                    }}
                />
                <Carousel.Caption>
                    <h2>Neapolitan Pizza</h2>
                    <p>If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="/images/pizza2.png"
                    alt="Pizza 2"
                    style={{
                        width: "100%",
                        maxHeight: "400px",
                        objectFit: "cover",
                        borderRadius: "10px"
                    }}
                />
                <Carousel.Caption>
                    <h2>Pepperoni Pizza</h2>
                    <p>Classic American favorite with lots of pepperoni!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="/images/pizza3.png"
                    alt="Pizza 3"
                    style={{
                        width: "100%",
                        maxHeight: "400px",
                        objectFit: "cover",
                        borderRadius: "10px"
                    }}
                />
                <Carousel.Caption>
                    <h2>Veggie Pizza</h2>
                    <p>Fresh and healthy with a variety of vegetables!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
);

export default MyCarousel;