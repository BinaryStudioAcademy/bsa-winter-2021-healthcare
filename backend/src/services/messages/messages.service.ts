import { messagesRepository } from '~/data/repositories';
import { IMember, IMessage } from '~/common/interfaces';

class Messages {
  public getMembersAsChats(): Promise<IMember[] | null> {
    return messagesRepository.getMembersAsChats();  // userId
  }
  public getMembersByName(name: string): Promise<IMember[] | null> {
    return messagesRepository.getMembersByName(name);
  }

  public getMessagesByMemberId(memberId: string, userId: string): Promise<IMessage[] | null> {
    return messagesRepository.getMessagesByMemberId(memberId, userId);
  }

  public createMessage(message: IMessage): Promise<IMessage | null> {
    return messagesRepository.createMessage(message);
  }
}

export { Messages };
