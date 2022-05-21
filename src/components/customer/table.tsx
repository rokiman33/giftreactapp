import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { useAppDispatch } from "redux/store";
import { resetCustomerToInit, setCustomerMessage } from "redux/actions";
import { Button, Card, Col, Form, InputGroup } from "react-bootstrap";
import { Constant } from "template/Constant";
import ConfirmationModal from "template/ConfirmationModal";
import { deleteCustomer } from "services/customerService";
type Props = {
    hideShowForm: (action) => void;
    handleRowEdit: (row) => void;
    getData: (page, pageSize, searchKey) => void;
};
export const CustomerTable: React.FC<Props> = ({ hideShowForm, handleRowEdit, getData }) => {
    const dispatch = useAppDispatch();
    const [search, setSearch] = useState('');
    const [showDelete, setShowDelete] = useState(false);
    const [rowData, setRowData] = useState(undefined);
    const rData = useSelector((state: RootState) => state.customer);
    const handleSearch = () => {
        if (search.length > 0) {
            getData(Constant.defaultPageNumber, Constant.defaultPageSize, search);
        }
    }
    const handlePerRowsChange = async (newPerPage, page) => {
        await getData(page, newPerPage, '');
    }
    const handlePageChange = (page) => {
        getData(page, rData.pageSize, '');
    };
    const handleRowDeleteClick = (row) => {
        setRowData(row);
        setShowDelete(true);
    }
    useEffect(() => {
        if (rData && rData.list && rData.list.length === 0) {
            dispatch(resetCustomerToInit());
            getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
        }
    })
    const handleReset = () => {
        dispatch(resetCustomerToInit());
        getData(Constant.defaultPageNumber, rData.pageSize, '');
    }
    const handleServerDelete = async () => {
        if (rowData) {
            const response = await deleteCustomer(rowData.CustomerId);
            if (response) {
                dispatch(resetCustomerToInit());
                dispatch(setCustomerMessage("Deleted Successfully"));
                getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                setShowDelete(false);
            } else {
                dispatch(setCustomerMessage("Some error occured!"));
            }
        }
    }

    const handleRowSelection = (row) => {
        console.log(row); // Row Selection Functionality can be written here
    }
    const handleAddButtonClick = () => {
        dispatch(setCustomerMessage(''));
        hideShowForm('add');
    }

    const columns = [
        {name: 'CustomerId', selector: row => row.CustomerId, sortable: true},
{name: 'CustName', selector: row => row.CustName, sortable: true},
{name: 'CustIdentity', selector: row => row.CustIdentity, sortable: true},
{name: 'CustCert', selector: row => row.CustCert, sortable: true},
{name: 'CustDocType', selector: row => row.CustDocType, sortable: true},
{name: 'CustFinalDate', selector: row => row.CustFinalDate, sortable: true},
{name: 'CustActivationDate', selector: row => row.CustActivationDate, sortable: true},
{name: 'CustSale', selector: row => row.CustSale, sortable: true},
{name: 'CustPay', selector: row => row.CustPay, sortable: true},
{name: 'CustReLoad', selector: row => row.CustReLoad, sortable: true},
{name: 'CustStatus', selector: row => row.CustStatus, sortable: true},
{name: 'CustInfoAdic1', selector: row => row.CustInfoAdic1, sortable: true},
{name: 'CustInfoAdic2', selector: row => row.CustInfoAdic2, sortable: true},
{name: 'CustInfoAdic3', selector: row => row.CustInfoAdic3, sortable: true},
{name: 'CustInfoAdic4', selector: row => row.CustInfoAdic4, sortable: true},
{name: 'CustDateAdic1', selector: row => row.CustDateAdic1, sortable: true},
{name: 'CustDateAdic2', selector: row => row.CustDateAdic2, sortable: true},
{name: 'CustValueAdic1', selector: row => row.CustValueAdic1, sortable: true},
{name: 'CustValueAdic2', selector: row => row.CustValueAdic2, sortable: true},
{name: 'CustValueAdic3', selector: row => row.CustValueAdic3, sortable: true},

        {
            name: '',
            button: true,
            cell: (row) => <Button variant="link" className="btn-sm" onClick={() => handleRowEdit(row)}>Edit</Button>,
        },
        {
            name: '',
            button: true,
            cell: (row) => <Button variant="link" className="btn-sm" onClick={() => handleRowDeleteClick(row)}>Delete</Button>,
        },
    ];
    return (
        <Card className="shadow mb-4">
            <Card.Header className="py-3">
                <h6 className="m-0 font-weight-bold text-primary">Customer List ({rData.totalCount})
                    <Button variant="light" className="btn-circle btn-sm ml-2" onClick={handleReset}><i className="fa fa-refresh"></i></Button>
                    <Button className="btn-icon-split float-right" onClick={handleAddButtonClick}>
                        <span className="icon text-white-50">
                            <i className="fas fa-add"></i>
                        </span>
                        <span className="text">Add New</span>
                    </Button></h6>

            </Card.Header>
            <Card.Body>
                <Col className="ml-auto" md={3} xs={12} xl={3}>
                    <InputGroup>
                        <Form.Control
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button disabled={search.length <= 2} variant="dark" className="rounded-0 rounded-right" id="button-search" onClick={handleSearch}>
                            Search
                        </Button>
                    </InputGroup>
                </Col>
                <div className="table-responsive">
                    <DataTable
                        selectableRows={true}
                        onSelectedRowsChange={handleRowSelection}
                        paginationPerPage={Constant.defaultPageNumber}
                        paginationRowsPerPageOptions={Constant.paginationRowsPerPageOptions}
                        columns={columns} data={rData.list}
                        onChangeRowsPerPage={handlePerRowsChange}
                        paginationTotalRows={rData.totalCount}
                        className="table table-bordered"
                        pagination
                        paginationServer
                        onChangePage={handlePageChange}></DataTable>
                </div>
            </Card.Body>
            <ConfirmationModal buttonNegative="Cancel" buttonPositive="Delete" title="Delete Confirmation" show={showDelete} body={"Are you sure?"} onNegative={() => setShowDelete(false)} onPositive={handleServerDelete} />
        </Card>
    );
}

