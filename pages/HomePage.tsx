import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, FadeIn, ShinyText, GlassIcon } from '../components/ui';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-hidden -mt-20">
      {/* Hero Section */}
      <section className="relative text-center px-4 min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 -z-10 bg-hero-glow" aria-hidden="true" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-tight">
              From Student to Standout, <br />
              <ShinyText>
                 Intelligently.
              </ShinyText>
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
              Unii.club is the only platform where your work in student clubs, projects, and hackathons trains a personal AI to build your unique, data-driven roadmap to your dream job.
            </p>
          </FadeIn>
          <FadeIn delay={500}>
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button variant="primary" as="link" to="/students" className="w-full sm:w-auto">Start My Blueprint (for Students)</Button>
              <Button variant="secondary" as="link" to="/colleges" className="w-full sm:w-auto">Empower Your Campus (for Colleges)</Button>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Feature Section */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Your All-in-One Ecosystem for Success</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={200}>
              <Link to="/students" className="block h-full group">
                <Card className="h-full flex flex-col">
                  <GlassIcon className="mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </GlassIcon>
                  <h3 className="text-xl font-bold text-white mb-2">Clubs, Engineered for Impact</h3>
                  <p className="text-gray-400 flex-grow">For students, Unii.club provides a structured environment to gain real-world skills through clubs, projects, and hackathons, all while building a verified portfolio for your future career.</p>
                  <p className="mt-4 font-semibold text-brand-blue transition-transform duration-300 group-hover:translate-x-1">
                    Explore Student Features →
                  </p>
                </Card>
              </Link>
            </FadeIn>
            <FadeIn delay={400}>
              <Link to="/colleges" className="block h-full group">
                <Card className="h-full flex flex-col">
                   <GlassIcon className="mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </GlassIcon>
                  <h3 className="text-xl font-bold text-white mb-2">A Network Built on Trust</h3>
                  <p className="text-gray-400 flex-grow">Empower your institution by fostering a vibrant club culture, gaining real-time insights into student development, and ultimately boosting placement rates with our integrated ecosystem.</p>
                   <p className="mt-4 font-semibold text-brand-blue transition-transform duration-300 group-hover:translate-x-1">
                    See College Solutions →
                  </p>
                </Card>
              </Link>
            </FadeIn>
            <FadeIn delay={600}>
               <Link to="/companies" className="block h-full group">
                <Card className="h-full flex flex-col">
                  <GlassIcon className="mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m6 4v4m-2-2h4M17 3l-1.17.585A10.005 10.005 0 0113 10c0 1.558.35 3.042.973 4.415L17 15m-1-12l-1.17-.585A10.005 10.005 0 0013 4c-1.558 0-3.042.35-4.415.973L7 5m10 10l1.17.585A10.005 10.005 0 0113 20c-1.558 0-3.042-.35-4.415-.973L7 15m-4 0h18" /></svg>
                  </GlassIcon>
                  <h3 className="text-xl font-bold text-white mb-2">Your Launchpad for Innovation</h3>
                  <p className="text-gray-400 flex-grow">Tap into a pipeline of verified, high-skilled student talent. Hire based on proven abilities demonstrated in real projects, reducing hiring time and costs significantly.</p>
                   <p className="mt-4 font-semibold text-brand-blue transition-transform duration-300 group-hover:translate-x-1">
                    Discover Talent →
                  </p>
                </Card>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* AI Mentor Section */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Outcome: <ShinyText>Your Personal AI Mentor</ShinyText></h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
                Your Career Questions, Answered Intelligently. Our AI is your 24/7 mentor, turning your hard work on the platform into clear, actionable guidance for your future.
            </p>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
                {/* Fix: Changed closing tag from </fadedin> to </FadeIn> */}
                <FadeIn delay={200}><div className="bg-dark-card border border-dark-border p-4 rounded-lg"><h4 className="font-semibold text-white">Identifies Skill Gaps</h4><p className="text-sm text-gray-400 mt-1">Analyzes your portfolio against your dream job.</p></div></FadeIn>
                {/* Fix: Changed closing tag from </fadedin> to </FadeIn> */}
                <FadeIn delay={300}><div className="bg-dark-card border border-dark-border p-4 rounded-lg"><h4 className="font-semibold text-white">Recommends Next Moves</h4><p className="text-sm text-gray-400 mt-1">Suggests projects, tasks, or leadership roles.</p></div></FadeIn>
                {/* Fix: Changed closing tag from </fadedin> to </FadeIn> */}
                <FadeIn delay={400}><div className="bg-dark-card border border-dark-border p-4 rounded-lg"><h4 className="font-semibold text-white">Suggests How to Learn</h4><p className="text-sm text-gray-400 mt-1">Recommends curated courses from top platforms.</p></div></FadeIn>
                {/* Fix: Changed closing tag from </fadedin> to </FadeIn> */}
                <FadeIn delay={500}><div className="bg-dark-card border border-dark-border p-4 rounded-lg"><h4 className="font-semibold text-white">Finds Your Perfect Match</h4><p className="text-sm text-gray-400 mt-1">Intelligently matches your skills to jobs.</p></div></FadeIn>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;