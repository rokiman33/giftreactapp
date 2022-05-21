import { APIService } from "services";

export const getUsers = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllUsers(pageNo,pageSize);
    }
    else{
        try {
            res = await searchUsers(search,pageNo,pageSize);
        } catch(err) {
             return { records:[], totalCount:0 }
        }
    }
    if(res && res.data){
    return res.data;
    }else{
    return { records:[], totalCount:0 }
    }
    
}


export const addUsers = (data) => {
return APIService.api().post(`/users`,data)
}
export const updateUsers = (Id,data) => {
return APIService.api().patch(`/users/${Id}`,data)
}
export const getAllUsers = (pageNo,pageSize) => {
return APIService.api().get(`/users/?pageNo=${pageNo}&pageSize=${pageSize}`)
}
export const getOneUsers = (Id) => {
return APIService.api().get(`/users/${Id}`)
}
export const searchUsers = (searchKey,pageNo,pageSize) => {
return APIService.api().get(`/users/search/${searchKey}/?pageNo=${pageNo}&pageSize=${pageSize}`)
}
export const deleteUsers = (Id) => {
return APIService.api().delete(`/users/${Id}`)
}
