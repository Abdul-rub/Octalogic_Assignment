import axios from "axios";
import * as types from "./actiontypes"

export const postCourse = (data)=> async (dispatch)=>{
    dispatch({ type: types.POST_COURSE_REQ });
    try {
      const res = await axios.post(`https://mock-api-0vet.onrender.com/user`, data);
      dispatch({ type: types.POST_COURSE_SUCCESS, payload: res.data });
      console.log(res)
      return res.data; 
    } catch (err) {
      console.error(err);
      dispatch({ type: types.POST_COURSE_FAILURE, payload: err });
      throw err; 
    }

}

export const getCourse = (data)=> async (dispatch)=>{
    dispatch({ type: types.GET_COURSE_REQ });
    try {
      const res = await axios.get(`https://mock-api-0vet.onrender.com/user`, data);
      dispatch({ type: types.GET_COURSE_SUCCESS, payload: res.data });
    //   console.log(res)
      return res.data; 
    } catch (err) {
      console.error(err);
      dispatch({ type: types.GET_COURSE_FAILURE, payload: err });
      throw err; 
    }
}

