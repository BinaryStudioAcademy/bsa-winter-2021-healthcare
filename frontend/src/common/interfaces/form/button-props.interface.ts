import { 
  ButtonType, 
  ButtonColor, 
  ButtonStyleType,
  AppRoute, 
  ButtonIcon  
} from 'common/enums';
import { ButtonClickCallback } from 'common/types';

interface ButtonProps {
  type?: ButtonType;
  styleType: ButtonStyleType;
  color: ButtonColor;
  label: string;
  onClick?: ButtonClickCallback;
  hasHiddenLabel: boolean;
  isDisabled?: boolean;
  icon?: ButtonIcon;
  href?: AppRoute;
}

export type { ButtonProps };
