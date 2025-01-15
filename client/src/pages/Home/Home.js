import React from "react";
import './Home.css';
import Navbar from "../../components/Navbar";

// import SIgnedIn from "../../components/SIgnedIn";
import Jumbotron from "../../components/Jumbotron";
import jordan4BlackNGrey from '../../images/jordan4BlackNGrey.png';
import jordan4WhiteOreos from '../../images/jordan4WhiteOreos.png';
import jordan4 from '../../images/jordan4.png';
import jordan12Breeds from '../../images/jordan12Breeds.png';
import jordan1red from '../../images/jordan1red.png';
import Footer from "../../components/Footer";

const Home = () => {

    const sneakerImages = [
        jordan4BlackNGrey,
        jordan4WhiteOreos,
        jordan4,
        jordan12Breeds,
        jordan1red,
        jordan4BlackNGrey
    ];

    return (
        <div>
            <Navbar />    
            <Jumbotron />

            <div className="sneaker-images-container">
                <div className="image-row">
                    {sneakerImages.slice(0, 3).map((image, index) => (
                        <img key={index} src={image} alt={`sneaker-${index}`} className="sneaker-image1" />
                    ))}
                </div>
                <div className="image-row">
                    {sneakerImages.slice(3, 6).map((image, index) => (
                        <img key={index} src={image} alt={`sneaker-${index + 3}`} className="sneaker-image1" />
                    ))}
                </div>
            </div>
      
            <Footer />
        </div>
    )
}

export default Home;
