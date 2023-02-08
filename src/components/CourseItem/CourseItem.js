import React from "react";
import classes from "./CourseItem.module.css";

const MealItem = (props) => {
  return (
    <li className={classes.course}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
      </div>
    </li>
  );
};
export default MealItem;
