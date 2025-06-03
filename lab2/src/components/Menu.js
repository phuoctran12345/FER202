import React from 'react';

const pizzas = [
  {
    name: 'Margherita Pizza',
    price: 24,
    oldPrice: 40,
    img: 'images/menu1.png',
    tag: 'SALE',
  },
  {
    name: 'Mushroom Pizza',
    price: 25,
    img: 'images/menu2.png',
  },
  {
    name: 'Hawaiian Pizza',
    price: 30,
    img: 'images/menu3.png',
    tag: 'NEW',
  },
  {
    name: 'Pesto Pizza',
    price: 16,
    oldPrice: 50,
    img: 'images/menu4.png',
    tag: 'SALE',
  },
];

const Menu = () => (
  <div className="container my-5">
    <h2 className="text-white mb-4">Our Menu</h2>
    <div className="row">
      {pizzas.map((pizza, idx) => (
          <div className="col-md-3 mb-4" key={idx}>
            <div className="card h-100">
              {pizza.tag && (
                  <span className="badge bg-warning text-dark position-absolute" style={{
                    top: 0,
                    left: 0,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 0
                  }}>{pizza.tag}</span>
              )}
              <img src={pizza.img} className="card-img-top"  alt={pizza.name}
                   style={{height: '61%', objectFit: 'cover'}}/>
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">
                  {pizza.oldPrice && (
                    <span className="text-decoration-line-through text-dark me-2">
                      ${pizza.oldPrice}
                    </span>
                  )}
                  <span
                      className={
                        pizza.price === 30
                            ? "text-dark"
                            : pizza.price === 25 && !pizza.oldPrice
                            ? "text-dark"
                            : "text-warning"
                      }
                  >
                    ${pizza.price}.00
                  </span>
                </p>
                <button className="btn btn-dark w-100">Buy</button>
              </div>
            </div>
          </div>
      ))}
    </div>
  </div>
);

export default Menu; 