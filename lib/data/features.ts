export interface Feature {
  key: string;
  icon: string;
}

export const features: Feature[] = [
  { key: 'autoInjection', icon: 'rocket' },
  { key: 'processBrowser', icon: 'search' },
  { key: 'architectureGuard', icon: 'shield' },
  { key: 'uwpDetection', icon: 'alert-triangle' },
  { key: 'realtimeLogging', icon: 'terminal' },
  { key: 'errorDiagnostics', icon: 'settings' },
];
