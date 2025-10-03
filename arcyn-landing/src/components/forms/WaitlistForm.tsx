'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail } from 'lucide-react';
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
      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 text-center">
        <div className="text-4xl mb-3">🎉</div>
        <h3 className="text-xl font-bold text-green-400 mb-2">You're on the list!</h3>
        <p className="text-gray-300">
          We'll notify you when Arcyn launches. Check your email for updates.
        </p>
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