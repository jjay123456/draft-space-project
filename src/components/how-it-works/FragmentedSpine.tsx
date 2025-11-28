import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FragmentedSpineProps {
  children: ReactNode;
  alignment?: 'left' | 'right' | 'center' | 'full';
  width?: string;
  offset?: string;
  className?: string;
}

export const FragmentedSpine = ({ 
  children, 
  alignment = 'full', 
  width = 'w-full',
  offset,
  className 
}: FragmentedSpineProps) => {
  const alignmentClasses = {
    left: 'mr-auto',
    right: 'ml-auto',
    center: 'mx-auto',
    full: ''
  };

  return (
    <div 
      className={cn(
        width,
        alignmentClasses[alignment],
        offset,
        className
      )}
    >
      {children}
    </div>
  );
};
