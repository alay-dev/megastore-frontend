import React, { useState, useEffect } from "react";

import OrderCard from "../components/OrderCard";
import { Drawer, IconButton, Dialog, Slide } from "@mui/material";
import Close from "@mui/icons-material/Close";
import { ChevronRight } from "@mui/icons-material";
import EditImg from "../img/edit.png";
import SnackBar from "../components/Snackbar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Profile = ({
  login,
  user,
  order,
  set_user_name,
  set_user_contact_num,
  set_user_email,
  update_user,
  set_user_other_address,
  set_user_home_address,
  set_user_work_address,
  update_address,
  get_all_user_orders,
  ...rest
}) => {
  const [tab, setTab] = useState(1);
  const [editDrawer, setEditDrawer] = useState(false);
  const [orderDialog, setOrderDialog] = useState(false);
  const [addressType, setAddressType] = useState("work");

  useEffect(() => {
    get_all_user_orders(login);
  }, [get_all_user_orders, login]);

  useEffect(() => {
    set_user_contact_num(login.contact_no);
    set_user_email(login?.email);
    set_user_name(login?.name);
    set_user_home_address(login?.homeAddress);
    set_user_work_address(login?.workAddress);
    set_user_other_address(login?.otherAddress);
  }, [
    login.contact_no,
    login?.email,
    login?.homeAddress,
    login?.name,
    login?.otherAddress,
    login?.workAddress,
    set_user_contact_num,
    set_user_email,
    set_user_home_address,
    set_user_name,
    set_user_other_address,
    set_user_work_address,
  ]);

  const handleAddressChange = (value) => {
    if (addressType === "work") {
      set_user_work_address(value);
    } else if (addressType === "home") {
      set_user_home_address(value);
    } else if (addressType === "other") {
      set_user_other_address(value);
    }
  };

  const handleDeleteAddress = (type) => {
    let newAdd = user;
    if (type === "work") {
      newAdd.workAddress = "";
    } else if (type === "home") {
      newAdd.homeAddress = "";
    } else if (type === "other") {
      newAdd.otherAddress = "";
    }
    update_address(login?._id, newAdd, login);
  };

  useEffect(() => {
    set_user_other_address(login?.otherAddress);
    set_user_home_address(login?.homeAddress);
    set_user_work_address(login?.workAddress);
  }, [
    addressType,
    login?.homeAddress,
    login?.otherAddress,
    login?.workAddress,
    set_user_home_address,
    set_user_other_address,
    set_user_work_address,
  ]);

  return (
    <>
      <div className="profile">
        {window.innerWidth >= 650 ? (
          <>
            <div className="profile__top">
              <div className="profile__top--left">
                <h4>{login.name}</h4>
                <h6>
                  {login.contact_no} &nbsp;&nbsp;&bull;&nbsp;&nbsp;{" "}
                  {login.email}
                </h6>
              </div>
              <div className="profile__top--right">
                <button
                  type="button"
                  class="btn btn-info"
                  onClick={() => setEditDrawer(true)}
                >
                  Edit Profile
                </button>
              </div>
            </div>
            <div className="profile__detail">
              <div className="profile__detail--left">
                <ul>
                  <li
                    className={tab === 1 && "active"}
                    onClick={() => setTab(1)}
                  >
                    <div className="icon__cont">
                      <i className="fas fa-shopping-bag" />
                    </div>
                    <p>Orders</p>
                  </li>
                  <li
                    className={tab === 2 && "active"}
                    onClick={() => setTab(2)}
                  >
                    <div className="icon__cont">
                      <i className="fas fa-heart" />
                    </div>
                    <p>Wishlist</p>
                  </li>
                  <li
                    className={tab === 3 && "active"}
                    onClick={() => setTab(3)}
                  >
                    <div className="icon__cont">
                      <i className="fas fa-credit-card" />
                    </div>
                    <p>Payments</p>
                  </li>
                  <li
                    className={tab === 4 && "active"}
                    onClick={() => setTab(4)}
                  >
                    <div className="icon__cont">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <p>Addresses</p>
                  </li>
                </ul>
              </div>
              <div className="profile__detail--right">
                {tab === 1 && (
                  <div className="orders">
                    {order?.user_orders?.map((order) => {
                      return (
                        <OrderCard
                          orderDate={order?.orderDate}
                          deliveryDate={order?.deliveryDate}
                          totalPrice={order?.totalPrice}
                        />
                      );
                    })}
                  </div>
                )}
                {tab === 4 && (
                  <div className="address">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        update_address(login?._id, user, login);
                      }}
                    >
                      <fieldset className="mb-3">
                        <legend>Add/Edit a new Address</legend>

                        <div class="form-group">
                          <label for="addressType" class="form-label mt-2">
                            Select Address Type
                          </label>
                          <select
                            class="form-select"
                            id="addressType"
                            onChange={(e) => setAddressType(e.target.value)}
                            value={addressType}
                          >
                            <option value="work">Work</option>
                            <option value="home">Home</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div class="form-group ">
                          <label for="address" class="form-label mt-4">
                            Address
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="address"
                            aria-describedby="addresslHelp"
                            placeholder="Enter address"
                            value={
                              addressType === "work"
                                ? user?.workAddress
                                : addressType === "home"
                                ? user?.homeAddress
                                : user?.otherAddress
                            }
                            onChange={(e) =>
                              handleAddressChange(e.target.value)
                            }
                          />
                          {/* <small id="addressHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small> */}
                        </div>
                      </fieldset>
                      <button className="btn btn-secondary" type="submit">
                        Update
                      </button>
                    </form>
                    <div className="address__right">
                      {login?.homeAddress && login?.homeAddress !== "" && (
                        <div class="card border-primary mb-3 address__right--card">
                          <div class="card-header">
                            <i className="fas fa-home" /> &nbsp; Home
                          </div>
                          <div class="card-body">
                            {/* <h4 class="card-title">Primary card title</h4> */}
                            <p class="card-text">{login?.homeAddress}</p>
                            <button
                              type="button"
                              className="btn btn-light"
                              onClick={() => {
                                setAddressType("home");
                                set_user_home_address(login?.homeAddress);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="btn btn-light"
                              onClick={() => {
                                handleDeleteAddress("home");
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                      {login?.workAddress && login?.workAddress !== "" && (
                        <div class="card border-primary mb-3 address__right--card">
                          <div class="card-header">
                            <i className="fas fa-briefcase" /> &nbsp; Work
                          </div>
                          <div class="card-body">
                            {/* <h4 class="card-title">Primary card title</h4> */}
                            <p class="card-text">{login?.workAddress}</p>
                            <button
                              type="button"
                              className="btn btn-light"
                              onClick={() => {
                                setAddressType("work");
                                set_user_work_address(login?.workAddress);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="btn btn-light"
                              onClick={() => {
                                handleDeleteAddress("work");
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                      {login?.otherAddress && login?.address !== "" && (
                        <div class="card border-primary mb-3 address__right--card">
                          <div class="card-header">
                            <i className="fas fa-map-marked-alt" />
                            &nbsp; Other
                          </div>
                          <div class="card-body">
                            {/* <h4 class="card-title">Primary card title</h4> */}
                            <p class="card-text">{login?.otherAddress}</p>
                            <button
                              type="button"
                              className="btn btn-light"
                              onClick={() => {
                                setAddressType("other");
                                set_user_other_address(login?.otherAddress);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="btn btn-light"
                              onClick={() => {
                                handleDeleteAddress("other");
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="profilem">
              <div className="profilem__top">
                <div className="profilem__top--left">
                  <h6>{login.name}</h6>
                  <p>
                    {login.contact_no} &nbsp;&nbsp;&nbsp;&nbsp; {login.email}
                  </p>
                </div>
                <div className="profilem__top--right">
                  <button
                    type="button"
                    class="btn btn-info"
                    onClick={() => setEditDrawer(true)}
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
              <div className="profilem__options">
                <ul>
                  <li onClick={() => setOrderDialog(true)}>
                    <p>Orders</p>
                    <ChevronRight />
                  </li>
                  <li>
                    <p>Wishlist</p>
                    <ChevronRight />
                  </li>
                  <li>
                    <p>Payments</p>
                    <ChevronRight />
                  </li>
                  <li>
                    <p>Addresses</p>
                    <ChevronRight />
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
        <Drawer
          anchor="right"
          open={editDrawer}
          onClose={() => setEditDrawer(false)}
        >
          <div className="edit__drawer--close">
            <IconButton onClick={() => setEditDrawer(false)}>
              <Close />
            </IconButton>
          </div>
          <div className="edit__drawer">
            <h3>Edit Profile</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                update_user(login?._id, user, login);
              }}
            >
              <div class="form-group">
                <label for="fullName" class="form-label mt-4">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="fullName"
                  placeholder="Enter Full Name"
                  value={user?.name}
                  onChange={(e) => set_user_name(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="phone" class="form-label mt-4">
                  Phone No.
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="phone"
                  placeholder="Phone No."
                  value={user?.contact_num}
                  onChange={(e) => set_user_contact_num(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="email" class="form-label mt-4">
                  Email
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                  value={user?.email}
                  onChange={(e) => set_user_email(e.target.value)}
                />
              </div>
              <br />
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </form>
            <img src={EditImg} alt="Edit" />
          </div>
        </Drawer>
        <Dialog
          fullScreen
          open={orderDialog}
          onClose={() => setOrderDialog(false)}
          TransitionComponent={Transition}
        >
          <div className="order__dialog">
            <div className="order__dialog--top">
              <div />
              <h5>ORDERS</h5>
              <IconButton onClick={() => setOrderDialog(false)}>
                <Close />
              </IconButton>
            </div>
            {order?.user_orders?.map((order) => {
              return (
                <OrderCard
                  width="100%"
                  orderDate={order?.orderDate}
                  deliveryDate={order?.deliveryDate}
                  totalPrice={order?.totalPrice}
                />
              );
            })}
          </div>
        </Dialog>
      </div>
      <SnackBar {...rest} />
    </>
  );
};

export default Profile;
