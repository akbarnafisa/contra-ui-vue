import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { uglify } from 'rollup-plugin-uglify'
import injectStyle from './build/injectStyle'
import globby from 'globby'

const index = {
  'index': 'src/components/index.ts',
}

function combineInput (componentInput, index) {
  return {
    ...index,
    ...componentInput,
  }
}

function generateComponentInput (pathList) {
  return pathList.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.split('/')[4]]: curr,
    }),
    {}
  )
}

module.exports = globby([
  'src/components/**/*.vue',
  '!src/components/_Common/*.vue',
])
  .then(pathList => generateComponentInput(pathList))
  .then(result => {
    console.log(combineInput(result, index))
    return result
  })
  .then(componentInput =>
    defineConfig({
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src'),
        },
        extensions: ['.vue', '.js', '.ts'],
      },
      build: {
        lib: {
          entry: resolve(__dirname, 'src/components/index.ts'),
          name: 'Contra',
        },
        cssCodeSplit: true,
        rollupOptions: {
          input: combineInput(componentInput, index),
          external: ['vue'],
          output: [
            {
              dir: 'dist/esm',
              format: 'esm',
              entryFileNames: ({ name: fileName }) => {
                return `${fileName}.js`
              },
            },
            {
              dir: 'dist/cjs',
              format: 'cjs',
              exports: 'named',
              entryFileNames: ({ name: fileName }) => {
                return `${fileName}.js`
              },
            },
          ],
        },
      },
      plugins: [vue(), injectStyle(), uglify()],
    })
  )
