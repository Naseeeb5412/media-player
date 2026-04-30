import React from 'react'
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { addvedioAPI } from '../services/allAPI';



function Add({setuploadVideoResponse}) {
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [uploadVideo,setuploadVideo]=useState({
    id:"",caption:"",url:"",link:""
  })
  console.log(uploadVideo);
  


  const getYoutubeLink=(e)=>{
    const {value}=e.target

    if(value.includes("v=")){
      let VID =value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${VID}`);
      setuploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${VID}`})   
    }else{
      setuploadVideo({...uploadVideo,link:""})
    }
  }
  const handleAdd=async()=>{
    const{id,caption,url,link}=uploadVideo
    if(!id || !caption || !url ||!link){
      alert("please fill the missing fields")
    }else{
      //api call uplaod to json server
      const result = await addvedioAPI(uploadVideo)
      console.log(result);
      if (result.status>=200 && result.status<300){
        alert("video uploaded")
        handleClose()
        setuploadVideoResponse(result.data )
      }else{
        alert(result.message)
      }
      

    }
  }



  return (
    <>
    <div className="d-flex">
      <h2>Upload Videos</h2>
      <button
      onClick={handleShow}
  style={{
    border: "none",
    width: "50px",
    height: "50px",
    background: "transparent",
    cursor: "pointer",
    color:"grey",
    paddingBottom:'10px'
  }}
>
  <i
    className="fa-solid fa-arrow-up-from-bracket"
    style={{ fontSize: "24px" }} 
  ></i>
</button>
 <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
             <Form.Label>Video ID</Form.Label>
          <Form.Control onChange={(e)=>setuploadVideo({...uploadVideo,id:e.target.value})} 
            required
            type="text"
            placeholder="enter your video id"
             />

             <Form.Label>Video Title</Form.Label>
          <Form.Control onChange={(e)=>setuploadVideo({...uploadVideo,caption:e.target.value})}
            required
            type="text"
            placeholder="enter your video name"
             />

             <Form.Label>Image URL</Form.Label>
          <Form.Control onChange={(e)=>setuploadVideo({...uploadVideo,url:e.target.value})}
            required
            type="text"
            placeholder="Image URL"
             />

             <Form.Label>Video URL</Form.Label>
          <Form.Control 
            required
            type="text"
            placeholder="enter your video URL"
            onChange={getYoutubeLink}
             />

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>

    </div>
    </>
  )
}

export default Add
