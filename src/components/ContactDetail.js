import { useParams } from "react-router-dom";
import "../styles.css";

function ContactDetail({ listblogs }) {
  const { id } = useParams();
  const blog = listblogs[id];

  return (
    <div>
      <div className="content-preview">
        <h1 className="header-preview">{blog.header}</h1>
        <img className="img-preview" src={blog.img} />
        <p className="para-preview">{blog.content}</p>
      </div>
    </div>
  );
}

export default ContactDetail;
