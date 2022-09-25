import Accordion from 'react-bootstrap/Accordion';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
function Slidtwo() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <>
        <div className='bgSlidtwoab'>
            <div className='container'>
            <div className='row'>
            <div className='Slidtwoklam col-md-6 col-sm-12 '>
                <h1 className='text-white'>استمتع بالمشاهدة على تلفزيونك.</h1>
                <h5 className='text-white'>شاهد على أجهزة التلفزيون الذكية و PlayStation و Xbox و Chromecast و Apple TV ومشغلات Blu-ray والمزيد.</h5>
            </div>
            <div className='Slidtwoimg col-md-6 col-sm-12'>
                <img src="img\tv.png" alt="tv.png" />
                <div className='vid'>
                    <video PlaysInline loop autoPlay>
                        <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v' type="video/mp4"/>
                    </video>
                </div>
            </div>
            </div>
            </div>
        </div>
        <div className='bgSlidtwoab'>
                <div className='container'>
                    <div className='row'>
                        <div className='Slidtwoimg col-md-6 col-sm-12'>
                            <img src="img\mobile-0819.jpg" alt="tv.png" className='im1' />
                            <div className='vid2 d-flex'>
                                <div>
                                    <img src="img/boxshot.png" alt="boxshot.png" className='im2'/>
                                </div>
                                <div>
                                    <p className='text-white'>Stranger Things</p>   
                                    <p className='text-primary'>جاري التنزيل...</p>
                                </div>
                                <div>
                                    <img className='im2' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="download-icon.gif" />
                                </div>
                                </div>
                        </div>
                        <div className='Slidtwoklam col-md-6 col-sm-12'>
                            <h1 className='text-white'>يمكنك تنزيل عروضك المفضلة للاستمتاع بمشاهدتها دون اتصال.</h1>
                            <h5 className='text-white'>احفظ أعمالك المفضلة بسهولة لتتمكن دائمًا من مشاهدة ما تريد.</h5>
                        </div>
                    </div>
                </div>
        </div>
        <div className='bgSlidtwoab'>
            <div className='container'>
            <div className='row'>
            <div className='Slidtwoklam col-md-6 col-sm-12'>
                <h1 className='text-white'>شاهد في أي مكان.</h1>
                <h5 className='text-white'>شاهد أفلامًا وعروضًا تلفزيونية لا حصر لها على هاتفك أو جهازك اللوحي أو حاسوبك المحمول أو حتى على تلفزيونك دون أن تدفع المزيد.</h5>
            </div>
            <div className='Slidtwoimg col-md-6 col-sm-12'>
                <img src="img\device-pile.png" alt="tv.png" />
                <div className='vid3'>
                    <video autoPlay playsInline loop >
                        <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v' type="video/mp4"/>
                    </video>
                </div>
            </div>
            </div>
            </div>
        </div>
        <div className='bgSlidtwoab'>
            <div className='container'>
            <div className='row'>
            <div className='Slidtwoimg4 col-md-6 col-sm-12'>
                <img src="img\child.png" alt="child.png" />
            </div>
            <div className='Slidtwoklam4 col-md-6 col-sm-12'>
                <h1 className='text-white'>إنشاء ملفات شخصية للأطفال.</h1>
                <h5 className='text-white'>أطلق العنان لأطفالك لخوض مغامرات مثيرة مع شخصياتهم المحبوبة في تجربة مُخصصة لهم - ومجانًا ضمن عضويتك.</h5>
            </div>

            </div>
            </div>
        </div>
        <div className='bgSlidtwoab'>
        <div className='container'>
            <h1 className='text-center py-4 text-white'>الأسئلة الشائعة</h1>
            <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>ما هي خدمة Netflix؟</Accordion.Header>
                    <Accordion.Body>
                    Netflix هي خدمة بث تقدّم مجموعة متنوعة من العروض التلفزيونية والأفلام وأعمال الأنيمي الوثائقيات وغيرها من الأعمال الحائزة على جوائز من خلال الآلاف من الأجهزة المتصلة بالإنترنت. <br /> <br />
                    ويمكنك مشاهدة كل ما تريد وقتما تشاء، بدون إعلانات تجارية - وكل ذلك مقابل سعر شهري منخفض. ستجد دومًا شيئًا جديدًا لتكتشفه، حيث يتم إضافة عروض تلفزيونية وأفلام جديدة كل أسبوع!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>كم تبلغ تكلفة Netflix؟</Accordion.Header>
                    <Accordion.Body>
                    شاهد Netflix على هاتفك الذكي أو الكمبيوتر اللوحي أو التلفزيون الذكي أو الكمبيوتر المحمول أو جهاز البث، وكل ذلك مقابل رسم شهري ثابت. تتراوح أسعار الخطط بين 120 ج.م.‎ و 200 ج.م.‎ في الشهر. بدون تكلفة إضافية، وبدون عقود.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>أين يمكنني أن أشاهد؟</Accordion.Header>
                    <Accordion.Body>
                    استمتع بالمشاهدة حيثما شئت ووقتما شئت. سجّل الدخول باستخدام حسابك على Netflix لتستمع بالمشاهدة الفورية على الويب عبر الموقع الإلكتروني netflix.com من الكمبيوتر الشخصي أو على أي جهاز متصل بالإنترنت مثبت عليه تطبيق Netflix، مثل أجهزة التلفزيون الذكية أو الهواتف الذكية أو أجهزة الكمبيوتر اللوحية أو مشغلات بث الوسائط أو أجهزة التحكم بالألعاب.
                    <br />
                    <br />
