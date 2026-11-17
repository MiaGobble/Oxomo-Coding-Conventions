import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'

const __dirname = dirname(fileURLToPath(import.meta.url))

const luauGrammar = JSON.parse(
	readFileSync(join(__dirname, 'syntaxes/luau.tmLanguage.json'), 'utf8'),
)

export default defineConfig({
	title: 'Oxomo Coding Conventions',
	description:
		'Practices and styles for Roblox Luau that prioritize readability and organization.',
	cleanUrls: true,
	lastUpdated: true,

	markdown: {
		languages: [
			{
				...luauGrammar,
				name: 'luau',
				scopeName: 'source.luau',
				aliases: ['lua'],
			},
		],
		theme: {
			light: 'github-light',
			dark: 'github-dark',
		},
	},

	themeConfig: {
		nav: [
			{ text: 'Guide', link: '/intro' },
			{
				text: 'GitHub',
				link: 'https://github.com/MiaGobble/Oxomo-Coding-Conventions',
			},
		],

		sidebar: [
			{
				text: 'Guide',
				items: [
					{ text: 'Intro', link: '/intro' },
					{ text: 'Architecture', link: '/architecture' },
					{ text: 'Juxtaposition', link: '/juxtaposition' },
					{ text: 'Capitalization', link: '/capitalization' },
					{ text: 'Userdata Naming', link: '/userdata-naming' },
					{ text: 'Userdata Declaration', link: '/userdata-declaration' },
					{ text: 'Tables', link: '/tables' },
					{ text: 'Whitespace', link: '/whitespace' },
					{ text: 'Typechecking', link: '/typechecking' },
					{ text: 'OOP Format', link: '/oop-format' },
					{ text: 'Assertion and Logging', link: '/assertion-and-logging' },
					{ text: 'Documentation', link: '/documentation' },
					{ text: 'Tooling & Workflow', link: '/tooling' },
				],
			},
		],

		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/MiaGobble/Oxomo-Coding-Conventions',
			},
		],

		search: {
			provider: 'local',
		},

		editLink: {
			pattern:
				'https://github.com/MiaGobble/Oxomo-Coding-Conventions/edit/main/docs/:path',
			text: 'Edit this page on GitHub',
		},
	},
})
