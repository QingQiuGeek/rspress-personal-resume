import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
	root: path.join(__dirname, 'docs'),
	title: '青秋 Geek',
	icon: '/logo.png',
	logo: '/logo.png',
	description: '青秋Geek的个人Card，青秋博客',
	themeConfig: {
		outlineTitle: 'false',
		enableAppearanceAnimation: true,
		enableContentAnimation: true,
		enableScrollToTop: true,
		prevPageText: 'Previous Pagsse',
		socialLinks: [
			{
				icon: 'github',
				mode: 'link',
				content: 'https://github.com/web-infra-dev/rspress',
			},
		],
		footer: {
			message: '@Copyright 青秋Geek',
		},
	},
});
