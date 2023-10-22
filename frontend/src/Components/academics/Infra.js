import React from 'react'
import './academic.css'
import lecture from '../images/iloveimg-converted/769137f2-4653-41f8-8cd6-931e19405b57.JPG'
import swimmingpool from '../images/iloveimg-converted/swimmingpool.jpg.JPG'
import sciencepark from '../images/iloveimg-converted/IMG_6534.jpg'

function Infra() {
  return (
    <div>
      <div className='bg-all'>
        <div style={{padding:'10vw',fontSize:'1.2vw', color:'white', }}>
                <h1 ><span>Infrastructure</span></h1>
                        <p >We believe in holistic development of each child and aim to nurture all the students<br />to excel in academics, co-curricular and extra-curricular activities.</p>
                            
        </div>
      </div>
     
      <div className='infra-div'>
      <h1 style={{textAlign:'center', paddingBottom:'3vw'}}>Infrastructure</h1>
      <div>
      <div className='infra-div1-img'>
            <img src={lecture} alt="" />
        </div>
        <div><h1>Lecture theaters</h1>
        <p style={{padding:'2vw'}}>Classrooms are the "workshops for learning" For a conducive teaching and learning experience, our classrooms have customised furniture for various age groups ensuring a safe and comfortable learning environment for the child. Most importantly, the latest technology, trending in imparting knowledge Smart Boards - are installed in the classrooms with an aim to make the learning interesting through audio-visual.</p></div>
       
      </div>
      <br />
      <br />
      <div>
      <div className='infra-div2-img'>
            <img src='https://media.gettyimages.com/id/168357830/photo/hillwoods-academy-preet-vihar-hillwoods-academy-preet-vihar.jpg?s=1024x1024&w=gi&k=20&c=D39W35yY1KP7tgjkoae9bhoJ4Hs64CZ8HvfhM3DVo9Q=' alt="" />
        </div>
        <h1>Archive of Books</h1>
        <p style={{padding:'2vw'}}>We firmly believe that a good book is the precious life-blood of a master-spirit. A library, endowed with thousands of articles and books, carves out an impeccable amalgamation of wholesome knowledge and thoughts provided to all the students. It is an ideal place </p>

      </div>
      <br />
      <br />
      <div>
      <div className='infra-div1-img'>
            <img src='https://media.gettyimages.com/id/168357839/photo/student-of-hillwoods-academy-preet-vihar-for-titled-my-school-my-dream-at-preet-vihar-on.jpg?s=612x612&w=gi&k=20&c=WUJWjEkGTDJYfq1E2RXyxt9QoK-oZ1mW-h5RAXTnFpo=' alt="" />
        </div>
        <h1>Science Laboratories</h1>
        <p style={{padding:'2vw'}}>To generate a scientific temperament, students are provided with latest scientific knowledge and its application Well-equipped labs help in developing practical skills Scientific approach- Question, Experiment, Observe and Accept- automatically promotes rational thinking</p>
      </div>
      <br />
      <br />
      <div>
      <div className='infra-div2-img'>
            <img src='https://yellowslate.sgp1.cdn.digitaloceanspaces.com/gallery/16848242321152652965646c60a812ac31684824232.jpg' alt="" />
        </div>
        <h1>Computer Lab</h1>
        <p style={{padding:'2vw'}}>The Computer lab familiarizes and enables the students of all classes to use the computer effectively as per the standards of the class curriculum. The lab is well equipped with latest Computer Systems, Printer, Internet Connection, UPS and other paraphernalia, to go much beyond meeting the desired hardware and software requirements, rather than adhering to the curriculum only.</p>
      </div>
      <br />

      <div>
      <div className='infra-div1-img'>
            <img src={swimmingpool} alt="" />
        </div>
        <h1>Swimming Poll</h1>
        <p style={{padding:'2vw'}}>Swimming is a sport that teaches teamwork, goal setting, and reaching your goals. However, it is important to support your teammates to achieve your goals. Swimming is a low-impact sports activity that can be done for the rest of ones life and is a good choice for families because injuries are less common and easier to recover.</p>
      </div>
      <br />
      <br />
      <br />
      <div>
      
        <h1>Science Park</h1>
        <p>Science Park is an innovative concept of teaching science in an informal way. With a cluster of open air science gadgets installed permanently, Science Park is meant for play-way learning of science by augmenting the tendency of the children to play more than to read. In the Science Park, aesthetically designed and ruggedly fabricated science gadgets are set up to benefit the kids by covering many topics in science, like mechanics, sound, light, meteorology, heat, etc. Apart from pure science, Mathematics, Applied Scien, Geography are also covered in these interactive exhibits. A few of the short-listed gadgets are:
        <div className='infra-div2-img'>
            <img src={sciencepark} alt="" />
        </div>
        <br /> 1. Perception of Depth 
        <br />2. Primary and Secondary Colours 
        <br />3. Solar Powered Radio 
        <br />4. Straight Bar Passing Parabola 
        <br />5. Anemometer
        <br />6. Humidity Meter 
        <br />7. Thermometer
        <br />8. Geodesic Dome 
        <br />9. Hydroelectric Power Plant 
        <br />10. Centrifugal Force</p>
      </div>
      <div>
      </div>
      </div>
    </div>
  )
}

export default Infra
