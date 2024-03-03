// Write your code here
import Header from '../Header'
import './index.css'

const Home = props => {
  return (
    <>
      <Header />
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
          alt="home"
        />
      </div>
    </>
  )
}
export default Home
