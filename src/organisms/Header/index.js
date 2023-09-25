import { Roboto } from 'next/font/google'
import Slider from '@/molecules/Slider';
import Button from '@/atoms/Button';

const roboto = Roboto({weight: '700', subsets: ['latin'] })
const Header = () => {
  return (
    <section className='p-3 pt-8'>
      <p className={`${roboto.className} text-[28px]` }>Medium length hero <br/> headline goes here</p>
      <p className='pt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
      <div className="w-[147px] h-[30px] mt-8">

      <Button label={'Apply Now'}/>
      </div>
      <Slider/>
    </section>
  );
};

export default Header;
