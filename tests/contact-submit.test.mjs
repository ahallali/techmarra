import test from 'node:test';
import assert from 'node:assert/strict';
import { submitContact } from '../lib/contact-submit.mjs';
const form = { name: ' Ahmed ', email: 'ahmed@example.com ', phone: '', property: 'Hotel', message: ' Hello ' };
const config = { serviceId: 'service', templateId: 'template', publicKey: 'public' };
test('normalizes fields and awaits successful delivery', async () => {
  let delivered = false;
  await submitContact(form, 'en', config, async (service, template, params, key) => {
    assert.equal(service, 'service'); assert.equal(template, 'template'); assert.equal(key, 'public');
    assert.equal(params.from_name, 'Ahmed'); assert.equal(params.from_email, 'ahmed@example.com'); assert.equal(params.message, 'Hello');
    await Promise.resolve(); delivered = true;
  });
  assert.equal(delivered, true);
});
test('rejects incomplete configuration without calling the service', async () => {
  await assert.rejects(submitContact(form, 'en', {}, async () => assert.fail('Must not send')), /unavailable/);
});
test('rejects invalid email and empty messages without sending', async () => {
  for (const invalid of [{...form, email:'invalid'}, {...form, message:' '}, {...form, message:'a'.repeat(5001)}]) {
    await assert.rejects(submitContact(invalid, 'en', config, async () => assert.fail('Must not send')), /Please provide/);
  }
});
test('propagates delivery failures instead of reporting success', async () => {
  await assert.rejects(submitContact(form, 'en', config, async () => { throw new Error('Service unavailable'); }), /Service unavailable/);
  assert.equal(form.message, ' Hello ');
});
