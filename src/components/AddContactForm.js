import { useState } from "react";
import "../styles.css";

function AddContactForm(props) {
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.setListBlogs((prev) => [...prev, { header, img, content }]);
  }

  return (
    <div className="add-form">
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Xác Nhận" />

        <div>
          <input
            className="input-add"
            type="text"
            placeholder="Nhập tên món ăn "
            onChange={(event) => setHeader(event.target.value)}
          />
          <input
            className="input-add"
            type="text"
            placeholder="Nhập đường dẫn ảnh"
            onChange={(event) => setImg(event.target.value)}
          />
          <textarea
            className="content-add"
            name="text"
            cols="1"
            rows="20"
            placeholder="Nhập mô tả món ăn"
            onChange={(event) => setContent(event.target.value)}
          />
        </div>
      </form>
      <h1>Preview Blog</h1>
      <div className="content-preview">
        <h1 className="header-preview">{header}</h1>
        <img className="img-preview" src={img} />
        <p className="para-preview">{content}</p>
      </div>
    </div>
  );
}

export default AddContactForm;
