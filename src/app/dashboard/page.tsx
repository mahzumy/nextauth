'use client';

import { signOut, useSession } from 'next-auth/react';

import { Counter } from '@/components/CounterApp/Counter';
import { Button } from '@/components/ui/button';

export default function Page() {
  const { data: session } = useSession();
  return (
    <main>
      <div className="flex justify-between p-8">
        <div className="text-lg font-bold">App.</div>
        <div className="flex items-center gap-4">
          <div>{session?.user?.name}</div>
          <img alt="" src={session?.user?.image} width={40} height={40} className="rounded-full" />
          <Button onClick={() => signOut()}>Logout</Button>
        </div>
      </div>
      <div>
        <Counter />
      </div>
    </main>
  );
}
