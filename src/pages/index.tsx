import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./login";
import Register from "./register";
import AuthenticatedRoute from "components/auth";
import { Dashboard } from "components/dashboard";
import { FileUpload } from "components/upload";
import { NotFound } from "./404";
import { Customer, Document, Users} from "components";
const Pages: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/dashboard" element={<AuthenticatedRoute element={<Dashboard />} />}></Route>
        <Route path="/upload" element={<AuthenticatedRoute element={<FileUpload />} />}></Route>
        <Route path="/customer" element={<AuthenticatedRoute element={<Customer />} />}></Route>
<Route path="/document" element={<AuthenticatedRoute element={<Document />} />}></Route>
<Route path="/users" element={<AuthenticatedRoute element={<Users />} />}></Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;

