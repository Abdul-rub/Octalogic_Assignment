import * as types from "./actiontypes"

const initState={
    course:[],
    isError:false,
    isLoading: false
}

export const CourseReducer=(state=initState,{type,payload})=>{
switch(type)
{
    case types.GET_COURSE_REQ:
        return{
            ...state,
            isError:false,
            isLoading: true,
        }
    case types.GET_COURSE_SUCCESS:
        return{
            ...state,
            isError:false,
            course:payload,
            isLoading: false,
        }
    case types.GET_COURSE_FAILURE:
        return{
            ...state,
            isError:true,
            isLoading: false, 
        }
        default:
            return state;
}
    }
    
