import "./QRCode.css";
import {QRCodeCanvas} from "qrcode.react";
import {Button} from "react-bootstrap";
import {useRef} from "react";

interface QRCodeProps {
    size?: number;
    visible?: boolean;
    data: string;
    showData?: boolean;
    downloadable?: boolean;
}

export default function QRCode({size = 100, visible = true, data, showData = false, downloadable = false}: QRCodeProps) {
    const qrCodeOuterRef = useRef<HTMLDivElement | null>(null);

    function downloadQRCode() {
        if(qrCodeOuterRef.current)
        {
            // TODO ref cannot be used at the moment directly against the QRCodeCanvas object
            const canvas =  qrCodeOuterRef.current.children[0] as HTMLCanvasElement;

            if (canvas == null) {
                return;
            }

            const a = document.createElement('a');
            a.download = "qr-code.png";
            a.href = canvas.toDataURL('image/png');
            a.click();
        }
    }

    return (
        <>
            {visible && (
                <div className="qrcode" ref={qrCodeOuterRef}>
                    <QRCodeCanvas value={data} size={size} includeMargin={true} fgColor="black" bgColor="white"/>
                    { showData && (
                        <p>{data}</p>
                    )}
                    { downloadable && (
                        <p>
                            <Button onClick={downloadQRCode}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 18 18">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                                </svg>
                                &nbsp;Download
                            </Button>
                        </p>
                    )}
                </div>
            )}
        </>
    )
}