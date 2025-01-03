// src/App.jsx
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Timeline from './components/Timeline';
import SetupRequirement from './components/SetupRequirement';
import FAQ from './components/FAQ';
import Communities from './components/Communities';
import Resources from './components/Resources';

// Event data
const webDevEvents = [
  {
    date: '3rd Jan',
    time: '7:00 PM',
    topic: 'Vanilla JavaScript'
  },
  {
    date: '6th Jan',
    time: '7:00 PM',
    topic: 'Node.js Introduction'
  },
  {
    date: '15th Jan',
    time: '7:00 PM',
    topic: 'Express.js & MongoDB'
  },
  {
    date: '17th Jan',
    time: '7:00 PM',
    topic: 'React.js Basics'
  },
  {
    date: '19th Jan',
    time: '7:00 PM',
    topic: 'React.js Advanced'
  }
];

const mlEvents = [
  {
    date: '4th Jan',
    time: '7:00 PM',
    topic: 'Intro to ML'
  },
  {
    date: '7th Jan',
    time: '7:00 PM',
    topic: 'Classification'
  },
  {
    date: '14th Jan',
    time: '7:00 PM',
    topic: 'Regression'
  },
  {
    date: '16th Jan',
    time: '7:00 PM',
    topic: 'Clustering'
  },
  {
    date: '18th Jan',
    time: '7:00 PM',
    topic: 'Computer Vision'
  },
  {
    date: '20th Jan',
    time: '7:00 PM',
    topic: 'NLP'
  }
];

const App = () => {
  return (
    // Main wrapper with consistent dark gradient background
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Gradient overlay for the entire page */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20 pointer-events-none" />
      
      {/* Content wrapper */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        
        <div className="container mx-auto px-4 py-16">
          {/* Project Tracks */}
          <section id="projects" className="mb-24 scroll-mt-20" >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Project Tracks
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard
                track="ML"
                title="AI Tutoring System"
                description="Create an intelligent tutoring platform using machine learning"
                features={[
                  "Personalizing learning paths for users",
                  "Forming topic-based study groups for collaboration",
                  "Providing instant feedback and adjusting teaching based on user sentiment",
                  "Generating personalized question banks for targeted practice"
                ]}
              />
              <ProjectCard
                track="Web"
                title="Book/Movie Recommendation System"
                description="Develop a recommendation platform while mastering CRUD operations"
                features={[
                  "Searching, adding, updating, and deleting book or movie entries",
                  "Generating tailored recommendations for users",
                  "Gaining practical experience in fundamental web development concepts"
                ]}
              />
            </div>
          </section>

          {/* Timeline Section */}
          <section id="timeline" className="mb-24 scroll-mt-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Session Timeline
            </h2>
            <Timeline
              track="Web Development Track"
              events={webDevEvents}
              color="blue"
            />
            <Timeline
              track="Machine Learning Track"
              events={mlEvents}
              color="purple"
            />
          </section>

          {/* Setup Section */}
          <section id="setup" className="mb-24 scroll-mt-20">
            <SetupRequirement />
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-24 scroll-mt-20">
            <FAQ />
          </section>
        </div>

        {/* Resources */}
        <Resources/>

        {/* Communities Section */}
        <Communities />
      </div>
      
      {/* Optional: Add animated particles or grid background */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.02] pointer-events-none" />
    </div>
  );
};

export default App;