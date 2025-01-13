import logotipIII from '/left-III.svg';
import icon1 from '/icon1.svg';
import icon2 from '/icon2.svg';
import icon3 from '/icon3.svg';
import icon4 from '/icon4.svg';
import icon5 from '/icon5.svg';
import mic from '/mic.png';
import './MainContentPage.css';

export default function MainContentPage() {
    return (
        <section className="maincon">
            <div className="maincon-image">
                <img src={mic} alt="mic" />
            </div>
            <div className="maincon-content">
                <div className="maincon-icon">
                    <img src={logotipIII} alt="logotipIII" />
                </div>
                <h1>
                    Take your podcast to the <span><br />next level</span>
                </h1>
                <p>Listen on</p>
                <div className="icons">
                    <img src={icon1} alt="Spotify" />
                    <img src={icon2} alt="2" />
                    <img src={icon3} alt="SoundCloud" />
                    <img src={icon4} alt="4" />
                    <img src={icon5} alt="5" />
                </div>
            </div>
            
        </section>
         

         
    ) 
}