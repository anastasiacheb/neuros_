import { ApplicationCard, Button, Heading } from '@/components';
import { ApplicationsData } from '@/data';
import { PAGE_QUERYResult } from '@/sanity/types';

type ApplicationsProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>['content']>[number],
  { _type: 'applications' }
>;

export function Applications({ title, text }: ApplicationsProps) {
  const Applications = ApplicationsData.slice(0, 9);
  return (
    <section className="px-5 max-w-360 m-auto pt-32 pb-28 md:px-8 lg:px-28">
      <Heading text="Applications" />
      <h2 className="font-DM font-bold text-[2.4rem] text-center mb-4">{title}</h2>
      <p className="text-base text-primary-800 mb-14 text-center max-w-190 mx-auto">{text}</p>
      <div className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 mb-9 relative">
        {Applications.map((application, index) => (
          <ApplicationCard key={index} {...application} index={index} applicationsLength={Applications.length} />
        ))}
        <div className=" w-full bg-gradient-to-t from-primary-0 from-0% via-35% via-primary-0 to-transparent to-100% h-[263px] absolute -bottom-[86px] z-0 touch-none"></div>
      </div>
      <Button text="Explore more applications" href="/applications" light style="mx-auto z-10 relative" />
    </section>
  );
}
