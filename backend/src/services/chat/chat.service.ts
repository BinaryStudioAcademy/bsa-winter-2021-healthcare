import { chatRepository } from '~/data/repositories';
import { IMember, IMessage } from '~/common/interfaces';

class Chat {
  public getMembersAsChats(userId: string): Promise<IMember[] | null> {
    return chatRepository.getMembersAsChats(userId);
  }
  public getMembersByName(name: string): Promise<IMember[] | null> {
    return chatRepository.getMembersByName(name);
  }

  public getMessagesByMemberId(memberId: string, userId: string): Promise<IMessage[] | null> {
    return chatRepository.getMessagesByMemberId(memberId, userId);
  }

  public createMessage(message: IMessage): Promise<IMessage | null> {
    return chatRepository.createMessage(message);
  }
}

export { Chat };
