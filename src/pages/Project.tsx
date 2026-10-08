import { useLocation } from 'react-router-dom';
import { getProjectByPath } from '../config/projects';
import { ShareLink } from '../components/interface/ShareLink';

export default function Project() {
	const { pathname } = useLocation();
	const project = getProjectByPath(pathname);

	if (!project) {
		return <p className="p-8">Project not found.</p>;
	}

	return (
		<article className="mx-auto max-w-4xl px-6 py-12 md:px-10">
			<header className="mb-2">
				<div className="flex items-center gap-4 justify-between">
				<h1 className="text-h1">{project.title}</h1>
				<ShareLink />
				</div>
				<ul className="mb-6 mt-4 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
					{project.technologies.map((technology) => (
						<li key={technology} className="rounded-full border border-teal-bright bg-transparent px-3 py-1 text-sm text-text">
							{technology}
						</li>
					))}
				</ul>
				<p className="max-w-2xl text-body">{project.description}</p>
				<nav aria-label={`${project.title} links`} className="flex gap-4 mb-2">
					{project.links.map((link) => (
						<a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="button">
							{link.label}
						</a>
					))}
				</nav>
				<figure>
				<img
					src={project.image}
					alt={project.imageAlt}
					width="1200"
					height="900"
					className="w-full rounded-lg"
				/>
				<figcaption className="my-2 text-sm">{project.imageCaption}</figcaption>
				</figure>
			</header>
			<section aria-labelledby="project-details">
				<h2 id="project-details" className="mb-2">About the project</h2>
				<p className="max-w-3xl">{project.content}</p>
			</section>
		</article>
	);
}