// Write your code here
import Header from '../Header'
import './index.css'

const NotFound = props => {
  return (
    <div>
      <Header />
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found" className="notFoundImg"
      />
      <h1>Lost Your Way ?</h1>
    </div>
  )
}
export default NotFound
