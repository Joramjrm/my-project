import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{backgroundColor: 'white-smoke',text: 'grey',height: '30px', fontSize: '15px', marginTop: '-20px'}} className='bg- py-1 space-x-6'>
      <div className="container mx-auto flex justify- space-x-4 items-center">
      <div style={{height: '160px', width:'160px', marginTop: '14px', marginLeft: '200px'}}>
        <img src="src\assets\Screenshot 2024-05-19 160226.png" alt="Home" />
      </div>

      <ul style={{marginRight: '30px', marginBottom:'80px'}} className="container mx-auto flex justify-end space-x-9 py-1 ">
        <li>
        <Link to='/' className="text-grey">Home</Link>
        </li>
        <li>
        <Link to='/aboutUs' className="text-grey">About Us</Link>
        </li>
        <li>
        <Link to='/services'className="text-grey" >Services</Link>
        </li>
        <li>
        <Link to='/contactUs'className="text-grey" >Contact</Link>
        </li>
        <li>
        <Link to='/blog'className="text-grey" >Blog</Link>
        </li>
        <li>
        <Link to='/payments'className="text-grey" >Payments</Link>
        </li>
        <li>
        <Link to='/help'className="text-grey" >Help</Link>
        </li>
      </ul>
      </div>
    </nav>
  )
}
export default Navbar;