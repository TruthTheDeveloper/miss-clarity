
import DragScroll from '@/molecules/DragScroll';
import ScrollOut from '@/molecules/ScrollOut';
import { Inter } from 'next/font/google';

const inter = Inter({weight: '700', subsets: ['latin'] })
const CurrentWinner = () => {

    return(
        <div className='px-3 py-3'>
            <div className="text-[18px] text-center my-10">
                <h1 className={inter.className}>MEET OUR TOP CONTESTANT</h1>
            </div>
            {/* <CardSlider/> */}
            <div className='mb-6'>
            <ScrollOut/>
            </div>
        </div>
    )
}

export default CurrentWinner;