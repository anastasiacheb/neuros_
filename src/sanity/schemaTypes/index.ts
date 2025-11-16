import { type SchemaTypeDefinition } from 'sanity';
import { pageType } from './pageType';
import { pageBuilderType } from './pageBuilderType';
import { heroType } from './blocks/heroType';
import { logosType } from './blocks/logosType';
import { featuresType } from './blocks/featuresType';
import { siteSettingsType } from './siteSettingsType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageType, pageBuilderType, heroType, logosType, featuresType, siteSettingsType],
};
