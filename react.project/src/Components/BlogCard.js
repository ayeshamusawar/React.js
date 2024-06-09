// HomeBlog.js

import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { MDBRow, MDBCol, MDBContainer, MDBTypography } from 'mdb-react-ui-kit';
import BlogCard from './blogs'; // Changed import name from HomeBlog to BlogCard

const HomeBlog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadBlogsData();
  }, []);

  const loadBlogsData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/blogs");
      if (response.status === 200) {
        setData(response.data);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error loading blogs:", error);
      toast.error("Something went wrong");
    }
  };

  console.log("data", data);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure that you want to delete this blog?")) {
      try {
        const response = await axios.delete(`http://localhost:8000/blogs/${id}`);
        if (response.status === 200) {
          toast.success("Blog Deleted Successfully");
          loadBlogsData();
        } else {
          toast.error("Something went wrong");
        }
      } catch (error) {
        console.error("Error deleting blog:", error);
        toast.error("Something went wrong");
      }
    }
  };

  const excerpt = (str) => {
    if (str.length > 50) {
      str = str.substring(0, 50) + "...";
    }
    return str;
  };

  return (
    <>
      <MDBRow>
        {data.length === 0 && (
          <MDBTypography className='text-center mb-0' tag="h2">
            No Blogs Found
          </MDBTypography>
        )}
        <MDBCol>
          <MDBContainer>
            <MDBRow>
              {data.map((item, index) => (
                <BlogCard
                  key={index}
                  {...item}
                  excerpt={excerpt}
                  handleDelete={handleDelete}
                />
              ))}
            </MDBRow>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default HomeBlog;





// // blogs.js 

// import React from 'react';
// import { MDMCol, MDBCard, MDBCardTitle, MDBCardBody, MDBCardImage, MDBCardText, MDBBtn, MDBIcon} from 'mdb-react-ui-kit';
// import { Link } from "react-router-dom";

// const AddBlog = ({title, category, description, id, imageUrl, excerpt, handleDelete}) => {
//     return ( 
//        <MDMCol size="4">
//               <MDBCard className='h-100 mt-2' style={{maxWidth:"22rem"}}>
//                 <MDBCardImage
//                 src={imageUrl}
//                 alt={title}
//                 position='top'
//                 style={{maxWidth: "100%", height: "100px"}}
//                 />
//                 <MDBCardBody>
//                     <MDBCardTitle>{title}</MDBCardTitle>
//                     <MDBCardText>{excerpt(description)}
//                     <Link to={'/blog/${id}'}>Read More</Link>
//                     </MDBCardText>
//                     <p>{category}</p>
//                     <span>
//                         <MDBBtn className='mt-1' tag='a' color='none' onClick={() => handleDelete(id)}>
//                             <MDBIcon 
//                              fas
//                              icon='trash'
//                              style={{color: 'red'}}
//                              size='lg'
//                             />
//                         </MDBBtn>
//                         <Link to={'/Todolist/$(id)'}>
//                         <MDBIcon 
//                              fas
//                              icon='edit'
//                              style={{color: 'green', marginLeft:"10px"}}
//                              size='lg'
//                             />
//                         </Link>
//                     </span>
//                 </MDBCardBody>
//               </MDBCard>
        
//        </MDMCol>
//      );
// }
 
// export default AddBlog;