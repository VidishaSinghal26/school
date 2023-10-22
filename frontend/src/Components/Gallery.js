import React from 'react';
import {useNavigate} from 'react-router-dom'
import '../styles/gallery.css';
import academics from './images/hillwoods-bg.jpg';
import photo1 from './images/iloveimg-converted/IMG_6334.jpg'
import photo2 from './images/iloveimg-converted/IMG_5520.jpg'
import photo3 from './images/iloveimg-converted/IMG_5913.jpg'
import photo4 from './images/iloveimg-converted/IMG_6084.jpg'
import photo5 from './images/iloveimg-converted/IMG_6534.jpg'
import photo6 from './images/iloveimg-converted/IMG_6285.PNG'
import photo7 from './images/iloveimg-converted/IMG_6544.jpg'
import photo8 from './images/iloveimg-converted/IMG_5099.jpg'
import photo9 from './images/iloveimg-converted/IMG_3242.jpg'
import photo10 from './images/iloveimg-converted/IMG_2647.jpg'
import MainGallery from './MainGallery';


const images = [academics,photo1,photo2,photo3,photo4,photo5,photo6,photo9,academics
  // Add more image URLs as needed
];
const delay = 1000;

function Gallery() {

  const navigate = useNavigate();
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="gallery-slideshow">
      <div
        className="gallery-slideshowSlider"
        style={{ transform: `translate3d(${(-index) * 10}%, 0, 0)` }}
      >
        {images.map((imageUrl, index) => (
          <div
            className="gallery-slide"
            key={index}
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
        ))}
      </div>

      <button className="gallery-btn" onClick={()=>navigate("/gallery")}>View More</button>
    </div>
    
  );
}
export default Gallery;