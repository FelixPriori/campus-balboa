import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://www.campusbalboa.org/fr',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: 'https://www.campusbalboa.org/en',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: 'https://www.campusbalboa.org/fr/evenements/2024/extracurriculaire-olga',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://www.campusbalboa.org/en/events/2024/extracurriculaire-olga',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://www.campusbalboa.org/fr/evenements/2024/campus-launch',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://www.campusbalboa.org/en/events/2024/campus-launch',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
	]
}
