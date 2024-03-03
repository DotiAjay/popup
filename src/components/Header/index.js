// Write your code here
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {Link, withRouter} from 'react-router-dom'
import './index.css'
const Header = props => {
  const returnHome = () => {
    const {history} = props
    history.replace('/')
  }
  return (
    <div className="menucard">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        onClick={returnHome}
      />
      <Popup
        trigger={
          <button data-testid="hamburgerIconButton" className="Hambutton">
            <GiHamburgerMenu />
          </button>
        }
        modal
        position="bottom center"
      >
        <button
          data-testid="closeButton"
          onClick={close}
          className="closeButton"
        >
          <IoMdClose />
        </button>
        {
          (close = (
            <div className="popUp">
              <Link to="/">
                <li className="liItem">
                  <AiFillHome />
                  <span className="Home">Home</span>
                </li>
              </Link>

              <Link to="/about">
                <li className="liItem">
                  <BsInfoCircleFill />
                  About
                </li>
              </Link>
            </div>
          ))
        }
      </Popup>
    </div>
  )
}
export default withRouter(Header)
