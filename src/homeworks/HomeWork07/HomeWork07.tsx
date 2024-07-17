import {v4} from "uuid"
import { cars } from "./data";
import { Car } from "./types";
import "./styles.css"

function HomeWork7() {
  const carsElements = cars.map((car: Car) => {
    return (
      <div className="car-card" key={v4()}>
        <div>{car.brand}</div>
        <div>{car.price}$</div>
        <div>{car.isDiesel? "Diesel": "Petrol"}</div>
      </div>
    );
  });
  return <div className="homework7-component">{carsElements}</div>;
}

export default HomeWork7;
