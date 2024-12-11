// es per video ka home page copy kr ha 

import React,{useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { MDBRow, MDBCol, MDBContainer, MDBTypography} from 'mdb-react-ui-kit'

const AddBlog = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    loadBlogsData();
  }, [])

  const loadBlogsData = async () => {
    const response = await axios.get("http://localhost:8000/blogs");
    if(response.status === 200) {
      setData(response.data);
    }else {
      toast.error("Something went wrong");
    }
  };

  console.log("data", data);
  
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure that you wanted to delete that blog ?")) {
      const response = await axios.delete('http://localhost:8000/blogs/${id}');
      if (response.status === 200) {
        toast.success("Blog Deleted Successfully");
        loadBlogsData();
      }else{
        toast.error("Something went wrong");
      }
    }
  };

  const excerpt = (str) => {
    if (str.length > 50){
      str = str.substring(0, 50) + "...";
    }
    return str;
  }

  return ( 
    <>
    <MDBRow>
      {data.length === 0 && (
        <MDBTypography className='text-center mb-0'  tag="h2">
          No Blog Found
        </MDBTypography>
      )}
      <MDBCol>
        <MDBContainer>
          <MDBRow>
            {data && data.map((item, index) => (
              <AddBlog 
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
}
 
export default AddBlog;