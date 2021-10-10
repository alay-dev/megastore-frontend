import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import product2 from "../img/2.jpg";

function DealOfTheDay({
  login,
  product,
  isCached,
  get_deal_of_the_day,
  set_deal_of_the_day_cache,
  add_to_cart,
}) {
  useEffect(() => {
    if (!isCached.deal_of_the_day_cache) {
      get_deal_of_the_day(login);
      set_deal_of_the_day_cache(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="dealoftheday">
      <div className="dealoftheday__heading">
        <h4 className="text-secondary">DEAL OF THE DAY</h4>
      </div>
      <div className="dealoftheday__cont">
        {product.deal_of_the_day.map((row) => {
          return (
            <div className="card border-info" key={uuidv4()}>
              <div className="card-body">
                <img src={product2} alt={row.name} />
                <p
                  className="card-text"
                  style={{ borderBottom: "1px solid #eee" }}
                >
                  <small>{row.name}</small>
                </p>
                <p className="text-info">&#8377; {row.price} </p>
                <button
                  className="btn-success btn mt-2"
                  onClick={() => add_to_cart(row._id, login)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DealOfTheDay;
