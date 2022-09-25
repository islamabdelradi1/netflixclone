import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { NavLink } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

function Login() {


    const auth = getAuth();

    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");

    const history = useHistory();


    const singin =()=>{
        signInWithEmailAndPassword(auth, email, password)
        
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            alert("Successfully acccont sing in");
            history.push('/Browse');
            // window.location.reload();
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);

        });
    }

    return (
        <div>
            <div className='bk'>
                    <div className='nav'>
                        <div className='r-t'>
                            <img src="img\netflix-logo.png" alt="netflix-logo" />
                        </div>
                    </div>
                    <div className='log'>
                        <Form noValidate className="formlog">
                        <h3 className='text-white'>تسجيل الدخول</h3>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="البريد الإلكتروني أو رقم الهاتف"
                            className="mb-3"
                        >
                    <Form.Control type="email" placeholder="البريد الإلكتروني"  required  onChange={(e)=> setemail(e.target.value)} className='form-control1'/>
                        <Form.Control.Feedback type="invalid">
                        يرجى إدخال عنوان بريد إلكتروني صالح أو رقم هاتف صالح.
                        </Form.Control.Feedback>
                        </FloatingLabel>
                        <FloatingLabel controlId="validationPassword01" label="كلمة المرور">
                            <Form.Control type="password" placeholder="كلمة المرور"  required className='form-control1'  onChange={(e)=> setpassword(e.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                            يجب أن تتضمن كلمة المرور ما بين 4 إلى 60 حرفًا.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                        <Form.Group className="mb-3">
                            <Form.Check
                            required
                            label="وافق على الشروط والأحكام"
                            feedback="يجب أن توافق قبل الإرسال."
                            feedbackType="invalid"
                            />
                        </Form.Group>
                            <Button variant="primary1" onClick={singin}>
                                تسجيل الدخول
                            </Button>
                            <p className='text1'>جديد على Netflix؟ <NavLink to="/Sing" className='text-white'>التسجيل الآن.</NavLink></p>
                                <span className='text-white'>
                                Email:islam2@mail.com
                                <br />
                                Pass:islam2@mail.com
                                </span>
                            <p className='text1' >هذه الصفحة محمية بواسطة خدمة reCAPTCHA من Google لضمان أنك لست إنسانًا آليًا.<a href="#/">تعرّف على المزيد.</a></p>


                        </Form>
                    </div>
            </div>

        </div>
    )
}

export default Login