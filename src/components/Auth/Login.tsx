'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

import { Button } from '../ui/button';
import { Input } from '../ui/input';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCredentialsLogin = () => {
    signIn('credentials', {
      email,
      password,
      redirect: true,
      callbackUrl: '/dashboard',
    });
  };

  const handleGithubLogin = () => {
    signIn('github', {
      redirect: true,
      callbackUrl: '/dashboard',
    });
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex w-[300px] flex-col gap-3">
        <Input
          size="md"
          type="email"
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          size="md"
          type="password"
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleCredentialsLogin}>Login</Button>
        <Button onClick={handleGithubLogin} variant="secondary">
          Continue with Github
        </Button>
      </div>
    </main>
  );
};