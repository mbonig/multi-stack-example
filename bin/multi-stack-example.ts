#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MultiStackExampleStack } from '../lib/multi-stack-example-stack';

const app = new cdk.App();
new MultiStackExampleStack(app, 'MultiStackExampleStack');
