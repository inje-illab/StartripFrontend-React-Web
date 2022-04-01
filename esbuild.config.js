import { build } from 'esbuild'

build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  outfile: './dist/bundle.js',
  minify: true,
  target: 'es2020',
  define: {
    'process.env.NODE_ENV': 'production'
  }
})