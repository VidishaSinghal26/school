import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
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
export default function ReactImageSlider(props) {
    return (
        <Carousel responsive={responsive}>
        <div className="imageslide-div"><img src={props.image[0]} alt="" /></div>
        <div className="imageslide-div"><img src={props.image[1]} /></div>
        <div className="imageslide-div"><img src={props.image[2]} /></div>
        <div className="imageslide-div"><img src={props.image[3]} /></div>
        <div className="imageslide-div"><img src={props.image[4]} /></div>
        <div className="imageslide-div"><img src={props.image[5]} /></div>
        </Carousel>
    
    )
}