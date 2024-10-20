import { Link } from 'react-router-dom'
import './Navigation.css'


function Navigation() {

  return (
    <div className='navigation'>
      <div className="home">
        <Link href='/posts'><i className="fas fa-home"></i></Link>
        {/* <span>home</span> */}
      </div>
      <div className="articles">
        <i className="fas fa-articles"></i>
        {/* <span>articles</span> */}
      </div>
      <div className="category">
        <i className="fas fa-category"></i>
        {/* <span>category</span> */}
      </div>
      <div className="about">
        <i className="fas fa-about"></i>
        {/* <span>about</span> */}
      </div>
    </div>
  )
}

export default Navigation
