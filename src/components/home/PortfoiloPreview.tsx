import { Link } from 'react-router-dom';
import type { RoutePath } from '../../config/navigation';

type PortfolioPreviewProps = {
	title: string;
	description: string;
	to: RoutePath;
	image?: string;
	imageAlt?: string;
};

export function PortfolioPreview({ title, description, to, image, imageAlt = '' }: PortfolioPreviewProps) {
	return (
		<Link
			className="portfolio-card group block overflow-hidden rounded-2xl text-inherit no-underline shadow-md transition-shadow duration-200 hover:shadow-lg"
			to={to}
		>
			<article>
				{image && (
					<img
						src={image}
						alt={imageAlt}
						width="800"
						height="600"
						loading="lazy"
						className="aspect-4/3 w-full object-cover"
					/>
				)}
				<div className="p-6">
					<h3 className="text-h3">
						{title}
					</h3>
					<p className="mt-2 text-body">{description}</p>
				</div>
			</article>
		</Link>
	);
}
