import React from 'react'
import redhouse from '../images/iloveimg-converted/redhouse.JPG'
import yellowhouse from '../images/iloveimg-converted/yellowhouse.JPG'
import greenhouse from '../images/iloveimg-converted/greenhouse.JPG'
import bluehouse from '../images/iloveimg-converted/bluehouse.JPG'

function House() {
  return (
    <div>
    <div className='bg-all'>
      <div style={{padding:'10vw',fontSize:'1.2vw', color:'white', }}>
              <h1 ><span>House System</span></h1>
                      <p >We believe in holistic development of each child and aim to nurture all the students<br />to excel in academics, co-curricular and extra-curricular activities.</p>
                          
      </div>
    </div>
      <div className='infra-div'>
      <h1 style={{textAlign:'center' , padding:'2vw'}}>House System</h1>
      <div className='curri-div1'>
        <p>
        We implement the curculum prescribed by the Central Board of Secondary Education (CBSE), an autonomous organization under the MHRD, Government of India. It envisions robust vibrant and holistic education that will entri excellence in every sphere of human endeavours.
        </p>
        <p>Hillwoods Academy is all set to implement the New Education Policy and to forge ahead with the latest CBSE curriculum which is a perfect blend of processes focussing on developing cognitive and intellectual capabilities of the students. It also exposes them to a wealth of experiences like role-play, story-telling, group activities, field excursions etc.</p>
        <p>Apart from academics, it also incorporates various skills like the environment & community awareness, adventure and leadership; hence making their journey to self-realisation a fulfilling one. Seamless and thoughtful integration of the cutting edge technology adopted in the classroom, changes the dynamics of the classroom and deepens student's learning by supporting instructional objectives.</p>
        <p>The school offers a system of continuous and comprehensive evaluation based on the participation of each child in scholastic and co-scholastic activities.</p>
      </div>
      <div className='house-div2-img' >
          <img src={redhouse} alt="" />
          <img src={greenhouse} alt="" />
          <img src={yellowhouse} alt="" />
          <img src={bluehouse} alt="" />
      </div>
      </div>

    </div>
  )
}

export default House
