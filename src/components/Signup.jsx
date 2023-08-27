import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {

    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Password: ''
    });

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data:', formData);
        axios.post('http://localhost:3001/api/Auth/signup', formData).then((res) => {
            alert(res.data);

        }).catch((err) => {
            console.log(err);
        })
    };



    return (
        <div >
            <div className='container d-flex justify-content-center pt-5'>
                <form className='card shadow p-5 mt-5' onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <input type="text" className="form-control" id="Name" placeholder="Name" onChange={handleInputChange} />
                    </div>

                    <div className="mb-3">
                        <input type="email" className="form-control" id="Email" placeholder="Email" onChange={handleInputChange} />
                    </div>

                    <div className="mb-3">
                        <input type="password" className="form-control" id="Password" placeholder="Password" onChange={handleInputChange} />
                    </div>

                    <button type="submit" className="btn btn-outline-primary mb-3">Signup</button>

                    <Link to='/signin'><button type="submit" className="btn btn-outline-info">Signin</button></Link>

                </form>
            </div>
        </div>
    )
}

export default Signup;