import React, { useState } from "react";
import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast} from 'react-toastify';
// tfvo20pq

const initialState = {
  title: "",
  description: "",
  category: "",
  imageUrl: "",
};

const options = ["Courses", "TuTorials", "Technology"];

const Todolist = () => {
  const [formValue, setFormValue] = useState(initialState);
  const [categoryErrMsg, setCategoryErrMsg] = useState(null);
  const { title, description, category, imageUrl } = formValue;

  const navigate = useNavigate();

  const getDate =() => {
    let today = new Date();
    // let dd = String(today.getDate()).padStart(2, "0");

    // let mm = String(today.getMonth() =1).padStart(2, "0");
    // let yyyy = today.getFullYear();

    // today = mn + "/" + "/" + yyyy;
    // return today;
  }

  const handleSubmit  = async (e) => {
    e.preventDefault();
    if(!category) {
        setCategoryErrMsg("Please select your category");
    }
    if (title && description && imageUrl && category) {
      const currentData = getDate();
      const updatedBlogData = {...formValue, data: currentData};
      const response = await axios.post("http://localhost:8000/blogs", updatedBlogData);
      if(response.status === 201) {
        toast.success("Blog Created Successfully")
      }else {
        toast.error("Something went wrong");
      }
      setFormValue({title: "", description: "", category: "", imageUrl: ""})
      navigate("/AddBlog");
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const onUploadImage = (file) => {
    console.log("file", file);
    const  formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "tfvo20pq");
    axios.post("http://api.cloudinary.com/v1_1/dmdzio2fz/image/upload", formData)
    .then( (resp) => {
      console.log(resp);
      toast.info("Image Uploaded Successfully");
      setFormValue({ ...formValue, imageUrl:resp.data.url});
    })
    .catch((err) =>{
      toast.error("Something went wrong");
    });

  };

  const onCategoryChange = (e) => {
    // const { value } = e.target;
    setCategoryErrMsg(null);
    setFormValue({ ...formValue, category: e.target.value });
  };

  return (
    <MDBValidation
      className="row g-3"
      style={{ marginTop: "30px" }}
      noValidate
      onSubmit={handleSubmit}
    >
      <p className="fs-2 fe-bold text-center">Add Blog</p>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBInput
          value={title}
          name="title"
          type="text"
          onChange={onInputChange}
          required
          label="Title"
          validation="Please provide a title"
        />
        <br />
        <MDBInput
          value={description}
          name="description"
          type="textarea"
          onChange={onInputChange}
          required
          label="Description"
          validation="Please provide a description"
          textarea
          rows={4}
        />
        <br />
        <MDBInput
          name="imageUrl"
          type="file"
          onChange={(e) => onUploadImage(e.target.files[0])}
          required
          label="Image"
          validation="Please provide an image"
        />
        <br />
        <select
          className="categoryDropdown"
          onChange={onCategoryChange}
          value={category}
        >
          <option>Please select category</option>
          {options.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
        {categoryErrMsg && (
          <div className="categoryErrMsg">{categoryErrMsg }</div>
        )}
        <br />
        <br />
        <MDBBtn color="success" type="submit" style={{ marginTop: "10px" }}>
          Add
        </MDBBtn>
        <MDBBtn color="danger" style={{ marginTop: "10px", marginLeft:"10px" }} onClick={() => navigate("/")}>
          Go Back
        </MDBBtn>
      </div>
    </MDBValidation>
  );
};

export default Todolist;
