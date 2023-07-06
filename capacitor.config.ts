import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'bi.ksquad.qrcode',
  appName: 'qr-code-scanner',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
