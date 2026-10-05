import { Link } from 'react-router-dom';
import { Navigation } from '../interface/Navigation';

export function Header() {
	return (
		<header className="site-header flex flex-row flex-nowrap items-center justify-between gap-8 border-b-4 border-teal-bright bg-teal-soft px-10 py-4">
			<Link
				className="font-heading text-xl font-extrabold tracking-wide text-teal-deep active:underline outline-offset-4 focus-visible:outline-3 focus-visible:outline-gold"
				to="/"
			>
				-HelChris-
			</Link>
			<Navigation ariaLabel="Main navigation" />
		</header>
	);
}
