import image1 from '../images/image1.png';
import './Home.css';

export function Home() {
    return (
        <div id="Home">
            <div className="container">
                <div className="content">
                     <h1>Early learning, Reimagined</h1>
                     <p>Give children toys that are powered by their imagination, not by batteries</p>
                </div>

                 <img src={image1} className="image1" alt="cover"/>
            </div>

             <div className="contentt">
                     <h2>Welcome to kidoo</h2>
                         <div className="items">
                             <div class="item">
                                 <i class="fas fa-futbol fa-2x"></i>
                                     <div>
                                        <h3> Play</h3>
                                        <p>As a parent, you probably love to see your child playing. It’s incredible to hear
                                            their ideas and to learn they create
                                             .  
                                            </p>
                                    </div>
                                 </div>
                            <div class="item">
                            <i class="fab fa-leanpub fa-2x"></i>
                                <div>
                                    <h3>Learn</h3>
                                    <p>Play allows children to use their creativity while developing their imagination, 
                                         and emotional strength </p>
                                </div>
                            </div>
                            <div class="item">
                            <i class="fas fa-shapes fa-2x"></i>
                                <div>
                                    <h3>Create</h3>
                                    <p>Students learn critical thinking skills, 
                                        expand their range of knowledge and increase their social and creativity
                                     </p>
                                </div>
                            </div>
                 </div>
             </div>
             <footer className="main-footer bg-dark">
   
                    <div class="social">
                        <a href="https://www.facebook.com/profile.php?id=100010344602940"><i class="fab fa-facebook"></i></a>
                         <a href="https://www.instagram.com/dhiru06/"><i class="fab fa-instagram"></i></a>
                         <a href="https://twitter.com/dhiru_06"><i class="fab fa-twitter"></i></a>

                         <p><a href="#">Copyright</a> &copy;<a href="#">kidoo</a></p>
                    </div>

             </footer>

        </div>
        
     
    );
  }