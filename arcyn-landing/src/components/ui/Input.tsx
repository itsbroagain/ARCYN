import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {label}
          </label>
        )}
        
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}
          
          <input
            ref={ref}
            className={cn(
              "w-full px-4 py-3 bg-dark-100 border border-dark-50 rounded-lg",
              "text-white placeholder:text-gray-500",
              "focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20",
              "transition-all duration-200",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
              icon && "pl-12",
              className
            )}
            {...props}
          />
        </div>
        
        {error && (
          <p className="mt-2 text-sm text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;