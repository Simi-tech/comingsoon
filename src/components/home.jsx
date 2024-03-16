import { useEffect, useState } from 'react';
import Timer from '../Hook/timer'
import './bg.css'

const Home = () => {
  const [scrollEffect, setScrollEffect] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust the threshold as needed
      if (scrollPosition > 755) {
        setScrollEffect(true);
      } else {
        setScrollEffect(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='bg h-full border-t-[] border-[#171A3B] '>
      <div className={`fixed text-[#171A3B] text-[24px] font-semibold pl-8 pt-8 ${scrollEffect ? 'text-[#F4D6F8] ' : ''}`}>
        ThesisPen AI
      </div>
            <div className='items-center justify-center flex flex-col h-full pt-36'>
                <div className='text-[40px] text-[#171A3B] font-light'>Prompt Paper Publish</div>
              
                <div className=' text-[126px] text-[#171A3B] font-light'>COMING SOON</div>

                <div className='text-[#171A3B]'>
                  <Timer targetDate="2024-03-31T00:00:00"/>
                </div>

                <div className='text-white font-semibold text-[18px] py-[100px]'>
                  Scroll Down
                  <div className='pl-8'>
                

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                  </svg>

                  </div>
                </div>
            </div>

    </div>
  )
}

export default Home