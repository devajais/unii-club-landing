import React from 'react';
import { Button, FadeIn, Card, ShinyText } from '../components/ui';

const ForCompaniesPage: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-50" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-aurora" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Hire <ShinyText>Proven Skill</ShinyText>, Not Just Potential.
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-400">
              Stop sifting through thousands of unverified resumes. Unii.club gives you direct access to a pipeline of student talent with portfolios of verified, hands-on project experience.
            </p>
          </div>
        </FadeIn>
        
        <div className="mt-20">
          <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
                The End of Guesswork in Campus Hiring.
              </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
              <FadeIn delay={200}>
                  <Card className="h-full">
                      <h3 className="text-xl font-bold text-white mb-2">Access Verified, High-Fidelity Profiles</h3>
                      <p className="text-gray-400">Every student profile is a rich portfolio of their club work, project contributions, and hackathon performance, verified by faculty mentors.</p>
                  </Card>
              </FadeIn>
              <FadeIn delay={300}>
                  <Card className="h-full">
                      <h3 className="text-xl font-bold text-white mb-2">Hire Based on Skills, Not Keywords</h3>
                      <p className="text-gray-400">Our intelligent search and matching engine allows you to find candidates based on the actual skills they have demonstrated, not just what they list on a resume.</p>
                  </Card>
              </FadeIn>
              <FadeIn delay={400}>
                  <Card className="h-full">
                      <h3 className="text-xl font-bold text-white mb-2">Reduce Hiring Costs & Time</h3>
                      <p className="text-gray-400">Drastically shorten your screening process. Our platform pre-vets candidates, so you only interview students who have already proven they can do the work.</p>
                  </Card>
              </FadeIn>
              <FadeIn delay={500}>
                  <Card className="h-full">
                      <h3 className="text-xl font-bold text-white mb-2">Engage with Future Talent</h3>
                      <p className="text-gray-400">Sponsor hackathons, post challenges, and build your brand directly with a community of India's most ambitious and proactive students.</p>
                  </Card>
              </FadeIn>
          </div>
        </div>
        
        <FadeIn delay={600} className="mt-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Build Your Future Team Today.
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="primary">Get Started</Button>
              <Button variant="secondary">Contact Sales</Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default ForCompaniesPage;