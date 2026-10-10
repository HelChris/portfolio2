import { Link } from 'react-router-dom';
import logoDark from '../../assets/logo/logov2dark.svg';
import logoLight from '../../assets/logo/logov2light.svg';

export function Footer() {
	return (
		<footer className="flex flex-col gap-4 border-t-4 border-teal-bright bg-teal-soft px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-10">
			<Link
				className="flex m-auto items-center outline-offset-4 focus-visible:outline-3 focus-visible:outline-focus"
				to="/"
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			>
				<picture>
					<source media="(prefers-color-scheme: dark)" srcSet={logoDark} />
					<img src={logoLight} alt="HelChris home" className="max-h-40"/>
				</picture>
			</Link>
		</footer>
	);
}
