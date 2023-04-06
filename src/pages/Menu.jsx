import React, { useEffect, useState } from "react";
import "./Menu.css";
import HulmLogo from "../assets/hulmStudionsLogo.png";
import dessertCover from "../assets/dessert-cover.jpg";
import drinksCover from "../assets/drinks-cover.jpg";
import lunchCover from "../assets/lunch-cover.jpg";
import inHouseKaakCover from "../assets/kaak-cover.jpg";
import breakfastCover from "../assets/breakfast-cover.jpg";
import sideImage from "../assets/side-image.jpg";
import illustration from "../assets/Untitled design.png";
import { Link } from "react-router-dom";

function Menu() {
  const categories = [
    {
      id: 1,
      name: "Drinks",
      path: "drinks",
      url: drinksCover,
    },
    {
      id: 2,
      name: "Breakfast",
      path: "breakfast",
      url: breakfastCover,
    },
    {
      id: 3,
      name: "Lunch",
      path: "lunch",
      url: lunchCover,
    },
    {
      id: 4,
      name: "Dessert",
      path: "dessert",
      url: dessertCover,
    },
    {
      id: 5,
      name: "In-House Kaak",
      path: "kaak",
      url: inHouseKaakCover,
    },
  ];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function allImagesLoaded() {
      const images = document.getElementsByTagName("img");
      for (let i = 0; i < images.length; i++) {
        if (!images[i].complete) {
          return false;
        }
      }
      return true;
    }

    function handleImageLoad() {
      if (allImagesLoaded()) {
        setIsLoading(false);
      }
    }

    const images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
      images[i].addEventListener("load", handleImageLoad);
    }

    return () => {
      for (let i = 0; i < images.length; i++) {
        images[i].removeEventListener("load", handleImageLoad);
      }
    };
  }, []);

  return (
    <div className="flex">
      <div className="side-image-wrapper">
        {isLoading ? (
          <div
            className="skeleton-box"
            style={{ width: "100%", height: "100%" }}
          ></div>
        ) : (
          <img className="side-image" src={sideImage} alt="" />
        )}
      </div>
      <div className="menu">
        {isLoading ? (
          <div
            className="skeleton-box illustration-skeleton"
            style={{
              width: "120px",
              height: "130px",
              margin: "120px auto 0 auto",
            }}
          ></div>
        ) : (
          <img className="illustration" src={illustration} alt="" />
        )}
        <div className="break"></div>
        <div className="covers">
          <h1 className="menu-header">View Menu</h1>
          {categories.map((item, index) => (
            <Link to={`/${item.path}`} key={index}>
              {isLoading ? (
                <div
                  className="skeleton-box"
                  style={{ width: "100%", height: "200px" }}
                ></div>
              ) : (
                <div className="cover-wrapper">
                  <img className="cover" src={item.url} alt="" />
                </div>
              )}{" "}
              <p className="cover-name" href="">
                {item.name}
              </p>
              <br />
              <br />
              <br />
            </Link>
          ))}
        </div>

        <div className="footer">
          <a
            href="https://www.google.com/search?q=cafe+levant&rlz=1C1ONGR_en-GBAU994AU994&oq=cafe+levant&aqs=chrome.0.35i39j46i20i175i199i263i512j69i59j46i175i199i512j0i10i512j69i60l3.1865j0j9&sourceid=chrome&ie=UTF-8#lrd=0x6b12bbb555f8ed79:0x4dab73769e9cba79,3,,,,"
            target="_blank"
          >
            <button className="review">Love us? Leave us a review</button>
          </a>
          <div className="break"></div>
          <figure className="hulm-logo-wrapper">
            Powered by <img className="hulm-logo" src={HulmLogo} alt="" />
          </figure>
          <p className="hulm-logo-description">
            Convergence of culture, creativity and branding.
          </p>
          <a
            href="https://theright.fit/talent/hulm-studios"
            className="learn-more"
            target="_blank"
          >
            Learn More
          </a>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Menu;
