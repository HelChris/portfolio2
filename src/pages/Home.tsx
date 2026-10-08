import { PortfolioPreview } from '../components/home/PortfoiloPreview';
import { Contact } from '../components/home/Contact';
import { projects } from '../config/projects';

function Home() {
	return (
		<>
			<section id="about" className="mb-8 h-80 m-4">
				<h1 className="text-h1">About me</h1> 
				<p className="text-body">Welcome to my portfolio.</p>
			</section>

			<section id="projects" className="projects-section mb-8 min-h-100 p-4">
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

			<Contact />
		</>
	);
}

export default Home;
