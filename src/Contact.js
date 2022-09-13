import './index.css';
import './App.css';
import { useState } from 'react';
import { send } from 'emailjs-com';
import { MDBContainer,MDBCardHeader, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBInput} from 'mdbreact';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


function Contact(props) {


  


  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_en6746o',
      'template_hk52cpn',
      toSend,
      'user_yIP7TMVc6ihPIh6yp9E6H'
    )
      .then(() => {
         MySwal.fire({
          title: "Good Job!",
          html: "Mail Send Successfully!",
          icon: 'success'
        })
      })
      .catch(() => {
        MySwal.fire({
          title: "Oops!",
          html: 'Something went wrong!',
          icon: 'error'
        })
      });
  };
  const MySwal = withReactContent(Swal)
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <MDBContainer>
    <section className="my-5">
      <h2 className="uppercase text-center my-5 " style={{ fontSize: "40px", fontWeight: "bold" }}> Contact us</h2>
      <p className="text-center w-responsive mx-auto pb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
             <MDBCardHeader style={{backgroundColor: "#2bbbad",boxShadow: "1px 3px 1px #9E9E9E"}} className="text-white text-center">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
              </MDBCardHeader>
              <br/>
              <form onSubmit={onSubmit}>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="From"
                  name="from_name"
                  iconClass="grey-text"
                  type="text"
                  value={toSend.from_name}
                  onChange={handleChange}
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="To"
                  name="to_name"
                  iconClass="grey-text"
                  type="text"
                  value={toSend.to_name}
                  onChange={handleChange}
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Email"
                  name="reply_to"
                  iconClass="grey-text"
                  type="text"
                  value={toSend.reply_to}
                  onChange={handleChange}
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Message"
                  name="message"
                  iconClass="grey-text"
                  type="textarea"
                  value={toSend.message}
                  onChange={handleChange}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-default">Submit</button>
              </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.194993403158!2d77.63604731413511!3d12.959371018654542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae157e6cb307d9%3A0x1cb2385f5a5a92a5!2sSiliconreview%20Technologies%20India%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1637581685160!5m2!1sen!2sin"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <button type="button" className="btn btn-default rounded-pill mb-4">
                <MDBIcon icon="map-marker-alt" style={{fontSize: "16px" }}/> 
              </button>
              <p>New York, 94126</p>
              <p className="mb-md-0">United States</p>
            </MDBCol>
            <MDBCol md="4">
              <button type="button" className="btn btn-default rounded-pill mb-4">
                <MDBIcon icon="phone" style={{fontSize: "16px" }}/>
              </button>
              <p>+ 01 234 567 89</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="4">
              <button type="button" className="btn btn-default rounded-pill mb-4">
                <MDBIcon icon="envelope" style={{fontSize: "16px" }}/>
              </button>
              <p>info@gmail.com</p>
              <p className="mb-md-0">sale@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
    </MDBContainer>
  );
}
export default Contact;
