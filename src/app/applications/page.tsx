'use client';
import { ApplicationCard } from '@/components';
import { ApplicationsData } from '@/data';
import { useState } from 'react';

export default function Page() {
  const ApplicationsCategories = [
    'All',
    ...[...new Set(ApplicationsData.flatMap((item) => item.industries))].sort().slice(1),
  ];
  const [isActive, setIsActive] = useState(0);
  const ApplicationsDataFiltered =
    isActive === 0
      ? ApplicationsData
      : ApplicationsData.filter(
          (item) =>
            item.industries.includes(ApplicationsCategories[isActive]) || item.industries.includes('All Industries'),
        );

  return (
    <>
      <section className="py-14 px-5 max-w-360 m-auto md:pt-32 md:pb-28 md:px-14 lg:px-28">
        <h2 className="font-DM font-bold text-[2.4rem] text-center mb-4">Insights and predictions made easy</h2>
        <p className="text-base text-primary-800 text-center mb-12 md:mb-20 max-w-190 mx-auto">
          Generative business intelligence drives efficiencies throughout your operations. From forecasting revenue to
          analyzing marketing attribution, Neuros gives you insights so you can make be
        </p>
        <div className="flex flex-col gap-8 md:flex-row lg:gap-12">
          <div className="md:sticky md:self-start md:top-3">
            <h2 className="font-DM font-bold text-base text-primary-900 mb-4">Categories</h2>
            <div className="flex md:flex-col gap-3 flex-wrap">
              {ApplicationsCategories.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsActive(index);
                  }}
                  className={`${isActive === index ? 'border-primary-800 hover:border-accent-600' : 'border-transparent'} font-medium text-base text-primary-800 hover:text-accent-600 transition-all group text-left w-fit border-b`}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 relative self-start">
            {ApplicationsDataFiltered.map((application, index) => (
              <ApplicationCard
                key={index}
                {...application}
                index={index}
                applicationsLength={ApplicationsData.length}
              />
            ))}
          </div>
        </div>
      </section>
      {/* <Benefits />
      <FAQ /> */}
    </>
  );
}
