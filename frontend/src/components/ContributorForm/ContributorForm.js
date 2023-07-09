import React, {useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const ContributorForm = () => {
  const [formData, setFormData] = useState({'title': '', 'description': '', 'url': '', 'author': '', 'tags': '', 'grade': '', 'subject': '','language':''});
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const { loginInfo, updateLoginInfo, loginUser, loginError, isLoginLoading } =
    useContext(AuthContext);

  return (
    <form onSubmit={loginUser}>
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <h2 classNAme="my-4">Upload your content</h2>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Title' name="title" type='text' value={formData.title} onChange={handleChange} className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Description' name="description" type='text' value={formData.description} onChange={handleChange} className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Upload Link' name="url" type='text' value={formData.url} onChange={handleChange} className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Author' name="author" type='text' value={formData.author}onChange={handleChange} className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Add your tags' name="tags" type='text' value={formData.tags} onChange={handleChange} className='w-100'/>
              </div>



              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Grade of Content' value={formData.grade} name="grade" onChange={handleChange} type='text' className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Subject' value={formData.subject} name="subject" onChange={handleChange} type='text' className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Language' value={formData.language} name="language" onChange={handleChange} type='text' className='w-100'/>
              </div>
              
              <button className='mb-4 btn btn-primary' type="submit" size='lg'>Upload</button>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
    </form>
  );
};

export default ContributorForm;
