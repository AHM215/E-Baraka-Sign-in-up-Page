import classes from "./NewCourse.module.css";
import FileUpload from "../FileUpload/FileUpload";

const NewCommentForm = (props) => {
  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Name</label>
        <input></input>
      </div>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Description</label>
        <textarea id="comment" rows="3"></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
      <FileUpload />
    </form>
  );
};

export default NewCommentForm;
