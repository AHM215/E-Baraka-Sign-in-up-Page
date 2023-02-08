import { Fragment } from "react";
import CourseHeader from "../Layout/CourseHeader";
import Card from "../ui/Card/Card";
import CourseItem from "../components/CourseItem/CourseItem";
const dummy_dataaaaa = [
  {
    id: "s1",
    name: "s1",
    description: "session des 1 ",
  },
  {
    id: "s2",
    name: "s1",
    description: "session des 1 ",
  },
  {
    id: "s3",
    name: "s1",
    description: "session des 1 ",
  },
  {
    id: "s4",
    name: "s1",
    description: "session des 1 ",
  },
  {
    id: "s5",
    name: "s1",
    description: "session des 1 ",
  },
  {
    id: "s6",
    name: "s1",
    description: "session des 1 ",
  },
];
const CourseContent = () => {
  return (
    <Fragment>
      <CourseHeader />
      <div className="top">
        {dummy_dataaaaa.map((course) => (
          <Card key={course.id}>
            <CourseItem
              key={course.id}
              name={course.name}
              description={course.description}
            ></CourseItem>
          </Card>
        ))}
      </div>
    </Fragment>
  );
};
export default CourseContent;
