
import './footer.css';
import image1 from '../images/healthimage1.jpg';
import image2 from '../images/healthimage2.jpg';
import image3 from '../images/phone.png';
import image4 from '../images/location.png';
import image5 from '../images/mail.png';
function footer() {
  return (
    <div id='footer-div'>
      <div className='aboutus-div'>
        <p className='aboutus-text1'>
          About Us
        </p>
        <p className='aboutus-text2'>
        Ovo Farm Fresh is one of the most<br></br>
        advanced layer farm with fully<br></br>
        automated state-of-art technology<br></br>
        in India.
        </p>
        <button className='aboutus-button'>Read More</button>
      </div>
      <div className='quicklinks-div'>
        <div className='quicklinks-text1'>
        Quick Links
        </div>
        <div className='quicklinks-arrow'>
        <p className='rightarrow'></p>
        <p className='rightarrow'></p>
        <p className='rightarrow'></p>
        <p className='rightarrow'></p>
        <p className='rightarrow'></p>
        <p className='rightarrow'></p>
        <div className='quicklinks-links'>
          <a href='#' className='link1'>Home</a><br></br><br></br>
          <a href='#' className='link2'>About Us</a><br></br><br></br>
          <a href='#' className='link3'>Products</a><br></br><br></br>
          <a href='#' className='link4'>Blogs</a><br></br><br></br>
          <a href='#' className='link5'>Terms & Conditions</a><br></br><br></br>
          <a href='#' className='link6'>Contact Us</a><br></br><br></br>
        </div>
        </div>
        <div className='logo-buttons'>
          <button className='logobutton1'></button>
          <button className='logobutton2'></button>
          <button className='logobutton3'></button>
          <button className='logobutton4'></button>
        </div>
      
      </div>
      <div id='healthcorner-div'>
        <p className='healthcorner-text1'>Health Corner</p>
        <div className='healthcorner-images'>
          <img src={image1} height='70'></img>
          <a href='#' className='healthcorner-btn1'>Read More</a><br></br>
          <img className='healthcorner-img2' src={image2} height='70'></img>
          <a href='#' className='healthcorner-btn2'>Read More</a>
          <div className='healthcorner-texts'>
            <a href='#' className='healthcorner-text2'>
            Kenko Nutri Club:<br></br>
            Encouraging an ‘Eggitarian’<br></br>
            lifestyle
            </a>
            <p className='healthcorner-text3'>
            Members of a newly-formed nutrition<br></br>
            club can be found eating figs, pears,<br></br>
            apples, and other
            </p>
            <a href='#' className='healthcorner-text21'>
            NUTRITIOUS EGGS<br></br>
            AUGMENT YOUR<br></br>
            IMMUNITY POWER
            </a>
            <p className='healthcorner-text31'>
            The eggs have been part of our diets<br></br>
            since the dawning of time. Eggs are
            </p>
          </div>

        </div>

      </div>
      <div id='contactus-div'>
        <p className='contactus-text1'>Contact Us</p>
        <img src={image3} height='20'></img>
        <img src={image5} height='20' className='cimg1'></img>
        <img src={image5} height='20' className='cimg2'></img>
        <img src={image5} height='20' className='cimg3'></img>
        <img src={image4} height='20' className='cimg4'></img>

      </div>
     
    </div>
  );
}

export default footer;
