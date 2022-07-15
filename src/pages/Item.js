import React, { useEffect, useState } from "react";

import product2 from "../img/2.jpg";
import product5 from "../img/5.jpg";
import SnackBar from "../components/Snackbar";
import { CircularProgress } from "@mui/material";

function Item({
  login,
  snackbar,
  loader,
  product,
  wishlist,
  add_to_wishlist,
  remove_from_wishlist,
  add_to_cart,
  get_product_by_id,
  get_products_by_category,
  match,
  set_snackbar_status,
}) {
  const [completeStar, setCompleteStar] = useState(0);
  const [halfStar, setHalfStar] = useState(0);
  const [isWishlist, setIsWishlist] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    get_product_by_id(match.params.product_id);
  }, [get_product_by_id, match.params.product_id]);

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

  useEffect(() => {
    wishlist?.wishlist?.items?.map((item) => {
      if (item._id === product?.current_product?._id) {
        setIsWishlist(true);
      }
    });
  }, [wishlist, product]);

  useEffect(() => {
    if (product.current_product.category !== undefined) {
      get_products_by_category(product?.current_product?.category, login);
    }
  }, [get_products_by_category, login, product.current_product.category]);

  return (
    <>
      {loader?.product_by_id_loader ? (
        <div className="item__center">
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className="item">
            <div className="item__left">
              {/* <img src={product.current_product.image} /> */}
              <div
                className="icon__cont"
                onClick={() => {
                  if (isWishlist) {
                    remove_from_wishlist(product.current_product._id, login);
                  } else {
                    add_to_wishlist(product.current_product._id, login);
                  }
                }}
              >
                <i className={isWishlist ? "fas fa-heart" : "far fa-heart"} />
              </div>
              <img
                src={product.current_product.image || product2}
                alt="Product"
              />
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
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth. Text
                should turn around and return to its own, safe country. But
                nothing the copy said could convince her and so it didn’t take
                long until.
                {/* {product.current_product.description} */}
              </p>
              {/* <div className="quantity__cont">
            <button className="btn btn-outline-dark">
              <i class="fas fa-minus" />
            </button>
            <p className="amount">1</p>
            <button className="btn btn-outline-dark">
              <i class="fas fa-plus" />
            </button>
          </div> */}
              <button
                className="btn btn-dark btn-lg"
                onClick={() => {
                  add_to_cart(product?.current_product?._id, login);
                }}
              >
                <i class="fa-solid fa-cart-shopping" />
                &nbsp;&nbsp;Add to cart
              </button>
            </div>
          </div>
          <div className="relatedproducts">
            <h5>Related products</h5>
            <div className="relatedproducts__cont">
              {product?.all_products?.slice(0, 5).map((row) => {
                return (
                  <div className="card border-info">
                    <div className="card-body">
                      <img src={row?.image || product5} alt={row?.name} />
                      <p
                        className="card-text"
                        style={{ borderBottom: "1px solid #eee" }}
                      >
                        <small>{row?.name}</small>
                      </p>
                      <p className="text-info">&#8377; {row?.price}.00 </p>
                      <div className="btn-cont">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            add_to_cart(row._id, login);
                          }}
                          className="btn-success btn mt-2"
                        >
                          <i class="fas fa-cart-plus" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            add_to_wishlist(row._id, login);
                          }}
                          className="btn-light btn mt-2"
                        >
                          <i class="fas fa-heart" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <SnackBar
            snackbar={snackbar}
            set_snackbar_status={set_snackbar_status}
          />
        </>
      )}
    </>
  );
}

export default Item;
