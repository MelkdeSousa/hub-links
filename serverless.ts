import type { AWS } from '@serverless/typescript';

import { createLink } from '@functions/links';

const serverlessConfiguration: AWS = {
  useDotenv: true,
  service: 'hub-links',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      DATABASE_URL: '${ssm:/DATABASE_URL_HUB_LINKS}',
    },
  },
  // import the function via paths
  functions: { createLink },
  package: {
    individually: true,
    patterns: ['node_modules/.prisma/**', 'node_modules/@prisma/**'],
  },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
