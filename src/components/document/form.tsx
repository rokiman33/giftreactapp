import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";

import { Button, Card, Form } from "react-bootstrap";
import { setDocumentMessage } from "redux/actions";
import { resetCustomerToInit, setCustomerList } from "redux/actions";

import { getCustomer } from "services/customerService";

import { useAppDispatch } from "redux/store";
import { addDocument, updateDocument } from "services/documentService";
import { Constant } from "template/Constant";
import * as yup from 'yup';
type Props = {
    row?: any,
    hideShowForm: (actionName) => void;
    getData: (page, pageSize, searchKey) => void;
    action?: string
};
export const DocumentForm: React.FC<Props> = ({ row, hideShowForm, getData, action }) => {
    const dispatch = useAppDispatch();
    const iValue={DocumentId:'',CustomerId:'',DocType:'',DocIdentity:'',CreatedDate:'',ActivateDate:'',CancelDate:'',InAmount:'',OutAmount:'',BalanceAmount:'',DocStatus:''};
    const initialValue = action === 'edit' ? row : iValue;
    const customerData = useSelector((state: RootState) => state.customer);

    useEffect(() => {
if (customerData && customerData.list && customerData.list.length === 0) {
            dispatch(resetCustomerToInit());
            getCustomer(Constant.defaultPageNumber, Constant.defaultDropdownPageSize, '').then((response) => {
                if (response && response.records) {
                  dispatch(setCustomerList({ pageNo: Constant.defaultPageNumber, pageSize: Constant.defaultDropdownPageSize, list: response.records, totalCount: response.total_count, searchKey: '' }));
                } else {
                  dispatch(setDocumentMessage("No Record Found For Customer"));
                }
              })
        }
})
    const formik = useFormik({
        initialValues: initialValue,
        onSubmit: async (values) => {
            if (action === 'edit') {
                const response = await updateDocument(values.DocumentId,values);
               if (response && (response.status === 200 || response.status === 201)) {
                    dispatch(setDocumentMessage("Updated Successfully"));
                    getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                    hideShowForm('');
                } else {
                    dispatch(setDocumentMessage("Some error occured!"));
                }
            } else if (action === 'add') {
                const response = await addDocument(values);
               if (response && (response.status === 200 || response.status === 201)) {
                    dispatch(setDocumentMessage("Added Successfully"));
                    getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                    hideShowForm('');
                } else {
                    dispatch(setDocumentMessage("Some error occured!"));
                }
            }
        },
        validationSchema: yup.object({
           DocType: yup.number().required('DocType is required'),
DocIdentity: yup.string().required('DocIdentity is required'),
CreatedDate: yup.date().required('CreatedDate is required'),
ActivateDate: yup.date(),
CancelDate: yup.date(),
InAmount: yup.number(),
OutAmount: yup.number(),
BalanceAmount: yup.number(),
DocStatus: yup.string(),
CustomerId: yup.string().required('CustomerId is required'),

        }),
    });
    return (
        <Card className="shadow mb-4">
            <Card.Header className="py-3">
                <h6 className="m-0 font-weight-bold text-primary text-capitalize">{action} Document
                    <Button className="btn-icon-split float-right" onClick={() => hideShowForm(false)}>
                        <span className="icon text-white-50">
                            <i className="fas fa-list"></i>
                        </span>
                        <span className="text">View Document</span>
                    </Button>
                </h6>

            </Card.Header>
            <Card.Body>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Group>
<label className="form -control-label">DocType</label>
<Form.Control type="number" name="DocType" className="form-control" value={formik.values.DocType}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.DocType && !!formik.errors.DocType}
isValid ={!!formik.touched.DocType && !formik.errors.DocType}
></Form.Control>
{
    formik.errors.DocType && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.DocType}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">DocIdentity</label>
<Form.Control type="text" name="DocIdentity" className="form-control" value={formik.values.DocIdentity}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.DocIdentity && !!formik.errors.DocIdentity}
isValid ={!!formik.touched.DocIdentity && !formik.errors.DocIdentity}
></Form.Control>
{
    formik.errors.DocIdentity && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.DocIdentity}
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
<label className="form -control-label">ActivateDate</label>
<Form.Control type="date" name="ActivateDate" className="form-control" value={formik.values.ActivateDate}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.ActivateDate && !!formik.errors.ActivateDate}
isValid ={!!formik.touched.ActivateDate && !formik.errors.ActivateDate}
></Form.Control>
{
    formik.errors.ActivateDate && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.ActivateDate}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">CancelDate</label>
<Form.Control type="date" name="CancelDate" className="form-control" value={formik.values.CancelDate}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.CancelDate && !!formik.errors.CancelDate}
isValid ={!!formik.touched.CancelDate && !formik.errors.CancelDate}
></Form.Control>
{
    formik.errors.CancelDate && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.CancelDate}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">InAmount</label>
<Form.Control type="number" name="InAmount" className="form-control" value={formik.values.InAmount}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.InAmount && !!formik.errors.InAmount}
isValid ={!!formik.touched.InAmount && !formik.errors.InAmount}
></Form.Control>
{
    formik.errors.InAmount && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.InAmount}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">OutAmount</label>
<Form.Control type="number" name="OutAmount" className="form-control" value={formik.values.OutAmount}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.OutAmount && !!formik.errors.OutAmount}
isValid ={!!formik.touched.OutAmount && !formik.errors.OutAmount}
></Form.Control>
{
    formik.errors.OutAmount && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.OutAmount}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">BalanceAmount</label>
<Form.Control type="number" name="BalanceAmount" className="form-control" value={formik.values.BalanceAmount}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.BalanceAmount && !!formik.errors.BalanceAmount}
isValid ={!!formik.touched.BalanceAmount && !formik.errors.BalanceAmount}
></Form.Control>
{
    formik.errors.BalanceAmount && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.BalanceAmount}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">DocStatus</label>
<Form.Control type="text" name="DocStatus" className="form-control" value={formik.values.DocStatus}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.DocStatus && !!formik.errors.DocStatus}
isValid ={!!formik.touched.DocStatus && !formik.errors.DocStatus}
></Form.Control>
{
    formik.errors.DocStatus && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.DocStatus}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">CustomerId</label>
<Form.Control as="select"  name="CustomerId" className="form-control" value={formik.values.CustomerId}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.CustomerId && !!formik.errors.CustomerId}
isValid ={!!formik.touched.CustomerId && !formik.errors.CustomerId}
>
<option value={0}>Select Customer </option> 
{
customerData.list.map((item, i) => {
return <option value={item.CustomerId} key={`customer-${i}`}>{item.CustName}</option>
})}
</Form.Control>
{
    formik.errors.CustomerId && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.CustomerId}
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

