import { messages as messagesRepository } from '~/data/repositories';
import { IMessage } from '~/common/interfaces';

class Message {

  public getMessagesByUserId(toUserId: string, userId: string): Promise<IMessage[]> {
    return messagesRepository.getMessagesByUserId(toUserId, userId);
  }

  public createMessage(message: IMessage): Promise<IMessage> {
    return messagesRepository.createMessage(message);
  }
}

export { Message };
