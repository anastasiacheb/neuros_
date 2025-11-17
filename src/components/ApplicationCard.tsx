import { ThemeImage } from '@/components';

interface ApplicationCardProps {
  title: string;
  description: string;
  srcLight: string;
  srcDark: string;
  industries: string[];
  index: number;
  applicationsLength: number;
}

export default function ApplicationCard({
  title,
  description,
  srcLight,
  srcDark,
  industries,
  index,
  applicationsLength,
}: ApplicationCardProps) {
  return (
    <div
      className={`border border-primary-400 rounded-xl p-8 hover:border-accent-600 hover:shadow-blue transition ${index === applicationsLength - 1 && 'md:col-span-2 lg:col-span-1'}`}>
      <ThemeImage srcLight={srcLight} srcDark={srcDark} alt="illustration" className="mb-4 w-8 h-8" />
      <h3 className="font-DM font-bold text-xl mb-1">{title}</h3>
      <p className="text-base text-primary-800 h-[78px] overflow-clip mb-4">{description}</p>
      <p className="text-sm text-accent-600">{industries.join(', ')}</p>
    </div>
  );
}
