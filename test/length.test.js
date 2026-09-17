import { test } from 'vitest';

// Disposable step-0 experiment: unchanged workflow, deliberately slow learner code.
test('step 0: deliberate two-minute wait for cancellation test', async () => {
  console.log('STEP0_WAIT_STARTED', new Date().toISOString());
  await new Promise(resolve => setTimeout(resolve, 120_000));
  console.log('STEP0_WAIT_FINISHED', new Date().toISOString());
}, 150_000);

// Second commit: approval must remain blocked.
