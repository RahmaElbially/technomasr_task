import React from 'react';
import { FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import categoryImage from '../../Images/Image (1).png';

interface CategoryCardProps {
    children?: React.ReactNode;
}

const CategoryCard:React.FC<CategoryCardProps>= (props) => {
  return (
    <div>
      <div className="card border-solid border-2 p-4 relative">
            {props.children}
            <div className="overlay absolute top-40 right-14">
                <ul className='flex'>
                  <li><i className='eye-icon'><IoEyeOutline /></i></li>
                  <li><i><FaRegHeart /></i></li>
                  <li><i><FiShoppingCart /></i></li>
                </ul>
            </div> {/* End Overlay */}
            <img src={categoryImage} />
            <ul className='flex items-center ps-3'>
              <li><i><FaStar /></i></li>
              <li><i><FaStar /></i></li>
              <li><i><FaStar /></i></li>
              <li><i><FaStar /></i></li>
              <li><i><FaStar /></i></li>
              <li><p>(4)</p></li>
            </ul>
            <p className='para'>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.</p>
            <div className="price-div flex">
              <del>858.99 ر.س</del>
              <p className="price">424.50 ر.س</p>
            </div>
          </div> {/* End Offer */}
    </div>
  )
}

export default CategoryCard
