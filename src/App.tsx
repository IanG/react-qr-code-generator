
import {ChangeEvent, useState} from "react";
import QRCode from "./components/QRCode.tsx";
import {Container, Form, Nav, Navbar, NavLink, OverlayTrigger, Tooltip} from "react-bootstrap";
import {OverlayDelay} from "react-bootstrap/OverlayTrigger";

import './App.css'

import {ThemeProvider} from "./context/ThemeContext.tsx";
import ThemeSwitcher from "./components/ThemeSwitcher.tsx";

export default function App() {

    const [qrCodeShowData, setQrCodeShowData] = useState<boolean>(true);
    const [qrCodeDownloadable, setQrCodeDownloadable] = useState<boolean>(true);
    const [qrCodeData, setQrCodeData] = useState<string>("")

    const defaultOverLayDelay : OverlayDelay = {
        show: 100,
        hide: 50
    }

    function handleQrCodeDataChange(e: ChangeEvent<HTMLInputElement>) {
        setQrCodeData(e.target.value);
    }

    function handleAllowDownloadChange(event: ChangeEvent<HTMLInputElement>)
    {
        setQrCodeDownloadable(event.target.checked);
    }

    function handleShowDataChange(event: ChangeEvent<HTMLInputElement>)
    {
        setQrCodeShowData(event.target.checked);
    }

    return (
        <ThemeProvider>
            <Navbar expand="lg" className="bg-body-tertiary ps-0" sticky="top" fixed="top" bg="dark" >
                <Container fluid>
                    <Navbar.Brand as={NavLink} to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                             className="bi bi-qr-code" viewBox="0 0 18 18">
                            <path d="M2 2h2v2H2z"/>
                            <path d="M6 0v6H0V0zM5 1H1v4h4zM4 12H2v2h2z"/>
                            <path d="M6 10v6H0v-6zm-5 1v4h4v-4zm11-9h2v2h-2z"/>
                            <path
                                d="M10 0v6h6V0zm5 1v4h-4V1zM8 1V0h1v2H8v2H7V1zm0 5V4h1v2zM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8zm0 0v1H2V8H1v1H0V7h3v1zm10 1h-1V7h1zm-1 0h-1v2h2v-1h-1zm-4 0h2v1h-1v1h-1zm2 3v-1h-1v1h-1v1H9v1h3v-2zm0 0h3v1h-2v1h-1zm-4-1v1h1v-2H7v1z"/>
                            <path d="M7 12h1v3h4v1H7zm9 2v2h-3v-1h2v-1z"/>
                        </svg>
                        {' '}QR Code Generator</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto" style={{maxHeight: '300px'}} navbarScroll>
                            <OverlayTrigger placement="bottom" rootClose delay={defaultOverLayDelay} overlay={(
                                <Tooltip id="theme-switch-tooltip">
                                    Switch Light/Dark Mode
                                </Tooltip>
                            )}>
                                <div className="nav-link">
                                    <ThemeSwitcher/>
                                </div>
                            </OverlayTrigger>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="content-panel">
                <Form>
                    <Form.Group className="mb-3" controlId="form.QRDataTextArea">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter content for the QR Code" defaultValue={qrCodeData} onChange={handleQrCodeDataChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="form.Options">
                        <Form.Check type="switch" id="allowDownload" label="Allow Download" checked={qrCodeDownloadable} onChange={handleAllowDownloadChange} />
                        <Form.Check type="switch" id="showData" label="Show Data" checked={qrCodeShowData} onChange={handleShowDataChange} />
                    </Form.Group>
                </Form>
                {qrCodeData && (
                    <QRCode size={300} data={qrCodeData} showData={qrCodeShowData} downloadable={qrCodeDownloadable} />
                )}
            </div>
        </ThemeProvider>
    )
}