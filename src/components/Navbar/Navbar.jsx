import './navbar.scss'


const Navbar = () => {
    return (  
        <div className="navbar">
           <div className="menu">
                <a href="/">Home</a>
                <div className='menu-right'>
                    <div className="item"><a href="/">Create</a></div>
                    <div className="item"><a href="/">Top</a></div>
                    <div className="item"><a href="/">Create</a></div>
                    <div className="item"><a href="/">Point</a></div>
                </div>
           </div>
        </div>
    );
}
 
export default Navbar;