import sanityClient from '@sanity/client'
import sanityImage from '@sanity/image-url'

const options = {
  dataset: 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
}

const client = sanityClient(options)

// const builder = imageUrlBuilder(sanityClient)
// export const imageUrlBuilder = source => sanityImage(sanityClient).image(source)

// export const previewClient = sanityClient({
//   ...options,
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN,
// })

export default client

export async function getSanityContent({ query, variables = {} }) {
  const { data } = await fetch(
    'https://7hqxvknm.api.sanity.io/v1/graphql/production/default',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    },
  ).then((response) => response.json());

  return data;
}