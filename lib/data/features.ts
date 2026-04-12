export interface Feature {
  key: string;
  icon: string;
}

export const features: Feature[] = [
  { key: 'modernGui', icon: 'monitor' },
  { key: 'animatedTransitions', icon: 'sparkles' },
  { key: 'processBrowser', icon: 'search' },
  { key: 'autoConfig', icon: 'settings' },
  { key: 'autoInject', icon: 'rocket' },
  { key: 'injectionHistory', icon: 'clock' },
  { key: 'realtimeLogging', icon: 'terminal' },
  { key: 'lightweight', icon: 'feather' },
  { key: 'uwpProtection', icon: 'shield' },
  { key: 'architectureDetection', icon: 'cpu' },
  { key: 'adminStatus', icon: 'user' },
  { key: 'robustErrorHandling', icon: 'alert-triangle' },
];
