import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.myspp',
  appName: 'SPP TB',
  webDir: 'out',
  server:{
      androidScheme: 'https'
  }
};

export default config;
