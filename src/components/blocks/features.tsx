import { ThemeImage } from '@/components';
import { PAGE_QUERYResult } from '@/sanity/types';
import React, { ReactNode } from 'react';

const FEATURES = [
  {
    title: 'Navigate with Confidence through Precise Predictions',
    text: 'Embark on a journey of data-driven decision-making with Neuros, where our advanced AI algorithms meticulously analyze historical data and identify emerging patterns, ensuring each forecast is not only accurate but also reliable. Our predictive accuracy empowers your business to anticipate market trends, mitigate risks, and seize opportunities with utmost confidence.',
    // conten: [
    //   {
    //     srcDark: '/images/Ilustrationdark.png',
    //     srcLight: '/images/Ilustration.png',
    //     className:
    //       'absolute top-0 right-0  w-[75vw] h-[53vw] rounded-2xl md:w-[71vw] md:h-[50vw] lg:w-[30vw] lg:h-[21vw] lg:max-w-108 lg:max-h-76',
    //   },
    // ],
    content: (
      <>
        <ThemeImage
          srcDark="/images/Ilustrationdark.png"
          srcLight="/images/Ilustration.png"
          alt="illustration"
          className="absolute top-0 right-0  w-[75vw] h-[53vw] rounded-2xl md:w-[71vw] md:h-[50vw] lg:w-[30vw] lg:h-[21vw] lg:max-w-108 lg:max-h-76"
        />
        <ThemeImage
          srcDark="/images/Statistic_2dark.png"
          srcLight="/images/Statistic_2.png"
          alt="illustration"
          className="absolute bottom-0 left-0 bg-primary-0 w-[39vw] h-[36vw] shadow rounded-xl border border-primary-200 
          lg:w-[15.5vw] lg:h-[14.4vw] md:w-[36.5vw] md:h-[34vw] lg:max-w-56 lg:max-h-52"
        />
      </>
    ),
  },
  {
    title: 'Empower Your Forecasts with the Pulse of Real-Time Data',
    text: 'Neuros’s AI-Driven Forecasts harness the power of advanced machine learning algorithms, ensuring each prediction is not only accurate but also reliable. Navigate through your business journey with confidence, backed by forecasts that meticulously analyze historical data and identify emerging patterns, providing you with precise and trustworthy future insights.',
    content: (
      <>
        <ThemeImage
          srcLight="/images/Ilustration-1.png"
          srcDark="/images/Ilustration-1dark.png"
          alt="illustration"
          className="absolute top-5 md:top-9 right-9 md:right-16 w-[74vw] h-[52vw] rounded-2xl md:w-[70vw] md:h-[49vw] lg:w-[29vw] lg:h-[20vw] lg:max-w-106 lg:max-h-74"
        />
        <ThemeImage
          srcLight="/images/Line_Styling.png"
          srcDark="/images/Line_Stylingdark.png"
          alt="illustration"
          className="absolute top-0 left-0 bg-primary-0 w-[37.6vw] h-[37.6vw] shadow rounded-xl border border-primary-200 lg:w-[15vw] lg:h-[15vw] md:w-[36vw] md:h-[36vw] lg:max-w-54 lg:max-h-54"
        />
        <ThemeImage
          srcLight="/images/Pie_chart_2.png"
          srcDark="/images/Pie_chart_2dark.png"
          alt="illustration"
          className="absolute top-[20vw] lg:top-[8vw] right-0 bg-primary-0 w-[35vw] h-[23.8vw] shadow rounded-xl border border-primary-200 lg:w-[14vw] lg:h-[9vw] md:w-[33vw] md:h-[23vw] lg:max-w-50 lg:max-h-34"
        />
      </>
    ),
  },
  {
    title: 'Visualize Your Future through Intuitive Dashboards',
    text: 'Experience a seamless interaction with your predictive data through Neuros’s user-friendly dashboards. Tailor your visualizations to meet your unique analytical needs, ensuring critical insights are always accessible and actionable. With our customizable dashboards, transform complex data into clear, comprehensible visuals, enabling swift and informed decision-making at every business juncture.',
    content: (
      <>
        <ThemeImage
          srcLight="/images/Ilustration-2.png"
          srcDark="/images/Ilustration-2dark.png"
          alt="illustration"
          className="absolute top-0 right-0 w-[75vw] h-[53vw] rounded-2xl md:w-[71vw] md:h-[50vw] lg:w-[30vw] lg:h-[21vw] lg:max-w-108 lg:max-h-76"
        />
        <ThemeImage
          srcLight="/images/Stacked_Bar_Chart_1_(Medium).png"
          srcDark="/images/Stacked_Bar_Chart_1_(Medium)dark.png"
          alt="illustration"
          className="absolute bottom-0 left-0 bg-primary-0 w-[56vw] h-[38vw] shadow rounded-xl border border-primary-200 lg:w-[22vw] lg:h-[15vw] md:w-[54vw] md:h-[36vw] lg:max-w-82 lg:max-h-55"
        />
      </>
    ),
  },
  {
    title: 'Seamlessly Integrate and Synchronize Your Analytical Ecosystem',
    text: 'Neuros is not just a standalone platform but a synergistic solution designed to seamlessly integrate with your existing business tools and platforms. From CRMs to ERPs, Neuros ensures your predictive analytics are always in harmony with your operational data, providing a holistic and unified view of your business trajectory. Experience a platform that not only provides insights but also aligns with your existing technological ecosystem, ensuring consistency and reliability in your forecasting endeavors.',
    content: (
      <>
        <ThemeImage
          srcLight="/images/Ilustration-3.png"
          srcDark="/images/Ilustration-3dark.png"
          alt="illustration"
          className="absolute top-5 md:top-9 right-9 md:right-16 w-[74vw] h-[52vw] rounded-2xl md:w-[70vw] md:h-[49vw] lg:w-[29vw] lg:h-[20vw] lg:max-w-106 lg:max-h-74"
        />
        <ThemeImage
          srcLight="/images/Chart_3_(Small).png"
          srcDark="/images/Chart_3_(Small)dark.png"
          alt="illustration"
          className="absolute top-0 left-0 bg-primary-0 w-[37.6vw] h-[37.6vw] shadow rounded-xl border border-primary-200 lg:w-[15vw] lg:h-[15vw] md:w-[36vw] md:h-[36vw] lg:max-w-54 lg:max-h-54"
        />
        <ThemeImage
          srcLight="/images/Radar.png"
          srcDark="/images/Radardark.png"
          alt="illustration"
          className="absolute top-[26vw] lg:top-[8vw] right-0 bg-primary-0 w-[32vw] h-[33vw] shadow rounded-xl border border-primary-200 lg:w-[13vw] lg:h-[13vw] md:w-[30vw] md:h-[32vw] lg:max-w-46 lg:max-h-47"
        />
      </>
    ),
  },
];

