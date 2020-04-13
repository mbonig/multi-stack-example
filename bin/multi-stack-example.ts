#!/usr/bin/env node
import 'source-map-support/register';
import {QueuesStack} from '../lib/queuesStack';
import {App, CfnOutput, Construct, Stack} from "@aws-cdk/core";
import {IQueue} from "@aws-cdk/aws-sqs";

const app = new App();
const queueStack = new QueuesStack(app, 'MultiStackExampleStack');

class SubscriberStack extends Stack {
    constructor(app: Construct, id: string, props: { queues: IQueue[] }) {
        super(app, id);
    }

}

new SubscriberStack(app, 'subscribers', {
    queues: queueStack.queues
})
