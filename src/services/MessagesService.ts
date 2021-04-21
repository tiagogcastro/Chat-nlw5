import { getCustomRepository, Repository } from 'typeorm';
import Message from '../entities/Message';
import MessagesRepository from '../repositories/MessagesRepository';

interface IMessageCreate {
  admin_id?: string;
  text: string;
  user_id: string;
}

class MessagesService {
  private messagesRepository: Repository<Message>

  constructor() {
    this.messagesRepository = getCustomRepository(MessagesRepository);
  }

  async create({admin_id, text, user_id}: IMessageCreate) {
    const messagesRepository = this.messagesRepository;
    
    const message = messagesRepository.create({
      admin_id,
      text,
      user_id
    });

    await messagesRepository.save(message);

    return message;
  }

  async listByUser(user_id: string) {
    const messagesRepository = this.messagesRepository;

    const list = await messagesRepository.find({
      where: {user_id},
      relations: ['user']
    });

    return list;
  }
}

export default MessagesService;