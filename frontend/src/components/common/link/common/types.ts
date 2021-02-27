import { AppRoute } from 'common/enums';
import { LinkProps } from 'react-router-dom';

type Props = LinkProps & {
  to: AppRoute;
};

export type { Props };
