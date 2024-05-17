import React from 'react';
import { FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

interface CategoryCardProps {
  image?: string;
  number?: number;
  price?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = (props) => {
  return (
    <div>
      <div className="category border px-5 pb-4 relative">
        <div className="overlay absolute top-28 right-6">
          <ul className='flex'>
            <li><i className='eye-icon'><IoEyeOutline /></i></li>
            <li><i><FaRegHeart /></i></li>
            <li><i><FiShoppingCart /></i></li>
          </ul>
        </div> {/* End Overlay */}
        <img src={props.image} alt="" className='mx-auto' />
        <ul className='flex items-center mt-5'>
          <li><p className='number'>({props.number})</p></li>
          <li><i><FaStar /></i></li>
          <li><i><FaStar /></i></li>
          <li><i><FaStar /></i></li>
          <li><i><FaStar /></i></li>
          <li><i><FaStar /></i></li>
        </ul>
        <p className='description my-2'>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
        <p className='price font-bold'>{props.price}</p>
      </div> {/* End Category */}
    </div>
  )
}

export default CategoryCard;