import React from 'react'
import curr1 from '../images/iloveimg-converted/IMG_6530.jpg'
import curr2 from '../images/iloveimg-converted/IMG_5511.jpg'
import curr3 from '../images/iloveimg-converted/IMG_2647.jpg'

function curriculum() {
  return (
    <div>
    <div className='bg-all'>
      <div style={{padding:'10vw',fontSize:'1.2vw', color:'white', }}>
              <h1 ><span>Curriculum</span></h1>
                      <p >We believe in holistic development of each child and aim to nurture all the students<br />to excel in academics, co-curricular and extra-curricular activities.</p>
                          
      </div>
    </div>
      <div className='infra-div'>
      <h1 style={{textAlign:'center' , padding:'2vw'}}>Curriculum</h1>
      <div className='curri-div1'>

        <p>
        We implement the curculum prescribed by the Central Board of Secondary Education (CBSE), an autonomous organization under the MHRD, Government of India. It envisions robust vibrant and holistic education that will entri excellence in every sphere of human endeavours.
        </p>
        <p>Hillwoods Academy is all set to implement the New Education Policy and to forge ahead with the latest CBSE curriculum which is a perfect blend of processes focussing on developing cognitive and intellectual capabilities of the students. It also exposes them to a wealth of experiences like role-play, story-telling, group activities, field excursions etc.</p>
        <p>Apart from academics, it also incorporates various skills like the environment & community awareness, adventure and leadership; hence making their journey to self-realisation a fulfilling one. Seamless and thoughtful integration of the cutting edge technology adopted in the classroom, changes the dynamics of the classroom and deepens student's learning by supporting instructional objectives.</p>
        <p>The school offers a system of continuous and comprehensive evaluation based on the participation of each child in scholastic and co-scholastic activities.</p>
      </div>
      <div className='curri-div2-img'>
         <img src={curr3} alt="" />
          <img src={curr1} alt="" />
          <img src={curr2} alt="" />

      </div>
      </div>

    </div>
  )
}

export default curriculum
