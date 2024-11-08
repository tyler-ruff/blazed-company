// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { MenuItem, NavMenu } from "./lib/types/menu";

export const SITE_TITLE = 'Blazed Company';
export const SITE_DESCRIPTION = 'Corporate website for Blazed Labs.';

export const SITE_SOCIAL = {
    facebook: {
        url: "https://www.facebook.com/blazedlabs"
    },
    twitter: {
        url: 'https://x.com/BlazedLabs'
    },
    github: {
        url: "https://github.com/blazed-labs"
    }
}

export const SITE_MENU = {
    id: "blz-main-nav",
    children: [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Support",
            path: "/help"
        },
        {
            title: "Investors",
            path: "/investors"
        },
        {
            title: "Directory",
            path: "/dir"
        }
    ] as MenuItem[]
} as NavMenu