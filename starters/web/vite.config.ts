import { tamaguiExtractPlugin, tamaguiPlugin } from '@tamagui/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

const shouldExtract = process.env.EXTRACT === '1'

const tamaguiConfig = {
  components: ['tamagui'],
  config: 'src/tamagui.config.ts',
  useReactNativeWebLite: true,
}

export default defineConfig({
  // root: './src',
  clearScreen: true,
  plugins: [
    react(),
    tamaguiPlugin(tamaguiConfig),
    shouldExtract ? tamaguiExtractPlugin(tamaguiConfig) : null,
  ].filter(Boolean),
})