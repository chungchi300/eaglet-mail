export interface MailOptions {
  to: string;
  cc?: string;
  bcc?: string;
  subject: string;
  html: string;
}
export interface MailConfig {
  transaction: any;
  from: any;
}
