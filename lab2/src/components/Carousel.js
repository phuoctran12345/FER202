import React from 'react';

const Carousel = () => (
  <div id="pizzaCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="/images/pizza1.png" className="d-block w-100" alt="Pizza"  style={{maxHeight: '450px', objectFit: 'cover'}}/>
            <div className="carousel-caption d-none d-md-block">
                <h2>Neapolitan Pizza</h2>
                <p>If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
            </div>
        </div>
    </div>
  </div>
);

export default Carousel; 