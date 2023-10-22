import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import academics from './images/academics_video.png';
// import cocurricular from './images/cocurricular_video.png'
// import sports from './images/sports_video.png'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default function CardSection(props) {
  return (
    <Carousel responsive={responsive}  >
    <div>
    <div className="card-img">
            <img src={props.image[0]} alt="" />
            
        </div>
        <div >Acadmics</div>
    </div>
        
        <div className="card-img">
            <img src={props.image[1]} alt="" />
            <div>Co-curricular</div>
        </div>
        <div className="card-img">
            <img src={props.image[2]} alt="" />
            <div>Sports</div>
        </div>
        {/* <div>Item 3</div>
        <div>Item 4</div> */}
   </Carousel>

  );
}