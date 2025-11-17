import { Slider } from '@/components';
import { PAGE_QUERYResult } from '@/sanity/types';

type HeroProps = Extract<NonNullable<NonNullable<PAGE_QUERYResult>['content']>[number], { _type: 'clients' }>;

export function Clients({ title, text, clients }: HeroProps) {
  return (
    <section
      id="testimonials"
      className="py-14 px-5 max-w-360 m-auto md:pt-32 md:pb-28 md:px-14 lg:px-28 h-dvh md:h-187.5 lg:h-177.5 flex flex-col justify-between">
      <div>
        <h2 className="font-DM font-bold text-[2.4rem] text-center mb-4">{title}</h2>
        <p className="text-base text-primary-800 text-center mb-12 md:mb-20 max-w-200 m-auto">{text}</p>
      </div>
      <Slider clients={clients} />
    </section>
  );
}
