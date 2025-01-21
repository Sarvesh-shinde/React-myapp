import defaultImage from './assets/default.jpg'
const Image = () => {
  return (
    <div>
        <img src={defaultImage} height="200" width="200"/>
        <br/>
        <img src={'/src/assets/default.jpeg'}/>
    </div>
  )
}
export default Image 