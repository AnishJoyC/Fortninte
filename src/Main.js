import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => {
  return (
    <>
      <div className="header py-5">
        <h1
          className="mt-5 mb-5"
          style={{
            fontFamily: "Roboto, sans-serif",
            fontSize: "43px",
            fontWeight: "200",
            lineHeight: "48px",
            letterSpacing: "0.96px",
            color: "#ffffff",
          }}
        >
          Epic Games : An American Video Game And Software Developer <br /> And
          Publisher Based In Cary, North Carolina.
        </h1>
        <div className="image-container">
          <img
            src="https://wallpapers.com/images/featured/fortnite-pictures-b5kfcchwazwiz3cs.jpg"
            alt="Fortnite"
            className="img-fluid my-4 "
          />
        </div>
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "27px",
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          Create, play, and battle with friends for free in Fortnite.Be the last
          player standing in Battle Royale and Zero Build experience a concert
          or live event,or <br /> discover a million creator made games ,
          including racing parkour ,zombie survival and more .Each Fortnite
          island has <br /> an individual age rating so you can find the one
          that's right for your friends.Find it all in fortnite_Drop in.
        </p>
        <Button
          className="mt-4"
          style={{
            width: "416px",
            height: "60px",
            borderColor: "unset",
            backgroundColor: "white",
            fontFamily: "Poppins, sans-serif",
            fontSize: "19px",
            fontWeight: "400",
            lineHeight: "28.5px",
            letterSpacing: "0.96px",
            color: "black",
            textAlign: "center",
            borderRadius: "unset",
          }}
        >
          Visit Website
        </Button>
      </div>

      <Container>
        <Row className="my-5">
          <Col md={4}>
            <div>
              <img
                src="https://mrwallpaper.com/images/high/get-ready-for-a-thrilling-action-gaming-experience-5osqdlgva0psqd4p.webp"
                alt="Open-world exploration"
                className="img-fluid w-75 mb-3"
                style={{ height: "347px", width: "347px", objectFit: "cover" }}
              />

              <p
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "larger",
                }}
              >
                Explore large, destructible <br /> environments where no two
                games
                <br />
                are ever the same.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <img
                src="https://cdn2.unrealengine.com/Fortnite/home-v2/ASPOT_Image-3840x2308-35330d4be45373960682e7ef88da5b4c2d8e790f.jpg"
                alt="Open-world exploration"
                className="img-fluid mb-3"
                style={{ height: "347px", width: "347px", objectFit: "cover" }}
              />

              <p
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "larger",
                }}
              >
                Team up with friends by sprinting, <br /> climbing and smashing
                your way.
                <br />
                To earn your Victory Royale
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div s>
              <img
                src="https://cdn2.unrealengine.com/26br-keyart-noshadow-1920x1080-3358aa3ee425.jpg"
                alt="Open-world exploration"
                className="img-fluid  mb-3"
                style={{ height: "347px", width: "347px", objectFit: "cover" }}
              />

              <p
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "larger",
                }}
              >
                Discover even more ways to play <br />
                across thousands of Creator-Made <br />
                Game Genres
              </p>
            </div>
          </Col>
        </Row>

        <div className="pt-5">
          <h2
            className="pt-5"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 200,
              fontSize: "42px",
              lineHeight: "48px",
            }}
          >
            Our Contribution
          </h2>
          <p
            className="pt-3"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "27px",
              textAlign: "center",
              color: "#ffffff",
            }}
          >
            Our core offering extends beyond mere profit generation; we
            emphasize the growth and active involvement of our user <br />{" "}
            community. Collaborating with us represents an investment, rather
            than a mere expenditure. Our dedication to providing
            <br /> distinctive digital interactions guarantees unparalleled
            benefits for our clientele.
          </p>
          <Row className="mt-5 pt-5 pb-5">
            <Col md={4}>
              <h3
                style={{
                  fontWeight: 200,
                  fontSize: "80px",
                  lineHeight: "17.57px",
                  textTransform: "capitalize",
                }}
              >
                5M
              </h3>
              <p
                className="pt-5"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 300,
                  fontSize: "25px",
                  lineHeight: "29.3px",
                  textAlign: "center",
                  textTransform: "capitalize",
                }}
              >
                Daily User
                <br /> Engagements
              </p>
            </Col>
            <Col md={4}>
              <h3
                style={{
                  fontWeight: 200,
                  fontSize: "80px",
                  lineHeight: "17.57px",
                  textTransform: "capitalize",
                }}
              >
                $500K
              </h3>
              <p
                className="pt-5"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 300,
                  fontSize: "25px",
                  lineHeight: "29.3px",
                  textAlign: "center",
                  textTransform: "capitalize",
                }}
              >
                Revenue Surge for our an <br /> Platform
              </p>
            </Col>
            <Col md={4}>
              <h3
                style={{
                  fontWeight: 200,
                  fontSize: "80px",
                  lineHeight: "17.57px",
                  textTransform: "capitalize",
                }}
              >
                10X
              </h3>
              <p
                className="pt-5"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 300,
                  fontSize: "25px",
                  lineHeight: "29.3px",
                  textAlign: "center",
                  textTransform: "capitalize",
                }}
              >
                ROAS on all our <br /> marketing campaigns
              </p>
            </Col>
          </Row>
        </div>

        <div className="my-5">
          <h4
            className="mt-5 pt-5 pb-5"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 300,
              fontSize: "45px",
              lineHeight: "48px",
              letterSpacing: "4px",
            }}
          >
            Interested In Delving Deeper Into The Project?
          </h4>
          <p
            className="pb-5"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 300,
              fontSize: "28px",
              lineHeight: "32.81px",
            }}
          >
            If you'd like to explore further details about our initiatives or
            any of our <br />
            affiliated brands, don't hesitate to connect. You can reach out to
            us via <br />
            email at <span style={{ fontWeight: 400 }}>hello@abc.com</span> or
            give us a call at
            <span style={{ fontWeight: 400 }}> +91 420 20802730.</span>
          </p>
          <Button
            style={{
              backgroundColor: "black",
              color: "white",
              width: "23%",
              marginRight: "5%",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "27px",
              border: "1px solid white",
              borderRadius: "unset",
              padding: "10px 20px",
              textAlign: "center",
              display: "inline-block",
            }}
          >
            Sign up on Skype
          </Button>
          <Button
            style={{
              backgroundColor: "white",

              width: "23%",
              color: "black",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "27px",
              border: "1px solid white",
              padding: "10px 20px",
              textAlign: "center",
              display: "inline-block",
              borderRadius: "unset",
            }}
          >
            Contact Us
          </Button>
        </div>

        <footer className="text-center mt-5 pb-5">
          &copy; 2019-2024 ABC Technology Solutions — UAE. All Rights Reserved.
        </footer>
      </Container>
    </>
  );
};

export default Main;
