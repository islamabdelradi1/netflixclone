import React from 'react'
import { Link } from 'react-router-dom';

class View extends React.Component{
    
    render(){
        const data= this.props.location.state.data;
        const getimg = (posterpath)=>{
            return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterpath}`
        }

        return(
            <div className='mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col text-white">
                            <div className='devimgview'>
                            <img src={getimg(data.poster_path)} alt={data.title}  />
                            </div>
                            <h1>{data.title}</h1>
                            <p>{data.overview}</p>
                            <p>{data.vote_average}</p>
                            <button className='btn btn-secondary'>
                                <Link to="/">To Back</Link>
                            </button>
                        </div>
                        {/* <div className="col-md-6 align-items-center d-flex btn-leftview">
                            <button className='btn btn-danger'>Play</button>
                            <button className='btn btn-success'>List</button>

                        </div> */}
                    </div>
                </div>

            </div>
        );
    }
};

export default View
