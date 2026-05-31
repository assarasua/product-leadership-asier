
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  const featuredCases = [
    {
      label: t('portfolio.featured.foodie.label'),
      title: t('portfolio.featured.foodie.title'),
      subtitle: t('portfolio.featured.foodie.subtitle'),
      description: t('portfolio.featured.foodie.description'),
      outcome: t('portfolio.featured.foodie.outcome'),
      repoUrl: 'https://github.com/assarasua/foodie-gipuzkoa-by-asier',
      liveUrl: 'https://gipuzkoafoodie.eu/',
      stack: [
        'Vite',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'shadcn/ui',
        'Express',
        'Prisma',
        'PostgreSQL',
        'Railway',
        'Cloudflare'
      ],
      bullets: [
        t('portfolio.featured.foodie.bullets.one'),
        t('portfolio.featured.foodie.bullets.two'),
        t('portfolio.featured.foodie.bullets.three')
      ]
    },
    {
      label: t('portfolio.featured.digest.label'),
      title: t('portfolio.featured.digest.title'),
      subtitle: t('portfolio.featured.digest.subtitle'),
      description: t('portfolio.featured.digest.description'),
      outcome: t('portfolio.featured.digest.outcome'),
      repoUrl: 'https://github.com/assarasua/product-digest',
      liveUrl: 'https://productdigest.es/',
      stack: [
        'Next.js',
        'React',
        'TypeScript',
        'MDX',
        'PostgreSQL',
        'Railway',
        'Cloudflare',
        'OpenNext',
        'Cloudflare Workers Cron'
      ],
      bullets: [
        t('portfolio.featured.digest.bullets.one'),
        t('portfolio.featured.digest.bullets.two'),
        t('portfolio.featured.digest.bullets.three')
      ]
    },
    {
      label: t('portfolio.featured.timetracking.label'),
      title: t('portfolio.featured.timetracking.title'),
      subtitle: t('portfolio.featured.timetracking.subtitle'),
      description: t('portfolio.featured.timetracking.description'),
      outcome: t('portfolio.featured.timetracking.outcome'),
      repoUrl: 'https://github.com/assarasua/time-tracking',
      liveUrl: 'https://time-tracking.hutech.tech/',
      stack: [
        'Next.js 15',
        'React 19',
        'TypeScript',
        'Tailwind CSS',
        'PostgreSQL',
        'Prisma',
        'Kysely',
        'Google OAuth',
        'Resend',
        'SSE'
      ],
      bullets: [
        t('portfolio.featured.timetracking.bullets.one'),
        t('portfolio.featured.timetracking.bullets.two'),
        t('portfolio.featured.timetracking.bullets.three')
      ]
    },
    {
      label: t('portfolio.featured.hutech.label'),
      title: t('portfolio.featured.hutech.title'),
      subtitle: t('portfolio.featured.hutech.subtitle'),
      description: t('portfolio.featured.hutech.description'),
      outcome: t('portfolio.featured.hutech.outcome'),
      repoUrl: 'https://github.com/assarasua/hutech-tech',
      liveUrl: 'https://hutech.tech/',
      stack: [
        'Vanilla JS',
        'HTML/CSS',
        'Cloudflare Workers',
        'JSON Schema',
        'Plausible Analytics',
        'Content-driven Architecture'
      ],
      bullets: [
        t('portfolio.featured.hutech.bullets.one'),
        t('portfolio.featured.hutech.bullets.two'),
        t('portfolio.featured.hutech.bullets.three')
      ]
    },
    {
      label: t('portfolio.featured.guda.label'),
      title: t('portfolio.featured.guda.title'),
      subtitle: t('portfolio.featured.guda.subtitle'),
      description: t('portfolio.featured.guda.description'),
      outcome: t('portfolio.featured.guda.outcome'),
      repoUrl: 'https://github.com/assarasua/guda',
      liveUrl: 'https://guda.bizkardolab.eu/',
      stack: [
        'Node.js',
        'Express',
        'PostgreSQL',
        'Vanilla JS',
        'Multer',
        'Resend',
        'Magic Link Auth',
        'Cloudflare'
      ],
      bullets: [
        t('portfolio.featured.guda.bullets.one'),
        t('portfolio.featured.guda.bullets.two'),
        t('portfolio.featured.guda.bullets.three')
      ]
    },
    {
      label: t('portfolio.featured.newsgang.label'),
      title: t('portfolio.featured.newsgang.title'),
      subtitle: t('portfolio.featured.newsgang.subtitle'),
      description: t('portfolio.featured.newsgang.description'),
      outcome: t('portfolio.featured.newsgang.outcome'),
      repoUrl: 'https://github.com/assarasua/newsgang',
      liveUrl: 'https://newsgang.es/',
      stack: [
        'Next.js',
        'React',
        'TypeScript',
        'Bilingual UX',
        'AI Editorial Pipeline',
        'RSS Ingestion',
        'Subscription Model'
      ],
      bullets: [
        t('portfolio.featured.newsgang.bullets.one'),
        t('portfolio.featured.newsgang.bullets.two'),
        t('portfolio.featured.newsgang.bullets.three')
      ]
    }
  ];

  const websites = [
    { name: "Gipuzkoa Foodie", url: "https://gipuzkoafoodie.eu/" },
    { name: "Product Digest", url: "https://productdigest.es/" },
    { name: "Belako", url: "https://belako.bizkardolab.eu/" },
    { name: "Hutech", url: "https://hutech.tech/" },
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('portfolio.title')}</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="space-y-10 mb-10">
          {featuredCases.map((featuredCase) => (
            <div key={featuredCase.title} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.2em] text-orange-400 mb-3">
                    {featuredCase.label}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    {featuredCase.title}
                  </h3>
                  <p className="text-lg text-orange-100/80 mb-4">
                    {featuredCase.subtitle}
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {featuredCase.description}
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    {featuredCase.outcome}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[220px]">
                  <a
                    href={featuredCase.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-3 bg-orange-500 hover:bg-orange-400 text-white rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    {t('portfolio.featured.visitSite')}
                  </a>
                  <a
                    href={featuredCase.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
                  >
                    <Github size={18} className="mr-2" />
                    {t('portfolio.featured.viewCode')}
                  </a>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-400 mb-4">
                  {t('portfolio.featured.stackTitle')}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {featuredCase.stack.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-2 bg-gray-900/60 border border-gray-700 rounded-full text-sm text-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-400 mb-4">
                  {t('portfolio.featured.highlightsTitle')}
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {featuredCase.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="p-4 bg-gray-900/40 border border-gray-700 rounded-xl text-gray-300 leading-relaxed"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">{t('portfolio.githubTitle')}</h3>
            <p className="text-gray-400 mb-6">{t('portfolio.githubDescription')}</p>
            <a
              href="https://github.com/assarasua"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
            >
              <Github size={18} className="mr-2" />
              github.com/assarasua
            </a>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">{t('portfolio.websitesTitle')}</h3>
            <div className="space-y-3">
              {websites.map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gray-900/40 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors duration-200"
                >
                  <span className="text-white font-medium">{site.name}</span>
                  <ExternalLink size={18} className="text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
