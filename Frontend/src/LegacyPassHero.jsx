import React, { useState, useEffect } from 'react';
import { Shield, Lock, Users, FileText, Clock, CheckCircle, ArrowRight, Globe, Database, UserCheck, Star, Heart, Award, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Play, Download, Zap, Eye, Bell, Smartphone, Monitor, Tablet, Menu, X } from 'lucide-react';
import './App.css'
const LegacyPassHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 4000);
    
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 6000);

    return () => {
      clearInterval(featureInterval);
      clearInterval(quoteInterval);
    };
  }, []);

  const quotes = [
    {
      text: "Your digital legacy is as important as your physical one. Protect what matters most.",
      author: "Digital Security Expert"
    },
    {
      text: "In an age of digital assets, securing your legacy isn't just smart—it's essential.",
      author: "Estate Planning Attorney"
    },
    {
      text: "Peace of mind comes from knowing your loved ones are protected, even in the digital realm.",
      author: "Financial Advisor"
    },
    {
      text: "Your memories, documents, and digital life deserve the same protection as your physical assets.",
      author: "Technology Consultant"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Military-level encryption and security protocols protect your most sensitive information with bank-grade security standards.",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-700"
    },
    {
      icon: Users,
      title: "Trusted Legacy Transfer",
      description: "Seamlessly transfer your digital assets to chosen beneficiaries with complete verification and legal compliance.",
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-50",
      textColor: "text-violet-700"
    },
    {
      icon: Clock,
      title: "Intelligent Monitoring",
      description: "Smart algorithms ensure your wishes are carried out exactly when and how you intended with automated processes.",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-700"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guaranteed", icon: Globe, color: "text-emerald-600" },
    { number: "256-bit", label: "AES Encryption", icon: Lock, color: "text-violet-600" },
    { number: "24/7", label: "Security Monitoring", icon: Shield, color: "text-cyan-600" },
    { number: "50K+", label: "Families Protected", icon: Users, color: "text-teal-600" }
  ];

  const testimonials = [
    {
      quote: "LegacyPass gave me the peace of mind I never knew I needed. My family's future is secure.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      rating: 5,
      location: "New York"
    },
    {
      quote: "The most professional and trustworthy digital legacy solution I've encountered.",
      author: "Dr. Michael Chen",
      role: "Family Physician",
      rating: 5,
      location: "California"
    },
    {
      quote: "Simple, secure, and exactly what every family needs in today's digital world.",
      author: "Emma Williams",
      role: "Financial Planner",
      rating: 5,
      location: "Texas"
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$9.99",
      period: "per month",
      features: [
        "Up to 10GB storage",
        "3 nominated beneficiaries",
        "Basic encryption",
        "Email support",
        "Mobile app access"
      ],
      popular: false,
      color: "from-slate-500 to-gray-600"
    },
    {
      name: "Family",
      price: "$19.99",
      period: "per month",
      features: [
        "Up to 100GB storage",
        "Unlimited beneficiaries",
        "Advanced encryption",
        "Priority support",
        "Multi-device sync",
        "Family sharing"
      ],
      popular: true,
      color: "from-emerald-500 to-teal-600"
    },
    {
      name: "Enterprise",
      price: "$49.99",
      period: "per month",
      features: [
        "Unlimited storage",
        "Advanced security features",
        "White-label solution",
        "24/7 phone support",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: false,
      color: "from-violet-500 to-purple-600"
    }
  ];

  const faqs = [
    {
      question: "How does LegacyPass detect when someone has passed away?",
      answer: "Our intelligent monitoring system uses multiple verification methods including regular check-ins, trusted contacts, and configurable timeouts. We ensure accuracy before any transfer occurs."
    },
    {
      question: "Is my data really secure with LegacyPass?",
      answer: "Yes, we use military-grade 256-bit AES encryption, SOC 2 compliance, and zero-knowledge architecture. Your data is encrypted before it leaves your device and remains encrypted in our systems."
    },
    {
      question: "Can I change my beneficiaries anytime?",
      answer: "Absolutely! You have complete control over your beneficiaries list and can add, remove, or modify them at any time through your secure dashboard."
    },
    {
      question: "What happens if LegacyPass goes out of business?",
      answer: "We have established partnerships with other secure providers and legal frameworks to ensure your data remains accessible to your beneficiaries even in unlikely scenarios."
    },
    {
      question: "How much does LegacyPass cost?",
      answer: "We offer flexible pricing starting at $9.99/month for individuals, with family and enterprise plans available. All plans include a 30-day free trial with no credit card required."
    }
  ];

  const companyStats = [
    { label: "Years of Experience", value: "8+", icon: Award },
    { label: "Countries Served", value: "25+", icon: Globe },
    { label: "Data Centers", value: "12", icon: Database },
    { label: "Security Certifications", value: "15+", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 relative overflow-hidden ">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-violet-400 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-400 rounded-full filter blur-3xl"></div>
      </div>

     
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
       {[...Array(12)].map((_, i) => (
    <div
      key={i}
      className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-emerald-400/70 to-violet-400/70 rounded-full opacity-30"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `float ${8 + Math.random() * 8}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 5}s`,
      }}
    />
  ))}
      </div>

      <div className="relative z-10 mx-10">
        {/* Navigation */}
        <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-2 rounded-xl">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-slate-800">LegacyPass</span>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-emerald-600 transition-colors">Features</a>
              <a href="#pricing" className="text-slate-600 hover:text-emerald-600 transition-colors">Pricing</a>
              <a href="#security" className="text-slate-600 hover:text-emerald-600 transition-colors">Security</a>
              <a href="#testimonials" className="text-slate-600 hover:text-emerald-600 transition-colors">Reviews</a>
              <a href="#faq" className="text-slate-600 hover:text-emerald-600 transition-colors">FAQ</a>
              <a href="#contact" className="text-slate-600 hover:text-emerald-600 transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">Sign In</button>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
              <button 
                className="lg:hidden text-slate-600 hover:text-emerald-600 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 bg-white rounded-xl shadow-lg border border-slate-200 p-4">
              <div className="flex flex-col space-y-2">
                <a href="#features" className="text-slate-600 hover:text-emerald-600 transition-colors py-2">Features</a>
                <a href="#pricing" className="text-slate-600 hover:text-emerald-600 transition-colors py-2">Pricing</a>
                <a href="#security" className="text-slate-600 hover:text-emerald-600 transition-colors py-2">Security</a>
                <a href="#testimonials" className="text-slate-600 hover:text-emerald-600 transition-colors py-2">Reviews</a>
                <a href="#faq" className="text-slate-600 hover:text-emerald-600 transition-colors py-2">FAQ</a>
                <a href="#contact" className="text-slate-600 hover:text-emerald-600 transition-colors py-2">Contact</a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6 sm:mb-8">
              <div className="inline-block p-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mb-4">
                <div className="bg-white rounded-full p-3 sm:p-4">
                  <Shield className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-600" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 mb-2">
                Legacy<span className="text-emerald-600">Pass</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 font-medium">
                Your Digital Legacy, Protected Forever
              </p>
            </div>

            {/* Dynamic Quote */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 max-w-4xl mx-auto mb-6 sm:mb-8">
              <div className="text-lg sm:text-xl md:text-2xl text-slate-700 font-light italic mb-4 min-h-[60px] sm:min-h-[80px] flex items-center justify-center">
                "{quotes[currentQuote].text}"
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base">
                — {quotes[currentQuote].author}
              </div>
            </div>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Securely store your most important digital assets and ensure they reach your loved ones 
              <span className="block mt-2 text-base sm:text-lg font-semibold text-emerald-700">
                when it matters most. Professional, trusted, and completely secure.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <button className="w-full sm:w-auto group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
                Start Protecting Your Legacy
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto border-2 border-slate-300 text-slate-700 hover:text-emerald-600 hover:border-emerald-600 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-emerald-50 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className={`text-center mb-12 sm:mb-16 px-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                <span className="text-slate-600 font-medium text-sm sm:text-base">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" />
                <span className="text-slate-600 font-medium text-sm sm:text-base">SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" />
                <span className="text-slate-600 font-medium text-sm sm:text-base">GDPR Compliant</span>
              </div>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm">Trusted by families worldwide • Bank-level security standards</p>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20 px-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                  <div className="text-2xl sm:text-3xl font-bold text-slate-800 mb-1">{stat.number}</div>
                  <div className="text-slate-500 text-xs sm:text-sm font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div id="features" className={`mb-16 sm:mb-20 px-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Why Families Trust LegacyPass</h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
                Professional-grade security meets family-friendly simplicity
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 cursor-pointer
                    ${activeFeature === index ? 'scale-105 shadow-2xl' : 'hover:scale-105'}
                    bg-white border-2 border-slate-200 hover:shadow-xl`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${feature.color} mb-4 sm:mb-6 shadow-lg`}>
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    
                    <h3 className={`text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:${feature.textColor} transition-colors`}>
                      {feature.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Device Compatibility */}
          <div className={`mb-16 sm:mb-20 px-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Access Anywhere, Anytime</h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
                Your digital legacy is accessible on all your devices with seamless synchronization
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 text-center">
                <Smartphone className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">Mobile Apps</h3>
                <p className="text-slate-600 text-sm sm:text-base">iOS & Android apps with biometric security</p>
              </div>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 text-center">
                <Monitor className="w-12 h-12 sm:w-16 sm:h-16 text-violet-600 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">Desktop</h3>
                <p className="text-slate-600 text-sm sm:text-base">Full-featured web application</p>
              </div>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 text-center">
                <Tablet className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">Tablet</h3>
                <p className="text-slate-600 text-sm sm:text-base">Optimized for tablet experience</p>
              </div>
            </div>
          </div>

          {/* What We Protect & Security */}
          <div id="security" className={`grid md:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20 px-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* What We Protect */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-emerald-100 p-2 sm:p-3 rounded-xl mr-3 sm:mr-4">
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800">What We Safeguard</h3>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                {[
                  "Legal documents & property papers",
                  "Financial records & account information",
                  "Insurance policies & beneficiary details",
                  "Digital passwords & access credentials",
                  "Personal photos & family memories",
                  "Business documents & contracts",
                  "Medical records & important certificates",
                  "Digital assets & cryptocurrency keys"
                ].map((item, index) => (
                  <div key={index} className="flex items-center group hover:bg-emerald-50 p-2 sm:p-3 rounded-lg transition-all duration-200">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-slate-700 group-hover:text-slate-800 transition-colors text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Features */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-violet-100 p-2 sm:p-3 rounded-xl mr-3 sm:mr-4">
                  <UserCheck className="w-6 h-6 sm:w-8 sm:h-8 text-violet-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800">Security You Can Trust</h3>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                {[
                  "Military-grade 256-bit AES encryption",
                  "Multi-factor authentication system",
                  "Continuous security monitoring",
                  "Verified nominee identification",
                  "Zero-knowledge architecture",
                  "Regular third-party security audits",
                  "Encrypted end-to-end transmission",
                  "Biometric access verification"
                ].map((item, index) => (
                  <div key={index} className="flex items-center group hover:bg-violet-50 p-2 sm:p-3 rounded-lg transition-all duration-200">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-violet-500 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-slate-700 group-hover:text-slate-800 transition-colors text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className={`text-center mb-16 sm:mb-20 px-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Simple, Secure, Seamless</h2>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
              Three easy steps to complete digital peace of mind
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  step: "1",
                  title: "Upload & Encrypt",
                  description: "Securely upload your important documents and digital assets to our encrypted vault with military-grade protection",
                  icon: Lock,
                  color: "from-emerald-500 to-teal-600",
                  bgColor: "bg-emerald-50"
                },
                {
                  step: "2",
                  title: "Designate Beneficiaries",
                  description: "Choose trusted family members or friends who will receive your digital legacy and verify their identities",
                  icon: Users,
                  color: "from-violet-500 to-purple-600",
                  bgColor: "bg-violet-50"
                },
                {
                  step: "3",
                  title: "Automatic Transfer",
                  description: "Our intelligent system monitors your activity and automatically transfers your assets according to your wishes",
                  icon: ArrowRight,
                  color: "from-cyan-500 to-blue-600",
                  bgColor: "bg-cyan-50"
                }
              ].map((step, index) => (
                <div key={index} className="group relative">
                  <div className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 ${step.bgColor} hover:bg-opacity-50`}>
                    <div className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${step.color} mb-4 sm:mb-6 shadow-lg`}>
                      <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                      <span className={`text-sm font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>{step.step}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div id="testimonials" className={`mb-16 sm:mb-20 px-4 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Trusted by Families Worldwide</h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
                What our users say about protecting their digital legacy
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`} />
                      ))}
                    </div>
                    <p className="text-slate-700 italic mb-6 sm:mb-8 text-base sm:text-lg">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-1 rounded-full mr-3 sm:mr-4">
                        <div className="bg-white p-1 rounded-full">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-emerald-100 to-teal-200 flex items-center justify-center">
                            <span className="text-xl font-bold text-emerald-800">
                              {testimonial.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-800">{testimonial.author}</h4>
                        <p className="text-slate-500 text-sm sm:text-base">{testimonial.role}, {testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div id="pricing" className={`mb-16 sm:mb-20 px-4 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
                Choose the plan that fits your family's needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="group relative">
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <div className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border-2 ${plan.popular ? 'border-emerald-500' : 'border-slate-200'} hover:shadow-xl transition-all duration-300 h-full flex flex-col`}>
                    <div className="mb-6 sm:mb-8">
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-1">{plan.name}</h3>
                      <div className="flex items-end">
                        <span className="text-4xl sm:text-5xl font-bold text-slate-800">{plan.price}</span>
                        <span className="text-slate-500 ml-1 mb-1">{plan.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex-grow mb-6 sm:mb-8">
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className={`mt-auto w-full group bg-gradient-to-r ${plan.color} text-white px-6 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2`}>
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8 sm:mt-12">
              <p className="text-slate-600 mb-4">Need a custom solution for your extended family or business?</p>
              <button className="text-emerald-600 hover:text-emerald-700 font-semibold text-lg flex items-center justify-center gap-2 mx-auto">
                Contact our team
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Company Stats */}
          <div className={`mb-16 sm:mb-20 px-4 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-2xl">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Trusted Digital Legacy Protection</h2>
                <p className="text-emerald-100 max-w-2xl mx-auto">
                  LegacyPass is built on years of security expertise and trusted by families worldwide
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
                {companyStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                      <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white mx-auto mb-2 sm:mb-3" />
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-emerald-100 text-xs sm:text-sm font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div id="faq" className={`mb-16 sm:mb-20 px-4 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
                Everything you need to know about protecting your digital legacy
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <button
                    className={`w-full text-left bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 flex items-center justify-between ${activeFaq === index ? 'bg-emerald-50' : ''}`}
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  >
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-800">{faq.question}</h3>
                    <div className="ml-4 flex-shrink-0">
                      {activeFaq === index ? (
                        <X className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <ArrowRight className="w-5 h-5 text-slate-500 transform rotate-90" />
                      )}
                    </div>
                  </button>
                  {activeFaq === index && (
                    <div className="bg-white/50 backdrop-blur-sm rounded-b-xl p-4 sm:p-6 shadow-sm border border-t-0 border-slate-200">
                      <p className="text-slate-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className={`mb-16 sm:mb-20 px-4 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-48 h-48 bg-white rounded-full filter blur-xl"></div>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full filter blur-xl"></div>
              </div>
              <div className="relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Ready to Secure Your Digital Legacy?</h2>
                  <p className="text-emerald-100 text-lg sm:text-xl mb-8 sm:mb-12">
                    Join thousands of families who trust LegacyPass with their most important digital assets
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="w-full sm:w-auto bg-white text-emerald-700 hover:bg-slate-100 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
                      Start Your Free Trial
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2">
                      <Play className="w-5 h-5" />
                      Watch Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div id="contact" className={`mb-16 sm:mb-20 px-4 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">We're Here to Help</h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
                Have questions? Our support team is available 24/7
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 text-center">
                <Mail className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">Email Us</h3>
                <p className="text-slate-600 text-sm sm:text-base mb-4">We'll respond within 24 hours</p>
                <a href="mailto:support@legacypass.com" className="text-emerald-600 hover:text-emerald-700 font-medium">support@legacypass.com</a>
              </div>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 text-center">
                <Phone className="w-12 h-12 sm:w-16 sm:h-16 text-violet-600 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">Call Us</h3>
                <p className="text-slate-600 text-sm sm:text-base mb-4">24/7 customer support</p>
                <a href="tel:+18005551234" className="text-violet-600 hover:text-violet-700 font-medium">+1 (800) 555-1234</a>
              </div>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 text-center">
                <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">Visit Us</h3>
                <p className="text-slate-600 text-sm sm:text-base mb-4">Our headquarters</p>
                <p className="text-cyan-600 hover:text-cyan-700 font-medium">123 Security Blvd, San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

      
      </div>
        {/* Footer */}
        <footer className={`bg-slate-900 text-white transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12">
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-2 rounded-xl">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold">LegacyPass</span>
                </div>
                <p className="text-slate-400 mb-6">
                  Professional digital legacy protection for families and businesses worldwide.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Security</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Integrations</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Updates</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Press</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Community</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Webinars</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Status</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm mb-4 md:mb-0">
                © 2023 LegacyPass. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
    </div>
  );
};

export default LegacyPassHero;

// import React, { useState, useEffect } from 'react';
// import { Shield, Lock, Users, FileText, Clock, CheckCircle, ArrowRight, Globe, Database, UserCheck, Star, Heart, Award, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Play, Download, Zap, Eye, Bell, Smartphone, Monitor, Tablet, Menu, X } from 'lucide-react';

// const LegacyPassHero = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [currentQuote, setCurrentQuote] = useState(0);
//   const [activeFaq, setActiveFaq] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     const featureInterval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % 3);
//     }, 4000);
    
//     const quoteInterval = setInterval(() => {
//       setCurrentQuote((prev) => (prev + 1) % quotes.length);
//     }, 6000);

//     return () => {
//       clearInterval(featureInterval);
//       clearInterval(quoteInterval);
//     };
//   }, []);

//   const quotes = [
//     {
//       text: "Your digital legacy is as important as your physical one. Protect what matters most.",
//       author: "Digital Security Expert"
//     },
//     {
//       text: "In an age of digital assets, securing your legacy isn't just smart—it's essential.",
//       author: "Estate Planning Attorney"
//     },
//     {
//       text: "Peace of mind comes from knowing your loved ones are protected, even in the digital realm.",
//       author: "Financial Advisor"
//     }
//   ];

//   const features = [
//     {
//       icon: Shield,
//       title: "Enterprise Security",
//       description: "Military-grade encryption protects your sensitive information with the highest security standards.",
//       color: "from-amber-500 to-orange-500",
//       bgColor: "bg-amber-50",
//       textColor: "text-amber-700"
//     },
//     {
//       icon: Users,
//       title: "Trusted Transfer",
//       description: "Seamlessly transfer digital assets to chosen beneficiaries with complete verification.",
//       color: "from-teal-500 to-emerald-500",
//       bgColor: "bg-teal-50",
//       textColor: "text-teal-700"
//     },
//     {
//       icon: Clock,
//       title: "Smart Monitoring",
//       description: "Intelligent algorithms ensure your wishes are carried out exactly as intended.",
//       color: "from-violet-500 to-purple-500",
//       bgColor: "bg-violet-50",
//       textColor: "text-violet-700"
//     }
//   ];

//   const stats = [
//     { number: "99.9%", label: "Uptime", icon: Globe, color: "text-amber-600" },
//     { number: "256-bit", label: "Encryption", icon: Lock, color: "text-teal-600" },
//     { number: "24/7", label: "Monitoring", icon: Shield, color: "text-violet-600" },
//     { number: "50K+", label: "Families", icon: Users, color: "text-emerald-600" }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-amber-300 rounded-full filter blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-teal-300 rounded-full filter blur-3xl"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">
//         {/* Navigation */}
//         <nav className="py-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-xl">
//                 <Shield className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-xl font-medium text-gray-800">LegacyPass</span>
//             </div>
//             <div className="hidden lg:flex items-center space-x-8">
//               <a href="#features" className="text-gray-600 hover:text-amber-600 transition-colors text-sm">Features</a>
//               <a href="#how-it-works" className="text-gray-600 hover:text-amber-600 transition-colors text-sm">How It Works</a>
//               <a href="#security" className="text-gray-600 hover:text-amber-600 transition-colors text-sm">Security</a>
//               <a href="#pricing" className="text-gray-600 hover:text-amber-600 transition-colors text-sm">Pricing</a>
//               <a href="#faq" className="text-gray-600 hover:text-amber-600 transition-colors text-sm">FAQ</a>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button className="text-gray-600 hover:text-amber-600 transition-colors text-sm">Sign In</button>
//               <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-lg font-medium text-sm hover:shadow-md transition-all duration-300">
//                 Get Started
//               </button>
//               <button 
//                 className="lg:hidden text-gray-600 hover:text-amber-600 transition-colors"
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               >
//                 {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//               </button>
//             </div>
//           </div>
          
//           {/* Mobile Menu */}
//           {mobileMenuOpen && (
//             <div className="lg:hidden mt-4 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
//               <div className="flex flex-col space-y-3">
//                 <a href="#features" className="text-gray-600 hover:text-amber-600 transition-colors py-2 text-sm">Features</a>
//                 <a href="#how-it-works" className="text-gray-600 hover:text-amber-600 transition-colors py-2 text-sm">How It Works</a>
//                 <a href="#security" className="text-gray-600 hover:text-amber-600 transition-colors py-2 text-sm">Security</a>
//                 <a href="#pricing" className="text-gray-600 hover:text-amber-600 transition-colors py-2 text-sm">Pricing</a>
//                 <a href="#faq" className="text-gray-600 hover:text-amber-600 transition-colors py-2 text-sm">FAQ</a>
//               </div>
//             </div>
//           )}
//         </nav>

//         {/* Hero Section */}
//         <div className="py-12 sm:py-20">
//           <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="mb-8">
//               <h1 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-3">
//                 Secure Your <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Digital Legacy</span>
//               </h1>
//               <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
//                 Protect your important documents and ensure they reach loved ones when they're needed most.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
//               <button className="w-full sm:w-auto group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2">
//                 Start Protecting Your Legacy
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="w-full sm:w-auto border border-gray-300 text-gray-700 hover:border-amber-500 hover:text-amber-600 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 hover:bg-amber-50 flex items-center justify-center gap-2">
//                 <Play className="w-4 h-4" />
//                 Watch Demo
//               </button>
//             </div>
//           </div>

//           {/* Trust Indicators */}
//           <div className={`flex flex-wrap justify-center items-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200">
//               <Shield className="w-4 h-4 text-teal-500" />
//               <span className="text-gray-600 text-xs">SOC 2 Type II Certified</span>
//             </div>
//             <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200">
//               <Lock className="w-4 h-4 text-violet-500" />
//               <span className="text-gray-600 text-xs">GDPR Compliant</span>
//             </div>
//             <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200">
//               <Award className="w-4 h-4 text-amber-500" />
//               <span className="text-gray-600 text-xs">ISO 27001 Certified</span>
//             </div>
//           </div>

//           {/* Hero Image/Placeholder */}
//           <div className={`bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center p-8">
//               <div className="text-center">
//                 <div className="inline-flex p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg mb-4">
//                   <Shield className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-lg font-medium text-gray-800 mb-2">Your Digital Vault</h3>
//                 <p className="text-gray-600 text-sm">All your important documents in one secure place</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           {stats.map((stat, index) => (
//             <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
//               <stat.icon className={`w-6 h-6 ${stat.color} mb-2`} />
//               <div className="text-2xl font-medium text-gray-900 mb-1">{stat.number}</div>
//               <div className="text-gray-500 text-xs">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Features Section */}
//         <div id="features" className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="text-center mb-10">
//             <h2 className="text-2xl font-medium text-gray-900 mb-3">Protect What Matters Most</h2>
//             <p className="text-gray-600 max-w-xl mx-auto">
//               Secure storage and automatic transfer of your most important digital assets
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-5">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className={`bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer
//                   ${activeFeature === index ? 'border-amber-400' : 'hover:border-gray-300'}`}
//                 onMouseEnter={() => setActiveFeature(index)}
//               >
//                 <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
//                   <feature.icon className="w-5 h-5 text-white" />
//                 </div>
                
//                 <h3 className={`text-lg font-medium text-gray-900 mb-2`}>
//                   {feature.title}
//                 </h3>
                
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* How It Works Section */}
//         <div id="how-it-works" className={`mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="text-center mb-10">
//             <h2 className="text-2xl font-medium text-gray-900 mb-3">How LegacyPass Works</h2>
//             <p className="text-gray-600 max-w-xl mx-auto">
//               Simple steps to ensure your digital legacy is protected and transferred securely
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-5">
//             {[
//               {
//                 step: "1",
//                 title: "Upload Documents",
//                 description: "Securely upload your important files to your encrypted vault",
//                 icon: UserCheck,
//                 color: "bg-amber-100 text-amber-600"
//               },
//               {
//                 step: "2",
//                 title: "Designate Beneficiaries",
//                 description: "Choose who will receive your digital legacy",
//                 icon: UserCheck,
//                 color: "bg-teal-100 text-teal-600"
//               },
//               {
//                 step: "3",
//                 title: "Set Conditions",
//                 description: "Configure when and how your assets should be transferred",
//                 icon: UserCheck,
//                 color: "bg-violet-100 text-violet-600"
//               }
//             ].map((step, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
//                 <div className={`w-10 h-10 rounded-lg ${step.color} flex items-center justify-center mb-4`}>
//                   <step.icon className="w-5 h-5" />
//                 </div>
//                 <div className="text-xs font-medium text-gray-500 mb-1">STEP {step.step}</div>
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">{step.title}</h3>
//                 <p className="text-gray-600 text-sm">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Security Section */}
//         <div id="security" className={`mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="flex flex-col md:flex-row gap-8">
//             <div className="md:w-1/2">
//               <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 text-white h-full">
//                 <h2 className="text-2xl font-medium mb-4">Bank-Level Security</h2>
//                 <p className="text-gray-300 mb-6">
//                   Your data is protected with the same encryption standards used by financial institutions.
//                 </p>
//                 <ul className="space-y-3">
//                   {[
//                     "256-bit AES encryption",
//                     "Zero-knowledge architecture",
//                     "Multi-factor authentication",
//                     "Regular security audits",
//                     "SOC 2 Type II compliant"
//                   ].map((item, index) => (
//                     <li key={index} className="flex items-start">
//                       <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 mr-2 flex-shrink-0" />
//                       <span className="text-gray-300">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             <div className="md:w-1/2">
//               <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 h-full">
//                 <h2 className="text-2xl font-medium text-gray-900 mb-4">What We Protect</h2>
//                 <p className="text-gray-600 mb-6">
//                   All your important digital assets in one secure place:
//                 </p>
//                 <div className="grid grid-cols-2 gap-4">
//                   {[
//                     "Legal documents",
//                     "Financial records",
//                     "Insurance policies",
//                     "Digital accounts",
//                     "Family photos",
//                     "Medical records",
//                     "Business files",
//                     "Cryptocurrency"
//                   ].map((item, index) => (
//                     <div key={index} className="flex items-center">
//                       <CheckCircle className="w-4 h-4 text-amber-500 mr-2" />
//                       <span className="text-gray-700 text-sm">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className={`mb-20 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-8 text-white text-center">
//             <h2 className="text-2xl font-medium mb-3">Ready to Secure Your Legacy?</h2>
//             <p className="text-amber-100 mb-6 max-w-lg mx-auto">
//               Join thousands of families who trust LegacyPass with their most important documents.
//             </p>
//             <button className="bg-white text-amber-700 px-6 py-3 rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
//               Start Your Free Trial
//             </button>
//           </div>
//         </div>

//         {/* Footer */}
//         <footer className={`border-t border-gray-200 pt-8 pb-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
//             <div>
//               <h3 className="text-sm font-medium text-gray-900 mb-4">Product</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-600 hover:text-amber-600 text-sm">Features</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-amber-600 text-sm">Pricing</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-amber-600 text-sm">Security</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-sm font-medium text-gray-900 mb-4">Company</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-600 hover:text-amber-600 text-sm">About</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-amber-600 text-sm">Careers</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-amber-600 text-sm">Contact</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-sm font-medium text-gray-900 mb-4">Resources</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-600 hover:text-amber-600 text-sm">Help Center</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-amber-600 text-sm">Privacy</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-amber-600 text-sm">Terms</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-sm font-medium text-gray-900 mb-4">Connect</h3>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-600 hover:text-amber-600">
//                   <Twitter className="w-5 h-5" />
//                 </a>
//                 <a href="#" className="text-gray-600 hover:text-amber-600">
//                   <Linkedin className="w-5 h-5" />
//                 </a>
//                 <a href="#" className="text-gray-600 hover:text-amber-600">
//                   <Facebook className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="text-center text-gray-500 text-sm">
//             © {new Date().getFullYear()} LegacyPass. All rights reserved.
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default LegacyPassHero;


// import React, { useState, useEffect } from 'react';
// import { Shield, Lock, Users, FileText, Clock, CheckCircle, ArrowRight, Globe, Database, UserCheck, Star, Heart, Award, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Play, Download, Zap, Eye, Bell, Smartphone, Monitor, Tablet, Menu, X } from 'lucide-react';

// const LegacyPassHero = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [currentQuote, setCurrentQuote] = useState(0);
//   const [activeFaq, setActiveFaq] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     const featureInterval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % 3);
//     }, 4000);
    
//     const quoteInterval = setInterval(() => {
//       setCurrentQuote((prev) => (prev + 1) % quotes.length);
//     }, 6000);

//     return () => {
//       clearInterval(featureInterval);
//       clearInterval(quoteInterval);
//     };
//   }, []);

//   const quotes = [
//     {
//       text: "Your digital legacy is as important as your physical one. Protect what matters most.",
//       author: "Digital Security Expert"
//     },
//     {
//       text: "In an age of digital assets, securing your legacy isn't just smart—it's essential.",
//       author: "Estate Planning Attorney"
//     },
//     {
//       text: "Peace of mind comes from knowing your loved ones are protected, even in the digital realm.",
//       author: "Financial Advisor"
//     }
//   ];

//   const features = [
//     {
//       icon: Shield,
//       title: "Enterprise Security",
//       description: "Military-grade encryption protects your sensitive information with bank-level security standards.",
//       color: "from-emerald-500 to-teal-600",
//       bgColor: "bg-emerald-50",
//       textColor: "text-emerald-700"
//     },
//     {
//       icon: Users,
//       title: "Legacy Transfer",
//       description: "Seamlessly transfer digital assets to beneficiaries with complete verification and legal compliance.",
//       color: "from-violet-500 to-purple-600",
//       bgColor: "bg-violet-50",
//       textColor: "text-violet-700"
//     },
//     {
//       icon: Clock,
//       title: "Smart Monitoring",
//       description: "Algorithms ensure your wishes are carried out exactly when and how you intended.",
//       color: "from-cyan-500 to-blue-600",
//       bgColor: "bg-cyan-50",
//       textColor: "text-cyan-700"
//     }
//   ];

//   const stats = [
//     { number: "99.9%", label: "Uptime", icon: Globe, color: "text-emerald-600" },
//     { number: "256-bit", label: "Encryption", icon: Lock, color: "text-violet-600" },
//     { number: "24/7", label: "Monitoring", icon: Shield, color: "text-cyan-600" },
//     { number: "50K+", label: "Families", icon: Users, color: "text-teal-600" }
//   ];

//   const testimonials = [
//     {
//       quote: "LegacyPass gave me peace of mind I never knew I needed. My family's future is secure.",
//       author: "Sarah Johnson",
//       role: "Marketing Director",
//       rating: 5,
//       location: "New York"
//     },
//     {
//       quote: "The most professional digital legacy solution I've encountered.",
//       author: "Dr. Michael Chen",
//       role: "Family Physician",
//       rating: 5,
//       location: "California"
//     },
//     {
//       quote: "Simple, secure, and exactly what every family needs today.",
//       author: "Emma Williams",
//       role: "Financial Planner",
//       rating: 5,
//       location: "Texas"
//     }
//   ];

//   const pricingPlans = [
//     {
//       name: "Personal",
//       price: "$9.99",
//       period: "month",
//       features: [
//         "10GB storage",
//         "3 beneficiaries",
//         "Basic encryption",
//         "Email support",
//         "Mobile access"
//       ],
//       popular: false,
//       color: "from-slate-500 to-gray-600"
//     },
//     {
//       name: "Family",
//       price: "$19.99",
//       period: "month",
//       features: [
//         "100GB storage",
//         "Unlimited beneficiaries",
//         "Advanced encryption",
//         "Priority support",
//         "Multi-device sync"
//       ],
//       popular: true,
//       color: "from-emerald-500 to-teal-600"
//     },
//     {
//       name: "Enterprise",
//       price: "$49.99",
//       period: "month",
//       features: [
//         "Unlimited storage",
//         "Advanced security",
//         "White-label",
//         "24/7 support",
//         "Custom integrations"
//       ],
//       popular: false,
//       color: "from-violet-500 to-purple-600"
//     }
//   ];

//   const faqs = [
//     {
//       question: "How does LegacyPass detect when someone passes away?",
//       answer: "We use multiple verification methods including check-ins, trusted contacts, and configurable timeouts to ensure accuracy before transfer."
//     },
//     {
//       question: "Is my data secure with LegacyPass?",
//       answer: "Yes, we use 256-bit AES encryption, SOC 2 compliance, and zero-knowledge architecture. Your data is encrypted before it leaves your device."
//     },
//     {
//       question: "Can I change beneficiaries?",
//       answer: "Absolutely! You have complete control to add, remove, or modify beneficiaries anytime through your dashboard."
//     }
//   ];

//   const companyStats = [
//     { label: "Experience", value: "8+", icon: Award },
//     { label: "Countries", value: "25+", icon: Globe },
//     { label: "Data Centers", value: "12", icon: Database },
//     { label: "Certifications", value: "15+", icon: Shield }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-400 rounded-full filter blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-violet-400 rounded-full filter blur-3xl"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
//         {/* Navigation */}
//         <nav className="py-4 sm:py-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-2 rounded-xl">
//                 <Shield className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-xl font-bold text-slate-800">LegacyPass</span>
//             </div>
//             <div className="hidden lg:flex items-center space-x-6">
//               <a href="#features" className="text-slate-600 hover:text-emerald-600 transition-colors text-sm">Features</a>
//               <a href="#pricing" className="text-slate-600 hover:text-emerald-600 transition-colors text-sm">Pricing</a>
//               <a href="#security" className="text-slate-600 hover:text-emerald-600 transition-colors text-sm">Security</a>
//               <a href="#testimonials" className="text-slate-600 hover:text-emerald-600 transition-colors text-sm">Reviews</a>
//               <a href="#faq" className="text-slate-600 hover:text-emerald-600 transition-colors text-sm">FAQ</a>
//             </div>
//             <div className="flex items-center space-x-3">
//               <button className="text-slate-600 hover:text-emerald-600 transition-colors text-sm font-medium">Sign In</button>
//               <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all">
//                 Get Started
//               </button>
//               <button 
//                 className="lg:hidden text-slate-600 hover:text-emerald-600 transition-colors"
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               >
//                 {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//               </button>
//             </div>
//           </div>
          
//           {/* Mobile Menu */}
//           {mobileMenuOpen && (
//             <div className="lg:hidden mt-4 bg-white rounded-xl shadow-lg border border-slate-200 p-4">
//               <div className="flex flex-col space-y-2">
//                 <a href="#features" className="text-slate-600 hover:text-emerald-600 transition-colors py-2 text-sm">Features</a>
//                 <a href="#pricing" className="text-slate-600 hover:text-emerald-600 transition-colors py-2 text-sm">Pricing</a>
//                 <a href="#security" className="text-slate-600 hover:text-emerald-600 transition-colors py-2 text-sm">Security</a>
//                 <a href="#testimonials" className="text-slate-600 hover:text-emerald-600 transition-colors py-2 text-sm">Reviews</a>
//                 <a href="#faq" className="text-slate-600 hover:text-emerald-600 transition-colors py-2 text-sm">FAQ</a>
//               </div>
//             </div>
//           )}
//         </nav>

//         {/* Hero Section */}
//         <div className="py-12 sm:py-16">
//           <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="mb-8">
//               <div className="inline-block p-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mb-4">
//                 <div className="bg-white rounded-full p-3">
//                   <Shield className="w-8 h-8 text-emerald-600" />
//                 </div>
//               </div>
//               <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-2 leading-tight">
//                 Secure Your<br className="sm:hidden"/> Digital Legacy
//               </h1>
//               <p className="text-lg text-slate-600 font-medium max-w-lg mx-auto">
//                 Protect what matters most for those who matter most
//               </p>
//             </div>

//             {/* Dynamic Quote */}
//             <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200 max-w-2xl mx-auto mb-8">
//               <div className="text-lg text-slate-700 font-light italic mb-4 min-h-[60px] flex items-center justify-center">
//                 "{quotes[currentQuote].text}"
//               </div>
//               <div className="text-slate-500 font-medium text-sm">
//                 — {quotes[currentQuote].author}
//               </div>
//             </div>
            
//             <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
//               <button className="w-full group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2">
//                 Start Free Trial
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="w-full border border-slate-300 text-slate-700 hover:text-emerald-600 hover:border-emerald-600 px-6 py-3 rounded-full font-medium text-sm transition-all hover:bg-emerald-50 flex items-center justify-center gap-2">
//                 <Play className="w-4 h-4" />
//                 Watch Demo
//               </button>
//             </div>
//           </div>

//           {/* Trust Indicators */}
//           <div className={`text-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="flex flex-wrap justify-center items-center gap-4 mb-3">
//               <div className="flex items-center gap-2">
//                 <Award className="w-4 h-4 text-emerald-600" />
//                 <span className="text-slate-600 font-medium text-xs">ISO 27001</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Shield className="w-4 h-4 text-violet-600" />
//                 <span className="text-slate-600 font-medium text-xs">SOC 2 Type II</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Lock className="w-4 h-4 text-cyan-600" />
//                 <span className="text-slate-600 font-medium text-xs">GDPR</span>
//               </div>
//             </div>
//             <p className="text-slate-500 text-xs">Trusted by families worldwide • Bank-level security</p>
//           </div>

//           {/* Stats Section */}
//           <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div className="bg-white rounded-xl p-4 shadow-md border border-slate-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
//                   <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
//                   <div className="text-xl font-bold text-slate-800 mb-1">{stat.number}</div>
//                   <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Features Section */}
//           <div id="features" className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="text-center mb-10">
//               <h2 className="text-2xl font-bold text-slate-800 mb-3">Why Families Trust Us</h2>
//               <p className="text-slate-600 max-w-lg mx-auto text-sm">
//                 Security meets simplicity for your peace of mind
//               </p>
//             </div>
            
//             <div className="grid md:grid-cols-3 gap-5">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className={`group relative overflow-hidden rounded-xl p-5 transition-all duration-500 cursor-pointer
//                     ${activeFeature === index ? 'scale-[1.02] shadow-lg' : 'hover:scale-[1.02]'}
//                     bg-white border border-slate-200 hover:shadow-md`}
//                   onMouseEnter={() => setActiveFeature(index)}
//                 >
//                   <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
//                   <div className="relative z-10">
//                     <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 shadow-md`}>
//                       <feature.icon className="w-5 h-5 text-white" />
//                     </div>
                    
//                     <h3 className={`text-lg font-bold text-slate-800 mb-3 group-hover:${feature.textColor} transition-colors`}>
//                       {feature.title}
//                     </h3>
                    
//                     <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors text-sm">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* What We Protect & Security */}
//           <div id="security" className={`grid md:grid-cols-2 gap-6 mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             {/* What We Protect */}
//             <div className="bg-white rounded-xl p-5 shadow-md border border-slate-200 hover:shadow-lg transition-all duration-300">
//               <div className="flex items-center mb-4">
//                 <div className="bg-emerald-100 p-2 rounded-lg mr-3">
//                   <FileText className="w-5 h-5 text-emerald-600" />
//                 </div>
//                 <h3 className="text-lg font-bold text-slate-800">What We Protect</h3>
//               </div>
//               <div className="grid grid-cols-1 gap-2">
//                 {[
//                   "Legal documents & property papers",
//                   "Financial records & accounts",
//                   "Insurance policies & details",
//                   "Digital passwords & credentials",
//                   "Personal photos & memories",
//                   "Medical records & certificates"
//                 ].map((item, index) => (
//                   <div key={index} className="flex items-center group hover:bg-emerald-50 p-2 rounded-md transition-all duration-200">
//                     <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
//                     <span className="text-slate-700 group-hover:text-slate-800 transition-colors text-sm">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Security Features */}
//             <div className="bg-white rounded-xl p-5 shadow-md border border-slate-200 hover:shadow-lg transition-all duration-300">
//               <div className="flex items-center mb-4">
//                 <div className="bg-violet-100 p-2 rounded-lg mr-3">
//                   <UserCheck className="w-5 h-5 text-violet-600" />
//                 </div>
//                 <h3 className="text-lg font-bold text-slate-800">Security Features</h3>
//               </div>
//               <div className="grid grid-cols-1 gap-2">
//                 {[
//                   "256-bit AES encryption",
//                   "Multi-factor authentication",
//                   "Continuous monitoring",
//                   "Verified identification",
//                   "Zero-knowledge architecture",
//                   "Regular security audits"
//                 ].map((item, index) => (
//                   <div key={index} className="flex items-center group hover:bg-violet-50 p-2 rounded-md transition-all duration-200">
//                     <CheckCircle className="w-4 h-4 text-violet-500 mr-2 flex-shrink-0" />
//                     <span className="text-slate-700 group-hover:text-slate-800 transition-colors text-sm">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Process Steps */}
//           <div className={`text-center mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-2xl font-bold text-slate-800 mb-3">How It Works</h2>
//             <p className="text-slate-600 mb-8 max-w-lg mx-auto text-sm">
//               Three simple steps to protect your digital legacy
//             </p>
            
//             <div className="grid md:grid-cols-3 gap-5">
//               {[
//                 {
//                   step: "1",
//                   title: "Upload & Encrypt",
//                   description: "Securely upload your important documents to our encrypted vault",
//                   icon: Lock,
//                   color: "from-emerald-500 to-teal-600",
//                   bgColor: "bg-emerald-50"
//                 },
//                 {
//                   step: "2",
//                   title: "Designate Beneficiaries",
//                   description: "Choose trusted family members to receive your digital legacy",
//                   icon: Users,
//                   color: "from-violet-500 to-purple-600",
//                   bgColor: "bg-violet-50"
//                 },
//                 {
//                   step: "3",
//                   title: "Automatic Transfer",
//                   description: "We monitor and transfer assets according to your wishes",
//                   icon: ArrowRight,
//                   color: "from-cyan-500 to-blue-600",
//                   bgColor: "bg-cyan-50"
//                 }
//               ].map((step, index) => (
//                 <div key={index} className="group relative">
//                   <div className={`bg-white rounded-xl p-5 shadow-md border border-slate-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ${step.bgColor} hover:bg-opacity-50`}>
//                     <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${step.color} mb-4 shadow-md`}>
//                       <step.icon className="w-5 h-5 text-white" />
//                     </div>
//                     <div className="absolute top-3 right-3 bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-xs">
//                       <span className={`text-xs font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>{step.step}</span>
//                     </div>
//                     <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
//                     <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Testimonials Section */}
//           <div id="testimonials" className={`mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="text-center mb-10">
//               <h2 className="text-2xl font-bold text-slate-800 mb-3">Trusted Worldwide</h2>
//               <p className="text-slate-600 max-w-lg mx-auto text-sm">
//                 What families say about protecting their legacy
//               </p>
//             </div>
            
//             <div className="grid md:grid-cols-3 gap-5">
//               {testimonials.map((testimonial, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white rounded-xl p-5 shadow-md border border-slate-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full">
//                     <div className="flex mb-3">
//                       {[...Array(5)].map((_, i) => (
//                         <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`} />
//                       ))}
//                     </div>
//                     <p className="text-slate-700 italic mb-5 text-sm">"{testimonial.quote}"</p>
//                     <div className="flex items-center">
//                       <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-1 rounded-full mr-3">
//                         <div className="bg-white p-1 rounded-full">
//                           <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-100 to-teal-200 flex items-center justify-center">
//                             <span className="text-sm font-bold text-emerald-800">
//                               {testimonial.author.split(' ').map(n => n[0]).join('')}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                       <div>
//                         <h4 className="text-sm font-bold text-slate-800">{testimonial.author}</h4>
//                         <p className="text-slate-500 text-xs">{testimonial.role}, {testimonial.location}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Pricing Section */}
//           <div id="pricing" className={`mb-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="text-center mb-10">
//               <h2 className="text-2xl font-bold text-slate-800 mb-3">Simple Pricing</h2>
//               <p className="text-slate-600 max-w-lg mx-auto text-sm">
//                 Choose the plan that fits your family's needs
//               </p>
//             </div>
            
//             <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
//               {pricingPlans.map((plan, index) => (
//                 <div key={index} className="group relative">
//                   {plan.popular && (
//                     <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
//                       Popular
//                     </div>
//                   )}
//                   <div className={`bg-white rounded-xl p-5 shadow-md border-2 ${plan.popular ? 'border-emerald-500' : 'border-slate-200'} hover:shadow-lg transition-all duration-300 h-full flex flex-col`}>
//                     <div className="mb-5">
//                       <h3 className="text-lg font-bold text-slate-800 mb-1">{plan.name}</h3>
//                       <div className="flex items-end">
//                         <span className="text-2xl font-bold text-slate-800">{plan.price}</span>
//                         <span className="text-slate-500 ml-1 mb-0.5 text-sm">/{plan.period}</span>
//                       </div>
//                     </div>
                    
//                     <div className="flex-grow mb-5">
//                       <ul className="space-y-2">
//                         {plan.features.map((feature, i) => (
//                           <li key={i} className="flex items-start">
//                             <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
//                             <span className="text-slate-700 text-sm">{feature}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
                    
//                     <button className={`mt-auto w-full group bg-gradient-to-r ${plan.color} text-white px-4 py-2 rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-1`}>
//                       Get Started
//                       <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* FAQ Section */}
//           <div id="faq" className={`mb-16 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="text-center mb-10">
//               <h2 className="text-2xl font-bold text-slate-800 mb-3">Common Questions</h2>
//               <p className="text-slate-600 max-w-lg mx-auto text-sm">
//                 Everything you need to know about protecting your legacy
//               </p>
//             </div>
            
//             <div className="max-w-2xl mx-auto">
//               {faqs.map((faq, index) => (
//                 <div key={index} className="mb-3 last:mb-0">
//                   <button
//                     className={`w-full text-left bg-white rounded-lg p-4 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 flex items-center justify-between ${activeFaq === index ? 'bg-emerald-50' : ''}`}
//                     onClick={() => setActiveFaq(activeFaq === index ? null : index)}
//                   >
//                     <h3 className="text-sm font-semibold text-slate-800">{faq.question}</h3>
//                     <div className="ml-3 flex-shrink-0">
//                       {activeFaq === index ? (
//                         <X className="w-4 h-4 text-emerald-600" />
//                       ) : (
//                         <ArrowRight className="w-4 h-4 text-slate-500 transform rotate-90" />
//                       )}
//                     </div>
//                   </button>
//                   {activeFaq === index && (
//                     <div className="bg-white/50 backdrop-blur-sm rounded-b-lg p-4 shadow-xs border border-t-0 border-slate-200">
//                       <p className="text-slate-700 text-sm">{faq.answer}</p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Final CTA */}
//           <div className={`mb-16 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-8 shadow-xl overflow-hidden relative">
//               <div className="absolute inset-0 opacity-10">
//                 <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full filter blur-xl"></div>
//                 <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full filter blur-xl"></div>
//               </div>
//               <div className="relative z-10">
//                 <div className="text-center max-w-lg mx-auto">
//                   <h2 className="text-xl font-bold text-white mb-3">Ready to Secure Your Legacy?</h2>
//                   <p className="text-emerald-100 mb-6 text-sm">
//                     Join thousands of families who trust LegacyPass
//                   </p>
//                   <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
//                     <button className="w-full sm:w-auto bg-white text-emerald-700 hover:bg-slate-100 px-6 py-3 rounded-full font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2">
//                       Start Free Trial
//                       <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     </button>
//                     <button className="w-full sm:w-auto border border-white text-white hover:bg-white/10 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2">
//                       <Play className="w-4 h-4" />
//                       Watch Demo
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <footer className={`bg-slate-900 text-white transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="px-4 sm:px-6 py-12">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               <div className="md:col-span-2">
//                 <div className="flex items-center space-x-2 mb-3">
//                   <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-2 rounded-xl">
//                     <Shield className="w-5 h-5 text-white" />
//                   </div>
//                   <span className="text-lg font-bold">LegacyPass</span>
//                 </div>
//                 <p className="text-slate-400 mb-4 text-sm">
//                   Professional digital legacy protection for families worldwide.
//                 </p>
//                 <div className="flex space-x-3">
//                   <a href="#" className="text-slate-400 hover:text-white transition-colors">
//                     <Facebook className="w-4 h-4" />
//                   </a>
//                   <a href="#" className="text-slate-400 hover:text-white transition-colors">
//                     <Twitter className="w-4 h-4" />
//                   </a>
//                   <a href="#" className="text-slate-400 hover:text-white transition-colors">
//                     <Linkedin className="w-4 h-4" />
//                   </a>
//                 </div>
//               </div>
              
//               <div>
//                 <h3 className="text-sm font-semibold mb-3">Product</h3>
//                 <ul className="space-y-2">
//                   <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-xs">Features</a></li>
//                   <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-xs">Pricing</a></li>
//                   <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-xs">Security</a></li>
//                 </ul>
//               </div>
              
//               <div>
//                 <h3 className="text-sm font-semibold mb-3">Company</h3>
//                 <ul className="space-y-2">
//                   <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-xs">About</a></li>
//                   <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-xs">Careers</a></li>
//                   <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-xs">Contact</a></li>
//                 </ul>
//               </div>
//             </div>
            
//             <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
//               <p className="text-slate-400 text-xs mb-3 md:mb-0">
//                 © 2023 LegacyPass. All rights reserved.
//               </p>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-slate-400 hover:text-white text-xs">Privacy</a>
//                 <a href="#" className="text-slate-400 hover:text-white text-xs">Terms</a>
//                 <a href="#" className="text-slate-400 hover:text-white text-xs">Cookies</a>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default LegacyPassHero;