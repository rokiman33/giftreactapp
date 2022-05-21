import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICustomer {
CustomerId:number,
CustName:string,
CustIdentity?:string,
CustCert?:string,
CustDocType?:number,
CustFinalDate?:Date,
CustActivationDate?:Date,
CustSale?:boolean,
CustPay?:boolean,
CustReLoad?:boolean,
CustStatus?:string,
CustInfoAdic1?:string,
CustInfoAdic2?:string,
CustInfoAdic3?:string,
CustInfoAdic4?:string,
CustDateAdic1?:Date,
CustDateAdic2?:Date,
CustValueAdic1?:number,
CustValueAdic2?:number,
CustValueAdic3?:number
}

interface ICustomerData {
    list?: Array<ICustomer>;
    pageNo: number;
    pageSize: number;
    searchKey?: string;
    totalCount?: number;
    message?: string;
}

const initialState: ICustomerData = {
    pageNo: 1,
    pageSize: 20,
    searchKey: '',
    list: [],
    totalCount: 0,
    message: '',
};

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        setCustomerList: (state, _action: PayloadAction<ICustomerData>) => {
            state.list = _action.payload.list;
            state.pageNo = _action.payload.pageNo;
            state.pageSize = _action.payload.pageSize;
            state.totalCount = _action.payload.totalCount;
        },
        resetCustomerToInit: (state) => {
            state = initialState;
        },
        setCustomerMessage: (state, _action: PayloadAction<string>) => {
            state.message = _action.payload;
        },
    },
});

export const { setCustomerList, resetCustomerToInit, setCustomerMessage } = customerSlice.actions;

export default customerSlice.reducer;

