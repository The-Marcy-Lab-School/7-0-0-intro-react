import './App.css'

const Header = () => {
  return <h1>My Pet Pics</h1>;
};

const InstagramPost = () => {
  const catData = {
    alt: "Reggie the cat",
    src: "images/cat.jpeg",
    caption: "Check out my cute cat Reggie!"
  }

  return (
    <figure>
      <img
        src={catData.src}
        alt={`Photo of ${catData.alt}`}
        className="insta-pic"
      />
      <figcaption style={{ fontStyle: 'italic' }}>{catData.caption}</figcaption>
    </figure>
  );
};

const App = () => {
  return (
    <section>
      <Header />
      <InstagramPost />
    </section>
  );
};

export default App
