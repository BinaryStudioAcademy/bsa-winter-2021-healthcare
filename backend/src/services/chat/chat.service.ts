import { chatRepository } from '~/data/repositories';
import { IMember } from '~/common/interfaces';

class Chat {
  public getMembersByName(name: string): Promise<IMember[] | null> {
    return chatRepository.getMembersByName(name);
  }
}

export { Chat };
