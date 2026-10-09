import { Link } from 'react-router-dom';
import { Navigation } from '../interface/Navigation';
import logoDark from '../../assets/logo/headerlogodark.svg';
import logoLight from '../../assets/logo/headerlogolight.svg';

export function Header() {
	return (
		<header className="site-header flex flex-row flex-nowrap items-center justify-between gap-8 border-b-4 border-teal-bright bg-teal-soft px-10 py-0">
			<Link
				className="flex items-center outline-offset-4 focus-visible:outline-3 focus-visible:outline-focus"
				to="/"
			>
				<picture className="p-2">
					<source media="(prefers-color-scheme: dark)" srcSet={logoDark} />
					<img className="site-logo" src={logoLight} alt="HelChris home" />
				</picture>
			</Link>
			<Navigation ariaLabel="Main navigation" />
		</header>
	);
}
