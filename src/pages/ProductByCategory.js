import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import product2 from "../img/2.jpg";

function ProductBycategory({
  login,
  product,
  isCached,
  match,
  add_to_cart,
  get_products_by_category,
  set_bakery_cache,
  set_beverage_cache,
  set_cosmetic_cache,
  set_egg_seafood_cache,
  set_household_cache,
  set_snack_cache,
  set_foodgrain_cache,
  set_fruit_cache,
}) {
  const [title, setTitle] = useState("");
  const category_cache = {
    fruit_and_vegetable: "fruit_cache",
    seafood_and_meat: "egg_seafood_cache",
    beverage: "beverage_cache",
    bakery: "bakery_cache",
    foodgrain_and_spice: "foodgrain_cache",
    snack: "snack_cache",
    personalcare_and_cosmetic: "cosmetic_cache",
    household: "household_cache",
  };
  const all_category = {
    fruit_and_vegetable: "Fruits & vegetables",
    seafood_and_meat: "Egg, seafoods & meat",
    beverage: "Beverages",
    bakery: "Bakery",
    foodgrain_and_spice: "Foodgrains, oil & spices",
    snack: "Snacks & packaged food",
    personalcare_and_cosmetic: "Personalcare & cosmetics",
    household: "Household",
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setTitle(all_category[match.params.category]);

    if (!isCached[category_cache[match.params.category]]) {
      get_products_by_category(match.params.category, login);
      switch (match.params.category) {
        case "fruit_and_vegetable":
          set_fruit_cache(true);
          set_egg_seafood_cache(false);
          set_foodgrain_cache(false);
          set_household_cache(false);
          set_snack_cache(false);
          set_bakery_cache(false);
          set_cosmetic_cache(false);
          set_beverage_cache(false);
          break;
        case "seafood_and_meat":
          set_egg_seafood_cache(true);
          set_fruit_cache(false);
          set_foodgrain_cache(false);
          set_household_cache(false);
          set_snack_cache(false);
          set_bakery_cache(false);
          set_cosmetic_cache(false);
          set_beverage_cache(false);
          break;
        case "beverage":
          set_beverage_cache(true);
          set_egg_seafood_cache(false);
          set_fruit_cache(false);
          set_foodgrain_cache(false);
          set_household_cache(false);
          set_snack_cache(false);
          set_bakery_cache(false);
          set_cosmetic_cache(false);
          break;
        case "bakery":
          set_bakery_cache(true);
          set_beverage_cache(false);
          set_egg_seafood_cache(false);
          set_fruit_cache(false);
          set_foodgrain_cache(false);
          set_household_cache(false);
          set_snack_cache(false);
          set_cosmetic_cache(false);
          break;
        case "foodgrain_and_spice":
          set_foodgrain_cache(true);
          set_beverage_cache(false);
          set_egg_seafood_cache(false);
          set_fruit_cache(false);
          set_household_cache(false);
          set_snack_cache(false);
          set_bakery_cache(false);
          set_cosmetic_cache(false);
          break;
        case "snack":
          set_snack_cache(true);
          set_beverage_cache(false);
          set_egg_seafood_cache(false);
          set_fruit_cache(false);
          set_foodgrain_cache(false);
          set_household_cache(false);
          set_bakery_cache(false);
          set_cosmetic_cache(false);
          break;
        case "personalcare_and_cosmetic":
          set_cosmetic_cache(true);
          set_beverage_cache(false);
          set_egg_seafood_cache(false);
          set_fruit_cache(false);
          set_foodgrain_cache(false);
          set_household_cache(false);
          set_snack_cache(false);
          set_bakery_cache(false);
          break;
        case "household":
          set_household_cache(true);
          set_beverage_cache(false);
          set_egg_seafood_cache(false);
          set_fruit_cache(false);
          set_foodgrain_cache(false);
          set_snack_cache(false);
          set_bakery_cache(false);
          set_cosmetic_cache(false);
          break;
        default:
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.category]);
  return (
    <div className="foodgrain">
      <h5>{title}</h5>

      <div class="form-group searchbar">
        <div style={{ width: "30rem" }} class="input-group mb-4">
          <input
            type="text"
            class="form-control"
            placeholder="Search for products"
          />
          <button class="btn btn-primary" type="button" id="button-addon2">
            Search
          </button>
        </div>
      </div>

      <div className="foodgrain__cont">
        {product?.all_products.map((row) => {
          return (
            <div className="card border-info" key={uuidv4()}>
              <div className="card-body">
                <img src={product2} alt="row.name" />
                <p
                  className="card-text"
                  style={{ borderBottom: "1px solid #eee" }}
                >
                  <small>{row.name}</small>
                </p>
                <p className="text-info">&#8377; {row.price} </p>
                <button
                  onClick={() => add_to_cart(row._id, login)}
                  className="btn-success btn mt-2"
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
        {product?.all_products.length === 0 ? (
          <h6 className="text-info">No product in this category...</h6>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ProductBycategory;
