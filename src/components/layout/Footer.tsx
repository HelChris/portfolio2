import { Link } from 'react-router-dom';

export function Footer() {
	return (
		<footer className="flex flex-col gap-4 border-t-4 border-teal-bright bg-teal-soft px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-10">
			<Link
				className="font-heading text-xl font-extrabold tracking-wide text-teal-deep active:underline outline-offset-4 focus-visible:outline-3 focus-visible:outline-gold"
				to="/"
			>
				HelChris
			</Link>
		</footer>
	);
}
