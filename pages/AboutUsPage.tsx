import React from 'react';
import { FadeIn, Button, ShinyText } from '../components/ui';

const AboutUsPage: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-aurora" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Our Mission: To <ShinyText>Democratize Opportunity.</ShinyText>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-400">
              We believe that every student, regardless of their college's tier or location, deserves a clear, verified pathway to their dream career. We are building the foundational infrastructure to turn student potential into proven ability.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 max-w-4xl mx-auto bg-dark-card border border-dark-border p-8 md:p-12 rounded-2xl">
          <FadeIn delay={200}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The Founder's Vision</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                  Unii.club was born from a deep understanding of the disconnect between academic theory and industry demands. The Indian employability crisis isn't a talent problem; it's an opportunity and guidance problem. We are here to solve that at scale.
              </p>
          </FadeIn>
        </div>

        <div className="mt-24">
          <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">Meet the Founder</h2>
          </FadeIn>
          <FadeIn delay={200}>
              <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 md:gap-12 items-center">
                  <div className="md:col-span-1">
                      <img src="https://media.licdn.com/dms/image/v2/D5603AQE8QuPNnRlZgw/profile-displayphoto-shrink_800_800/B56ZeIfTRhHEAc-/0/1750341597637?e=1762387200&v=beta&t=FbLtt3SLW_2VKXkB-XKzafi2FoPobJ29e-GcQsNnlRA" alt="Devashish Jaiswal" className="rounded-full shadow-lg aspect-square object-cover" />
                  </div>
                  <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold text-white">Devashish Jaiswal</h3>
                      <p className="text-brand-purple font-semibold mb-4">Founder & CEO</p>
                      <div className="space-y-4 text-gray-400">
                          <p>
                              Devashish is an innovator and technologist with a passion for applying artificial intelligence to solve complex, real-world problems. With over four years of deep experience in the AI and tech industry, he has a proven track record of building impactful technology from the ground up.
                          </p>
                          <p>
                              Before founding Unii.club, Devashish served as the CTO of NeuroLaw AI and co-founded Markaible. His journey revealed a critical gap: companies need talent with proven, practical skills learned outside the classroom.
                          </p>
                          <p>
                              He founded Unii.club to be the bridge, leveraging AI to structure, verify, and guide the practical learning journey of every student in India, creating a level playing field where ambition and proven ability are what matter.
                          </p>
                      </div>
                       <Button as="a" href="https://linkedin.com/in/devajais/" variant="secondary" className="mt-6 !px-6 !py-2 !text-base">
                          Connect on LinkedIn
                      </Button>
                  </div>
              </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
