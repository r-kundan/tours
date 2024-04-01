import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../style/home.css";
import SearchBar from "../shared/SearchBar";

function Home() {
  return (
    <div id="top-div">
      <section>
        <main>
          <div id="container">
            <div id="text-container">
              <div>
                <TypeAnimation
                  sequence={[
                    "Discover New Horizons",
                    2000,
                    " Discover New Horizons",
                    2000,
                    " Discover New Horizons",
                    2000,
                  ]}
                  speed={30}
                  repeat={Infinity}
                  style={{ color: "chocolate", fontSize: "30px", fontWeight:800 }}
                />
              </div>
              <h6>
                With KundanVista, embark on customized adventures and connect as
                you travel. Plan, share, and enjoy every step of your journey.
              </h6>
            </div>

            <div id="img-container">
              <div className="img1">
                <img src="https://source.unsplash.com/tQpypKA92k8" alt="" />
              </div>
              <div className="img2">
                <img src="https://source.unsplash.com/3VTZloIMFP0" alt="" />
              </div>
              <div className="img3">
                <img src="https://source.unsplash.com/8jQFXXSTvbw" alt="" />
              </div>
            </div>
          </div>
       
<SearchBar/>
        </main>
      </section>

      <section>
        <div id="travel-smarter">
          <h1>Travel Smarter</h1>
          <h4>
            Unlock the full potential of your journeys with real-time insights
            and intuitive planning tools on KundanVista.
          </h4>
          <div id="travel-counter">
            <div>
              <b>500,000</b>
              <h6>Happy Travelers</h6>
            </div>
            <div>
              <b>120</b>
              <h6>countries vistied</h6>
            </div>
            <div>
              <b>500,000</b>
              <h6>Plans Made</h6>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id="seamless-planning">
          <div className="seam-planning-text">
            <h1>Seamless Planning</h1>
            <h4>
              Our innovative platform takes the hassle out of travel planning
              with easy-to-use tools that put the world at your fingertips.
            </h4>


            <div className="seamless-planning-content">
              <div className="planning">
                <i class="fa-solid fa-suitcase-rolling"></i>
                <div>
                  <h4>Trip Alerts</h4>
                  <p>
                    Get real-time notifications about your friends' trips and
                    never miss out on joining spontaneous adventures.
                  </p>
                </div>
              </div>


              <div className="planning">
                <i class="fa-solid fa-envelope"></i>
                <div>
                  <h4>Live Maps</h4>
                  <p>
                    Navigate with ease using custom maps that keep you on track
                    and showcase hidden gems along your route.
                  </p>
                </div>
              </div>
              <div className="planning">
                <i class="fa-solid fa-bell"></i>
                <div>
                  <h4>Group Sync</h4>
                  <p>
                    Collaborate on trip details with your companions, ensuring
                    everyone stays informed and engaged.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="seam-planning-img">
            <img src="https://source.unsplash.com/1NzJggtJ6j4" alt="" />
          </div>
        </div>
      </section>

      <section>
        <div id="need">
<h1>Need to know</h1>
<h4>Your go-to resource for quick answers. KundanVista's FAQ addresses all your travel planning questions promptly.
</h4>
<div id="need-explain">
  <div className="explain">
    <h5>
    Privacy Protected?
    </h5>
    <p>Your security is paramount. At KundanVista, we fiercely protect your data with industry-leading privacy measures.
</p>
  </div>
  <div  className="explain">
    <h5>
    Can I Edit Trips?

    </h5>
    <p>Absolutely! Edit and customize your itinerary anytime to reflect changes or new inspirations in your travel plans.

   </p>
  </div>
  <div  className="explain">
    <h5>
    Offline Access?
    </h5>
    <p>Yes! Download maps and itineraries for offline use, ensuring you have essential information on hand, no matter where you are.

</p>
  </div>
  <div  className="explain">
    <h5>
    Support Available?
    </h5>
    <p>Our dedicated support team is available 24/7 to help with any issues or questions you have during your travel adventure.

   </p>
  </div>
</div> 
        </div>
      </section>
    </div>
  );
}
export default Home;