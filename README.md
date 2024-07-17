# react-qr-code-generator

Simple React application that shows a QRCode component that can generate and download QR Codes.

This component wraps `qrcode.react` so it can be replaced with any other implementation in the future.  This component is maintained [here](https://github.com/zpao/qrcode.react).  This component exposes additional behaviour which allows users to download the generated QR Code as a `.png` file.

## Usage

To use the component you need to include:

```
import QRCode from "./components/QRCode.tsx";
```

Then do create the component:

```
<QRCode size={300} data="http://www.google.com" showData={true} downloadable={true} />
```

Which would render:

![](./doc/images/example-qr-code.jpg)

## Properties

The component has the following properties:

| Name         | Type    | Default | Description                                                                                                            |
|--------------|---------|---------|------------------------------------------------------------------------------------------------------------------------|
| size         | number  | `100`   | Size of the generated QR Code in pixels                                                                                |
| visible      | boolean | `true`  | Determines if the QR code component should be visible or not                                                           |
| data         | string  |         | The data that should be used to generate the QR Code (e.g. a url)                                                      |
| showData     | boolean | `false` | True if the component should show the data contained within the generated QR Code                                      |
| downloadable | boolean | `false`  | True if the component should show the download button so the user can download the generated QR Code as a `.png` file. |

