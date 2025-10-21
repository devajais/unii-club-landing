import React from 'react';
import { Button, FadeIn, ShinyText, GlassIcon } from '../components/ui';

const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;

const PerkItem = ({ title, description }: { title: string, description: string }) => (
    <div className="bg-dark-card p-6 rounded-lg border border-dark-border">
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-gray-400 mt-1">{description}</p>
    </div>
);

const CampusAmbassadorPage: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-aurora" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Lead the Movement. <ShinyText>Become a Unii.club Ambassador.</ShinyText>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-400">
              We're looking for passionate, well-connected student leaders to be the face of Unii.club on their campus. Bring the future of career development to your college and build invaluable experience along the way.
            </p>
          </div>
        </FadeIn>
        
        <div className="mt-20 grid md:grid-cols-2 gap-16 items-center">
          <FadeIn delay={200}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What is the Campus Ambassador Program?</h2>
              <p className="text-gray-400 text-lg">
                  This is a unique opportunity for you to become a leader in the EdTech space. As an Ambassador, you will be our direct link to the student body, helping us foster a vibrant community, organize events, and shape the future of our platform.
              </p>
          </FadeIn>

          <FadeIn delay={400}>
              <img src="https://picsum.photos/seed/ambassador/600/400" alt="Students collaborating" className="rounded-xl shadow-lg"/>
          </FadeIn>
        </div>

        <div className="mt-24">
          <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">What You'll Gain</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <FadeIn delay={200}><PerkItem title="Leadership & Management Experience" description="Get hands-on experience in marketing, community management, and event organization." /></FadeIn>
              <FadeIn delay={300}><PerkItem title="Exclusive Perks" description="Receive official merchandise, a certificate, and a powerful recommendation letter." /></FadeIn>
              <FadeIn delay={400}><PerkItem title="Direct Mentorship" description="Work closely with the Unii.club founding team, gaining insights into the startup world." /></FadeIn>
              <FadeIn delay={500}><PerkItem title="Grow Your Network" description="Connect with student leaders from across the country and build a powerful professional network." /></FadeIn>
              <FadeIn delay={600}><PerkItem title="Shape the Product" description="Be the first to test new features and have your feedback directly influence our development." /></FadeIn>
          </div>
        </div>
        
        <div className="mt-24 max-w-3xl mx-auto">
          <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">Are You a Fit?</h2>
              <ul className="space-y-6 text-lg">
                  <li className="flex items-center">
                    <GlassIcon className="!w-10 !h-10 mr-4"><CheckIcon /></GlassIcon>
                    <span className="text-gray-300">Currently enrolled in a college/university in India.</span>
                  </li>
                  <li className="flex items-center">
                    <GlassIcon className="!w-10 !h-10 mr-4"><CheckIcon /></GlassIcon>
                    <span className="text-gray-300">Active in student clubs and campus life.</span>
                  </li>
                  <li className="flex items-center">
                    <GlassIcon className="!w-10 !h-10 mr-4"><CheckIcon /></GlassIcon>
                    <span className="text-gray-300">Strong communicators with great networking skills.</span>
                  </li>
                  <li className="flex items-center">
                    <GlassIcon className="!w-10 !h-10 mr-4"><CheckIcon /></GlassIcon>
                    <span className="text-gray-300">Passionate about technology, education, and helping their peers succeed.</span>
                  </li>
              </ul>
          </FadeIn>
        </div>

        <FadeIn delay={200} className="mt-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Lead?</h2>
          <div className="mt-8 flex justify-center">
              <Button variant="primary">Apply to be a Campus Ambassador</Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default CampusAmbassadorPage;