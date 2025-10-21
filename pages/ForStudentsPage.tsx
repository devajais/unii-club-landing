import React from 'react';
import { Button, FadeIn, ShinyText, GlassIcon } from '../components/ui';

const FeatureItem = ({ icon, title, description, delay }: { icon: React.ReactNode; title: string; description: string; delay: number }) => (
  <FadeIn delay={delay} className="relative pl-24">
    <div className="absolute left-0 top-1">
        <GlassIcon>{icon}</GlassIcon>
    </div>
    <div className="pt-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-gray-400">{description}</p>
    </div>
  </FadeIn>
);

const ForStudentsPage: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10 bg-aurora" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Go Beyond Your Degree. <ShinyText>Build Your Career.</ShinyText>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
              Stop wondering what companies are looking for. Join a community, build real projects, and get an intelligent, personalized guide to your dream job from day one.
            </p>
          </div>
        </FadeIn>
        
        <div className="mt-20 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
              Your Entire College Journey in One Place
            </h2>
          </FadeIn>
          <div className="space-y-12">
              <FeatureItem delay={200} icon={<span className="text-2xl font-bold text-brand-blue">1</span>} title="Find Your Community" description="Discover and join clubs that match your passions. If it doesn't exist, start one with our guided blueprints."/>
              <FeatureItem delay={300} icon={<span className="text-2xl font-bold text-brand-blue">2</span>} title="Gain Real Skills" description="Collaborate on projects, manage tasks, and learn by doing. This is where you build the experience that sets you apart."/>
              <FeatureItem delay={400} icon={<span className="text-2xl font-bold text-brand-blue">3</span>} title="Build Your Verified Portfolio, Automatically" description="Every achievement is captured and verified by faculty, creating a powerful portfolio that companies trust."/>
              <FeatureItem delay={500} icon={<span className="text-2xl font-bold text-brand-blue">4</span>} title="Receive Intelligent Guidance" description="Our AI analyzes your progress and gives you a step-by-step plan to get hired, recommending skills, projects, and even online courses."/>
              <FeatureItem delay={600} icon={<span className="text-2xl font-bold text-brand-blue">5</span>} title="Connect to Opportunity" description="Get matched with internships and jobs that are a perfect fit for your proven abilities."/>
          </div>
        </div>

        <FadeIn delay={800} className="mt-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Your Future Starts Today. Not After Graduation.
          </h2>
          <div className="mt-8 flex justify-center">
              <Button variant="primary">Sign Up and Build Your Profile</Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default ForStudentsPage;