import { Injectable } from '@nestjs/common';
import { ContactMessage } from './interfaces/contact-message.interface';
import { ContactMessageEntity } from './entities/contact-message.entity';
import { CreateContactMessageDto } from './dtos/create-contact-message.dto';

@Injectable()
export class ContactService {
  private readonly messages: ContactMessage[] = [];

  findAll(): ContactMessage[] {
    return this.messages;
  }

  create(dto: CreateContactMessageDto): ContactMessage {
    const message: ContactMessage = {
      id: crypto.randomUUID(),
      ...dto,
      sentAt: new Date(),
    };
    this.messages.push(message);
    return ContactMessageEntity.of(message);
  }
}
