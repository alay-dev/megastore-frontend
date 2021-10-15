import React, { useEffect, useState } from "react";
import product1 from "../img/1.jpg";
import product2 from "../img/2.jpg";
import product3 from "../img/3.png";
import product4 from "../img/4.png";
import product5 from "../img/5.jpg";

function Item({ login, product, add_to_wishlist, get_product_by_id, match }) {
  const [completeStar, setCompleteStar] = useState(0);
  const [halfStar, setHalfStar] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    get_product_by_id(match.params.product_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCompleteStar(Math.floor(product.current_product.ratingsAverage));
    setHalfStar(product.current_product.ratingsAverage / 10);
  }, [product]);

  const getStar = () => {
    if (completeStar === 0) {
      return (
        <>
          <i class={halfStar === 0 ? "far fa-star" : "fas fa-star-half-alt"} />{" "}
          <i class="far fa-star" /> <i class="far fa-star" />{" "}
          <i class="far fa-star" /> <i class="far fa-star" />{" "}
        </>
      );
    } else if (completeStar === 1) {
      return (
        <>
          <i className="fas fa-star" />{" "}
          <i class={halfStar === 0 ? "far fa-star" : "fas fa-star-half-alt"} />{" "}
          <i class="far fa-star" /> <i class="far fa-star" />{" "}
          <i class="far fa-star" />{" "}
        </>
      );
    } else if (completeStar === 2) {
      return (
        <>
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i
            className={halfStar === 0 ? "far fa-star" : "fas fa-star-half-alt"}
          />
          <i className="far fa-star" />
          <i class="far fa-star" />{" "}
        </>
      );
    } else if (completeStar === 3) {
      return (
        <>
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i
            className={halfStar === 0 ? "far fa-star" : "fas fa-star-half-alt"}
          />
          <i class="far fa-star" />{" "}
        </>
      );
    } else if (completeStar === 4) {
      return (
        <>
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i
            class={halfStar === 0 ? "far fa-star" : "fas fa-star-half-alt"}
          />{" "}
        </>
      );
    } else if (completeStar === 5) {
      return (
        <>
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i class="fas fa-star" />{" "}
        </>
      );
    }
  };

  return (
    <div>
      <div className="item">
        <div className="item__left">
          {/* <img src={product.current_product.image} /> */}
          <div
            className="icon__cont"
            onClick={() => add_to_wishlist(product.current_product._id, login)}
          >
            <i className={true ? "fas fa-heart" : "far fa-heart"} />
          </div>
          <img src={product2} />
        </div>
        <div className="item__right">
          <h3 className="text-primary">{product.current_product.name}</h3>
          <p>
            <small className="text-info">
              {product.current_product.ratingsAverage}
            </small>
            <p className="text-warning">
              {getStar()}
              {/* <i class="far fa-star" /> <i class="far fa-star" />{" "}
              <i class="far fa-star" /> <i class="far fa-star" />{" "}
              <i class="far fa-star" />{" "} */}
            </p>
          </p>
          <h3>&#8377; {product.current_product.price}</h3>
          <p className="text-muted">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth. Text should turn
            around and return to its own, safe country. But nothing the copy
            said could convince her and so it didn’t take long until.
            {/* {product.current_product.description} */}
          </p>
          <div className="quantity__cont">
            <button className="btn btn-outline-dark">
              <i class="fas fa-minus" />
            </button>
            <p className="amount">1</p>
            <button className="btn btn-outline-dark">
              <i class="fas fa-plus" />
            </button>
          </div>
          <button className="btn btn-dark btn-lg">Add to cart</button>
        </div>
      </div>
      <div className="relatedproducts">
        <h5>Related products</h5>
        <div className="relatedproducts__cont">
          <div className="card border-info">
            <div className="card-body">
              <img src={product1} />
              <p
                className="card-text"
                style={{ borderBottom: "1px solid #eee" }}
              >
                <small>Mahakpsh Soya OIl 1Ltr Poly Pk</small>
              </p>
              <p className="text-info">&#8377; 152.00 </p>
              <button className="btn-success btn mt-2">Add to cart</button>
            </div>
          </div>
          <div className="card border-info">
            <div className="card-body">
              <img src={product2} />
              <p
                className="card-text"
                style={{ borderBottom: "1px solid #eee" }}
              >
                <small>Vim DIshwash Bar 80 Gm</small>
              </p>
              <p className="text-info">&#8377; 5.00 </p>
              <button className="btn-success btn mt-2">Add to cart</button>
            </div>
          </div>
          <div className="card border-info">
            <div className="card-body">
              <img src={product3} />
              <p
                className="card-text"
                style={{ borderBottom: "1px solid #eee" }}
              >
                <small>Maaza Mango Juice 1.2 lt Bottle</small>
              </p>
              <p className="text-info">&#8377; 52.00 </p>
              <button className="btn-success btn mt-2">Add to cart</button>
            </div>
          </div>
          <div className="card border-info">
            <div className="card-body">
              <img src={product4} />
              <p
                className="card-text"
                style={{ borderBottom: "1px solid #eee" }}
              >
                <small>Thums Up 750 ml Bottle</small>
              </p>
              <p className="text-info">&#8377; 36.00 </p>
              <button className="btn-success btn mt-2">Add to cart</button>
            </div>
          </div>
          <div className="card border-info">
            <div className="card-body">
              <img src={product5} />
              <p
                className="card-text"
                style={{ borderBottom: "1px solid #eee" }}
              >
                <small>Maggi 2 minute Noodle</small>
              </p>
              <p className="text-info">&#8377; 12.00 </p>
              <button className="btn-success btn mt-2">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
