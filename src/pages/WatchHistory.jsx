import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryAPI,deleteHistoryAPI } from '../services/allAPI'

function WatchHistory() {


 const [history,setHistory]=useState([]);
 useEffect(()=>{
 getHistory()
 },[]);
 const getHistory =async()=>{
  const result= await getHistoryAPI()
  if(result.status==200){
    setHistory(result.data)
  }else{
    console.log("api failes");
    setHistory(result.message)
  }
 }
 console.log(history);
 const removeVideoHistory= async(id)=>{
  await deleteHistoryAPI(id)
  getHistory()
 }
 
 




  return (
    <>
      <div className="container mt-5 mb-3 d-flex justify-content-between">
        <h2>Watch History</h2>
        <Link style={{textDecoration:"none",color:"gray",fontSize:"30px"}} to={"/home"}>Back To Home
          <i className='fa-solid fa-arrow-rotate-left'></i>

        </Link>
      </div>
      <div className="container mt-5 mb-3 w-100">
        <table className='table shadow w-100'>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Video URL</th>
            <th>Time Stamp</th>
            <th>Action</th>
          </tr>
          {
                history?.length>0?history.map((video,index)=>(
                 <tr> 
              <td>{index+1}</td>
              <td>{video.caption}</td>
              <td>{video.link}<a href=""></a></td>
              <td>{video.timeStamp}</td>
              <td><i onClick={()=>removeVideoHistory(video?.id)} class="fa-solid fa-trash"></i></td> 
            </tr>
            )):<p style={{color:"red"}}>Noting to Display</p>
         }
        </table>
      </div>
    </>
  )
}

export default WatchHistory
