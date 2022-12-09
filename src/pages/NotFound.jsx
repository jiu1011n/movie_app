import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
    return(
        <div className="page-container">
            <div style={{fontWeight: '600', fontSize: '50px'}}>Not Fount</div>
            <div onClick={() => navigate('/')} style={{color: 'blue', cursor: 'pointer'}}>Main page!!!</div>
        </div>
    )
}