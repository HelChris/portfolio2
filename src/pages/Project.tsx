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
			<header className="mb-10">
				<div className="flex items-center gap-4 justify-between">
				<h1 className="text-h1">{project.title}</h1>
				<ShareLink />
				</div>
				<p className=" max-w-2xl text-body mb-2">{project.description}</p>
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
				<div className="flex flex-wrap gap-4 items-center ">
				<nav aria-label={`${project.title} links`} className="flex gap-4">
					{project.links.map((link) => (
						<a key={link.label} href={link.href} target="_blank" rel="noreferrer">
							{link.label}
						</a>
					))}
				</nav>

			</div>
			</header>
			<section className="mt-12" aria-labelledby="project-details">
				<h2 id="project-details">About the project</h2>
				<p className="mt-4 max-w-3xl">{project.content}</p>
			</section>
		</article>
	);
}