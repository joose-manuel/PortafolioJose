import { ContactMessage } from '../interfaces/contact-message.interface';

export class ContactMessageEntity implements ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  sentAt: Date;

  static of(message: ContactMessage): ContactMessageEntity {
    const entity = new ContactMessageEntity();
    Object.assign(entity, message);
    return entity;
  }
}
