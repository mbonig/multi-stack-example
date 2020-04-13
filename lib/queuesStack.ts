import * as cdk from '@aws-cdk/core';
import {IQueue, Queue} from "@aws-cdk/aws-sqs";

export class QueuesStack extends cdk.Stack {

    public queues: IQueue[];

    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        this.queues = [new Queue(this, 'some-queue')]
    }
}
