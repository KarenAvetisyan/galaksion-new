import { BaseLayout } from '@components/layout';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <BaseLayout>
      <div className="flex-center flex flex-col gap-6 py-36">
        <div className="flex flex-col items-end">
          <p className="text-lg">Not Found</p>
          <p className="text-9xl font-bold">404</p>
        </div>
        <Link href="/" className="bg-primary rounded-md px-8 py-4 text-xl">
          Return Home
        </Link>
      </div>
    </BaseLayout>
  );
}
