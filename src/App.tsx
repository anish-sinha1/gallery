import React from "react";
import Navbar from "./components/Navbar";
import GalleryCard from "./components/GalleryCard";

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="landing">
        Hey, my name is Anish, and this is my portfolio. I like to draw
        portraits, and I prefer simple pencil/colored pencil as my medium.
        Please click on each picture to see more. <br />{" "}
        <strong>
          If you're here from the University of Chicago admissions committee, I
          want you to know I made this website <em>specifically</em> for you.
          You can see the full source code here:
        </strong>
      </div>
      <div className="gallery">
        <div className="gallery-title">
          <h1>Gallery</h1>
        </div>
        <GalleryCard
          title="Eminem"
          imageSrc="https://storage.googleapis.com/anish-assets/eminem.jpg"
        ></GalleryCard>
        <GalleryCard
          title="Deadpool"
          imageSrc="https://storage.googleapis.com/anish-assets/ryan_reynolds.jpg"
        ></GalleryCard>
        <GalleryCard
          title="Conor McGregor"
          imageSrc="https://storage.googleapis.com/anish-assets/conor_mcgregor.jpg"
        ></GalleryCard>
        <GalleryCard
          title="G-Eazy"
          imageSrc="https://storage.googleapis.com/anish-assets/g_eazy.jpg"
        ></GalleryCard>
        <GalleryCard
          title="Barney Stinson"
          imageSrc="https://storage.googleapis.com/anish-assets/neil_patrick_harris.jpg"
        ></GalleryCard>
        <GalleryCard
          title="Derek Shepherd"
          imageSrc="https://storage.googleapis.com/anish-assets/patrick_dempsey.jpg"
        ></GalleryCard>
        <GalleryCard
          title="Green Arrow"
          imageSrc="https://storage.googleapis.com/anish-assets/stephen_amell.jpg"
        ></GalleryCard>
      </div>
    </div>
  );
};

export default App;
