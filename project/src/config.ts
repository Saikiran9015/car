// Centralized config for external links

const WHATSAPP_BASE_URL =
  import.meta.env.VITE_WHATSAPP_BASE_URL || "https://api.whatsapp.com/send";

const WHATSAPP_PHONE =
  import.meta.env.VITE_WHATSAPP_PHONE || "919515040101";

export function getWhatsAppLink(message: string = ""): string {
  const url = new URL(WHATSAPP_BASE_URL);
  url.searchParams.set("phone", WHATSAPP_PHONE);
  if (message) {
    url.searchParams.set("text", message);
  }
  return url.toString();
}


