import { messagesRepository } from '~/data/repositories';
import { IMessage } from '~/common/interfaces';

class Messages {

  public getMessagesByUserId(toUserId: string, userId: string): Promise<IMessage[] | null> {
    return messagesRepository.getMessagesByUserId(toUserId, userId);
  }

  public createMessage(message: IMessage): Promise<IMessage | null> {
    return messagesRepository.createMessage(message);
  }
}

export { Messages };
