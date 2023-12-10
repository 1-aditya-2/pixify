  import React,{useState,useEffect} from 'react';
  import './trend.css';
//   import SwiperCore from 'swiper';
  import {Autoplay} from 'swiper/modules';
  import TrendCard from '../components/TrendCard'

  import {Swiper, SwiperSlide} from 'swiper/react';
  import 'swiper/css';
  import 'swiper/css/pagination';


//   SwiperCore.use([Autoplay]);
  function Trend(){
    const[slides,setSlides]=useState([]);
    const fetchData=()=>{
        fetch('http://localhost:3000/data/movieData.json')
        .then(res=>res.json())
        .then(data=>{
            setSlides(data);
        })
        .catch(e=>console.log(e.message));
    };

    useEffect(()=>{  
        fetchData();
    },[]);


    return(
        <section id="trend" className="trend">
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title">Coming Soon</h4>
                </div>
                <div className="row">
                    <Swiper
                      breakpoints={{
                        320:{
                            slidesPerView:1,
                            spaceBetween:20,
                        },
                        480:{
                            slidesPerView:3,
                            spaceBetween:30,
                        },
                        640:{
                            slidesPerView:4,
                            spaceBetween:30,
                        },
                        992:{
                            slidesPerView:6,
                            spaceBetween:30,
                        },
                      }}
                      spaceBetween={20}
                      autoplay={{
                        delay:2000,
                        // disableOnInteraction:false,
                      }}
                      loop={true}
                      modules={[Autoplay]}
                      className="trendSwiper"
                    >
                        {slides &&
                        slides.length>0 &&
                        slides.map(slide=>(
                            <SwiperSlide key={slide._id}>
                                <TrendCard slide={slide}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>


    )
  }

  export default Trend;