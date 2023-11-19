import { Link } from "react-router-dom";
import "../styles.css";

function Home(props) {
  return (
    <div className="home">
      <div className="lists">
        {props.listblogs.map((blog, index) => (
          <div key={index} className="list">
            <Link to={`/blog/${index}`}>
              <img src={blog.img} />
              <div className="list-letter">
                <h1>{blog.header}</h1>
                <p>
                  {blog.content
                    .split("\n\n")[0]
                    .split(" ")
                    .slice(0, 20)
                    .join(" ")}
                  {blog.content.split("\n\n")[0].split(" ").length > 200
                    ? "..."
                    : ""}
                </p>
              </div>
            </Link>
            <Link to={`/EditContactForm/${index}`}>Chỉnh sửa</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
