
import CardSlider from '@/atoms/CardSlider/index.js';
import DragScroll from '@/molecules/DragScroll';
import { Inter } from 'next/font/google';

const inter = Inter({weight: '700', subsets: ['latin'] })
const PreviousWinner = () => {

    return(
        <div>
            <div className="text-[18px] text-center my-10">
                <h1 className={inter.className}>MEET OUR PREVIOUS CONTEST WINNERS</h1>
            </div>
            {/* <CardSlider/> */}
            <DragScroll/>
        </div>
    )
}

export default PreviousWinner;