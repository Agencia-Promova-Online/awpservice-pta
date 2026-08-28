declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

type GTMEvent =
  | { event: 'whatsapp_click'; link_location: string; whatsapp_number: string }
  | { event: 'phone_click'; link_location: string; phone_number: string }
  | { event: 'email_click'; link_location: string; email_address: string }
  | { event: 'address_click'; link_location: string; address_label: string }
  | { event: 'contact_form_submit'; form_location: string; service?: string; user_name?: string }
  | { event: 'thank_you_view'; page_path: string; page_title: string }
  | { event: 'cta_click'; cta_text: string; cta_location: string };

export function pushGTMEvent(event: GTMEvent) {
  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(event);
  }
}

export const trackWhatsAppClick = (location: string, number: string) =>
  pushGTMEvent({ event: 'whatsapp_click', link_location: location, whatsapp_number: number });

export const trackPhoneClick = (location: string, number: string) =>
  pushGTMEvent({ event: 'phone_click', link_location: location, phone_number: number });

export const trackEmailClick = (location: string, email: string) =>
  pushGTMEvent({ event: 'email_click', link_location: location, email_address: email });

export const trackAddressClick = (location: string, label: string) =>
  pushGTMEvent({ event: 'address_click', link_location: location, address_label: label });

export const trackContactFormSubmit = (location: string, service?: string, userName?: string) =>
  pushGTMEvent({ event: 'contact_form_submit', form_location: location, service, user_name: userName });

export const trackThankYouView = (path: string, title: string) =>
  pushGTMEvent({ event: 'thank_you_view', page_path: path, page_title: title });

export const trackCTAClick = (text: string, location: string) =>
  pushGTMEvent({ event: 'cta_click', cta_text: text, cta_location: location });
