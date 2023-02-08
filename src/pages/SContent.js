import { Fragment } from "react";
import CourseHeader from "../Layout/CourseHeader";
import Card from "../ui/Card/Card";
import CourseItem from "../components/CourseItem/CourseItem";
import { NavLink } from "react-router-dom";
const dummy_dataaaaa = [
  {
    id: "c1",
    name: "c1",
    description: "courses des 1 ",
  },
  {
    id: "c2",
    name: "c1",
    description: "courses des 1 ",
  },
  {
    id: "c3",
    name: "c1",
    description: "courses des 1 ",
  },
  {
    id: "c4",
    name: "c1",
    description: "courses des 1 ",
  },
  {
    id: "c5",
    name: "c1",
    description: "courses des 1 ",
  },
  {
    id: "c6",
    name: "c1",
    description: "courses des 1 ",
  },
];
const SCourse = () => {
  return (
    <Fragment>
      <CourseHeader />
      <div className="top">
        {dummy_dataaaaa.map((course) => (
          <NavLink to="/course">
            <div>
              <Card key={course.id}>
                <CourseItem
                  key={course.id}
                  name={course.name}
                  description={course.description}
                ></CourseItem>
              </Card>
            </div>
          </NavLink>
        ))}
      </div>
    </Fragment>
  );
};
export default SCourse;
