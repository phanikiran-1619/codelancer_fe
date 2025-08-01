import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  GraduationCap, 
  BookOpen, 
  Code, 
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  type FormData = {
    // Personal Information
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    
    // Academic Information
    university: string;
    degree: string;
    year: string;
    cgpa: string;
    expectedGraduation: string;
    
    // Project Information
    projectInterest: string;
    technicalSkills: string[];
    previousProjects: string;
    projectIdeas: string;
    
    // Service Selection
    selectedServices: string[];
    timeline: string;
    budget: string;
    additionalRequirements: string;
  };

  const [formData, setFormData] = useState<FormData>({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    
    // Academic Information
    university: '',
    degree: '',
    year: '',
    cgpa: '',
    expectedGraduation: '',
    
    // Project Information
    projectInterest: '',
    technicalSkills: [],
    previousProjects: '',
    projectIdeas: '',
    
    // Service Selection
    selectedServices: [],
    timeline: '',
    budget: '',
    additionalRequirements: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      if (name === 'selectedServices') {
        setFormData(prev => ({
          ...prev,
          selectedServices: checkbox.checked 
            ? [...prev.selectedServices, value]
            : prev.selectedServices.filter(service => service !== value)
        }));
      } else if (name === 'technicalSkills') {
        setFormData(prev => ({
          ...prev,
          technicalSkills: checkbox.checked 
            ? [...prev.technicalSkills, value]
            : prev.technicalSkills.filter(skill => skill !== value)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration submitted:', formData);
    // Handle form submission
  };

  const services = [
    { id: 'project-dev', name: 'Project Development', description: 'Complete project development with cutting-edge technologies' },
    { id: 'documentation', name: 'Technical Documentation', description: 'IEEE standard documentation and technical writing' },
    { id: 'research-paper', name: 'Research Paper Writing', description: 'Academic paper writing and publication support' },
    { id: 'mentoring', name: 'One-on-One Mentoring', description: 'Personalized guidance from industry experts' },
    { id: 'publication', name: 'Publication Support', description: 'Conference and journal submission assistance' }
  ];

  const technicalSkills = [
    'Python', 'Java', 'JavaScript', 'C++', 'React', 'Node.js', 
    'Machine Learning', 'Deep Learning', 'Data Science', 'IoT', 
    'Cybersecurity', 'Blockchain', 'Cloud Computing', 'Mobile Development'
  ];

  const steps = [
    { number: 1, title: 'Personal Info', icon: <User className="w-5 h-5" /> },
    { number: 2, title: 'Academic Details', icon: <GraduationCap className="w-5 h-5" /> },
    { number: 3, title: 'Project Interests', icon: <Code className="w-5 h-5" /> },
    { number: 4, title: 'Service Selection', icon: <BookOpen className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Join <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">startup&co_</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Start your journey towards academic excellence and innovation. 
            Register now to access our comprehensive support services.
          </motion.p>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                  currentStep >= step.number 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'border-gray-300 text-gray-400'
                }`}>
                  {currentStep > step.number ? <CheckCircle className="w-6 h-6" /> : step.icon}
                </div>
                <div className="ml-3 hidden sm:block">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.number ? 'text-blue-600' : 'text-gray-400'
                  }`}>
                    Step {step.number}
                  </p>
                  <p className={`text-sm ${
                    currentStep >= step.number ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 ml-4 ${
                    currentStep > step.number ? 'bg-blue-600' : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+91 12345 67890"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Academic Information */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Academic Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        University/College *
                      </label>
                      <input
                        type="text"
                        name="university"
                        required
                        value={formData.university}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your university name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Degree Program *
                      </label>
                      <select
                        name="degree"
                        required
                        value={formData.degree}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select your degree</option>
                        <option value="btech-cs">B.Tech Computer Science</option>
                        <option value="be-cs">B.E. Computer Science</option>
                        <option value="bsc-cs">B.Sc. Computer Science</option>
                        <option value="mtech-cs">M.Tech Computer Science</option>
                        <option value="msc-cs">M.Sc. Computer Science</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Year *
                      </label>
                      <select
                        name="year"
                        required
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select your year</option>
                        <option value="final-year">Final Year</option>
                        <option value="pre-final">Pre-Final Year</option>
                        <option value="graduate">Graduate Student</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CGPA/Percentage
                      </label>
                      <input
                        type="text"
                        name="cgpa"
                        value={formData.cgpa}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., 8.5 CGPA or 85%"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expected Graduation Date
                      </label>
                      <input
                        type="month"
                        name="expectedGraduation"
                        value={formData.expectedGraduation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Project Interests */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Interests & Skills</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Primary Project Interest *
                      </label>
                      <select
                        name="projectInterest"
                        required
                        value={formData.projectInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select your primary interest</option>
                        <option value="ai-ml">Artificial Intelligence & Machine Learning</option>
                        <option value="iot">Internet of Things (IoT)</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="blockchain">Blockchain Technology</option>
                        <option value="web-dev">Web Development</option>
                        <option value="mobile-dev">Mobile App Development</option>
                        <option value="cloud">Cloud Computing</option>
                        <option value="data-science">Data Science & Analytics</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Technical Skills (Select all that apply)
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {technicalSkills.map((skill) => (
                          <label key={skill} className="flex items-center">
                            <input
                              type="checkbox"
                              name="technicalSkills"
                              value={skill}
                              checked={formData.technicalSkills.includes(skill)}
                              onChange={handleChange}
                              className="mr-2 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">{skill}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Previous Projects (Optional)
                      </label>
                      <textarea
                        name="previousProjects"
                        rows={3}
                        value={formData.previousProjects}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Briefly describe any relevant projects you've worked on..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Ideas or Requirements
                      </label>
                      <textarea
                        name="projectIdeas"
                        rows={4}
                        value={formData.projectIdeas}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Share any specific project ideas, requirements, or challenges you'd like to address..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Service Selection */}
              {currentStep === 4 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Selection</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Select Services (Choose all that apply) *
                      </label>
                      <div className="space-y-3">
                        {services.map((service) => (
                          <label key={service.id} className="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                            <input
                              type="checkbox"
                              name="selectedServices"
                              value={service.id}
                              checked={formData.selectedServices.includes(service.id)}
                              onChange={handleChange}
                              className="mt-1 mr-3 text-blue-600 focus:ring-blue-500"
                            />
                            <div>
                              <h3 className="font-semibold text-gray-900">{service.name}</h3>
                              <p className="text-sm text-gray-600">{service.description}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Project Timeline *
                        </label>
                        <select
                          name="timeline"
                          required
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select timeline</option>
                          <option value="1-3-months">1-3 months</option>
                          <option value="3-6-months">3-6 months</option>
                          <option value="6-12-months">6-12 months</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-8000">Under ₹8000</option>
                          <option value="8000-9000">₹8000 - ₹9,000</option>
                          <option value="9000-10000">₹9,000 - ₹10,000</option>
                          <option value="10000-plus">₹10,000+</option>
                          <option value="discuss">Discuss later</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Requirements or Comments
                      </label>
                      <textarea
                        name="additionalRequirements"
                        rows={4}
                        value={formData.additionalRequirements}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Any specific requirements, preferences, or questions you'd like to share..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    currentStep === 1 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  disabled={currentStep === 1}
                >
                  Previous
                </button>
                
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                  >
                    <span>Complete Registration</span>
                    <CheckCircle className="w-5 h-5" />
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What You Get</h2>
            <p className="text-xl opacity-90">Comprehensive support for your project success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8" />,
                title: "Expert Mentorship",
                description: "One-on-one guidance from industry professionals"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Quality Assurance",
                description: "Rigorous review process ensuring excellence"
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Publication Support",
                description: "95% success rate in research paper publications"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="opacity-90">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;