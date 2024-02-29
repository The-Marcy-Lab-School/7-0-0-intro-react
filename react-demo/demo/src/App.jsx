/* eslint-disable react/prop-types */
import "./App.css"

const Header = () => {
  return <h1>My Pet Pics</h1>;
};

const NameHeader = (props) => {
  const { name } = props;
  return (
    <h2>Hello! My name is {name}</h2>
  )
}

const Message = ({text}) => {
  return <p className="red">{text}!</p>;
};

const Messages = () => {
  return (
    <div>
      <Message text="Check out my cats"/>
      <Message text="I have a bunch of pets"/>
      <Message text="I love you"/>
    </div>
  );
};

const InstagramPost = () => {
  return (
    <figure>
      <img alt="cat pic" src="https://images.ctfassets.net/ub3bwfd53mwy/6PhlUjXZqaHqu6LqJ5G3X3/ee400fdfaf784e3d530a212ce3453c48/1_Image.jpg?w=750" />
      <figcaption>Check out my cute cat!</figcaption>
    </figure>
  );
};

const InstagramPosts = ({src, caption}) => {
  return (
    <figure>
      <img alt={caption} src={src} />
      <figcaption>Check out my cute {caption}</figcaption>
    </figure>
  );
};

const pictures = [
  { src: "https://as2.ftcdn.net/v2/jpg/00/97/58/97/1000_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg", caption: "cat!" },
  { src: "https://pics.craiyon.com/2023-09-21/a89d19bb3ff74bfe952f316b63e69b4e.webp", caption: "dog!" },
  { src: "https://justsweetdesigns.com/cdn/shop/products/Happyducklingwatermarked.png?v=1683265905&width=2200", caption: "duck!" },
];

const InstagramPostsList = pictures.map((picture, idx) => {
  return (
    <InstagramPosts key={idx} src={picture.src} caption={picture.caption} />
  );
});

const PicturesList = () => {
  return <div>{InstagramPostsList}</div>;
};

const App = () => {
  return (
    <>
      <Header />
      <NameHeader name="Gonzalo"/>
      <Messages />
      <InstagramPost />
      <PicturesList />
    </>
  );
};


export default App
