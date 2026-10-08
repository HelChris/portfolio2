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
	description: string;
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
		description: 'A reading-focused project experience.',
		image: readersRealmImage,
		imageAlt: 'Screenshot of the Readers Realm project',
		imageCaption: 'Readers Realm combines a calm reading experience with a focused interface.',
		links: [
			{ label: 'Live demo', href: 'https://readersrealm.netlify.app' },
			{ label: 'GitHub repository', href: 'https://github.com/HelChris/readersrealm' },
		],
		content: 'Add the detailed Readers Realm case study here, including the problem, approach, and outcome.',
	},
	{
		title: 'Spirit Bid',
		to: routes.spiritbid,
		description: 'A project exploring bidding and interaction.',
		image: spiritBidImage,
		imageAlt: 'Screenshot of the Spirit Bid project',
		imageCaption: 'Spirit Bid presents a clear, engaging flow for exploring and placing bids.',
		links: [
			{ label: 'Live demo', href: 'https://spiritbid.netlify.app/' },
			{ label: 'GitHub repository', href: 'https://github.com/HelChris/semesterproject2'},
		],
		content: 'Add the detailed Spirit Bid case study here, including the problem, approach, and outcome.',
	},
	{
		title: 'HelTech',
		to: routes.heltech,
		description: 'A technology project and case study.',
		image: helTechImage,
		imageAlt: 'Screenshot of the HelTech project',
		imageCaption: 'HelTech turns technical information into a direct and approachable project experience.',
		links: [
			{ label: 'Live demo', href: 'https://jsfw-heltech.netlify.app' },
			{ label: 'GitHub repository', href: 'https://github.com/HelChris/jsfw-heltech' },
		],
		content: 'Add the detailed HelTech case study here, including the problem, approach, and outcome.',
	},
] satisfies readonly Project[];

export function getProjectByPath(path: string) {
	return projects.find((project) => project.to === path);
}
