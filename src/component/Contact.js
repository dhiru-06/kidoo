import image3 from '../images/image3.png';
import './Contact.css';

export function Contact() {
    return (
        <div className="container">
            <div className="contact">
            <img src={image3} className="image3" alt="cover"/>
            <h2>Contact Us</h2>
            </div>
            
            <form action="#">
                <label for="fname">Full Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

                <label for="email">Email</label>
                <input type="email" id="ename" name="email" placeholder="Enter your email.."></input>

                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number"></input>

                <label for="country">Country</label>
                        <select id="country" name="country">
                        <option value="australia">India</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                        </select>

                
                        <label for="subject">Message</label>
                     <textarea id="subject" name="subject" ></textarea>

                     <input type="submit" value="Submit"></input>
                     
            </form>
        </div>
        
    )
  }