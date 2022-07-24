import React from "react";
import "./BestSellers.css";

import IMG1 from "../../components/portfolio1.jpg";
import IMG2 from "../../components/portfolio2.jpeg";
import IMG3 from "../../components/portfolio3.jpg";
import IMG4 from "../../components/portfolio4.jpg";
import IMG5 from "../../components/portfolio5.png";
import IMG6 from "../../components/portfolio6.jpeg";

function BestSellers() {
  return (
    <section id="best-sellers">
      <h2 className="title">Best Sellers</h2>

      <div className="best-sellers_container">
        <article className="bestsellers__item">
          <div className="bestsellers__item-image">
            <img src={IMG1} alt=""></img>
          </div>
          <h3>Premium Assam Tea</h3>
          <h3>Rs. 199</h3>
          <div className="bestsellers__item-cta">
            <a className="btn">ADD TO CART</a>
          </div>
        </article>

        <article className="bestsellers__item">
          <div className="bestsellers__item-image">
            <img src={IMG2} alt=""></img>
          </div>
          <h3>Premium Assam Tea</h3>
          <h3>Rs. 199</h3>
          <div className="bestsellers__item-cta">
            <a className="btn">ADD TO CART</a>
          </div>
        </article>

        <article className="bestsellers__item">
          <div className="bestsellers__item-image">
            <img src={IMG1} alt=""></img>
          </div>
          <h3>Premium Assam Tea</h3>
          <h3>Rs. 199</h3>
          <div className="bestsellers__item-cta">
            <a className="btn">ADD TO CART</a>
          </div>
        </article>

        <article className="bestsellers__item">
          <div className="bestsellers__item-image">
            <img src={IMG2} alt=""></img>
          </div>
          <h3>Premium Assam Tea</h3>
          <h3>Rs. 199</h3>
          <div className="bestsellers__item-cta">
            <a className="btn">ADD TO CART</a>
          </div>
        </article>

        <article className="bestsellers__item">
          <div className="bestsellers__item-image">
            <img src={IMG4} alt=""></img>
          </div>
          <h3>Premium Assam Tea</h3>
          <h3>Rs. 199</h3>

          <div className="bestsellers__item-cta">
            <a className="btn">ADD TO CART</a>
          </div>
        </article>

        <article className="bestsellers__item">
          <div className="bestsellers__item-image">
            <img src={IMG5} alt=""></img>
          </div>
          <h3>Premium Assam Tea</h3>
          <h3>Rs. 199</h3>
          <div className="bestsellers__item-cta">
            <a className="btn">ADD TO CART</a>
          </div>
        </article>

        <article className="bestsellers__item">
          <div className="bestsellers__item-image">
            <img src={IMG6} alt=""></img>
          </div>
          <h3>Premium Assam Tea</h3>
          <h3>Rs. 199</h3>
          <div className="bestsellers__item-cta">
            <a className="btn">ADD TO CART</a>
          </div>
        </article>

        <article className="bestsellers__item">
          <div className="bestsellers__item-image">
            <img src={IMG1} alt=""></img>
          </div>
          <h3>Premium Assam Tea</h3>
          <h3>Rs. 199</h3>
          <div className="bestsellers__item-cta">
            <a className="btn">ADD TO CART</a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default BestSellers;
