import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrCode = () => {
    const [inputFields, setInputFields] = useState({
        name: ""
    });
    const [ codeName, setCodeName ] = useState('https://piyush-koshti.web.app/')
    const handleSubmit = () => {
        setCodeName(inputFields.name)
    }
    const handleChange = (e) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    }
    return (
        <>
            <div className="py-3">
                <QRCode value={codeName} />
            </div>
            <div className="row mx-auto justify-content-center pt-3">
                <div className="col-3">
                    <div className="form-group">
                        <input 
                            type="text"
                            name="name"
                            value={inputFields.name}
                            onChange={handleChange}
                            className="form-control" 
                            id="name" 
                            placeholder="Enter website name"
                        />
                    </div>
                    <div className="form-group pt-3">
                        <button className="btn btn-success" onClick={handleSubmit}>Generate</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QrCode