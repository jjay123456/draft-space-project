import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'accent';
  size?: 'default' | 'sm' | 'lg';
  children: React.ReactNode;
}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = 'default', size = 'default', children, ...props }, ref) => {
    const baseClasses = `
      relative overflow-hidden transition-all duration-300 ease-out
      hover:scale-105 active:scale-95
      before:absolute before:inset-0 before:rounded-lg
      before:bg-gradient-to-r before:opacity-0 
      hover:before:opacity-100 before:transition-opacity before:duration-300
      after:absolute after:inset-0 after:rounded-lg after:opacity-0
      hover:after:opacity-20 after:bg-gradient-to-r after:blur-xl
      after:transition-all after:duration-300 after:-z-10
    `;

    const variantClasses = {
      default: `
        border-2 border-primary/50 bg-background text-foreground
        hover:border-primary hover:text-primary-foreground
        before:from-primary/20 before:to-accent/20
        after:from-primary after:to-accent
        shadow-lg hover:shadow-primary/25
      `,
      primary: `
        border-2 border-primary bg-primary text-primary-foreground
        hover:border-primary/80 
        before:from-primary before:to-primary/80
        after:from-primary after:to-primary/80
        shadow-lg hover:shadow-primary/40
      `,
      accent: `
        border-2 border-accent bg-accent text-accent-foreground
        hover:border-accent/80
        before:from-accent before:to-accent/80  
        after:from-accent after:to-accent/80
        shadow-lg hover:shadow-accent/40
      `,
    };

    return (
      <Button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          className
        )}
        size={size}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </Button>
    );
  }
);

GlowButton.displayName = 'GlowButton';

export default GlowButton;