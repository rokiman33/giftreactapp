import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IDocument {
DocumentId:string,
CustomerId:number,
DocType:number,
DocIdentity:string,
CreatedDate:Date,
ActivateDate?:Date,
CancelDate?:Date,
InAmount?:number,
OutAmount?:number,
BalanceAmount?:number,
DocStatus?:string
}

interface IDocumentData {
    list?: Array<IDocument>;
    pageNo: number;
    pageSize: number;
    searchKey?: string;
    totalCount?: number;
    message?: string;
}

const initialState: IDocumentData = {
    pageNo: 1,
    pageSize: 20,
    searchKey: '',
    list: [],
    totalCount: 0,
    message: '',
};

const documentSlice = createSlice({
    name: "document",
    initialState,
    reducers: {
        setDocumentList: (state, _action: PayloadAction<IDocumentData>) => {
            state.list = _action.payload.list;
            state.pageNo = _action.payload.pageNo;
            state.pageSize = _action.payload.pageSize;
            state.totalCount = _action.payload.totalCount;
        },
        resetDocumentToInit: (state) => {
            state = initialState;
        },
        setDocumentMessage: (state, _action: PayloadAction<string>) => {
            state.message = _action.payload;
        },
    },
});

export const { setDocumentList, resetDocumentToInit, setDocumentMessage } = documentSlice.actions;

export default documentSlice.reducer;

