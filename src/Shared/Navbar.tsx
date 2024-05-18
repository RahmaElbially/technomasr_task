import React from 'react';
import '../Style/NavbarStyle.css';
import { Link, useNavigate } from 'react-router-dom';
import phonecall from '../Images/PhoneCall.png';
import fastCart from '../Images/Fast Cart.png';
import { IoIosArrowDown } from "react-icons/io";
import { FaTwitter, FaFacebook, FaPinterestP, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/user');
  };

  return (
    <>
      <div className='navbar w-full py-4'>
        <div className='top-nav grid grid-cols-2 gap-5 px-24'>
          <div className='right'>
            <p className='flex items-center'>+1-23456789012<img src={phonecall} className='ms-2'/></p>
          </div>
          <div className='left flex'>
            <p className='flex items-center'>Follow Us: 
              <ul className='flex border-r-2 pe-5'>
                <a href="#"><li><FaTwitter/></li></a>
                <a href="#"><li><FaFacebook/></li></a>
                <a href="#"><li><FaPinterestP/></li></a>
                <a href="#"> <li><FaYoutube/></li></a>
                <a href="#"><li><FaInstagram/></li></a>
              </ul>
            </p>
            <p className='language flex items-center me-5'>اللغة العربية <i className='ms-1 opacity-50'><IoIosArrowDown /></i></p>
          </div>
        </div>

        <hr className='my-5 opacity-30'/>

        <div className='middle-nav grid grid-cols-4 gap-5 px-32 pb-1'>
          <div className="right flex items-center">
            <h2>TechnoStore</h2>
            <img src={fastCart} className='w-10 ms-2'/>
          </div>
          <div className="middle relative col-span-2">
            <input type="text" placeholder='بحث' className='w-full py-3 px-2 outline-none text-black'/>
            <i className='absolute left-4 top-3 text-black text-xl'><IoSearch /></i>
          </div>
          <div className="left">
            <ul className='flex justify-end pt-1'>
              <Link to={'/user'}><LuUser2/></Link>
              <Link to={'/fav'}><FaRegHeart/></Link>
              <Link to={'/cart'} className='flex items-center'>
                <div>0</div>
                <FiShoppingCart/>
              </Link>
              <Link to={'/user'} onClick={handleLogout}><TbLogout2 /></Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="bottom-nav py-4">
          <ul className='flex justify-center'>
            <Link to={'/'}>الرئيسية</Link>
            <Link to={'/dep'} className='active justify-center items-center'>
              الأقسام
              <i className='ms-1'><IoIosArrowDown/></i>
              </Link>
            <Link to={'/cat'}>المنتجات</Link>
            <Link to={'/cat'}>المنتجات</Link>
            <Link to={'/cat'}>المنتجات</Link>
            <Link to={'/cat'}>المنتجات</Link>
          </ul>
        </div>
        <hr />
    </>
  );
};

export default Navbar;