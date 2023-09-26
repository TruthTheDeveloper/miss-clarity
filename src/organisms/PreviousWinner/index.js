
import CardSlider from '@/atoms/CardSlider/index.js';
import DragScroll from '@/molecules/DragScroll';
import { Inter } from 'next/font/google';

const inter = Inter({weight: '700', subsets: ['latin'] })
const PreviousWinner = () => {

    return(
        <div className='px-3 py-3'>
            <div className="text-[18px] text-center my-10">
                <h1 className={inter.className}>MEET OUR PREVIOUS CONTEST WINNERS</h1>
            </div>
            {/* <CardSlider/> */}
            <div className='mb-6'>
            <DragScroll/>
            </div>
        </div>
    )
}

export default PreviousWinner;