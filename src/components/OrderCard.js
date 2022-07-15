import React from "react";
import moment from "moment";

const OrderCard = ({
  orderDate,
  deliveryDate,
  deliveryPartner,
  totalPrice,
  width,
}) => {
  return (
    <div className="card card-primary">
      <div
        style={{ width: `${width}` }}
        className="ordercard__main card border-primary"
      >
        <p className="order__p">
          Ordered : {`${moment(orderDate).format("LL")}`}
        </p>
        <p className="order__p">
          Delivered : {`${moment(deliveryDate).format("LL")}`}
        </p>
        <p className="order__p">Delivery Partner : {`${deliveryPartner}`}</p>

        <p className="order__p">
          Order Total: <h4> &#8377; {totalPrice} </h4>
        </p>

        <button type="button" className="btn btn-link">
          Order Items
        </button>
      </div>
    </div>
  );
};

export default OrderCard;

OrderCard.defaultProps = {
  deliveryPartner: "unknown",
  width: "16rem",
};
