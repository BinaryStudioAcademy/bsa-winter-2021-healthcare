import { MemberKey } from '~/common/enums';

interface IMember {
  [MemberKey.ID]:string
  [MemberKey.NAME]: string;
  [MemberKey.AVATAR_PATH]: string;
}

export type { IMember };
