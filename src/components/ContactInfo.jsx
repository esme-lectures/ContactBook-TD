import { Button } from '@mui/base';
import { useState } from 'react';
import './contact-info.css';


export function ContactInfo(props) {

    return (
        <div className="contact-info">
            <img src={props.imgUrl} />

            <div className="text-info">
                <label>{props.name}</label>
                <label>{props.country}</label>
            </div>

            <Button className="call-button">Call</Button>
        </div>
    )
}