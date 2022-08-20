import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // https://github.com/antfu/unplugin-icons
        Icons({
            compiler:    'jsx',
            autoInstall: true,
        }),

        // https://github.com/antfu/unplugin-auto-import
        AutoImport({
            resolvers: [
                IconsResolver({
                    componentPrefix: 'Icon',
                    extension:       'jsx'
                })
            ],
            include:   [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
            ],
            dts:       'src/auto-imports.d.ts',
        }),
    ],

    preview: {
        open: false,
        port: 4000
    },

    server: {
        open: false, // open in browser on server start
        port: 8080,
        hmr:  {
            protocol: 'ws',
            port:     8080,
        },
        fs:   {
            strict: false,
        },
    },
})
