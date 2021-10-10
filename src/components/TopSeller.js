import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import product1 from "../img/1.jpg";

function TopSeller({
  login,
  product,
  isCached,
  get_top_seller,
  set_top_seller_cache,
}) {
  useEffect(() => {
    if (!isCached.top_seller_cache) {
      get_top_seller();
      set_top_seller_cache(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="topseller">
      <h5>STORE TOP SELLER </h5>
      <div className="topseller__cont">
        {product.top_seller.map((row) => {
          return (
            <div className="card border-info" key={uuidv4()}>
              <div className="card-body">
                <img src={product1} alt={row.name} />
                <p
                  className="card-text"
                  style={{ borderBottom: "1px solid #eee" }}
                >
                  <small>{row.name}</small>
                </p>
                <p className="text-info">&#8377; {row.price} </p>
                <button className="btn-success btn mt-2">Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopSeller;
