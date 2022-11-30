import { AWS } from '@serverless/typescript';

export type Lambda = AWS['functions'][string];