interface featureItemProps {
  title: string;
  text: string;
  content: ReactNode;
  index: number;
}

function FeatureItem({ title, text, content, index }: featureItemProps) {
  let style;
  if (index % 2 === 0) {
    style = 'lg:flex-row-reverse';
  } else {
    style = 'lg:flex-row';
  }

  return (
    <div className={`flex flex-col gap-8 md:gap-12 lg:gap-20 lg:items-center ${style}`}>
      <div className="w-full lg:mx-auto lg:w-[44vw]">
        <div className="relative w-full h-[59vw] lg:mx-auto lg:w-[36vw] lg:h-[24vw] lg:max-h-85 lg:max-w-131">
          {content}
        </div>
      </div>
      <div className="lg:w-[33vw]">
        <h3 className="font-DM font-bold text-[1.9rem] mb-3">{title}</h3>
        <p className="text-base text-primary-800 h-[6.3rem] text-ellipsis overflow-hidden">{text}</p>
      </div>
    </div>
  );
}

type FeaturesProps = Extract<NonNullable<NonNullable<PAGE_QUERYResult>['content']>[number], { _type: 'features' }>;

export function Features({ title, text }: FeaturesProps) {
  return (
    <section id="features" className="py-14 px-5 max-w-360 m-auto md:pt-32 md:pb-28 md:px-14 lg:px-28">
      <h2 className="font-DM font-bold text-[2.4rem] text-center mb-4">{title}</h2>
      <p className="text-base text-primary-800 text-center mb-12 md:mb-20 max-w-190 mx-auto">{text}</p>

      <div className="flex flex-col gap-10 md:gap-16 lg:gap-28">
        {FEATURES.map((feature, index) => (
          <FeatureItem key={index} title={feature.title} text={feature.text} content={feature.content} index={index} />
        ))}
      </div>
    </section>
  );
}
