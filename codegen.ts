import { config } from 'dotenv'
config()

import type { CodegenConfig } from '@graphql-codegen/cli'

const codegenConfig: CodegenConfig = {
  schema: {
    [`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT_ID}`]:
      {
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
      },
  },
  documents: 'src/app/_lib/graphql/**/*.graphql',
  generates: {
    'src/app/_types/generated/': {
      preset: 'client',
      config: {
        fragmentMasking: false,
      },
    },
  },
}

export default codegenConfig
