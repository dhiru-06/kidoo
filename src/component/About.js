import image2 from '../images/image2.png';
import './About.css';

export function About() {
    return (
        <div className="container">
            
            <img src={image2} className="image2" alt="cover"/>

            <div className="abt">
                <h2>About Us</h2>
                <ul>
                    <li>
                    We are owned and operated by a group of parents from all over the world. Our founders were unhappy with the quality of the early 
                     education available in their cities, so they got together to build a truly 21st century program.
                    </li>
                    <br></br>
                    <li>
                    We now have schools around the globe, which bring together the world’s best
                     early years practices to deliver the finest preschool experience for children and parents alike.
                    </li>
                    <br></br>
                    <li>
                    Children and teenagers learn by observing, listening, exploring, experimenting and asking questions. 
                    Being interested, motivated and engaged in learning is important f0r children once they start
                     school. It can also help if they understand why they're learning something
                    </li>
                    
                </ul>
            </div>
        </div>
     
    );
  }