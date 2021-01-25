import React, { useState } from 'react';
import './Contact.css';
import { Prompt } from 'react-router-dom';

function Contact() {

    const [isChecked, setIsChecked] = useState(false);

    function onClick(isChecked) {
        if (!isChecked) {
            alert('Cho phép chuyển trang');
            setIsChecked(isChecked);
        } else {
            alert('Không Cho phép chuyển trang');
            setIsChecked(isChecked);
        }

    }


    return (
        <div>
            <h1>Trang Contact</h1>


            <button type="button" className="btn btn-danger mr-15" onClick={() => onClick(false)}>Cho phép</button>
            <button type="button" className="btn btn-success" onClick={() => onClick(true)}>Không Cho phép</button>
            <Prompt
                when={isChecked}
                message={location => (`Bạn chắc chắn muốn đi đến ${location.pathname}`)}

            />


        </div>
    )
}

export default Contact
