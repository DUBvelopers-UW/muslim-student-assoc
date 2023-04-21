import { NavLink } from "react-router-dom";
import Carousel from "../components/Carousel";

const Home = () => {
    return (
        <div className="homePage">
            <div className="home-header header-background-purple">
                <div className="home-header-txt">
                    <h1>Welcome, we are the <br/>Muslim Students Association!</h1>
                    <h3>AT THE UNIVERSITY OF WASHINGTON</h3>
                    <p>Join if you want to be a part of a supportive <br/>and inclusive community of Muslims on campus!</p>

                    <button className="purple-button"><NavLink className="purple-btn-link" to="/events/get-involved">GET INVOLVED</NavLink></button>
                </div>
            </div>
            <div className="info-text">
                <h2 className="centered">A Glimpse of MSA at UW</h2>
                <p className="centered">MSA serves as the center of Muslim life on campus. From our weekly activities, 
                quarterly events, social activities, classes, charitable activities, and programs at 
                the Islamic House,
                MSA has become a highlight of many students’ college experiences at the UW. As one 
                of UW’s most active student organizations, MSA is a place to meet other Muslims, get 
                involved in engaging activities, and really make the most out of your time at UW!</p>
            </div>
            <div className="home-carousel">
                <Carousel />
            </div>
        </div>
    );
};
  
export default Home;