import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import Icons from 'unplugin-icons/vite'
import { VitePWA } from 'vite-plugin-pwa'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import {FileSystemIconLoader} from "unplugin-icons/loaders"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // https://github.com/antfu/unplugin-icons
        Icons({
            compiler:          'jsx',
            autoInstall:       true,
            customCollections: {
                local: FileSystemIconLoader('src/assets/icons'),
            },
        }),

        // https://github.com/antfu/unplugin-auto-import
        AutoImport({
            resolvers: [
                IconsResolver({
                    componentPrefix:   'Icon',
                    customCollections: ['local'],
                })
            ],
            imports:   [
                {
                    'axios': [['default', 'http']]
                }
            ],
            include:   [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
            ],
            dts:       'src/auto-imports.d.ts',
        }),

        // https://github.com/antfu/vite-plugin-pwa
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: [
                'favicon.png',
                'src/assets/**/*',
                'apple-touch-icon.png'
            ],
            devOptions: {
                enabled:          true
            },
            manifest:      {
                theme_color: '#ffffff',
                icons:       [
                    {
                        src:     '/android-chrome-192x192.png',
                        sizes:   '192x192',
                        type:    'image/png',
                        purpose: 'any maskable'
                    },
                    {
                        src:   '/android-chrome-512x512.png',
                        sizes: '512x512',
                        type:  'image/png'
                    }
                ],
            },
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
