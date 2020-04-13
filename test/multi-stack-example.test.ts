import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import MultiStackExample = require('../lib/queuesStack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new MultiStackExample.QueuesStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
