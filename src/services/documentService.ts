import { APIService } from "services";

export const getDocument = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllDocument(pageNo,pageSize);
    }
    else{
        try {
            res = await searchDocument(search,pageNo,pageSize);
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


export const addDocument = (data) => {
return APIService.api().post(`/document`,data)
}
export const updateDocument = (DocumentId,data) => {
return APIService.api().patch(`/document/${DocumentId}`,data)
}
export const getAllDocument = (pageNo,pageSize) => {
return APIService.api().get(`/document/?pageNo=${pageNo}&pageSize=${pageSize}`)
}
export const getOneDocument = (DocumentId) => {
return APIService.api().get(`/document/${DocumentId}`)
}
export const searchDocument = (searchKey,pageNo,pageSize) => {
return APIService.api().get(`/document/search/${searchKey}/?pageNo=${pageNo}&pageSize=${pageSize}`)
}
export const deleteDocument = (DocumentId) => {
return APIService.api().delete(`/document/${DocumentId}`)
}
