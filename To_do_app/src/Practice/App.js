 import React from 'react';
  import ReactDOM from 'react-dom/client';
import './index.css';

const Header=()=>{
    return(
        <>
        <div>
            <div>
                <h2>Logo</h2>
                <ul>
                    <li>Home</li>
                    <li>Contact us</li>
                    <li>More</li>
                    <li>About us</li>
                </ul>
            </div>
        </div>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render( <Header/> );