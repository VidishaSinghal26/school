import React from 'react'
import music from '../images/iloveimg-converted/music.JPG'
import games from '../images/iloveimg-converted/games.jpg'
import dance from '../images/iloveimg-converted/dance.JPG'

function Arts() {
  return (
    <div>
    <div className='bg-all'>
      <div style={{padding:'10vw',fontSize:'1.2vw', color:'white', }}>
              <h1 ><span>Creative Arts</span></h1>
              <p >We believe in holistic development of each child and aim to nurture all the students<br />to excel in academics, co-curricular and extra-curricular activities.</p>
                          
      </div>
    </div>
   
    <div className='infra-div'>
    <h1 style={{textAlign:'center', paddingBottom:'3vw'}}>Creative Arts</h1>
    <div className='arts-div'>
    <div className='arts-div1-img'>
          <img src={games} alt="" />
      </div>
      <div><h1>Games</h1>
      <p style={{padding:'1vw 3vw'}}>The school proudly proclaims to offer numerous opportunities for its students to embolden their participation in sports and athletics by undertaking various activities such as Yoga, Swimming, Aerobics, Karate and Skating, with the sole objective to create healthy human assets. Teamwork, dedication & self-confidence along with leadership qualities are the direct outcome of being involved in games and athletics, making it a life-changing experience.</p></div>
     
    </div>
    <br />
    <br />
    <div className='arts-div'>
    <div className='infra-div2-img'>
          <img src={music} alt="" />
      </div>
      <h1>Music</h1>
      <p style={{padding:'2vw'}}>The musical talent of students is nurtured and honed in various gerires of Indian and western music Synchronisation, melody, graphics, lyrics, as a part of music making, help students learn the nuances of music Training in vocal music as well as instrumental music forms a part of the student's repertoire.</p>

    </div>
    <br />
    <br />
    <div className='arts-div'>

    <div className='arts-div1-img'>
          <img src={dance} alt="" />
      </div>
      <h1>Dance</h1>
      <p style={{padding:'2vw'}}>The boundless imaginations of creative minds find artistic expressions in the Performing Art & Dance room. Students are introduced to various art forms and styles as the aesthetic aptitude is finely tuned and given a direction.</p>
    </div>
    <br />
    <br />
   
    <div>
    </div>
    </div>
  </div>
  )
}

export default Arts
