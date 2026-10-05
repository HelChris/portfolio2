import { routes } from './navigation';
import readersRealmImage from '@/assets/projects/readersrealm.jpg';
import spiritBidImage from '@/assets/projects/spiritbid1.jpg';
import helTechImage from '@/assets/projects/heltech.jpg';

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
        image: readersRealmImage,
        imageAlt: 'Screenshot of the Readers Realm project',
	},
	{
		title: 'Spirit Bid',
		to: routes.spiritbid,
		description: 'A project exploring bidding and interaction.',
        image: spiritBidImage,
        imageAlt: 'Screenshot of the Spirit Bid project',
	},
	{
		title: 'HelTech',
		to: routes.heltech,
		description: 'A technology project and case study.',
        image: helTechImage,
        imageAlt: 'Screenshot of the HelTech project',
	},
] satisfies readonly Project[];
