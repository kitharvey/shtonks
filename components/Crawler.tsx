import React from 'react'
import { StockPricesProps } from '../interfaces';
import Stripe from './Stripe';

interface CrawlerProps{
  mostSearchedData: StockPricesProps[]
}

const Crawler:React.FC<CrawlerProps> = ( {mostSearchedData} ) => {
        return (
              <div className='w-full overflow-hidden shadow-lg border-b border-t border-gray-100 border-solid py-2 bg-white' >
                  <div className='w-max flex items-center' >
                    <Stripe mostSearchedStocks={mostSearchedData} />
                    <Stripe mostSearchedStocks={mostSearchedData} />
                    <Stripe mostSearchedStocks={mostSearchedData} />
                  </div>
              </div>
        );
}






export default Crawler