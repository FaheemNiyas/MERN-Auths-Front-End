import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Signin() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
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
        axios.post('http://localhost:3001/api/Auth/signin', formData).then((res) => {
            alert(res.data);
            navigate('/home');
        }).catch((err) => {
            console.log(err);
        })
    };




    return (
        <div className='mt-5'>
            <div className='container d-flex justify-content-center pt-5'>
                <form className='card shadow p-5 mt-5' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Email" onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">

                        <input type="password" className="form-control" id="Password" placeholder="Password" onChange={handleInputChange} />
                    </div>

                    <button type="submit" className="btn btn-outline-primary mb-3">Signin</button>
                    <Link to='/signup'><button type="submit" className="btn btn-outline-info">Signup</button></Link>

                </form>
            </div>
        </div>
    )
}

export default Signin;