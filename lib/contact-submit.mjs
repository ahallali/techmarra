/**
 * @param {{name: string, email: string, phone: string, property: string, message: string}} form
 * @param {string} language
 * @param {{serviceId?: string, templateId?: string, publicKey?: string}} config
 * @param {(serviceId: string, templateId: string, params: Record<string,string>, publicKey: string) => Promise<unknown>} deliver
 */
export async function submitContact(form, language, config, deliver) {
  const name = form.name.trim();
  const email = form.email.trim();
  const message = form.message.trim();
  if (!name || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || !message || message.length > 5000) {
    throw new Error('Please provide your name, a valid email and a message of up to 5,000 characters.');
  }
  if (!config.serviceId || !config.templateId || !config.publicKey) {
    throw new Error('The contact form is temporarily unavailable. Please use the email link instead.');
  }
  await deliver(config.serviceId, config.templateId, {
    from_name: name, from_email: email, phone: form.phone.trim(), property: form.property.trim(), message, language,
  }, config.publicKey);
}
