import React from 'react';
import { Button, FadeIn, Card, ShinyText } from '../components/ui';

const BenefitItem = ({ title, description }: { title: string, description: string }) => (
    <Card>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </Card>
);

const ForCollegesPage: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-50" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-aurora" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
            <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                The <ShinyText>Operating System</ShinyText> for Student Success.
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-400">
                Empower your students, streamline your campus activities, and transform your placement outcomes. Unii.club is the single platform to manage your practical learning ecosystem and enhance your institution's reputation.
            </p>
            </div>
        </FadeIn>
        
        <div className="mt-20">
            <FadeIn>
                <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
                    Move from Reactive Placements to Proactive Development
                </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-8">
                <FadeIn delay={200}><BenefitItem title="Foster a Vibrant Club Culture" description="Provide your faculty and students with a structured, easy-to-use platform to create and manage high-impact clubs." /></FadeIn>
                <FadeIn delay={300}><BenefitItem title="Gain Unprecedented Insights" description="Our analytics dashboard gives you a real-time view of student engagement, skill development, and campus-wide trends. Identify skill gaps before they become a problem." /></FadeIn>
                <FadeIn delay={400}><BenefitItem title="Boost Placement Rates" description="By helping students build verified, practical portfolios, you make them exponentially more attractive to recruiters, directly improving your placement statistics." /></FadeIn>
                <FadeIn delay={500}><BenefitItem title="Enhance Your Brand" description="A vibrant campus life and strong placement record are your most powerful marketing tools. Showcase your success on our platform to attract the best new students." /></FadeIn>
            </div>
        </div>
        
        <FadeIn delay={600} className="mt-24 text-center bg-dark-card border border-dark-border rounded-2xl p-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Partner with Us to Build the Future of Education.
            </h2>
            <div className="mt-8 flex justify-center">
                <Button variant="secondary">Request a Free Demo</Button>
            </div>
        </FadeIn>
        </div>
    </div>
  );
};

export default ForCollegesPage;