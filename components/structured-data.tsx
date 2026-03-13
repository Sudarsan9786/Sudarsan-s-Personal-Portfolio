export function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sudarsan Perumal V',
    jobTitle: 'Full Stack Developer',
    email: 'sudarsanv8786@gmail.com',
    url: 'https://yourportfolio.com',
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'Full Stack Development',
      'Frontend Development',
      'Backend Development',
      'Web Development',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sudarsan Perumal V - Full Stack Developer Portfolio',
    url: 'https://yourportfolio.com',
    description:
      'Full Stack Developer with 2+ years of experience building modern, scalable web applications. Specialized in React, Next.js, and TypeScript.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

