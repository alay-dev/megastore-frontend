import React, { useEffect } from "react";
import item1 from "../img/1.jpg";
import { CircularProgress } from "@mui/material";

export default function Wishlist({
  login,
  loader,
  wishlist,
  remove_from_wishlist,
  get_user_wishlist,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    get_user_wishlist(login);
  }, [get_user_wishlist, login]);
  return (
    <div className="wishlist">
      <h5>Wishlist</h5>
      {loader?.wishlist_loader ? (
        <CircularProgress />
      ) : (
        <div className="table__cont">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              {wishlist?.wishlist?.items?.map((row) => {
                console.log(row);
                return (
                  <tr>
                    <td>
                      <div className="row__cont item_name">
                        <img src={item1} />
                        <p>{row.name}</p>
                      </div>
                    </td>
                    <td>
                      <div className="row__cont">
                        <h5>&#8377; {row.price}</h5>
                      </div>
                    </td>
                    <td>
                      <div className="row__cont">
                        <p
                          style={{ marginBottom: "0" }}
                          onClick={() => remove_from_wishlist(row._id, login)}
                        >
                          <i
                            className="fas fa-trash"
                            style={{ fontSize: "1rem " }}
                          />
                        </p>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
