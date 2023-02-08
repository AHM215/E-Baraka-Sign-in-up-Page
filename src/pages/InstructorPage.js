import { Fragment } from "react";
import CourseItem from "../components/CourseItem/CourseItem";
import Card from "../ui/Card/Card";
import NewCourse from "../components/Form/NewCourse";
import { NavLink } from "react-router-dom";
import CourseHeader from "../Layout/CourseHeader";
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
const InstructorPage = () => {
  return (
    <Fragment>
      <CourseHeader />
      <div className="h1">
        <NewCourse />
      </div>
      {dummy_dataaaaa.map((course) => (
        <NavLink to="/course">
          <Card key={course.id}>
            <CourseItem
              key={course.id}
              name={course.name}
              description={course.description}
            ></CourseItem>
          </Card>
        </NavLink>
      ))}
    </Fragment>
  );
};
export default InstructorPage;
