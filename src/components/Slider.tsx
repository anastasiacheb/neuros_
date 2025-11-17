'use client';
import { ThemeImage } from '@/components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    text: `Neuros stands out in the crowded analytics space. Its robust features and AI-driven insights have been invaluable to our data strategy.`,
    name: 'Leslie Alexander',
    role: 'UI/UX Designer',
  },
  {
    text: `Project management is smoother with Neuros. Its dashboards provide a clear view of progress and areas of improvement.`,
    name: 'Nathan D. Hall',
    role: 'Project Lead',
  },
  {
    text: `Neuros's real-time data has been crucial in refining our products. Its collaborative features ensure our team is always aligned.`,
    name: 'Naomi K. Johnson',
    role: 'Product Manager',
  },
  {
    text: `Real-time data processing with Neuros has changed how we make decisions. It's a must-have tool for modern businesses.`,
    name: 'Michael O. Lopez',
    role: 'Operations Director',
  },
  {
    text: `The seamless integrations and customizable dashboards make Neuros an indispensable tool for our business operations.`,
    name: 'Rajesh K. Patel',
    role: 'CTO',
  },
];

interface ClientItem {
  title?: string;
  name?: string;
  role?: string;
}

interface SliderProps {
  clients?: ClientItem[];
}

export default function Slider({ clients = [] }: SliderProps) {
  return (
    <>
      <Swiper
        navigation={{
          nextEl: '.swiper-button-next0',
          prevEl: '.swiper-button-prev0',
        }}
        loop={true}
        modules={[Navigation]}
        className="w-full relative">
        {clients.map((item, index) => (
          <SwiperSlide key={index} className="text-center w-full">
            <div className="max-w-[800px] m-auto">
              <p className="font-medium text-2xl mb-8">{item.title}</p>
              <ThemeImage
                srcDark="/images/Cartoon.png"
                srcLight="/images/Cartoon.png"
                alt="avatar"
                className="w-8 h-8 rounded-full m-auto mb-4"
              />
              <p>{item.name}</p>
              <p>{item.role}</p>
            </div>
          </SwiperSlide>
        ))}
        <button className="swiper-button-prev0 hidden! lg:flex! after:content-['']! w-12! h-12! border border-primary-300 rounded-full items-center! justify-center! absolute top-1/2 left-0 -translate-y-1/2 z-10">
          <ThemeImage srcDark="/icons/L_icondark.svg" srcLight="/icons/L_icon.svg" alt="avatar" className="w-6 h-6" />
        </button>
        <button className="swiper-button-next0 hidden! lg:!flex after:!content-[''] !w-12 !h-12 border border-primary-300 rounded-full !items-center !justify-center absolute top-1/2 right-0 -translate-y-1/2 z-10">
          <ThemeImage srcDark="/icons/Ricondark.svg" srcLight="/icons/Ricon.svg" alt="avatar" className="w-6 h-6" />
        </button>
      </Swiper>
    </>
  );
}
