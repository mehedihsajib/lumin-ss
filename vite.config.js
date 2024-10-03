import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    server: {
        hmr: {
            host: 'localhost',
        }
    },
    plugins: [ 
        // laravel({
        //     input: ['resources/css/app.css', 'resources/js/app.js'],
        //     refresh: true,
            
        // }),
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue(),
    ],
});
