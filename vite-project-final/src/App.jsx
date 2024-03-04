import './App.css'

const Header = () => {
  return <h1>My Pet Pics</h1>
}


// Prop: a value that is given to this component by the parent
const InstagramPost = ({ pictureData }) => {
  return (
    <figure>
      <img
        src={pictureData.src}
        alt={pictureData.alt}
        style={{ width: '100%', borderRadius: '20px' }}
      />
      <figcaption>Caption: {pictureData.caption.toUpperCase()}</figcaption>
    </figure>
  )
}

// Object that we pass into the component as a "prop" (property)
const catPicture = {
  alt: "Reggie the cat",
  src: "images/cat.jpeg",
  caption: "Check out my cute cat Reggie!"
}
const dogPicture = {
  alt: "Robert the dog",
  src: "images/dog.jpeg",
  caption: "Check out my cute dog Robert!"
}
const duckPicture = {
  alt: "Daphey the Duck",
  src: "images/duck.jpeg",
  caption: "Check out my cute duck Daphey!"
}

// Root component
function App() {
  // Component composition
  return (
    <>
      <h1>My Pet Pics</h1>
      <InstagramPost pictureData={catPicture} />
      <InstagramPost pictureData={dogPicture} />
      <InstagramPost pictureData={duckPicture} />
    </>
  )
}

export default App
