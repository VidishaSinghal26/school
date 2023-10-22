import React from 'react'
import sidephoto from '../images/hillwoods-bg.jpg'
import './home.css'

function Legacy() {
  return (
    <div className='contact-div'>
       <div className='bg-all'>
       <div style={{padding:'10vw',fontSize:'1.2vw', color:'white', }}>
            <h1 ><span>Legacy</span></h1>
                    <p >We believe in holistic development of each child and aim to nurture all the students<br />to excel in academics, co-curricular and extra-curricular activities.</p>
                        
        </div>
       </div>

        <div style={{padding:'1vw' , color:'rgb(3,3,48)'}}>
          <h1 style={{textAlign:'center' , padding:'2vw 0px 1vw 0px '}}>Legacy</h1>
          <div className='ms-div1'>

              <div style={{textAlign:'justify', margin:'1vw 5vw' }}>
              <p>Hillwoods Academy, Greater Noida, bloomed as a branch of Hillwoods Academy, New Delhi.</p>
              <p>The school was established in the year 2011 and ranks amongst the top schools in the vicinity. The school is affiliated to CBSE and prepares students for the All India Senior Secondary School Examination.</p>
              <p>Hilwoods Academy school responds to the demands of transformation by offering diverse education in a safe and supportive environment that promotes self-discipline, motivation and brilliance in learning skills to become self-reliant adults who will succeed and contribute dutifully in a global community. With an emphasis on building a strong value base, we aim to inculcate in the scholars, the more significant character traits that comprise of uprightness, valour, resourcefulness, forbearance, team-work, societal obligation, scientific fervour and patriotism.</p>
              <p>Since its inception, it has made its presence felt both in the field of academics as well as in sports. At Hillwoods, the children get the best of education and opportunities to excel themselves in diverse fields. Aiming for all round development of its students, the inspiring and dedicated teaching community and an equally diligent management provides for an infrastructure conducive for their personality enhancement.</p>
              </div>
              <div className='l-img' >
              <img   src={sidephoto} alt="" />
              </div>
             
          </div>
         
        </div>
    </div>
  )
}

export default Legacy
