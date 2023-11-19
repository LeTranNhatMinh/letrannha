// EditContactForm.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles.css";

function EditContactForm(props) {
  const { id } = useParams();
  const index = Number(id);

  useEffect(() => {
    if (props.listblogs && props.listblogs[index]) {
      const blog = props.listblogs[index];
      props.setSubmitHeader(blog.header);
      props.setSubmitImg(blog.img);
      props.setSubmitContent(blog.content);
    }
  }, [index, props.listblogs]);

  function handleSubmit(event) {
    event.preventDefault();
    const updatedBlog = {
      header: props.submitHeader,
      img: props.submitImg,
      content: props.submitContent
    };
    const updatedBlogs = props.listblogs.map((blog, blogIndex) =>
      blogIndex === index ? updatedBlog : blog
    );
    props.setListBlogs(updatedBlogs);
    props.setSubmitHeader("");
    props.setSubmitContent("");
    props.setSubmitImg("");
  }

  return (
    <div className="add-form">
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Xác Nhận" />

        <div>
          <input
            className="input-add"
            type="text"
            placeholder="Nhập tiêu đề "
            value={props.submitHeader}
            onChange={(event) => props.setSubmitHeader(event.target.value)}
          />
          <input
            className="input-add"
            type="text"
            placeholder="Nhập URL hình ảnh"
            value={props.submitImg}
            onChange={(event) => props.setSubmitImg(event.target.value)}
          />
          <textarea
            name="text"
            cols="1"
            rows="20"
            className="input-add"
            type="text"
            placeholder="Nhập nội dung"
            value={props.submitContent}
            onChange={(event) => props.setSubmitContent(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default EditContactForm;
