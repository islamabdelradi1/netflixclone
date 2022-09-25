import React, { useState ,useEffect ,useContext} from 'react'
import { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch,FaBell ,FaCaretDown,FaPlay,FaPlus,FaVolumeDown,FaVolumeMute} from "react-icons/fa";
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';
import { AuthContext } from './auth';
import { auth } from './firebase';


function Browse() {

    const { user } = useContext(AuthContext);

    const [datas,setdatas]=useState();

    const [show , setshow]=useState(false);

    const [idd , setidd]=useState(0);

    const handelid = (idd = 0)=>{
        setidd(idd)
        setshow(true);
        const fim = document.getElementById('fim');
        fim.style.display='flex';


    }
    
    const [showtwo , setshowtwo ]=useState(false);

    const [iddtwo , setiddtwo]=useState(0);

    const handelidtwo = (iddtwo = 0)=>{
        setiddtwo(iddtwo);
        setshowtwo(true);
        console.log(iddtwo);
        // window.location.reload();

    }

        useEffect(() => {
            axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c6f1e29552c7cb26b60cb2fc80849931&language=en-US&page=1').then(res=>{
                setdatas(res.data.results);
                console.log(datas)
            }).catch(err=>{console.log(err);})
        });


    const [navbars,setnavbars]=useState(false);
    const[voic,setvoice]=useState(false);

    const changeback = ()=>{
        if (window.scrollY >= 50) {
            setnavbars(true);

        }else{
            setnavbars(false);
        }
    }
    window.addEventListener("scroll",changeback);

const aduio = useRef();

    const btnvoice =()=>{
        setvoice(!voic) 
        aduio.current.play()
    }

    const getimg = (posterpath)=>{
        return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterpath}`
    }
    // const [imgs,setimgs]=useState({});

    // const handleFun = e =>{
    //     const ele = e.target.parentElement.children[1]
    //     ele.style.display = 'block'
    //     console.log(ele);
    // }


    return (

        <div className='bg-video'>

            
            <div>
            <Navbar expand="lg" className={navbars? 'navbar active':'navbar'}>
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src="img\netflix-logo.png" alt="netflix-logo" className='imglogo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className=" my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">الصفحة الرئيسية</Nav.Link>
                        <Nav.Link href="#action2">عرض تلفزيوني</Nav.Link>
                        <Nav.Link href="#action3">أفلام</Nav.Link>
                        <Nav.Link href="#action4">أضيف مؤخرا</Nav.Link>
                        <Nav.Link href="#action5">قائمتي</Nav.Link>

                    </Nav>
                    
                    </Navbar.Collapse>
                        <div className='lefnav'>
                            <FaSearch />
                            <div className='lestnav'>
                                <Nav.Link href="#action6" className='text-white'>أطفال</Nav.Link>
                                <Nav.Link href="#action7"></Nav.Link>
                            </div>
                            <div className='caima'>
                            <p className='text-white'>Welcome {user.email}</p>
                                <button onClick={() => auth.signOut()}>Sign Out</button>
                            </div>

                    </div>
                </Container>
            </Navbar>
            <video  autoPlay loop  muted >
                <source src='img\videoplayback.mp4'  />
            </video>
            </div>
            <div className='bag'>
                <div>
                <h1>The Jester</h1>
            <p>Chapter 3 | A Short Horror Film</p>
            <div>
            <button>
            ابدأ
            <FaPlay />
            </button>
            <button className='btn2'>
            القائمة
            <FaPlus />
            </button>
            </div>
                </div>
                <div className='voicbtn'>
                    <button onClick={btnvoice}>
                        {voic ? <FaVolumeDown /> :<FaVolumeMute />}
                    </button>
                </div>
            </div>


            <div className="details " style={{display:'none'}} id='fim' >
                <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <img src={getimg(idd.poster_path)} alt={idd.name} />
                    </div>
                    <div className="col-md-6">
                    <h1>{idd.id}</h1>
                    <p>Raring:{idd.vote_average}</p>
                    <p className='w-75'>{idd.overview}</p>
                    <button>play</button>
                    <button>List</button>
                    </div>
                </div>
                </div>
 
                    </div>



            <div className='container-fluid  '>
                <p className='text-white fw-bold'>Trending</p>
            <Swiper
            slidesPerView={5}
            spaceBetween={30}
            slidesPerGroup={4}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
                {datas && datas.map((data,id) => 
                
                <SwiperSlide className='imgslid'>
                    <div onClick={()=>handelid(data)} id={id}> 
                    <img src={getimg(data.poster_path)} key={data.id} alt={getimg(data.name)} /> 
                    </div>

                </SwiperSlide>
                
                )}
        </Swiper>
            </div>
            <div className='container-fluid  '>
                <p className='text-white fw-bold'>Netflix Originals</p>
            <Swiper
            slidesPerView={5}
            spaceBetween={30}
            slidesPerGroup={4}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
                {datas && datas.map((data , id) => 
                
                <SwiperSlide className='imgslid img-Trending'>
                    <div onClick={()=>handelidtwo(data)} id={id}> 
                    <Link to={{pathname: `/View/${data.id}` , state:{ data:data }}} >
                    <img src={getimg(data.poster_path)} key={id} alt={getimg(data.name)} /> 
                    </Link>
                    </div>
                </SwiperSlide>

                )}
        </Swiper>
            </div>
        </div>
    )
}

export default Browse
