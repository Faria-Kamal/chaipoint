import React from "react";
import "./Gift.css";

import Card from "../avatar4.png";

function Gift() {
  return (
    <section className="gift">
      <div className="title">Gift premium chai moments to your loved ones</div>
      <div className="container__card">
        <img src={Card}></img>
        <div className="caption">
          <h5>Chai Point Gift Voucher </h5>
          <h5>Rs. 501</h5>
          <div
            style={{
              flex: 1,
              height: "0.6px",
              backgroundColor: "gray",
              width: 350,
            }}
          />
          <div>
            <div className="description">
              An expression of unbridled freedom to curate personalized Chaiing
              Moments, the Chai Point Gift Voucher is the perfect present for
              those who take great pride in chaiing with style.
            </div>
            <div className="label">
              <label for="denominations">Denominations</label>
            </div>
            <div className="select">
              <select id="option-denominations">
                <option value="₹501" selected="">
                  ₹501
                </option>
                <option value="₹1001">₹1001</option>
                <option value="₹2001">₹2001</option>
                <option value="₹3001">₹3001</option>
                <option value="₹4001">₹4001</option>
                <option value="₹5001">₹5001</option>
              </select>
            </div>
            <button class="button" name="add" type="submit">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gift;
