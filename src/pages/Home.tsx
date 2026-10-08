import { PortfolioPreview } from '../components/home/PortfoiloPreview';
import { AboutMe } from '../components/home/AboutMe';
import { LanguagesTools } from '../components/home/LanguagesTools';
import { projects } from '../config/projects';
import { Contact } from '../components/home/Contact';


function Home() {
	return (
		<>
			<AboutMe />
			<section id="projects" className="projects-section min-h-100 p-4">
				<h2 className="text-h1 mb-4">Projects</h2>
				<ul className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-3 mb-4">
					{projects.map((project) => (
						<li key={project.to}>
							<PortfolioPreview
								title={project.title}
								description={project.description}
								to={project.to}
                                image={project.image}
                                imageAlt={project.imageAlt}
							/>
						</li>
					))}
				</ul>
			</section>

			<LanguagesTools />

			<Contact />
		</>
	);
}

export default Home;
