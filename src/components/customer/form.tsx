import { useFormik } from "formik";
import React from "react";

import { Button, Card, Form } from "react-bootstrap";
import { setCustomerMessage } from "redux/actions";


import { useAppDispatch } from "redux/store";
import { addCustomer, updateCustomer } from "services/customerService";
import { Constant } from "template/Constant";
import * as yup from 'yup';
type Props = {
    row?: any,
    hideShowForm: (actionName) => void;
    getData: (page, pageSize, searchKey) => void;
    action?: string
};
export const CustomerForm: React.FC<Props> = ({ row, hideShowForm, getData, action }) => {
    const dispatch = useAppDispatch();
    const iValue={CustomerId:'',CustName:'',CustIdentity:'',CustCert:'',CustDocType:'',CustFinalDate:'',CustActivationDate:'',CustSale:'',CustPay:'',CustReLoad:'',CustStatus:'',CustInfoAdic1:'',CustInfoAdic2:'',CustInfoAdic3:'',CustInfoAdic4:'',CustDateAdic1:'',CustDateAdic2:'',CustValueAdic1:'',CustValueAdic2:'',CustValueAdic3:''};
    const initialValue = action === 'edit' ? row : iValue;
    
    
    const formik = useFormik({
        initialValues: initialValue,
        onSubmit: async (values) => {
            if (action === 'edit') {
                const response = await updateCustomer(values.CustomerId,values);
               if (response && (response.status === 200 || response.status === 201)) {
                    dispatch(setCustomerMessage("Updated Successfully"));
                    getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                    hideShowForm('');
                } else {
                    dispatch(setCustomerMessage("Some error occured!"));
                }
            } else if (action === 'add') {
                const response = await addCustomer(values);
               if (response && (response.status === 200 || response.status === 201)) {
                    dispatch(setCustomerMessage("Added Successfully"));
                    getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                    hideShowForm('');
                } else {
                    dispatch(setCustomerMessage("Some error occured!"));
                }
            }
        },
        validationSchema: yup.object({
           CustName: yup.string().required('CustName is required'),
CustIdentity: yup.string(),
CustCert: yup.string(),
CustDocType: yup.number(),
CustFinalDate: yup.date(),
CustActivationDate: yup.date(),
CustSale: yup.boolean(),
CustPay: yup.boolean(),
CustReLoad: yup.boolean(),
CustStatus: yup.string(),
CustInfoAdic1: yup.string(),
CustInfoAdic2: yup.string(),
CustInfoAdic3: yup.string(),
CustInfoAdic4: yup.string(),
CustDateAdic1: yup.date(),
CustDateAdic2: yup.date(),
CustValueAdic1: yup.number(),
CustValueAdic2: yup.number(),
CustValueAdic3: yup.number(),

        }),
    });
    return (
        <Card className="shadow mb-4">
            <Card.Header className="py-3">
                <h6 className="m-0 font-weight-bold text-primary text-capitalize">{action} Customer
                    <Button className="btn-icon-split float-right" onClick={() => hideShowForm(false)}>
                        <span className="icon text-white-50">
                            <i className="fas fa-list"></i>
                        </span>
                        <span className="text">View Customer</span>
                    </Button>
                </h6>

            </Card.Header>
            <Card.Body>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Group>
<label className="form -control-label">CustName</label>
<Form.Control type="text" name="CustName" className="form-control" value={formik.values.CustName}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.CustName && !!formik.errors.CustName}
isValid ={!!formik.touched.CustName && !formik.errors.CustName}
></Form.Control>
{
    formik.errors.CustName && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.CustName}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">CustIdentity</label>
<Form.Control type="text" name="CustIdentity" className="form-control" value={formik.values.CustIdentity}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.CustIdentity && !!formik.errors.CustIdentity}
isValid ={!!formik.touched.CustIdentity && !formik.errors.CustIdentity}
></Form.Control>
{
    formik.errors.CustIdentity && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.CustIdentity}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">CustCert</label>
<Form.Control type="text" name="CustCert" className="form-control" value={formik.values.CustCert}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.CustCert && !!formik.errors.CustCert}
isValid ={!!formik.touched.CustCert && !formik.errors.CustCert}
></Form.Control>
{
    formik.errors.CustCert && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.CustCert}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">CustDocType</label>
<Form.Control type="number" name="CustDocType" className="form-control" value={formik.values.CustDocType}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.CustDocType && !!formik.errors.CustDocType}
isValid ={!!formik.touched.CustDocType && !formik.errors.CustDocType}
></Form.Control>
{
    formik.errors.CustDocType && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.CustDocType}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">CustFinalDate</label>
<Form.Control type="date" name="CustFinalDate" className="form-control" value={formik.values.CustFinalDate}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.CustFinalDate && !!formik.errors.CustFinalDate}
isValid ={!!formik.touched.CustFinalDate && !formik.errors.CustFinalDate}
></Form.Control>
{
    formik.errors.CustFinalDate && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.CustFinalDate}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">CustActivationDate</label>
<Form.Control type="date" name="CustActivationDate" className="form-control" value={formik.values.CustActivationDate}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.CustActivationDate && !!formik.errors.CustActivationDate}
isValid ={!!formik.touched.CustActivationDate && !formik.errors.CustActivationDate}
></Form.Control>
{
    formik.errors.CustActivationDate && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.CustActivationDate}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">CustSale</label>
