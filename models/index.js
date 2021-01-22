// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Image, Comment, Author, Design } = initSchema(schema);

export {
  Image,
  Comment,
  Author,
  Design
};