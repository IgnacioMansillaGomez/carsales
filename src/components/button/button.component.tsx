'use client';

import { CustomButtonProps } from '@/types/button.types';
import Image from 'next/image';

export const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  type,
  textStyle,
  rightIcon,
  isDisabled,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={type || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};
