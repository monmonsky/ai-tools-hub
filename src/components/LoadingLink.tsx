"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MouseEvent, ReactNode } from 'react';
import { useLoading } from './LoadingProvider';

interface LoadingLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  [key: string]: any;
}

export default function LoadingLink({
  href,
  children,
  className,
  prefetch,
  replace = false,
  scroll = true,
  ...props
}: LoadingLinkProps) {
  const router = useRouter();
  const { startLoading, stopLoading, setProgress } = useLoading();

  const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    // Don't override external links or same-page links
    if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return;
    }

    // Check if it's the same page
    if (href === window.location.pathname + window.location.search) {
      return;
    }

    e.preventDefault();

    // Start loading
    startLoading();

    // Simulate progress
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += Math.random() * 10 + 5;
      if (progress >= 85) {
        clearInterval(progressInterval);
        progress = 85;
      }
      setProgress(progress);
    }, 100);

    try {
      // Navigate
      if (replace) {
        router.replace(href, { scroll });
      } else {
        router.push(href, { scroll });
      }

      // Complete loading after navigation
      setTimeout(() => {
        clearInterval(progressInterval);
        stopLoading();
      }, 500);
    } catch (error) {
      clearInterval(progressInterval);
      stopLoading();
      console.error('Navigation error:', error);
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={className}
      prefetch={prefetch}
      {...props}
    >
      {children}
    </Link>
  );
}