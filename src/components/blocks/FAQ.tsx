'use client';
import { ThemeImage } from '@/components';
import { useState, useRef } from 'react';
import { PAGE_QUERYResult } from '@/sanity/types';

type faqProps = Extract<NonNullable<NonNullable<PAGE_QUERYResult>['content']>[number], { _type: 'faq' }>;

export const FAQdata = [
  {
    question: 'What is Neuros and how does it differ from other analytics platforms?',
    answer:
      'Neuros is an AI-powered business analytics platform designed to provide real-time insights, predictive analytics, and seamless integrations with various tools. Unlike traditional analytics platforms, Neuros harnesses the power of artificial intelligence to offer more accurate forecasts, customizable dashboards, and a user-friendly interface tailored for businesses of all sizes.',
  },
  {
    question: 'How does the AI-driven predictive analytics feature work?',
    answer:
      "Neuros's AI-driven predictive analytics utilizes advanced machine learning algorithms to analyze historical data and identify patterns. By doing so, it can anticipate future trends, market shifts, and potential challenges, allowing businesses to make informed decisions proactively.",
  },
  {
    question: 'Is my data secure with Neuros?',
    answer:
      'Absolutely! At Neuros, we prioritize data security. All data processed and stored on our platform is encrypted using industry-standard protocols. Additionally, we have stringent access controls in place to ensure that only authorized personnel can access sensitive information.',
  },
  {
    question: 'Can I integrate Neuros with other tools and platforms I currently use?',
    answer:
      'Yes, Neuros is designed to seamlessly integrate with a wide range of business tools, CRMs, ERPs, and other platforms. Our goal is to provide a unified analytics experience, ensuring you have a holistic view of your operations.',
  },
  {
    question: 'How is the pricing structured for Neuros? Are there any hidden fees?',
    answer:
      'Neuros offers transparent pricing with various plans to cater to different business needs. All our pricing details are listed on the "Pricing" page. There are no hidden fees, and you can choose a plan that best fits your requirements.',
  },
];

interface FAQaccordeonProps {
  question: string;
  answer: string;
}

function FAQaccordeon({ question, answer }: FAQaccordeonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const accRef = useRef<HTMLDivElement>(null);
  return (
    <div
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className="border-b border-primary-200 hover:border-accent-600 transition-all ease-linear duration-300">
      <div className="flex gap-4 h-auto items-start justify-between relative mr-5 mb-6 cursor-pointer">
        <div className="bg-accent-600 rounded-sm w-1 absolute inset-y-1.5"></div>
        <h3 className="font-DM ml-5 font-bold text-xl">{question} </h3>
        <ThemeImage
          srcDark="/icons/chevron-up,_arrow-updark.svg"
          srcLight="/icons/chevron-up,_arrow-up.svg"
          alt="icon"
          className={`${isOpen ? '' : 'rotate-180'} w-6 h-6 flex-none transition-all ease-linear duration-300`}
        />
      </div>
      <div
        ref={accRef}
        style={{ maxHeight: isOpen ? accRef.current?.scrollHeight + 'px' : '0px' }}
        className={` ${isOpen ? 'max-h-none' : 'max-h-0'} overflow-hidden transition-all ease-linear duration-300`}>
        <p className="text-base text-primary-800 pb-5">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ({ title, text }: faqProps) {
  return (
    <section
      id="faq"
      className="px-5 max-w-360 m-auto py-14 md:pt-32 md:pb-28 md:px-8 lg:px-28 lg:flex lg:gap-10 xl:gap-20">
      <div className="mb-12 max-w-109 lg:flex-none lg:sticky lg:top-32 lg:self-start lg:max-w-108">
        <h2 className="rounded-full border border-primary-400 flex py-2 px-3 gap-2 w-auto max-w-max shadow text-base justify-center font-medium mb-5 text-primary-800">
          <ThemeImage srcDark="/icons/AIdark.svg" srcLight="/icons/AI.svg" alt="icon" className="w-5 h-5" />
          {title}
        </h2>
        <h2 className="font-DM font-bold text-[2.4rem] mb-4">
          Frequently asked
          <br />
          questions
        </h2>
        <p className="text-base text-primary-800">
          {text}
          Explore our frequently asked questions to learn more about Neuros’s features, security, integration
          capabilities, and more
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {FAQdata.map((item, index) => (
          <FAQaccordeon key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
