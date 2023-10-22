import React from 'react'
import './home.css'
import sidephoto from '../images/hillwoods-bg.jpg'

function MissionStatement() {

  return (
    <div className='contact-div'>
      <div className='bg-all'>
      <div style={{padding:'10vw',fontSize:'1.2vw', color:'white', }}>
            <h1 ><span>Mission & Vision</span>
            </h1>
                    <p >We believe in holistic development of each child and aim to nurture all the students<br />to excel in academics, co-curricular and extra-curricular activities.</p>
                        
        </div>
      </div>

    <div className='ms'>
      <h1 style={{textAlign:'center', margin:'3vw'}}>Our Mission</h1>
      <div className='ms-div1'>
      <div className='l-img'>
              <img   src={sidephoto} alt="" />
      </div>
      <div style={{textAlign:'center'}}>
      <p>&quot;Education is a lifelong journey, one that begins with a strong and inclusive foundation. At our
    school, we are dedicated to fostering knowledge, aptitude, and skills that empower our students to
    excel in both their learning and their lives.</p><br />
      <p>Our institution stands committed to a 12-year educational journey that prioritizes excellence,
      innovation, and adaptability. We provide a nurturing, disciplined, and intellectually stimulating
      environment that encourages students to reach their full potential.</p><br />
      <p>Our highly qualified and passionate faculty is driven by the goal of achieving academic excellence
      while nurturing the holistic development of our learners. We recognize the importance of embracing
      diverse languages, including the significance of a student&#39;s mother tongue. Simultaneously, we
      understand that English is an essential medium of instruction, enabling our students to confront the
      challenges of a rapidly globalizing world.</p><br />
    <p>In line with the modern educational landscape and the National Education Policy (NEP), our
      curriculum is designed to prepare students for the demands of the 21st century. We prioritize the
      development of skills and knowledge that are relevant to the current and future needs of our
      interconnected world.</p><br />
      <p>Our commitment to a high-quality English curriculum goes hand in hand with promoting confidence,
      critical thinking, and adaptability. We aim to equip our students with the skills they need to become
      well-rounded, adaptable, and integrated personalities who are ready to take on the challenges of
      today's dynamic world.</p><br />
      <p>Our mission is to offer comprehensive and holistic education that empowers our students to become
      global citizens, 21st-century leaders, and even techpreneurs. We believe in nurturing the
      entrepreneurial spirit and fostering the ability to navigate and thrive in a tech-driven landscape.</p><br />
      <p>In summary, our school is dedicated to preparing students not only for academic success but also for
      becoming global citizens, tech-savvy entrepreneurs, and well-rounded individuals who are ready to
      excel in the 21st century"</p>
        
      </div>
      </div>
      </div>
      <div>
      <div style={{paddingBottom:'5vw'}}>
        <hr />
        <h1 style={{textAlign:'center'}}>Our Vision</h1>
        <div className='ms-div1'>
       <div style={{margin:'1vw 5vw' , textAlign:'justify'}} >
       <p >Hillwoods Academy envisages to develop scholars who are the best not only in the arena of academics and sports, but also in their character. At Hillwoods, we seek to develop a sense of values and strengths, commitment and devotion in each scholar, and create an atmosphere of honesty and intellectual curiosity essential to the unfettered blossoming of a young mind.</p>
          <p>Education is a life long process, but it must develop from firm and broad foundation We aim to nurture knowledge, aptitude , skill that foster the aspiration of excellence in learning and living.</p>
        <p>We strive for high-quality English curriculum which helps to promote confidence, critical thinking, skills leading to the development of well-adjusted, adaptable and integrated personalities. We aim at offering comprehensive and holistic education.</p>
       </div>
          
          <div className='l-img' >
              <img   src={sidephoto} alt="" />
         </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MissionStatement
