import { useFormik } from "formik";
import React from "react";

import { Button, Card, Form } from "react-bootstrap";
import { setUsersMessage } from "redux/actions";


import { useAppDispatch } from "redux/store";
import { addUsers, updateUsers } from "services/usersService";
import { Constant } from "template/Constant";
import * as yup from 'yup';
type Props = {
    row?: any,
    hideShowForm: (actionName) => void;
    getData: (page, pageSize, searchKey) => void;
    action?: string
};
export const UsersForm: React.FC<Props> = ({ row, hideShowForm, getData, action }) => {
    const dispatch = useAppDispatch();
    const iValue={Id:'',AccountId:'',UserName:'',Password:'',Email:'',IsActive:'',IsAdmin:'',LastLoginTime:'',CreatedDate:'',Creator:'',ModifiedDate:'',Modifier:''};
    const initialValue = action === 'edit' ? row : iValue;
    
    
    const formik = useFormik({
        initialValues: initialValue,
        onSubmit: async (values) => {
            if (action === 'edit') {
                const response = await updateUsers(values.Id,values);
               if (response && (response.status === 200 || response.status === 201)) {
                    dispatch(setUsersMessage("Updated Successfully"));
                    getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                    hideShowForm('');
                } else {
                    dispatch(setUsersMessage("Some error occured!"));
                }
            } else if (action === 'add') {
                const response = await addUsers(values);
               if (response && (response.status === 200 || response.status === 201)) {
                    dispatch(setUsersMessage("Added Successfully"));
                    getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                    hideShowForm('');
                } else {
                    dispatch(setUsersMessage("Some error occured!"));
                }
            }
        },
        validationSchema: yup.object({
           AccountId: yup.number().required('AccountId is required'),
UserName: yup.string().required('UserName is required'),
Password: yup.string().required('Password is required'),
Email: yup.string().required('Email is required'),
IsActive: yup.boolean().required('IsActive is required'),
IsAdmin: yup.boolean().required('IsAdmin is required'),
LastLoginTime: yup.date(),
CreatedDate: yup.date().required('CreatedDate is required'),
Creator: yup.number().required('Creator is required'),
ModifiedDate: yup.date(),
Modifier: yup.number(),

        }),
    });
    return (
        <Card className="shadow mb-4">
            <Card.Header className="py-3">
                <h6 className="m-0 font-weight-bold text-primary text-capitalize">{action} Users
                    <Button className="btn-icon-split float-right" onClick={() => hideShowForm(false)}>
                        <span className="icon text-white-50">
                            <i className="fas fa-list"></i>
                        </span>
                        <span className="text">View Users</span>
                    </Button>
                </h6>

            </Card.Header>
            <Card.Body>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Group>
<label className="form -control-label">AccountId</label>
<Form.Control type="number" name="AccountId" className="form-control" value={formik.values.AccountId}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.AccountId && !!formik.errors.AccountId}
isValid ={!!formik.touched.AccountId && !formik.errors.AccountId}
></Form.Control>
{
    formik.errors.AccountId && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.AccountId}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">UserName</label>
<Form.Control type="text" name="UserName" className="form-control" value={formik.values.UserName}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.UserName && !!formik.errors.UserName}
isValid ={!!formik.touched.UserName && !formik.errors.UserName}
></Form.Control>
{
    formik.errors.UserName && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.UserName}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">Password</label>
<Form.Control type="text" name="Password" className="form-control" value={formik.values.Password}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.Password && !!formik.errors.Password}
isValid ={!!formik.touched.Password && !formik.errors.Password}
></Form.Control>
{
    formik.errors.Password && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.Password}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">Email</label>
<Form.Control type="text" name="Email" className="form-control" value={formik.values.Email}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.Email && !!formik.errors.Email}
isValid ={!!formik.touched.Email && !formik.errors.Email}
></Form.Control>
{
    formik.errors.Email && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.Email}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">IsActive</label>
<Form.Control type="boolean" name="IsActive" className="form-control" value={formik.values.IsActive}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.IsActive && !!formik.errors.IsActive}
isValid ={!!formik.touched.IsActive && !formik.errors.IsActive}
></Form.Control>
{
    formik.errors.IsActive && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.IsActive}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">IsAdmin</label>
<Form.Control type="boolean" name="IsAdmin" className="form-control" value={formik.values.IsAdmin}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.IsAdmin && !!formik.errors.IsAdmin}
isValid ={!!formik.touched.IsAdmin && !formik.errors.IsAdmin}
></Form.Control>
{
    formik.errors.IsAdmin && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.IsAdmin}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">LastLoginTime</label>
<Form.Control type="date" name="LastLoginTime" className="form-control" value={formik.values.LastLoginTime}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.LastLoginTime && !!formik.errors.LastLoginTime}
isValid ={!!formik.touched.LastLoginTime && !formik.errors.LastLoginTime}
></Form.Control>
{
    formik.errors.LastLoginTime && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.LastLoginTime}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">CreatedDate</label>
<Form.Control type="date" name="CreatedDate" className="form-control" value={formik.values.CreatedDate}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.CreatedDate && !!formik.errors.CreatedDate}
isValid ={!!formik.touched.CreatedDate && !formik.errors.CreatedDate}
></Form.Control>
{
    formik.errors.CreatedDate && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.CreatedDate}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">Creator</label>
<Form.Control type="number" name="Creator" className="form-control" value={formik.values.Creator}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.Creator && !!formik.errors.Creator}
isValid ={!!formik.touched.Creator && !formik.errors.Creator}
></Form.Control>
{
    formik.errors.Creator && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.Creator}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">ModifiedDate</label>
<Form.Control type="date" name="ModifiedDate" className="form-control" value={formik.values.ModifiedDate}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.ModifiedDate && !!formik.errors.ModifiedDate}
isValid ={!!formik.touched.ModifiedDate && !formik.errors.ModifiedDate}
></Form.Control>
{
    formik.errors.ModifiedDate && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.ModifiedDate}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">Modifier</label>
<Form.Control type="number" name="Modifier" className="form-control" value={formik.values.Modifier}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.Modifier && !!formik.errors.Modifier}
isValid ={!!formik.touched.Modifier && !formik.errors.Modifier}
></Form.Control>
{
    formik.errors.Modifier && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.Modifier}
    </Form.Control.Feedback>
)}
</Form.Group>

                    <Form.Group>
                        <Button type="submit" className="float-right" variant="primary">Save</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
}

