'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { localeFlags, localeNames, type Locale } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';

const LanguageDropdown: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (newLocale: string) => {
    // Store preference
    localStorage.setItem('preferred-locale', newLocale);
    document.cookie = `preferred-locale=${newLocale};path=/;max-age=31536000`;

    // Navigate to new locale
    const segments = pathname.split('/');
    segments[1] = newLocale === 'en' ? '' : newLocale;
    const newPath = segments.filter(Boolean).join('/');
    router.push(newPath === '' ? '/' : `/${newPath}`);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background-tertiary border-2 border-border-default hover:border-accent-primary transition-all duration-200 cursor-pointer"
      >
        <Globe className="w-4 h-4 text-accent-primary" />
        <span className="hidden sm:inline text-sm font-medium text-text-primary">
          {localeNames[locale as Locale]}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-text-secondary transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-background-tertiary border-2 border-border-default rounded-lg shadow-xl overflow-hidden z-50">
          {/* English Option */}
          <button
            onClick={() => handleLanguageChange('en')}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200",
              locale === 'en'
                ? "bg-background-elevated border-l-4 border-accent-primary"
                : "hover:bg-background-elevated border-l-4 border-transparent"
            )}
          >
            <span className="text-xl">{localeFlags.en}</span>
            <div className="flex-1">
              <span className={cn(
                "font-medium",
                locale === 'en' ? "text-accent-primary" : "text-text-primary"
              )}>
                {localeNames.en}
              </span>
            </div>
            {locale === 'en' && (
              <svg className="w-5 h-5 text-accent-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>

          {/* Chinese Option */}
          <button
            onClick={() => handleLanguageChange('zh')}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200",
              locale === 'zh'
                ? "bg-background-elevated border-l-4 border-accent-primary"
                : "hover:bg-background-elevated border-l-4 border-transparent"
            )}
          >
            <span className="text-xl">{localeFlags.zh}</span>
            <div className="flex-1">
              <span className={cn(
                "font-medium",
                locale === 'zh' ? "text-accent-primary" : "text-text-primary"
              )}>
                {localeNames.zh}
              </span>
            </div>
            {locale === 'zh' && (
              <svg className="w-5 h-5 text-accent-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
