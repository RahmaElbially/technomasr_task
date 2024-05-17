import React from 'react';
import '../Style/HomeStyle.css'
import ServiceCard from '../Components/HomeComponents/serviceCard';
import CategoryCard from '../Components/HomeComponents/CategoryCard';
import ShopCard from '../Components/HomeComponents/ShopCard';
import rightPanner from '../Images/gradient-background.png';
import leftPannerOne from '../Images/pngtree-ecommerce.png';
import leftPannerTwo from '../Images/banner-e-commerce.png';
import discount from '../Images/Banner 1.png';
import panner1 from '../Images/Banner (2) 1.png';
import panner2 from '../Images/Banner (1) 1.png';
import ecommerece from '../Images/banner-e-commerce1 2.png'
import shop1 from '../Images/shop1.png';
import shop2 from '../Images/shop2.png';
import shop3 from '../Images/shop3.png';
import shop4 from '../Images/shop4.png';
import shop5 from '../Images/shop5.png';
import shop6 from '../Images/shop6.png';
import { IoFolderOutline } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import { FiHeadphones } from "react-icons/fi";
import { PiCubeDuotone } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";


const Home:React.FC = () => {
  return (
    <>
      <div className="panner grid grid-cols-2 gap-10 my-3 px-28">
        <div className="right-image">
          <img src={rightPanner}/>
        </div>  

        <div className="left-image">
          <img className='mb-4' src={leftPannerOne}/>
          <img src={leftPannerTwo}/>
        </div>  
      </div> {/* End Panner */}

      <div className="services my-12 px-32 py-10 grid grid-cols-4 gap-10">
        <ServiceCard icon={<IoFolderOutline/>} head={'الدفع المؤمًن'} data={'أموالك آمنه.'} />
        <ServiceCard icon={<TfiCup />} head={'إرجاع خلال ٢٤ ساعة'} data={'ضمان استعادة بنسبة 100%'} />
        <div className='different-size'><ServiceCard icon={<FiHeadphones />} head={'الدعم على مدار الساعة 24/7'} data={'التواصل المباشر أو الرسائل الفورية'} /></div>
        <ServiceCard icon={<PiCubeDuotone />} head={'توصيل سريع'} data={'توصيل في ٢٤ ساعة'} />
      </div> {/* End Services */}

      <div className="offers px-24">
        <div className="offers-heading flex items-center mb-16">
          <h3 className='text-2xl font-bold'>أفضل العروض</h3>
          <Link to={'/cat'} className='flex ms-auto items-center'>
            تصفح الكل
            <i className='ms-2'><FaArrowLeft /></i>
            </Link>
        </div> {/* End Offers Heading */}

        <div className="offers-content mb-5 grid grid-cols-4 gap-6">
          <CategoryCard>
            <button>فلاش سيل</button>
          </CategoryCard> 

          <div className="hoverd-cat">
            <CategoryCard>
              <button style={{visibility:"hidden"}}>فلاش سيل</button>
            </CategoryCard>
          </div>

          <CategoryCard>
            <button style={{backgroundColor:"#2DB224"}}>عروض</button>
          </CategoryCard>

          <CategoryCard>
            <button style={{visibility:"hidden"}}>فلاش سيل</button>
          </CategoryCard>

          <CategoryCard>
            <button style={{backgroundColor:'#929FA5', textTransform:'uppercase'}}>Sold Out</button>
          </CategoryCard>

          <CategoryCard>
          <button style={{backgroundColor:'#929FA5', textTransform:'uppercase'}}>Sold Out</button>
          </CategoryCard>

          <CategoryCard>
            <button style={{backgroundColor: "#EFD33D"}}>خصم 25%</button>
          </CategoryCard>
          <CategoryCard>
            <button style={{backgroundColor: "#2DA5F3"}}>أفضل العروض</button>
          </CategoryCard>          
        </div> {/* Offers Content */}
      </div> {/* End Offers */}

      <div className="shops px-36 my-16 py-10">
        <h2 className='text-3xl font-bold text-center'>تسوق من أقسامنا</h2>
        <div className="shop-content grid grid-cols-6 gap-5 mt-7 relative">
          <button className='absolute top-24 right-[-1.5rem]'><i><FaArrowRight /></i></button>
          <ShopCard image={shop1} name='مستلزمات رياضية'/>
          <ShopCard image={shop2} name='أجهزة الكمبيوتر'/>
          <ShopCard image={shop3} name='موبايلات & تابلت'/>
          <ShopCard image={shop4} name='أجهزة التليفون المحمول'/>
          <ShopCard image={shop5} name='التليفزيونات والصوتيات'/>
          <ShopCard image={shop6}/>
          <button className='absolute top-24 left-[-1.5rem]'><i><FaArrowLeft /></i></button>
        </div> {/* End Shop Content */}
      </div> {/* End Shops */}

      <div className="suggestions my-16 px-24">
        <h2 className='text-3xl font-bold mb-10'>منتجاتنا المقترحة</h2>
        <div className="sugession-content flex">
            <div className="sugesstion-cat grid grid-cols-4 gap-6 me-20">
              <CategoryCard>
              <button style={{backgroundColor:'#929FA5', textTransform:'uppercase'}}>Sold Out</button>
              </CategoryCard>

              <CategoryCard>
              <button style={{backgroundColor:'#929FA5', textTransform:'uppercase'}}>Sold Out</button>
              </CategoryCard>

              <CategoryCard>
              <button>فلاش سيل</button>
              </CategoryCard> 

              <CategoryCard>
              <button style={{backgroundColor: "#EFD33D"}}>خصم 25%</button>
              </CategoryCard>

              <CategoryCard>
              <button style={{backgroundColor: "#2DA5F3"}}>أفضل العروض</button>
              </CategoryCard>    

              <div className="hoverd-cat">
                <CategoryCard>
                  <button style={{visibility:"hidden"}}>فلاش سيل</button>
                </CategoryCard>
              </div>
              <CategoryCard>
                <button style={{backgroundColor:"#2DB224"}}>عروض</button>
              </CategoryCard>

              <CategoryCard>
                <button style={{visibility:"hidden"}}>فلاش سيل</button>
              </CategoryCard>
            </div> {/* End Sugesstion Category */}

            <div className="sugesstion-discount">
              <img src={discount}/>
            </div> {/* End Sugesstion Discount */}
        </div> {/* End Sugession Content */}
      </div> {/* End Suggestions */}

      <div className="panners px-28 grid grid-cols-2 gap-5 mb-16">
        <img src={panner1} alt="" />
        <img src={panner2} alt="" />
      </div> {/* End Panners */}

      <div className="shopping-now px-24 py-16 flex mb-16">
        <div className="shopping-image me-16">
          <img src={discount} alt="" />
        </div> {/* End Shopping Image */}

        <div className="shopping-category mt-[-1.5rem]">
            <h2 className='text-3xl font-bold mb-2'>تسوق الآن</h2>
            <h2 className='text-3xl font-bold mb-8'>منتجاتنا المقترحة</h2>

            <div className="shopping-cat grid grid-cols-4 gap-6">
              <CategoryCard>
              <button style={{backgroundColor:'#929FA5', textTransform:'uppercase'}}>Sold Out</button>
              </CategoryCard>

              <CategoryCard>
              <button style={{backgroundColor:'#929FA5', textTransform:'uppercase'}}>Sold Out</button>
              </CategoryCard>

              <CategoryCard>
              <button>فلاش سيل</button>
              </CategoryCard> 

              <CategoryCard>
              <button style={{backgroundColor: "#EFD33D"}}>خصم 25%</button>
              </CategoryCard>

              <CategoryCard>
              <button style={{backgroundColor: "#2DA5F3"}}>أفضل العروض</button>
              </CategoryCard>    

              <div className="hoverd-cat">
                <CategoryCard>
                  <button style={{visibility:"hidden"}}>فلاش سيل</button>
                </CategoryCard>
              </div>
              <CategoryCard>
                <button style={{backgroundColor:"#2DB224"}}>عروض</button>
              </CategoryCard>

              <CategoryCard>
                <button style={{visibility:"hidden"}}>فلاش سيل</button>
              </CategoryCard>
            </div> {/* End Sugesstion Category */}
        </div> {/* End Shopping Category */}
      </div> {/* End Shopping Now */}

      <div className="panner-ecommerce mb-16 px-16">
        <img src={ecommerece} alt="" />
      </div> {/* End Panner E-commerece */}
    </>
  )
}

export default Home
