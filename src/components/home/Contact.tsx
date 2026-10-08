type ContactLink = {
  label: string;
  href: string;
  icon: string;
};

const contactLinks: ContactLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/helene-christine-halvorsen-058067259',
    icon: 'https://img.icons8.com/?size=100&id=64154&format=png&color=000000',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/helene_hch/',
    icon: 'https://img.icons8.com/?size=100&id=hFoVFpm6gl9A&format=png&color=000000',
  },
  {
    label: 'Discord',
    href: 'https://discord.com/users/792141193718923324',
    icon: 'https://img.icons8.com/?size=100&id=u9hrfH9TOa9D&format=png&color=000000',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/helchris',
    icon: 'https://img.icons8.com/?size=100&id=118557&format=png&color=000000',
  },
];

export function Contact() {
  return (
    <section id="contact" className="mb-8 min-h-80 m-4 md:flex md:flex-col md:items-center md:text-center" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="text-h1 mb-4">Contact</h2>
      <p className="text-body">Get in touch about a project or collaboration.</p>
      <nav aria-label="Contact links" className="mt-6 flex flex-wrap gap-4">
        {contactLinks.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit my ${label} profile`}
            className="inline-flex rounded-lg focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-gold"
          >
            <img src={icon} alt={`${label} profile`} width="96" height="96" />
          </a>
        ))}
      </nav>
    </section>
  );
}