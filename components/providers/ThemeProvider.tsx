'use client';

import React from 'react';
import { ConfigProvider, theme } from 'antd';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#8B5CF6', // Your accent-primary
          colorSuccess: '#06B6D4', // Your accent-secondary
          colorWarning: '#F59E0B',
          colorError: '#EF4444',
          colorInfo: '#3B82F6',
          colorBgBase: '#0A0A0F', // Your background-primary
          colorBgContainer: '#12121A', // Your background-secondary
          colorBgElevated: '#1A1A25', // Your background-tertiary
          colorBorder: '#2A2A3A', // Your border-default
          colorText: '#FFFFFF', // Your text-primary
          colorTextSecondary: '#B8B8C8', // Your text-secondary
          colorTextTertiary: '#787888', // Your text-tertiary
          borderRadius: 8,
          controlHeight: 40,
          fontSize: 14,
        },
        components: {
          Dropdown: {
            colorBgElevated: '#1A1A25',
            colorBgTextHover: '#222230',
          },
          Menu: {
            darkItemBg: '#1A1A25',
            darkItemHoverBg: '#222230',
            darkItemSelectedBg: 'rgba(139, 92, 246, 0.1)',
            darkItemColor: '#B8B8C8',
            darkItemSelectedColor: '#8B5CF6',
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
