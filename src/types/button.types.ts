import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit';
  textStyle?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}
