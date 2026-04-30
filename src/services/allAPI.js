import { commonAPI } from "./commonAPI"
import { server_url } from "./server_url"

// add video
export const addvedioAPI = async (video) => {
  return await commonAPI("POST", `${server_url}/allVideos`, video)
}

// get all videos
export const getAllVedioAPI = async () => {
  return await commonAPI("GET", `${server_url}/allVideos`, null)
}

// get single video
export const getVedioAPI = async (id) => {
  return await commonAPI("GET", `${server_url}/allVideos/${id}`, null)
}

// delete video
export const deleteVedioAPI = async (id) => {
  return await commonAPI("DELETE", `${server_url}/allVideos/${id}`, {})
}

// add history
export const addHistoryAPI = async (video) => {
  return await commonAPI("POST", `${server_url}/history`, video)
}

// get history
export const getHistoryAPI = async () => {
  return await commonAPI("GET", `${server_url}/history`, null)
}

// delete history
export const deleteHistoryAPI = async (id) => {
  return await commonAPI("DELETE", `${server_url}/history/${id}`, {})
}


export const addcategoryAPI= async (category)=>{
  return await commonAPI("POST",`${server_url}/category`,category)
}

export const getCategoryAPI= async()=>{
  return await commonAPI("GET",`${server_url}/category`,"")
}

export const  deleteCategoryAPI= async(id)=>{
  return await commonAPI("DELETE",`${server_url}/category/${id}`,{})
}
//updateCategoryapi
export const updateCategoryapi=async(id,categoryDetails)=>{
  return await commonAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
}