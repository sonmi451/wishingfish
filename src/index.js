import React from "react";
import ReactDOM from "react-dom";
import FadeIn from 'react-fade-in';
import "./style.css";

////////////////////////////////////////////////////////////////////////////////
// Variables ///////////////////////////////////////////////////////////////////

const elements = {
    title: document.getElementById("title"),
    content: document.getElementById("content"),
};

const pics = {
    pic1: "./Thankyou.jpg",
    pic2: "./Congratulations.jpg",
    pic3: "./Happybirthday.jpg",
    pic4: "./Happybirthday2.jpg",
    pic5: "./Hello.jpg",
    pic6: "./Hope.jpg",
};

////////////////////////////////////////////////////////////////////////////////
// Classes /////////////////////////////////////////////////////////////////////

class Title extends React.Component {

    state = { display: helloPage () }

    displayHello = () => {
        this.setState({ display: helloPage () })
        }

    displayGallery = () => {
        this.setState({ display: galleryPage () })
        }

    render() {
        return (
            <div>
              <h1>wishing fish cards</h1>
              <hr />
              <h2>
                <a onClick={this.displayHello}>home</a>&nbsp;.&nbsp;
                <a onClick={this.displayGallery}>gallery</a>&nbsp;.&nbsp;
                <a href="https://www.etsy.com/uk/shop/WishingFishCards" target="_blank">shop</a>
              </h2>
            </div>
        );
    }
}

class Hello extends React.Component {
    render() {
        return (
            <FadeIn
            transitionDuration="2000">
            <img className="hello" src="./Hello.jpg" />
            </FadeIn>
        );
    }
}

class Gallery extends React.Component {
  render() {
    return (
        <FadeIn
        transitionDuration="2000"
        delay="500">
            <div className="squarePicture"><img alt="" className="gallery" src={pics.pic1} /></div>
            <div className="squarePicture"><img alt="" className="gallery" src={pics.pic2}  /></div>
            <div className="squarePicture"><img alt="" className="gallery" src={pics.pic3}  /></div>
            <div className="squarePicture"><img alt="" className="gallery" src={pics.pic4}  /></div>
            <div className="squarePicture"><img alt="" className="gallery" src={pics.pic5}  /></div>
            <div className="squarePicture"><img alt="" className="gallery" src={pics.pic6}  /></div>
        </FadeIn>
    );
  }
}

////////////////////////////////////////////////////////////////////////////////
// Functions ///////////////////////////////////////////////////////////////////

function helloPage () { ReactDOM.render(<Hello />, elements.content); };
function galleryPage () { ReactDOM.render(<Gallery />, elements.content); };

////////////////////////////////////////////////////////////////////////////////
// display elements /////////////////////////////////////////////////////////////

ReactDOM.render(
    <Title />,
    elements.title,
);
