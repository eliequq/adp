import './MainContentPage2.css'
import Frame from '/Frame.png'
import MicTricks from '/micTricks.png'
import Thebest from '/Thebest.png'
export default function MainContentPage2 (){


    return (
        <section className>
       <div className='nav-panel'> 
        <h1 className="title">Latest episodes</h1> 
        <button className="button__btn">View Episode Details</button>
         </div>
       <div className="episode-container">
      
      <div className="card">
        <div className="image-container">
          <img
            src={Frame} 
            alt=""
          />
        </div>
        <div className="content">
          <span className="tag">Gear</span>
          <h2 className="episode-title">Should you get outboard audio gear?</h2>
          <p className="description">
            Is hardware really worth it when it comes to podcasting? The answer is... it depends. 
            Here’s our reasons on why you might want to consider picking something up.
          </p>
          <button className="button">View Episode Details</button>
        </div>
      </div>
    </div>

    <div className="episode-container">
      
      <div className="card">
        <div className="image-container">
          <img
            src={MicTricks} 
            alt=""
          />
        </div>
        <div className="content">
          <span className="tag">Tips & Tricks</span>
          <h2 className="episode-title">Mic tricks to take you to the next level</h2>
          <p className="description">
          Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.
          </p>
          <button className="button">View Episode Details</button>
        </div>
      </div>
    </div>

    <div className="episode-container">
      <div className="card">
        <div className="image-container">
          <img
            src={Thebest} 
            alt=""
          />
        </div>
        <div className="content">
          <span className="tag">Gear</span>
          <h2 className="episode-title">The best microphone under $200</h2>
          <p className="description">
          With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.
          </p>
          <button className="button">View Episode Details</button>
        </div>
      </div>
    </div>
    </section>
    )
}