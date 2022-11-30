import type { AWS } from '@serverless/typescript';

import { createLink, listLinks } from '@functions/links';

const serverlessConfiguration: AWS = {
  useDotenv: true,
  service: 'hub-links',
  frameworkVersion: '3',
  plugins: [
    'serverless-esbuild',
    'serverless-offline',
    'serverless-dotenv-plugin',
  ],
  provider: {
    stage: "${opt:stage, 'dev'}",
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  // import the function via paths
  functions: { createLink, listLinks },
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
      packager: 'yarn',
    },
  },
};

module.exports = serverlessConfiguration;
