'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { addToWaitlist } from '@/lib/supabase';

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type FormData = z.infer<typeof schema>;

interface WaitlistFormProps {
  source?: string;
  onSuccess?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export default function WaitlistForm({ source = 'hero', onSuccess, size = 'lg' }: WaitlistFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setError(null);
      await addToWaitlist(data.email, source);
      setIsSuccess(true);
      reset();
      onSuccess?.();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    }
  };

  if (isSuccess) {
    return (
      <div className="relative overflow-hidden bg-primary-600/10 border border-primary-500/30 rounded-lg p-6">
        {/* Animated scan line effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent animate-pulse" />
        
        <div className="relative flex items-center justify-center gap-3">
          <CheckCircle2 className="w-6 h-6 text-primary-400 animate-scale-in" />
          <div className="text-left">
            <h3 className="text-lg font-bold font-mono text-primary-300 tracking-wider">
              ACCESS_GRANTED
            </h3>
            <p className="text-sm text-gray-400 font-mono mt-1">
              {'>'} Waitlist entry confirmed. Launch notification queued.
            </p>
          </div>
        </div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-500/50" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary-500/50" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-2xl">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <Input
            {...register('email')}
            type="email"
            placeholder="Enter your email"
            icon={<Mail className="w-5 h-5" />}
            error={errors.email?.message}
            disabled={isSubmitting}
            className="h-full"
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          size={size}
          loading={isSubmitting}
          className="sm:w-auto w-full"
        >
          Join Waitlist
        </Button>
      </div>

      {error && (
        <p className="mt-3 text-sm text-red-400 text-center">{error}</p>
      )}

      <p className="mt-4 text-sm text-gray-500 text-center">
        No spam. Unsubscribe anytime. We respect your privacy.
      </p>
    </form>
  );
}