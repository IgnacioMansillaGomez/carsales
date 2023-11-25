'use client';

import Image from 'next/image';
import { title } from 'process';

interface CustomButtonProps {
  title?: string;
  containerStyles?: string;
  handleClick?: () => {};
}

export const CustomButton = ({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={() => handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};
