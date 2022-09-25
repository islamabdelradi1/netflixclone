import React from 'react'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaGlobe } from "react-icons/fa";
import MenuItem from '@mui/material/MenuItem';

function Footer() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className='bgSlidtwoab'>
            <div className='container'> 
                <div className='row'>
                    <a href='#/' className='whats'>هل لديك أسئلة؟ اتصل بنا.</a>
                            <div className='col-md-3 col-sm-6 sav'>
                            <a href="#/">الأسئلة الشائعة</a>
                            <a href="#/">علاقات المستثمرين</a>
                            <a href="#/">الخصوصية</a>
                            <a href="#/">اختبار السرعة</a>
                            </div>
                            <div className='col-md-3 col-sm-6 sav'>
                            <a href="#/">الأسئلة الشائعة</a>
                            <a href="#/">علاقات المستثمرين</a>
                            <a href="#/">الخصوصية</a>
                            <a href="#/">اختبار السرعة</a>
                            </div>
                            <div className='col-md-3 col-sm-6 sav'>
                            <a href="#/">الأسئلة الشائعة</a>
                            <a href="#/">علاقات المستثمرين</a>
                            <a href="#/">الخصوصية</a>
                            <a href="#/">اختبار السرعة</a>
                            </div>
                            <div className='col-md-3 col-sm-6 sav'>
                            <a href="#/">الأسئلة الشائعة</a>
                            <a href="#/">علاقات المستثمرين</a>
                            <a href="#/">الخصوصية</a>
                            <a href="#/">اختبار السرعة</a>
                            </div>
                            <div className='py-2'>
                                <FormControl sx={{ m: 1, minWidth: 120 }} className='chosfooter1'>
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
                            <p>Netflix مصر</p>
                </div>
            </div>
        </div>
    )
}

export default Footer