import krisPh from './testimonials-images/Photo-1.jpg';
import secondPh from './testimonials-images/second.jpg';
import thirdPh from './testimonials-images/third.jpg';
import forthPh from './testimonials-images/forth.jpg';
import fifthPh from './testimonials-images/fifth.jpg';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


export function Testimonials() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    return (
        <section className="testimonials mySwiper">

            <h3 className='test-h3'>Testimonials</h3>

            <h1 className='cl-say-h1'>What Our Client's Say</h1>

            <div className='clients swiper-wrapper'>
                <div className='fr-client swiper-slide'>
                    <div className="main-pic">
                        <img src={krisPh} alt='profile' className='client-image'></img>
                        <p className='clients-text'>Lorem ipsum sit dolor amet magna aliqua consectetur. Lorem ipsum sit dolor amet magna aliqua consectetur.</p>
                        <h2 className='client-name'>Kristian Kiselkov</h2>
                    </div>

                    <div className="sec-pic">
                        <img src={secondPh} alt='profile' className='client-image'></img>                        
                    </div>

                    <div className="trd-pic">            
                        <img src={thirdPh} alt='profile' className='client-image'></img>
                    </div>

                    <div className="frth-pic">                       
                        <img src={forthPh} alt='profile' className='client-image'></img>
                    </div>

                    <div className="fth-pic">    
                        <img src={fifthPh} alt='profile'  className='client-image'></img> 
                    </div>
                </div>

                <div className='sc-client swiper-slide'>
                    <div className="main-pic">
                        <img src={secondPh} alt='profile' className='client-image'></img>
                        <p className='clients-text'>Lorem ipsum sit dolor amet magna aliqua consectetur. Lorem ipsum sit dolor amet magna aliqua consectetur.</p>
                        <h2 className='client-name'>Boris Petrov</h2>
                    </div>

                    <div className="sec-pic">                        
                        <img src={krisPh} alt='profile' className='client-image'></img>
                    </div>

                    <div className="trd-pic">                       
                        <img src={thirdPh} alt='profile' className='client-image'></img>
                    </div>

                    <div className="frth-pic">                       
                        <img src={forthPh} alt='profile' className='client-image'></img>
                    </div>

                    <div className="fth-pic">   
                        <img src={fifthPh} alt='profile' className='client-image'></img>  
                    </div>
                </div>

                <div className='trd-client swiper-slide'>
                    <div className="main-pic">
                        <img src={thirdPh} alt='profile' className='client-image'></img>
                        <p className='clients-text'>Lorem ipsum sit dolor amet magna aliqua consectetur. Lorem ipsum sit dolor amet magna aliqua consectetur.</p>
                        <h2 className='client-name'>Daniel Kiselkov</h2>
                    </div>

                    <div className="sec-pic">                        
                        <img src={secondPh} alt='profile' className='client-image'></img>
                    </div>

                    <div className="trd-pic">                        
                        <img src={krisPh} alt='profile' className='client-image'></img>
                    </div>

                    <div className="frth-pic">                     
                        <img src={forthPh} alt='profile' className='client-image'></img>
                    </div>

                    <div className="fth-pic">    
                       <img src={fifthPh} alt='profile' className='client-image'></img> 
                    </div>
                </div>

                <div className='frth-client swiper-slide'>
                    <div className="main-pic">
                        <img src={forthPh} alt='profile' className='client-image'></img>
                        <p className='clients-text'>Lorem ipsum sit dolor amet magna aliqua consectetur. Lorem ipsum sit dolor amet magna aliqua consectetur.</p>
                        <h2 className='client-name'>Rosen Plevneliev</h2>
                    </div>

                    <div className="sec-pic">                        
                        <img src={secondPh} alt='profile' className='client-image'></img>
                    </div>

                    <div className="trd-pic">                        
                        <img src={thirdPh} alt='profile' className='client-image'></img>
                    </div>

                    <div className="frth-pic">                     
                        <img src={krisPh} alt='profile' className='client-image'></img>
                    </div>

                    <div className="fth-pic">    
                       <img src={fifthPh} alt='profile' className='client-image'></img> 
                    </div>
                </div>

                <div className='trd-client swiper-slide'>
                    <div className="main-pic">
                        <img src={fifthPh} alt='profile' className='client-image'></img>
                        <p className='clients-text'>Lorem ipsum sit dolor amet magna aliqua consectetur. Lorem ipsum sit dolor amet magna aliqua consectetur.</p>
                        <h2 className='client-name'>Rumen Radev</h2>
                    </div>

                    <div className="sec-pic">                        
                        <img src={secondPh} alt='profile' className='client-image'></img>
                    </div>

                    <div className="trd-pic">                        
                        <img src={thirdPh} alt='profile' className='client-image'></img>
                    </div>

                    <div className="frth-pic">                     
                        <img src={forthPh} alt='profile' className='client-image'></img>
                    </div>

                    <div className="fth-pic">    
                       <img src={krisPh} alt='profile' className='client-image'></img> 
                    </div>
                </div>
                
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
        </section>
        
    )
}