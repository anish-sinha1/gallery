import React from "react";

import GalleryCard from "./GalleryCard";

const Landing: React.FC = () => {
  return (
    <>
      <div className="landing">
        Hey, my name is Anish, and this is my portfolio. I like to draw
        portraits, and I prefer simple pencil/colored pencil as my medium.
        Please click on each picture to see more. <br /> <br /> I was seventeen
        when I drew most of these, and the subject matter reflects the media I
        consumed at the time. I drew singers, and actors mostly, and each
        portrait has a story.
        <br />
        <strong>
          If you're here from the University of Chicago admissions committee, I
          want you to know I made this website <em>specifically</em> for you.
          You can see the full source code on my{" "}
          <a
            href="https://github.com/anish-sinha1/gallery"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </strong>
      </div>
      <div className="gallery">
        <div className="gallery-title">
          <h1>Gallery</h1>
        </div>
        <GalleryCard
          title="Neil Patrick Harris"
          imageSrc="https://storage.googleapis.com/anish-assets/neil_patrick_harris.jpg"
        ></GalleryCard>
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
          title="Derek Shepherd"
          imageSrc="https://storage.googleapis.com/anish-assets/patrick_dempsey.jpg"
        ></GalleryCard>
        <GalleryCard
          title="Green Arrow"
          imageSrc="https://storage.googleapis.com/anish-assets/stephen_amell.jpg"
        ></GalleryCard>
      </div>
    </>
  );
};

export default Landing;