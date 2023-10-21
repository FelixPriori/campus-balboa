import { MetadataRoute } from "next";
import { headers } from 'next/headers';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://campusbalboa.org/sitemap.xml',
    }
}