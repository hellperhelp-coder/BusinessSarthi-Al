
export interface Template {
  id: string;
  name: string;
  content: string;
  enabled: boolean;
  type: 'incoming' | 'missed' | 'outgoing';
}

export interface BusinessProfile {
  businessName: string;
  tagline: string;
  logoUrl: string;
  website: string;
  email: string;
  address: string;
  services: string[];
}

export interface User {
  name: string;
  phone: string;
  isAuthenticated: boolean;
  businessProfile?: BusinessProfile;
}

export interface WhatsAppCallConfig {
  enabled: boolean;
  templateId: string;
  message: string;
  sendBusinessCard: boolean;
}

export interface AppState {
  user: User | null;
  monitoringEnabled: boolean;
  templates: Template[];
  whatsappSettings: {
    enabled: boolean;
    appKey: string;
    authKey: string;
    incoming: WhatsAppCallConfig;
    missed: WhatsAppCallConfig;
    outgoing: WhatsAppCallConfig;
  };
}
