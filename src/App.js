import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { BookOpen, Mail, Github, School, FileText, User } from 'lucide-react';

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-sm border-b z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">Abdullah</div>
          <div className="flex gap-6">
            {['Home', 'Projects', 'Publications', 'Courses', 'About', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-[90vh] flex items-center bg-gradient-to-r from-blue-500 to-blue-400 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-4">Abdullah</h1>
            <h2 className="text-2xl text-blue-200 mb-6">Lecturer in Computer Science</h2>
            <p className="text-lg text-blue-100 mb-8">
              Specializing in Machine Learning and AI applications in healthcare, 
              with expertise in Deep Learning, NLP, and Computer Vision.
            </p>
            <div className="flex gap-4">
              <Button className="bg-white text-blue-600 flex items-center gap-2">
                <Mail size={20} />
                Contact Me
              </Button>
              <Button variant="outline" className="border-white text-white flex items-center gap-2">
                <Github size={20} />
                GitHub
              </Button>
            </div>
          </div>
          <div className="w-64 h-64 rounded-full bg-white flex items-center justify-center shadow-lg">
            <User size={64} className="text-blue-400" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gradient-to-r from-gray-50 to-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Automated Report Generation for Chest X-rays",
                description: "GRU-based deep learning model for analyzing and generating medical reports from chest X-ray images.",
                icon: FileText
              },
              {
                title: "Melanoma Detection System",
                description: "Deep learning-based system for early detection and classification of melanoma skin cancer.",
                icon: FileText
              }
            ].map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <project.icon size={24} className="mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">Recent Publications</h2>
          <div className="space-y-6">
            {[
              {
                title: "Pneumonia Detection: A Comprehensive Study",
                journal: "AMCS",
                year: "2024"
              },
              {
                title: "Enhanced Parameter Estimation of DENCLUE",
                journal: "Mathematics",
                year: "2023"
              }
            ].map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-gray-50">
                <CardContent className="p-6">
                  <BookOpen size={24} className="mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{pub.title}</h3>
                  <p className="text-gray-600">{pub.journal} • {pub.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="bg-gradient-to-r from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">Courses Taught</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Design and Analysis of Algorithms",
              "Operating Systems",
              "Theory of Automata",
              "Programming Fundamentals",
              "Object Oriented Programming",
              "Data Structures and Algorithms"
            ].map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <School size={24} className="mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-800">{course}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <Input
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
            />
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="h-32"
            />
            <Button type="submit" className="w-full bg-blue-600 text-white">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
              <Github size={24} />
            </a>
            <a href="mailto:your-email@example.com" className="hover:text-blue-200 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Abdullah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
