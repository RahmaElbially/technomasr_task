import React from 'react';
import '../Style/CategoriesStyle.css';
import CategoryCard from '../Components/CategoriesComponent/CategoryCard';
import { IoIosArrowBack } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import background from '../Images/gradient-background-cyber-monday-sales_52683-142802 1.png';
import Category1 from '../Images/cat1.png';
import Category2 from '../Images/cat2.png';
import Category3 from '../Images/cat3.png';
import Category4 from '../Images/cat4.png';


const Categories:React.FC = () => {
  return (
    <div>
        <div className="header flex py-10 px-32">
          <p className='flex items-center'>
            الصفحه الرئيسية
            <i className='mx-2'><IoIosArrowBack /></i>
          </p>
          <p className='flex items-center'>
            تسوق الآن
            <i className='mx-2'><IoIosArrowBack /></i>
          </p>
          <p className='different-color'>
            أجهزة الكترونية
          </p>
        </div> {/* End Header */}

        <div className="header-input px-32 my-10 relative">
          <i className='absolute top-3 right-36 text-xl cursor-pointer'><IoSearch/></i>
          <input type="text" placeholder='ابحث عن المنتج'/>
        </div> {/* Header Input */}

        <div className="background px-4 mb-6">
          <img src={background} alt="" className='mx-auto'/>
        </div> {/* End Background */}

        <div className="categories grid grid-cols-5 gap-5 px-36 mb-5">
            <CategoryCard image={Category1} number={816} price='80 ر.س'/>
            <CategoryCard image={Category2} number={816} price='80 ر.س'/>
            <CategoryCard image={Category3} number={816} price='80 ر.س'/>
            <CategoryCard image={Category1} number={816} price='80 ر.س'/>
            <CategoryCard image={Category4} number={816} price='80 ر.س'/>

            <CategoryCard image={Category1} number={816} price='80 ر.س'/>
            <CategoryCard image={Category2} number={816} price='80 ر.س'/>
            <CategoryCard image={Category3} number={816} price='80 ر.س'/>
            <CategoryCard image={Category1} number={816} price='80 ر.س'/>
            <CategoryCard image={Category4} number={816} price='80 ر.س'/>

            <CategoryCard image={Category1} number={816} price='80 ر.س'/>
            <CategoryCard image={Category2} number={816} price='80 ر.س'/>
            <CategoryCard image={Category3} number={816} price='80 ر.س'/>
            <CategoryCard image={Category1} number={816} price='80 ر.س'/>
            <CategoryCard image={Category4} number={816} price='80 ر.س'/>

            <CategoryCard image={Category1} number={816} price='80 ر.س'/>
            <CategoryCard image={Category2} number={816} price='80 ر.س'/>
            <CategoryCard image={Category3} number={816} price='80 ر.س'/>
            <CategoryCard image={Category1} number={816} price='80 ر.س'/>
            <CategoryCard image={Category4} number={816} price='80 ر.س'/>

            <CategoryCard image={Category1} number={816} price='80 ر.س'/>
            <CategoryCard image={Category2} number={816} price='80 ر.س'/>
            <CategoryCard image={Category3} number={816} price='80 ر.س'/>
            <CategoryCard image={Category1} number={816} price='80 ر.س'/>
            <CategoryCard image={Category4} number={816} price='80 ر.س'/>

            <CategoryCard image={Category1} number={816} price='80 ر.س'/>
            <CategoryCard image={Category2} number={816} price='80 ر.س'/>
            <CategoryCard image={Category3} number={816} price='80 ر.س'/>
            <CategoryCard image={Category1} number={816} price='80 ر.س'/>
            <CategoryCard image={Category4} number={816} price='80 ر.س'/>
        </div> {/* End Categories */}

        <div className="pagination mt-8 mb-16">
          <ul className='flex items-center justify-center'>
            <li><div className='arrow'><i><IoIosArrowRoundForward/></i></div></li>
            <li><div className='one'>01</div></li>
            <li><div className='other'>02</div></li>
            <li><div className='other'>03</div></li>
            <li><div className='other'>04</div></li>
            <li><div className='other'>05</div></li>
            <li><div className='arrow'><i><IoIosArrowRoundBack/></i></div></li>
          </ul>
        </div> {/* End Pagination */}
    </div>
  )
}

export default Categories
