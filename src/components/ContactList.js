import "../styles.css";

function ContactList(props) {
  const handleDelete = (index) => {
    const newList = [...props.listblogs];
    newList.splice(index, 1);
    props.setListBlogs(newList);
  };

  return (
    <div className="home">
      <div className="lists">
        {props.listblogs.map((blog, index) => (
          <div key={index} className="list">
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
              <button onClick={() => handleDelete(index)}>Xóa</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactList;