<Form.Control type="boolean" name="CustSale" className="form-control" value={formik.values.CustSale}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.CustSale && !!formik.errors.CustSale}
isValid ={!!formik.touched.CustSale && !formik.errors.CustSale}
></Form.Control>
{
    formik.errors.CustSale && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.CustSale}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">CustPay</label>
<Form.Control type="boolean" name="CustPay" className="form-control" value={formik.values.CustPay}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.CustPay && !!formik.errors.CustPay}
isValid ={!!formik.touched.CustPay && !formik.errors.CustPay}
></Form.Control>
{
    formik.errors.CustPay && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.CustPay}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">CustReLoad</label>
<Form.Control type="boolean" name="CustReLoad" className="form-control" value={formik.values.CustReLoad}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.CustReLoad && !!formik.errors.CustReLoad}
isValid ={!!formik.touched.CustReLoad && !formik.errors.CustReLoad}
></Form.Control>
{
    formik.errors.CustReLoad && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.CustReLoad}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">CustStatus</label>
<Form.Control type="text" name="CustStatus" className="form-control" value={formik.values.CustStatus}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.CustStatus && !!formik.errors.CustStatus}
isValid ={!!formik.touched.CustStatus && !formik.errors.CustStatus}
></Form.Control>
{
    formik.errors.CustStatus && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.CustStatus}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">CustInfoAdic1</label>
<Form.Control type="text" name="CustInfoAdic1" className="form-control" value={formik.values.CustInfoAdic1}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.CustInfoAdic1 && !!formik.errors.CustInfoAdic1}
isValid ={!!formik.touched.CustInfoAdic1 && !formik.errors.CustInfoAdic1}
></Form.Control>
{
    formik.errors.CustInfoAdic1 && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.CustInfoAdic1}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">CustInfoAdic2</label>
<Form.Control type="text" name="CustInfoAdic2" className="form-control" value={formik.values.CustInfoAdic2}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.CustInfoAdic2 && !!formik.errors.CustInfoAdic2}
isValid ={!!formik.touched.CustInfoAdic2 && !formik.errors.CustInfoAdic2}
></Form.Control>
{
    formik.errors.CustInfoAdic2 && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.CustInfoAdic2}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">CustInfoAdic3</label>
<Form.Control type="text" name="CustInfoAdic3" className="form-control" value={formik.values.CustInfoAdic3}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.CustInfoAdic3 && !!formik.errors.CustInfoAdic3}
isValid ={!!formik.touched.CustInfoAdic3 && !formik.errors.CustInfoAdic3}
></Form.Control>
{
    formik.errors.CustInfoAdic3 && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.CustInfoAdic3}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">CustInfoAdic4</label>
<Form.Control type="text" name="CustInfoAdic4" className="form-control" value={formik.values.CustInfoAdic4}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.CustInfoAdic4 && !!formik.errors.CustInfoAdic4}
isValid ={!!formik.touched.CustInfoAdic4 && !formik.errors.CustInfoAdic4}
></Form.Control>
{
    formik.errors.CustInfoAdic4 && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.CustInfoAdic4}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">CustDateAdic1</label>
<Form.Control type="date" name="CustDateAdic1" className="form-control" value={formik.values.CustDateAdic1}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.CustDateAdic1 && !!formik.errors.CustDateAdic1}
isValid ={!!formik.touched.CustDateAdic1 && !formik.errors.CustDateAdic1}
></Form.Control>
{
    formik.errors.CustDateAdic1 && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.CustDateAdic1}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">CustDateAdic2</label>
<Form.Control type="date" name="CustDateAdic2" className="form-control" value={formik.values.CustDateAdic2}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.CustDateAdic2 && !!formik.errors.CustDateAdic2}
isValid ={!!formik.touched.CustDateAdic2 && !formik.errors.CustDateAdic2}
></Form.Control>
{
    formik.errors.CustDateAdic2 && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.CustDateAdic2}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">CustValueAdic1</label>
<Form.Control type="number" name="CustValueAdic1" className="form-control" value={formik.values.CustValueAdic1}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.CustValueAdic1 && !!formik.errors.CustValueAdic1}
isValid ={!!formik.touched.CustValueAdic1 && !formik.errors.CustValueAdic1}
></Form.Control>
{
    formik.errors.CustValueAdic1 && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.CustValueAdic1}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">CustValueAdic2</label>
<Form.Control type="number" name="CustValueAdic2" className="form-control" value={formik.values.CustValueAdic2}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.CustValueAdic2 && !!formik.errors.CustValueAdic2}
isValid ={!!formik.touched.CustValueAdic2 && !formik.errors.CustValueAdic2}
></Form.Control>
{
    formik.errors.CustValueAdic2 && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.CustValueAdic2}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">CustValueAdic3</label>
<Form.Control type="number" name="CustValueAdic3" className="form-control" value={formik.values.CustValueAdic3}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.CustValueAdic3 && !!formik.errors.CustValueAdic3}
isValid ={!!formik.touched.CustValueAdic3 && !formik.errors.CustValueAdic3}
></Form.Control>
{
    formik.errors.CustValueAdic3 && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.CustValueAdic3}
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

