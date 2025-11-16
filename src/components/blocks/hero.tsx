import { Heading, ThemeImage, Button } from '@/components';
import { PAGE_QUERYResult } from '@/sanity/types';

type HeroProps = Extract<NonNullable<NonNullable<PAGE_QUERYResult>['content']>[number], { _type: 'hero' }>;

export function Hero({ pretitle, title, text }: HeroProps) {
  return (
    <header className="max-w-360 m-auto text-center px-5 md:px-8 py-14 md:py-8 md:pt-28 md:pb-20 lg:px-29.5">
      <Heading>
        {/* Generative <span className="hidden md:block">Business</span> Intelligence for Analysts */}
        {pretitle}
      </Heading>
      <h1 className="font-DM font-bold text-4xl mb-5 md:text-5xl lg:px-44">
        {title}
        {/* Revolutionizing Business Decisions with AI-Powered Analytics */}
      </h1>
      <p className="text-primary-800 text-base mb-10 md:px-20 lg:px-60">
        {text}
        {/* Harnesses the power of artificial intelligence to transform your business data into actionable insights,
        propelling you to new heights of success */}
      </p>
      <div className="flex flex-col justify-center gap-3 md:flex-row mb-8 md:mb-16">
        <Button text="Start your free trial" />
        <Button text="Watch video" light srcDark="/icons/Licondark.svg" srcLight="/icons/Licon.svg" />
      </div>
      <div className="h-64 rounded-3xl md:h-120 flex items-center justify-center relative overflow-clip">
        <ThemeImage
          srcDark="/images/Ilustration3dark.png"
          srcLight="/images/Ilustration3.png"
          alt="play"
          className="w-full h-full object-cover absolute"
        />
        <div className="bg-primary-0 w-24 h-24 rounded-full flex items-center justify-center border-[0.75rem] border-accent-600/50 md:max-w-max md:w-max md:flex md:gap-3 relative z-10">
          <button aria-label="play video" className="md:ml-3 w-14 h-14 ">
            <ThemeImage srcDark="/icons/Playdark.svg" srcLight="/icons/Play.svg" alt="play" className="w-14 h-14" />
          </button>
          <div className="hidden md:block">
            <p className="font-semibold text-xl block max-w-max pr-6">Watch introduce video</p>
            <div className="flex items-center gap-2">
              <p className="text-base text-primary-800">5 mins</p>
              <p className="w-1 h-1 bg-gray-400 rounded-full block"></p>
              <button className="font-medium text-accent-600">Play video</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
