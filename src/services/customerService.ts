import { APIService } from "services";

export const getCustomer = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllCustomer(pageNo,pageSize);
    }
    else{
        try {
            res = await searchCustomer(search,pageNo,pageSize);
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


export const addCustomer = (data) => {
return APIService.api().post(`/customer`,data)
}
export const updateCustomer = (CustomerId,data) => {
return APIService.api().patch(`/customer/${CustomerId}`,data)
}
export const getAllCustomer = (pageNo,pageSize) => {
return APIService.api().get(`/customer/?pageNo=${pageNo}&pageSize=${pageSize}`)
}
export const getOneCustomer = (CustomerId) => {
return APIService.api().get(`/customer/${CustomerId}`)
}
export const searchCustomer = (searchKey,pageNo,pageSize) => {
return APIService.api().get(`/customer/search/${searchKey}/?pageNo=${pageNo}&pageSize=${pageSize}`)
}
export const deleteCustomer = (CustomerId) => {
return APIService.api().delete(`/customer/${CustomerId}`)
}
