import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>
        <li className="lg:text-white lg:text-xl lg:font-sans  lg:mx-2"> 
        <NavLink to='/'>Home</NavLink>
        </li>
        <li className="lg:text-white lg:text-xl lg:font-sans  lg:mx-2"> 
        <NavLink to='/addproduct'>Add Product</NavLink>
        </li>
        <li className="lg:text-white lg:text-xl lg:font-sans  lg:mx-2"> 
        <NavLink to='/cart'>My Cart</NavLink>
        </li>
        <li className="lg:text-white lg:text-xl lg:font-sans  lg:mx-2"> 
        <NavLink to='/login'>Login</NavLink>
        </li>
        
        
    </>



    return (
        <div className="navbar bg-[#dbcdcd]  px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex gap-4">
                <img className="h-9" src="https://i.ibb.co/bJS031m/electro-logo.png" alt="electro-logo" />
                    <div className="">
                       <h3 className="text-3xl font-bold">ELEC<span className=" text-sky-600">TRO</span></h3>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;