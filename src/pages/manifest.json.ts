import { SITE_DESCRIPTION, SITE_TITLE } from '@/consts';
import type { APIRoute } from 'astro';

const getManifest = () => {
    return JSON.stringify({
        "name": SITE_TITLE,
        "icons": [
            {
                src: '/icons/android-icon-36x36.png',
                sizes: "36x36",
                type: "image/png",
                density: "0.75"
            },
            {
                src: '/icons/android-icon-48x48.png',
                sizes: "48x48",
                type: "image/png",
                density: "1.0"
            },
            {
                src: '/icons/android-icon-72x72.png',
                sizes: "72x72",
                type: "image/png",
                density: "1.5"
            },
            {
                src: '/icons/android-icon-96x96.png',
                sizes: "96x96",
                type: "image/png",
                density: "2.0"
            },
            {
                src: '/icons/android-icon-144x144.png',
                sizes: "144x144",
                type: "image/png",
                density: "3.0"
            },
            {
                src: '/icons/android-icon-192x192.png',
                sizes: "192x192",
                type: "image/png",
                density: "4.0"
            }
        ],
        "theme_color": "#333333",
        "background_color": "#ffffff",
        "display": "standalone",
        "start_url": "/",
        "description": SITE_DESCRIPTION
    })
}

export const GET: APIRoute = () => {
    return new Response(getManifest());
};