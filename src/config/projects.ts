import { routes } from './navigation';

export type Project = {
	title: string;
	to: (typeof routes)[keyof typeof routes];
	description: string;
};

export const projects = [
	{
		title: 'Readers Realm',
		to: routes.readersrealm,
		description: 'A reading-focused project experience.',
	},
	{
		title: 'Spirit Bid',
		to: routes.spiritbid,
		description: 'A project exploring bidding and interaction.',
	},
	{
		title: 'HelTech',
		to: routes.heltech,
		description: 'A technology project and case study.',
	},
] satisfies readonly Project[];
