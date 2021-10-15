import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import product1 from "../img/1.jpg";

function TopSeller({
  login,
  product,
  isCached,
  get_top_seller,
  set_top_seller_cache,
  add_to_cart,
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
                <Link
                  to={`/item/${row._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img src={product1} alt={row.name} />
                  <p
                    className="card-text"
                    style={{ borderBottom: "1px solid #eee" }}
                  >
                    <small>{row.name}</small>
                  </p>
                  <p className="text-info">&#8377; {row.price} </p>
                </Link>
                <button
                  className="btn-success btn mt-2"
                  onClick={(e) => {
                    add_to_cart(row._id, login);
                  }}
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

export default TopSeller;
