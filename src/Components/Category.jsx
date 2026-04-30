import React, { useEffect } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { useState } from 'react';
import {addcategoryAPI,getCategoryAPI,deleteCategoryAPI,getVedioAPI, updateCategoryapi} from '../services/allAPI'
import VideoCard from './VideoCard';
function Category({dropVideoResponse}) {
  const [show, setShow] = useState(false);
  const [categoryName,setCategoryName]=useState("")
  const [allCategories,setAllCategories]=useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAdd= async()=>{
      
      if(categoryName){
        const result = await addcategoryAPI({categoryName,allVideo:[]})
       /// console.log(result);
        if(result.status>=200 &&result.status<300 ){
          handleClose()
          setCategoryName("")
          alert("Added")
          getCategories()
        }else{
          console.log(result.message);
          
        }
      } else{
        alert("please fill the missing fields")
        }
    
    }
    const getCategories=async()=>{
      const {data}=await getCategoryAPI()
      setAllCategories(data)
    }
    
    console.log(allCategories);
    
    useEffect(()=>{
      getCategories()

    },[dropVideoResponse])
    const removeCategory=async(id)=>{
      await deleteCategoryAPI(id)
      getCategories()
    }
    const dragOver=(e)=>{
      console.log("video drag over the category");
      e.preventDefault()
    }
   const videoDragStarted=(e,videoId,categoryId)=>{
    let dataShare={videoId,categoryId}
    e.dataTransfer.setData("data",JSON.stringify(dataShare))
   }
    
    //console.log(categoryName);//
    const videoDrop=async(e,categoryId)=>{
     const videoId= e.dataTransfer.getData("videoId")
      console.log(videoId,"video dropped into category id:",categoryId);
      const {data}=await getVedioAPI(videoId)
      console.log(data);
      const selectedCategory=allCategories.find(item=>item.id==categoryId)
      selectedCategory.allVideo.push(data)
      console.log(selectedCategory);
      await updateCategoryapi(categoryId,selectedCategory)
      getCategories()
      
      
    }
    
  return (
    <>
   <div className="d-grid">
    <Button onClick={handleShow} className='btn btn-primary '>ADD CATEGORY</Button>
   </div>
   <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
             <Form.Label>Category Name</Form.Label>
          <Form.Control 
            required
            type="text"
            placeholder="Enter Category Name"
            onChange={e=>setCategoryName(e.target.value)}
             />

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd}  variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      {
        allCategories?.length>0?allCategories.map((category)=>(
          <div key={category.id}  className="border border-3 m-3 p-3" droppable="true" onDragOver={e=>dragOver(e)}
          onDrop={e=>videoDrop(e,category?.id)}>
            <div className="d-flex justify-content-between align-items-center">
              <h3>{category?.categoryName}</h3>
              <button style={{padding:"10px",border:"none "}} onClick={()=>{removeCategory(category?.id)}} ><i className="fa-solid fa-trash"></i></button>
            </div>
            <Row>
  {(category?.allVideo || []).map((card) => (
    <Col
  xs={12}
  key={card?.id}
  className='mb-3 mt-2 p-2'
  draggable
  onDragStart={(e) => videoDragStarted(e, card.id, category.id)}
>
  <VideoCard video={card} insideCategory={true} />
</Col>
  ))}
</Row>
          </div>
        )):<p className='text-danger'>No Categories Created</p>
      }
    </>
  )
}

export default Category
