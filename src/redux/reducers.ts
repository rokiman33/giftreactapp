import { combineReducers } from "redux";

import template from "redux/slices/template";
import authToken from "redux/slices/auth";

import customer from "redux/slices/customer";
import document from "redux/slices/document";
import users from "redux/slices/users";


const rootReducer = combineReducers({ template,authToken,customer,document,users });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

