import Icons from '../Components/Icons'; 
import Card from '../Components/Card1'; 
import Feedback from '../Components/Feedback'; 
import { MDBInput, MDBIcon,MDBCardTitle, MDBBtn , MDBTextArea , MDBCard, MDBListGroup, MDBCardText} from 'mdb-react-ui-kit';
import '../App.css'

function Contact() { 
  return ( 
    <div className='contact-div'> 
     <div className='bg-all'>
      <div style={{padding:'10vw',fontSize:'1.2vw', color:'white', }}>
              <h1 ><span>Contact Us</span></h1>
              <p >We believe in holistic development of each child and aim to nurture all the students<br />to excel in academics, co-curricular and extra-curricular activities.</p>
                          
      </div>
    </div>
   <div >
      <h1 style={{color:'rgb(3,3,48)' ,textAlign:'center', marginTop:'2vw' }} >Contact Us</h1>

    <div className='contact'>
   

    <div className='contact-form'>
          <form id='form' className='text-center' style={{ width: '100%', maxWidth: '350px' }}>
          <h2 style={{marginBottom:'2vw'}}>Contact us</h2>

          <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

          <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

          <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

          <MDBTextArea wrapperClass='mb-4' label='Message' />

          <MDBBtn color='primary' block className='my-4'>
            Send
          </MDBBtn>
        </form>
      </div>

      <div className='contact-right'>
      <div className='contact-map'> 
     <iframe   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.482772473155!2d77.52660101029997!3d28.495119390207616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceaeda7022f4d%3A0xf7ba862681d07391!2sHillwood%20Academy!5e0!3m2!1sen!2sin!4v1697302590388!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <MDBCard className='contact-card'>
      <MDBCardTitle>Reach Us At </MDBCardTitle>
        <MDBListGroup className='contact-card-items'>
          <MDBCardText>
            <span><i className="fa fa-phone mr-2"></i> </span> 
              +91-9999083483
          </MDBCardText>
          <MDBCardText>
            <span><i className="fa fa-envelope mr-2"></i> </span> 
              <span>Ha1grnoida@gmail.com</span> 
          </MDBCardText>
          <MDBCardText>
          <p style={{width:'400px'}}>
                <MDBIcon icon="home" className="me-2" />
                HS-30, Eta-1 Greater Noida, Uttar Pradesh , India 201308
              </p>
          </MDBCardText>
        </MDBListGroup>
     </MDBCard>
     
    </div>

      
</div>
     </div>
    </div> 

  ); 
} 
  
export default Contact;