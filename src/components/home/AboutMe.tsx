const textColor = "text-teal-deep";

export function AboutMe() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-surface px-4 py-8 sm:px-6 sm:py-10"
    >
      <div className="mx-auto max-w-4xl">
        <header className="text-center">
          <h2 id="about-heading" className="text-h1">
            HelChris
          </h2>
          <p className={`mt-2 text-body italic ${textColor}`}>Front-End Developer</p>
          <p className={`text-body italic ${textColor}`}>
            Background in Early Childhood Education
          </p>
        </header>

      </div>
    </section>
  );
}
