import plane from './images/plane.png'


export function Home() {
    return (
        <>
            <section id="landing-hero">
                <h1 id="title">Find your<br></br> dream <span>Plane</span></h1>
                
                <img src={plane} id='plane'></img>
            
                <div id='short-desc'>
                    <p>Lorem ipsum dolor sit amet, consectetur dolore magna aliqua.</p>
                </div>

                <button id='landing-con'>Contact Us</button>
            </section>

            <section id='brief-hero'>
            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512" className='icons secure'><path fill="#fff" d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64      64-64H80z"/></svg>

            <div className='desc-box'>
                <h3>Secure Payment</h3>
                <p>Lorem ipsum aliqua magna sit amet ver dolor.</p>
            </div>

            
            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512" className='icons support'><path fill="#ffffff" d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"/></svg>

            <div className='desc-box sup'>
                <h3>Secure Payment</h3>
                <p>Lorem ipsum aliqua magna sit amet ver dolor.</p>
            </div>

            
            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="36" viewBox="0 0 640 512" className='icons delivery'
            ><path fill="#ffffff" d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"/></svg>
            <div className='desc-box del'>
                <h3>Secure Payment</h3>
                <p>Lorem ipsum aliqua magna sit amet ver dolor.</p>
            </div>
            </section>
        </>
    )
} 