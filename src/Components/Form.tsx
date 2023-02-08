import React from "react";
import { Props } from "../utils/types";
import "../index.css";

const CalcForm: React.FC<Props> = ({
  state,
  setState,
  errors,
  handleSubmit,
  formattedValue,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setState({
      ...state,
      [event.target.name]: +event.target.value,
    });
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setState({
      ...state,
      [event.target.name]: new Date(event.target.value),
    });
  };

  const restoreDefaults = () => {
    setState({
      cartValue: 0,
      deliveryDistance: 0,
      numberOfItems: 0,
      orderTime: new Date(),
    });
  };

  return (
    <div className="container">
      <div className="sheet">
        <form>
          <label>
            <p> Cart value (€):</p>
            <input
              className={errors.cartValueError ? "error" : "success"}
              type="number"
              name="cartValue"
              onChange={handleChange}
              placeholder={errors.cartValueError || "Enter cart value"}
            />
          </label>
          <br />
          <label>
            <p>Delivery distance (m):</p>
            <input
              className={errors.deliveryDistanceError ? "error" : "success"}
              type="number"
              name="deliveryDistance"
              onChange={handleChange}
              placeholder={
                errors.deliveryDistanceError || "Enter delivery distance"
              }
            />
          </label>
          <br />
          <label>
            <p>Number of items:</p>
            <input
              className={errors.numberOfItemsError ? "error" : "success"}
              type="number"
              name="numberOfItems"
              onChange={handleChange}
              placeholder={errors.numberOfItemsError || "Enter number of items"}
            />
          </label>
          <br />
          <label>
            <p>Date and time:</p>
            <input
              type="datetime-local"
              name="orderTime"
              onChange={handleDateChange}
            />
          </label>
          <br />
          <label>
            <p> Total delivery fee (€):</p>
            <div className="output">{formattedValue}</div>
          </label>
          <div className="button-box">
            <button className="my-button" onClick={handleSubmit}>
              SUBMIT
            </button>
            <button className="my-inverse-button" onClick={restoreDefaults}>
              CLEAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CalcForm;
