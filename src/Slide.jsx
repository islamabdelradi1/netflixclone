import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaGlobe } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { NavLink } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Slide() {
        const [validated, setValidated] = useState(false);

        const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    
        setValidated(true);
        };
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        ></Box>
    return (
        <div className='bk'>
            <div className='nav'>
                <div className='r-t'>
                    <img src="img\netflix-logo.png" alt="netflix-logo" />
                </div>
                <div className='left'>
                    <div>
                    <FormControl sx={{ m: 1, minWidth: 120 }} className='chos'>
                        <Select
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        >
                        <MenuItem value=""  >
                            <em>العربية</em>
                            <FaGlobe  className='me-2'/>
                        </MenuItem>
                        <MenuItem value={10}>
                            English
                            <FaGlobe  className='me-1'/>
                        </MenuItem>
                        </Select>
                        </FormControl>
                    </div>
                    <div>
                        <NavLink to="/Login">تسجيل الدخول</NavLink>
                    </div>
                </div>
            </div>
            <div className='cen'>
                <h1>عدد لا حصر له من الأفلام  <br /> والعروض التلفزيونية، وغيرها.
                </h1>
                <h4>شاهد حيثما كنت. يمكنك الإلغاء متى شئت.</h4>
                <p>هل أنت جاهزٌ للمشاهدة؟ أدخل بريدك الإلكتروني لإنشاء عضويتك أو إعادة تشغيلها.</p>
                <div>

                <Form noValidate validated={validated} onSubmit={handleSubmit} className='d-flex container justify-content-center'>
            <FloatingLabel
                controlId="validationCustom03"
                label="عنوان البريد الالكتروني"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="عنوان البريد الالكتروني" required className='chosfooter'/>
                <Form.Control.Feedback type="invalid">
                يجب إدخال البريد الإلكتروني!
                    </Form.Control.Feedback>
            </FloatingLabel>
                
            <Button type="submit">Submit form</Button>
    </Form>

                </div>
            </div>
        </div>
    )
    }


export default Slide