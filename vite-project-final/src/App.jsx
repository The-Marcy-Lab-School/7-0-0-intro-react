import './App.css'

/*
<Header headerText={"My Pet Pics!!"} />

// props are turned into an object that are passed to the component.
// when we render the component, its like we invoke the function
// and pass in an object called props:

const props = { headerText: "My Pet Pics!!" }
Header(props)

// We then destructure the object from the `props` parameter inside the component:
// const { headerText } = props;
*/
const Header = ({ headerText }) => <h2>{headerText}</h2>;



// Prop: a value that is given to this component by the parent
const InstagramPost = ({ pictureData }) => {
  return (
    <figure data-id={pictureData.id}>
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
  id: 1,
  alt: "Reggie the cat",
  src: "images/cat.jpeg",
  caption: "Check out my cute cat Reggie!"
}
const dogPicture = {
  id: 2,
  alt: "Robert the dog",
  src: "images/dog.jpeg",
  caption: "Check out my cute dog Robert!"
}
const duckPicture = {
  id: 3,
  alt: "Daffy the Duck",
  src: "images/duck.jpeg",
  caption: "Check out my cute duck Daffy!"
}

const pictures = [catPicture, dogPicture, duckPicture]
// we want to render an InstagramPost for each picture

const PicturesList = ({ pictures }) => {
  return (
    <ul>
      {
        pictures.map((picture) => {
          return (
            <li key={picture.id}>
              <InstagramPost pictureData={picture} />
            </li>
          )
        })
      }
    </ul>
  )
}


// Root component
function App() {
  // Component composition
  return (
    <>
      <h1>My Website</h1>
      <Header headerText={"My Pet Pics!!!!"} />

      <InstagramPost pictureData={catPicture} />
      <InstagramPost pictureData={dogPicture} />
      <InstagramPost pictureData={duckPicture} />

      <PicturesList pictures={pictures} />

      <Header headerText={"About me"} />
      <p>My name is ben and I love animals.</p>
    </>
  )
}

export default App
