import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './SideBar.css';

const SideBar = () => {
    return (
        <Nav className='flex-column w-25 h-100 bg-dark gap-3 p-3 justify-content-start' style={{minWidth: '250px', maxWidth: '310px'}}>
            <Nav.Link>
                <Link to='#' disabled  className='ml-3 text-decoration-none fs-3 text-uppercase text-info fw-bold'>Dashboard</Link>
            </Nav.Link>
            <hr  style={{height: '5px', border: 'none', borderRadius: '10px'}} className='bg-white' />
            <div className='justify-content-center gap-3'>
                <Nav.Link className='custom-nav d-flex flex-row gap-3 align-items-center p-2 rounded'>
                    <i class="bi bi-speedometer2 fs-2 text-light"></i>
                    <Link to='dashboard' className='text-light text-decoration-none fs-4 fw-semibold'>Dashboard</Link>
                </Nav.Link>
                <Nav.Link className='custom-nav d-flex flex-row gap-3 align-items-center p-2 rounded'>
                    <i class="bi bi-grid-3x3-gap fs-2 text-light"></i>
                    <Link to='dashboard/product' className='text-light text-decoration-none fs-4 fw-semibold'>Product</Link>
                </Nav.Link>
                <Nav.Link className='custom-nav d-flex flex-row gap-3 align-items-center p-2 rounded'>
                    <i class="bi bi-person-square fs-2 text-light"></i>
                    <Link to='dashboard/customers' className='text-light text-decoration-none fs-4 fw-semibold'>Customers</Link>
                </Nav.Link>
                <Nav.Link className='custom-nav d-flex flex-row gap-3 align-items-center p-2 rounded'>
                    <i class="bi bi-wallet fs-2 text-light"></i>
                    <Link to='dashboard/income' className='text-light text-decoration-none fs-4 fw-semibold'>Income</Link>
                </Nav.Link>
                <Nav.Link className='custom-nav d-flex flex-row gap-3 align-items-center p-2 rounded'>
                    <i class="bi bi-x-diamond fs-2 text-light"></i>
                    <Link to='dashboard/promote' className='text-light text-decoration-none fs-4 fw-semibold'>Promote</Link>
                </Nav.Link>
                <Nav.Link className='custom-nav d-flex flex-row gap-3 align-items-center p-2 rounded'>
                    <i class="bi bi-question-square fs-2 text-light"></i>
                    <Link to='dashboard/help' className='text-light text-decoration-none fs-4 fw-semibold'>Help</Link>
                </Nav.Link>
            </div>
        </Nav>
    )
};

export default SideBar;