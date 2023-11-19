import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AddContactForm from "./components/AddContactForm";
import ContactDetail from "./components/ContactDetail";
import ContactList from "./components/ContactList";
import EditContactForm from "./components/EditContactForm";
import Home from "./components/Home";

function App() {
  const [submitImg, setSubmitImg] = useState(
    localStorage.getItem("submitImg") || ""
  );
  const [submitHeader, setSubmitHeader] = useState(
    localStorage.getItem("submitHeader") || ""
  );
  const [submitContent, setSubmitContent] = useState(
    localStorage.getItem("submitContent") || ""
  );
  const [listblogs, setListBlogs] = useState(
    JSON.parse(localStorage.getItem("listblogs")) || []
  );

  useEffect(() => {
    localStorage.setItem("submitImg", submitImg);
    localStorage.setItem("submitHeader", submitHeader);
    localStorage.setItem("submitContent", submitContent);
    localStorage.setItem("listblogs", JSON.stringify(listblogs));
  }, [submitImg, submitHeader, submitContent, listblogs]);

  return (
    <div className="list-router">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AddContactForm">AddContactForm</Link>
        </li>
        <li>
          <Link to="/ContactList">ContactList</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              submitImg={submitImg}
              submitHeader={submitHeader}
              submitContent={submitContent}
              listblogs={listblogs}
            />
          }
        />

        <Route
          path="/AddContactForm"
          element={
            <AddContactForm
              setSubmitImg={setSubmitImg}
              setSubmitHeader={setSubmitHeader}
              setSubmitContent={setSubmitContent}
              setListBlogs={setListBlogs}
            />
          }
        />
        <Route
          path="/ContactList"
          element={
            <ContactList listblogs={listblogs} setListBlogs={setListBlogs} />
          }
        />
        <Route
          path="/EditContactForm/:id"
          element={
            <EditContactForm
              submitImg={submitImg}
              setSubmitImg={setSubmitImg}
              submitHeader={submitHeader}
              setSubmitHeader={setSubmitHeader}
              submitContent={submitContent}
              setSubmitContent={setSubmitContent}
              listblogs={listblogs}
              setListBlogs={setListBlogs}
            />
          }
        />
        <Route
          path="/ContactDetail/:id"
          element={<ContactDetail listblogs={listblogs} />}
        />
      </Routes>
    </div>
  );
}

export default App;
