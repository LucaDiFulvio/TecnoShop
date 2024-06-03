// 'use client'


import Banner from '../components/banner/Banner';
import HomeCardsContainer from '@/components/homeCardContainer/homeCardContainer';
import HiglightedProductContainer from '@/components/highlightedProductsContainer/highlightedProductsContainer';



export default function Home() {
  return (
    <div>

      
  
    <Banner/>
    <HomeCardsContainer/>
    <h3 className='p-3 text-2xl bg-secondaryColor text-white'>Nuestros productos destacados</h3>
    <HiglightedProductContainer/>
  </div>
  );
}
