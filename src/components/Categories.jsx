import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <Link to="/?category=art">Art</Link>
      <Link to="/?category=science">Science</Link>
      <Link to="/?category=technology">Technology</Link>
      <Link to="/?category=cinema">Cinema</Link>
      <Link to="/?category=design">Design</Link>
      <Link to="/?category=food">Food</Link>
    </div>
  );
};

export default Categories;
