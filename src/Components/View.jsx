import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import {getAllVedioAPI, getCategoryAPI, updateCategoryapi} from '../services/allAPI'
function View({uploadVideoResponse,setDropVideoResponse}) {
  const [deleteVideoResponse,setdeleteVideoResponce]=useState(false)
  const [allVideo,setAllVideos]=useState([])


  const getAllVedio=async()=>{
    const result = await getAllVedioAPI()
    console.log(result);
    if(result.status==200){
      setAllVideos(result.data)
    }else{
      alert("api failed")
      setAllVideos([])
    }
    
  }
  console.log(allVideo);
  
  useEffect(()=>{
    getAllVedio()
    setdeleteVideoResponce(false)
  },[uploadVideoResponse,deleteVideoResponse])

  const dragOver=(e)=>{
      e.preventDefault()
    }
    const videoDropped=async(e)=>{
      const{videoId,categoryId}=JSON.parse(e.dataTransfer.getData("data"))
      // console.log(videoId,categoryId);
      const{data}=await getCategoryAPI()
      const selectedCategory = data.find(item=>item.id==categoryId)
     let result= selectedCategory.allVideo.filter(video=>video.id!==videoId)
     console.log(result);
     let {id,categoryName}= selectedCategory
     let newCategory = {id,categoryName,allVideo:result}
      const res = await updateCategoryapi(categoryId,newCategory)
      setDropVideoResponse(res)

    }
  return (
    <>
    <h1>All Video</h1>
    <Row
  droppable="true"
  onDragOver={dragOver}
  onDrop={(e) => videoDropped(e)}
>
  {
    allVideo?.length > 0
      ? allVideo.map((video) => (
          <Col key={video.id} sm={12} md={6} lg={4}>
            <VideoCard video={video} setdeleteVideoResponce={setdeleteVideoResponce} />
          </Col>
        ))
      : <p>Nothing to Display</p>
  }
</Row>
       
    </>
  )
}

export default View
     