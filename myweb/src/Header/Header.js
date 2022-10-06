import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link} from "react-router-dom";


function Header(props){

    const handleClick = props.handleClick;
    const lang = props.lang;

    return (
        <Navbar bg="dark"  variant="dark" style={{color: "white"}} expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" style={{fontSize:30}}>
                    {lang === "Chinese" ? ("Kanzom咨询") : ("Kanzom Consulting")}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className="ms-5" href="/">
                            {lang === "Chinese" ? ("首页") : ("Home")}
                        </Nav.Link>
                        <NavDropdown title={lang === "Chinese" ? ("跨国医疗") : ("Service")} className="ms-5" menuVariant="dark">
                            <NavDropdown.Item href="/service">{lang === "Chinese" ? ("费用预估") : ("费用预估")}</NavDropdown.Item>
                            <NavDropdown.Item href="/service">{lang === "Chinese" ? ("医学会议承办") : ("医学会议承办")}</NavDropdown.Item>
                            <NavDropdown.Item href="/service">{lang === "Chinese" ? ("月子中心") : ("月子中心")}</NavDropdown.Item>
                            <NavDropdown.Item href="/service">{lang === "Chinese" ? ("远程会诊预约") : ("远程会诊预约")}</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={lang === "Chinese" ? ("投研咨询") : ("Consulting")} className="ms-5" menuVariant="dark">
                            <NavDropdown.Item href="/consulting">{lang === "Chinese" ? ("业务预约") : ("业务预约")}</NavDropdown.Item>
                            <NavDropdown.Item href="/consulting">{lang === "Chinese" ? ("体检产业分析案例") : ("体检产业分析案例")}</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={lang === "Chinese" ? ("医学前沿") : ("News")} className="ms-5" menuVariant="dark">
                            <NavDropdown.Item href="/news">{lang === "Chinese" ? ("医院简介") : ("医院简介")}</NavDropdown.Item>
                            <NavDropdown.Item href="/news">{lang === "Chinese" ? ("医生介绍") : ("医生介绍")}</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="ms-5" href="/about">
                            {lang === "Chinese" ? ("关于我们") : ("About us")}
                        </Nav.Link>
                    </Nav>
                    
                    <NavDropdown title={<FontAwesomeIcon icon={faGlobe} />} id="basic-nav-dropdown" className="me-5">
                            <NavDropdown.Item onClick={(e) => handleClick("Chinese")}>中文</NavDropdown.Item>
                            <NavDropdown.Item onClick={(e) => handleClick("English")}>English</NavDropdown.Item>
                    </NavDropdown>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder={lang === "Chinese" ? ("搜索") : ("Search")}
                        className="me-2"
                        aria-label="Search"
                        style={{width: 100}}
                        />
                        <Button variant="outline-success" style={{width: 80}}>{lang === "Chinese" ? ("搜索") : ("Search")}</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;