import React from 'react'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './MobileOffcanvas.css'

const MobileOffcanvas = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section >
            <Button className="btn btn-secondary mobile-filter-button" onClick={handleShow}>
                {props.button}
            </Button>
            {/* 
            <Alert variant="info" className="d-none d-lg-block">
                THis 
            </Alert> */}

            <Offcanvas show={show} onHide={handleClose} responsive="lg" placement= { props.place } style={{backgroundColor: `${props.backcolor}`, color: `${props.textcolor}`}} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{props.title}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {props.content}
                </Offcanvas.Body>
                <Offcanvas.Body>
                    
                </Offcanvas.Body>
            </Offcanvas>
        </section>
    )
}

export default MobileOffcanvas