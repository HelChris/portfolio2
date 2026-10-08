import { routes } from './navigation';
import readersRealmImage from '@/assets/projects/readersrealm.jpg';
import spiritBidImage from '@/assets/projects/spiritbid1.jpg';
import helTechImage from '@/assets/projects/heltech.jpg';

export type ProjectLink = {
	label: string;
	href: string;
};

export type Project = {
	title: string;
	to: (typeof routes)[keyof typeof routes];
	shortDescription: string;
	description: string;
	technologies: string[];
	image: string;
	imageAlt: string;
	imageCaption: string;
	links: ProjectLink[];
	content: string;
};

export const projects = [
	{
		title: 'Readers Realm',
		to: routes.readersrealm,
		shortDescription: 'A social book platform where readers share reviews, discover recommendations, and connect with fellow book lovers.',
		description: 'Readers Realm is a social platform for book lovers to share reviews and thoughts, discover what others are reading, and connect around books.',
		technologies: ['HTML', 'Tailwind CSS', 'Vanilla JavaScript', 'Fetch API', 'Web Storage API', 'Noroff Social API', 'ESLint'],
		image: readersRealmImage,
		imageAlt: 'Screenshot of the Readers Realm project',
		imageCaption: 'Readers Realm: a social media platform for book lovers to talk about books.',
		links: [
			{ label: 'Live demo', href: 'https://readersrealm.netlify.app' },
			{ label: 'GitHub repository', href: 'https://github.com/HelChris/readersrealm' },
		],
		content: 'Readers Realm was created as a social space for readers to exchange reviews and ideas. The project uses the Fetch API to communicate with the Noroff Social API and Web Storage API to support a responsive experience across visits. Its interface combines Tailwind CSS with vanilla JavaScript and ESLint-supported code.',
	},
	{
		title: 'Spirit Bid',
		to: routes.spiritbid,
		shortDescription: 'An auction platform for a silly niche audience, built as a semester project with live bidding and a playful user experience.',
		description: 'Spirit Bid is an auction platform built for a silly niche audience as a semester project. It combines a playful theme with browsing, bidding, and a clear auction flow.',
		technologies: ['HTML5', 'JavaScript (ES modules)', 'Tailwind CSS v4', 'Vite', 'Noroff API', 'ESLint', 'Husky', 'lint-staged'],
		image: spiritBidImage,
		imageAlt: 'Screenshot of the Spirit Bid project',
		imageCaption: 'Spirit Bid presents a clear, engaging flow for exploring and placing bids.',
		links: [
			{ label: 'Live demo', href: 'https://spiritbid.netlify.app/' },
			{ label: 'GitHub repository', href: 'https://github.com/HelChris/semesterproject2'},
		],
		content: 'Spirit Bid explores how an auction experience can be made engaging for a very specific, playful audience. The semester project uses JavaScript ES modules and the Noroff API to handle auction data, with Tailwind CSS v4 and Vite supporting the interface and development workflow. ESLint, Husky, and lint-staged help keep the codebase consistent before deployment to Netlify.',
	},
	{
		title: 'HelTech',
		to: routes.heltech,
		shortDescription: 'An e-commerce application built with React and TypeScript for a JavaScript framework course, with a structured shopping experience.',
		description: 'HelTech is an e-commerce application developed for a JavaScript framework course. It uses React and TypeScript to deliver a structured shopping experience with client-side state and validation.',
		technologies: ['React', 'TypeScript', 'Vite', 'React Router', 'Zustand', 'Zod', 'CSS Modules', 'Vitest', 'Testing Library', 'ESLint', 'Prettier', 'Husky'],
		image: helTechImage,
		imageAlt: 'Screenshot of the HelTech project',
		imageCaption: 'HelTech turns technical information into a direct and approachable project experience.',
		links: [
			{ label: 'Live demo', href: 'https://jsfw-heltech.netlify.app' },
			{ label: 'GitHub repository', href: 'https://github.com/HelChris/jsfw-heltech' },
		],
		content: 'HelTech is an e-commerce application developed during a JavaScript framework course. React, TypeScript, and React Router provide the application structure, while Zustand manages client-side state and Zod supports data validation. CSS Modules keep component styling contained, and Vitest with Testing Library supports reliable UI behavior. ESLint, Prettier, and Husky support a consistent development workflow.',
	},
] satisfies readonly Project[];

export function getProjectByPath(path: string) {
	return projects.find((project) => project.to === path);
}
