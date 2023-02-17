// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';


import img1 from '../Images/slide1.jpeg'
import img2 from '../Images/slide2.jpeg'
import img3 from '../Images/slide3.jpeg'
import img4 from '../Images/slide4.jpeg'
import img5 from '../Images/slide5.jpeg'
import img6 from '../Images/slide6.jpeg'
import img7 from '../Images/slide7.jpeg'
import img8 from '../Images/slide8.jpeg'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
const images=[img1, img2, img3, img4, img5, img6, img7, img8]
const Slider= ()=>{
    const options = {
        type: "loop",
        gap: "1rem",
        // top: '-10rem',
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        height: "26rem",
        padding: 0,
        cover: true,
        // width: '200rem'
      };
    return(
        <div className="">
        <div className="absolute -left-8 -right-8 -top-5 lg:-left-5 lg:-right-5">
          <Splide
            className=""
            options={options}
            aria-labelledby="autoplay-example-heading"
            hasTrack={false}
          >
            <div className="relative">
              <SplideTrack>
                {images.map((item, i) => (
                  <SplideSlide key={i} className="">
                    <img src={item} alt="" className="w-full object-cover rounded-md" />
                  </SplideSlide>
                ))}
              </SplideTrack>
            </div>
  
            <div className="splide__progress">
              <div className="splide__progress__bar" />
            </div>
          </Splide>
        </div>
       </div>
  
    )
}

export default Slider