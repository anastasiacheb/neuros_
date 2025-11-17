import { Hero } from '@/components/blocks/hero';
import { Logos } from '@/components/blocks/logos';
import { Features } from '@/components/blocks/features';
import { Clients } from '@/components/blocks/clients';
import { Benefits } from '@/components/blocks/benefits';
import { Applications } from '@/components/blocks/applications';
import { FAQ } from '@/components/blocks/FAQ';
import { PAGE_QUERYResult } from '@/sanity/types';

type PageBuilderProps = {
  content: NonNullable<PAGE_QUERYResult>['content'];
};

export function PageBuilder({ content }: PageBuilderProps) {
  if (!Array.isArray(content)) {
    return null;
  }

  return (
    <main>
      {content.map((block) => {
        switch (block._type) {
          case 'hero':
            return <Hero key={block._key} {...block} />;
          case 'logos':
            return <Logos key={block._key} {...block} />;
          case 'features':
            return <Features key={block._key} {...block} />;
          case 'clients':
            return <Clients key={block._key} {...block} />;
          case 'benefits':
            return <Benefits key={block._key} {...block} />;
          case 'applications':
            return <Applications key={block._key} {...block} />;
          case 'faq':
            return <FAQ key={block._key} {...block} />;
          default:
            // This is a fallback for when we don't have a block type
            return <div key={block._key}>Block not found: {block._type}</div>;
        }
      })}
    </main>
  );
}
