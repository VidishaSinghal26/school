import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import ImageSlider from '../Components/ImageSlider';
import NewEvents from '../Components/NewEvents';
import '../styles/HomeScreen.css'
import Gallery from '../Components/Gallery';
import CardSection from '../Components/CardSection'
import academics from '../Components/images/academics_video.png';
import cocurricular from '../Components/images/cocurricular_video.png'
import sports from '../Components/images/sports_video.png'

import 'react-multi-carousel/lib/styles.css';

function HomeScreen() {

  const navigate = useNavigate();
  const image=[academics,cocurricular,sports]



  return (
    <div className='hs-main'>
      <div className="imgslider">
        <ImageSlider />
      </div>

      <div className="hs-con">
        <p>Moto of the school is " Go out to serve your country & Countrymen" </p>
      </div>
      
      <div className='hs-sec1'>
        {/* <div className='principal' >
        <img src="https://i.pinimg.com/736x/66/b7/f6/66b7f6e5ad85cdfeab3459f2b5480407.jpg" alt="" />
        </div> */}
        
        <div>
        <h1>Message from Vice Principal</h1>
        <div class="content">
                <p>Dear Parents and Students,</p>
								<p>I am thrilled to welcome you to our vibrant school community at Hillwoods Academy. As we
                embark on this academic journey, I want to share our vision for the future, which is rooted in
                providing the best education and opportunities for the children.</p>
                <p>At Hillwoods Academy, we believe that education is not just about textbooks; it&#39;s about
                nurturing well-rounded individuals who are ready to thrive in an ever-evolving world. Our
                vision is to inspire a love for learning, foster creativity, and instil values that will guide our
                students through life.</p>
                <p>We recognize that education is a partnership, and we invite parents to join us on this exciting
                journey. Together, we can create an environment where every child can reach their full
                potential. Your involvement and support are invaluable in shaping your child&#39;s educational
                experience.</p>
                <p>Our dedicated teaching faculty is the backbone of our institution. They bring knowledge,
                passion, and innovation to the classroom, ensuring that each student receives a top-notch
                education. We are committed to continuous improvement, investing in professional
                development to provide the best learning experience possible.</p>			
                <p>Experiential learning comes to life at our school through our Science Park and Herbal
                Garden, where students explore the wonders of nature, conduct hands-on experiments, and
                cultivate a deep appreciation for science and the environment.</p>
                <p>Lastly, our state-of-the-art infrastructure creates a conducive environment for learning and
                growth. We have designed our campus to facilitate interactive and dynamic education, with
                modern classrooms, libraries, sports facilities like Basket Ball Court, Swimming pool,
                football ground to name the few.</p>
                <p>As we move forward, let us work hand in hand to nurture the leaders, thinkers, and doers of
                  tomorrow. Together, we will achieve excellence in education.</p><br />
                  <div style={{textAlign:'end'}}>
                  <p >Warm regards,</p><p>
                  Shachi Sharma</p>
                <p> Hillwoods Academy</p>
                  </div>
              </div>
        </div>
        {/* <div>
        <NewEvents />
        </div> */}
      </div>



      <div className="hs-sec3">
           <h2>Distinctiveness of Hillwoods Acadmy</h2>
           {/* <p>Creative imagination and creativity are the cornerstones of the vision of the foundation of Hillwoods Acadmy. Education with a holistic perspective is ensured where the development of every person’s intellectual, emotional, social, physical, artistic, creative and spiritual potential is ensured. </p> */}
           <div className='sec3-content'>
            <p>“ Education should teach children how to think and not what to think”- This is the dictum on which the foundation of this institution was laid a century ago. A perfect jugalbandi of Indian ethos and modern education, where children are trained not merely to score marks but to be good human beings, who contribute to making this world a better place. ’’</p>
            <p>“ Creative imagination and creativity are the cornerstones of the vision of the foundation of Hillwoods Acadmy. Education with a holistic perspective is ensured where the development of every person’s intellectual, emotional, social, physical, artistic, creative and spiritual potential is ensured.’’ </p>
            <p>“ Experiential Learning is encouraged through innovations like flipped classes, Reflection Sheets etc. Sports and co-curricular activities are given place of prime importance along with academics in the curriculum to encourage all- round development. The whole purpose of education is to turn mirrors into windows and that is what we at Modern strive to do.’’</p>
           </div>
      </div>

      <div className="hs-sec2">
        <div className='sec2-part1'><img src="https://media.istockphoto.com/id/1012049016/photo/young-man-writing-college-or-university-application-form-with-pen-and-paper-student-applying.jpg?s=612x612&w=0&k=20&c=i5FyoGkFviATC6E3JQGT5lj8Zmtjv7sRtQ7zUIUYkM8=" alt="" /></div>
        <div className='sec2-part2'>
          <h2>Apply for Admission </h2>
          <h6></h6>
          <p>Seeking an application for registration is the first stage of admission process. The form is to be duly filled and submitted at the office (on working days) along with a photocopy of the Birth Certificate of the child duly attested by a gazetted officer, and two photographs of the student.

The child's name can be registered in the school record for further consideration of admission by depositing a Registration Fee along with the submission of the filled form. Please note that submission of application form is NO guarantee of admission of the ward. The admission would be confirmed only after considering the merit record and other admission procedures.

Candidates registered for classes IX & XI will have to compulsorily take an entrance examination. After clearing the examination, the admission would be finalised only after clearing the interaction session with the teacher.</p>
<br />
          <a href='https://forms.gle/TMqepK3iMeqRMSHw7'><button>Apply Now</button></a>
        </div>
      </div>
      <div className="hs-sec4">
        <div>
          <h1>Life At Hillwoods</h1>
          <div className='sec4-card'>
          <CardSection image={image}/>
          </div>
          
        </div>
      </div>
      <div>
        <NewEvents />
      </div>
      <div className="hs-sec5">
        <h1 >Our Gallery</h1>
        <div className="photos">
          <Gallery />
        </div>
      </div>
    </div> 
  )
}

export default HomeScreen
