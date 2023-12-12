import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: {
        'support': './src/support.ts',
        'array': './src/array.ts',
        'filesize': './src/filesize.ts',
        'hash': './src/hash.ts',
        'lookup': './src/lookup.ts',
        'nested-set': './src/nested-set.ts',
        'tap': './src/tap.ts',
      },
      formats: ['es', 'cjs'],
    },
    minify: 'terser',
  },
});
