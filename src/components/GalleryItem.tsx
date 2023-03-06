import React from "react";

const GalleryItem: React.FC = () => {
  const itemId = window.location.pathname.split("/").pop();
  const lookup: any = {
    first: {
      title: "Neil Patrick Harris",
      imgSrc:
        "https://storage.googleapis.com/anish-assets/neil_patrick_harris.jpg",
      caption:
        "This portrait is of Neil Patrick Harris, one of my favorite actors. I drew him because his show (How I Met Your Mother) and his SNL skits helped me bond with my friends over lunch. The medium for this portrait is colored pencil (PrismaColors). I like how his face turned out, but I'm not great at drawing ears so they came out a bit off.",
    },
    second: {
      title: "Eminem",
      imgSrc: "https://storage.googleapis.com/anish-assets/eminem.jpg",
      caption:
        "It's strange how much your tastes change over time. I'm don't really like rap anymore, but back when I did during highschool, I listened to Eminem a lot. I liked his flow, and was inspired to sketch this portrait of him. The medium is colored pencil. While I really like how his jacket turned out, and I'm proud of his face, I don't like the hand. Drawing hands in this position is very difficult, so I'm glad it at least looks like one, even if it's a bit messy.",
    },
    third: {
      title: "Ryan Reynolds",
      imgSrc: "https://storage.googleapis.com/anish-assets/ryan_reynolds.jpg",
      caption:
        "This portrait is of Ryan Reynolds. I just think he's a hilarious person and love his movies (especially Deadpool). He's just a genuinely funny person so I was inspired to draw him. While his face in this portrait isn't perfect, I feel like I captured his grin pretty well, even if the facial hair is messy. The ears are also done better than my drawing of Neil Patrick Harris.",
    },
    fourth: {
      title: "Conor McGregor",
      imgSrc: "https://storage.googleapis.com/anish-assets/conor_mcgregor.jpg",
      caption:
        "The story behind this portrait is sweet and actually has nothing to do with Conor. Early in my Sophomore year, a kid moved to my high school. His name was Krish, and we hung out a few times. I went to his house and we just played pool and watched one of Conor's fights, and whenever I think of this picture, I think of those times. It's nostalgic, and why I sketched this. The medium is colored pencils, and I'm proud of the look I put in his eyes. I really think I captured the look he has at a press conference before a fight.",
    },
    fifth: {
      title: "G-Eazy",
      imgSrc: "https://storage.googleapis.com/anish-assets/g_eazy.jpg",
      caption:
        "Similar to the story behind the Conor picture, that same friend, Krish, and I went to see G-Eazy perform. I don't remember much about the night, nor any of his songs, but I remember my friend. I also really loved G-Eazy's leather jacket and I feel like I captured it well here. The medium is charcoal this time, instead of my usual colored pencils. I'm dissatisfied by the hair in this portrait though, but hair has never been my strong suit.",
    },
    sixth: {
      title: "Patrick Dempsey",
      imgSrc: "https://storage.googleapis.com/anish-assets/patrick_dempsey.jpg",
      caption:
        "When I was in high school, I jumped on the Grey's Anatomy bandwagon, even though I had absolutely no intention of becoming a doctor, and in that show, I loved Patrick Dempsey's character. He plays his role so well, and on a bunch of SNL skits with Jimmy Kimmel. I just thought he was cool, so I sketched him. The medium is colored pencil, and I'm particularly proud of the hair in this sketch. It looks properly wavy and curly like it does when he's playing Derek in Greys.",
    },
    seventh: {
      title: "Green Arrow",
      imgSrc: "https://storage.googleapis.com/anish-assets/stephen_amell.jpg",
      caption:
        "Most CW superhero shows are mediocre, but I geniunely liked the first few seasons of Green Arrow. It was gritty and dark and I liked the writing, even though it was pretty predictable. I liked the design of Green Arrow's suit too, so I sketchd him in it. The medium of this portrait is charcoal. While I'm not happy with the hood, I think I did well on the eyes.",
    },
  };
  const itemMetadata = lookup[itemId!];
  return (
    <section className="item">
      <div className="item-title">
        <h1>{itemMetadata.title}</h1>
      </div>
      <div>
        <img
          src={itemMetadata.imgSrc}
          alt={itemMetadata.title}
          className="item-img"
        />
      </div>
      <div className="item-caption">{itemMetadata.caption}</div>
    </section>
  );
};

export default GalleryItem;
