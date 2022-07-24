import { build } from 'esbuild'

build({
    entryPoints: ['../src/index.tsx'],
    bundle: true,
    outfile: './dist/bundle.js',
    minify: true,
    target: 'es2022',
    define: {
        'process.env.NODE_ENV': 'production',
    },
})
