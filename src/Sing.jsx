import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { NavLink } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Sing() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    const auth = getAuth();
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");

const singup =()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert("Successfully created an acccont");
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
        // ..
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
                        <Form noValidate validated={validated} onSubmit={handleSubmit} className="formlog">
                        <h3 className='text-white'>انشاء حساب جديد</h3>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="البريد الإلكتروني"
                            className="mb-3"
                        >
                    <Form.Control type="email" placeholder="البريد الإلكتروني"  required className='form-control1'   onChange={(e)=> setemail(e.target.value)}/>
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
                        <FloatingLabel controlId="validationPassword01" label="تأكيد كلمة المرور">
                            <Form.Control type="password" placeholder="تأكيد كلمة المرور"  required className='form-control1'  onChange={(e)=> setpassword(e.target.value)}/>
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
                            <Button variant="primary1" type="submit" onClick={singup}>
                                أنشاء حساب جديد
                            </Button>
                            <p className='text1'>لديك حساب على Netflix؟ <NavLink to="/Login" className='text-white'>تسجيل الدخول</NavLink></p>
                            <p className='text1' >هذه الصفحة محمية بواسطة خدمة reCAPTCHA من Google لضمان أنك لست إنسانًا آليًا.<a href="#/">تعرّف على المزيد.</a></p>


                        </Form>
                    </div>
            </div>

        </div>
    )
}

export default Sing