يمكنك أيضًا تنزيل عروضك المُفضلة عبر التطبيق الذي يعمل على أنظمة التشغيل iOS أو Android أو Windows 10. استخدم ميزة التنزيلات للمشاهدة أثناء التنقل، دون الحاجة إلى الاتصال بالإنترنت. اصطحب NETFLIX معك حيثما شئت.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>كيف أقوم بالإلغاء؟</Accordion.Header>
                    <Accordion.Body>
                    تتسم خدمة Netflix بالمرونة. بلا عقود مزعجة وبلا التزامات. يمكنك إلغاء حسابك بكل سهولة عبر الإنترنت بنقرتين. لا رسوم للإلغاء، قم ببدء حسابك أو إيقافه في أي وقت.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>ما الذي يمكنني مشاهدته على Netflix؟</Accordion.Header>
                    <Accordion.Body>
                    تتوفر لدى Netflix مكتبة ضخمة من الأفلام الروائية والوثائقيات والعروض التلفزيونية والأنيمي وأعمال Netflix الأصلية الحائزة على الجوائز، وغيرها الكثير. شاهد كل ما تريد، متى شئت.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>هل Netflix ملائمة للأطفال؟</Accordion.Header>
                    <Accordion.Body>
                    تمنح تجربة Netflix للأطفال، والمُندرجة ضمن عضويتك، الأهل إمكانية التحكم بما يشاهده الأطفال خلال استمتاعهم بمشاهدة العروض التلفزيونية والأفلام الملائمة لجميع أفراد العائلة ضمن الملف الشخصي المُخصص لهم.
                    <br />
                    <br />
وبفضل عناصر الرقابة الأبوية المحمية برمز PIN للملفات الشخصية للأطفال، يستطيع الأهل تقييد المحتوى الذي يمكن للأطفال مشاهدته وفق تصنيف نضج معين، فضلًا عن حظر عناوين محددة لا يرغب الأهل أن يشاهدها الأطفال.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
            <p className='text-center py-4 text-white'>هل أنت جاهزٌ للمشاهدة؟ أدخل بريدك الإلكتروني لإنشاء عضويتك أو إعادة تشغيلها.</p>
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
        </>

    )
}

export default Slidtwo