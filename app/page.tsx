import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, Users, Zap, Star, Award, TrendingUp, MessageSquare, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'

export const metadata: Metadata = {
  title: 'VERDICT.COM - Professional Q&A Platform for Legal, Medical & Financial Advice',
  description: 'Get expert opinions from verified professionals. AI-powered Q&A platform democratizing professional knowledge through AI classification, professional consensus, and community engagement.',
  keywords: [
    'professional advice',
    'legal questions',
    'medical consultation',
    'financial advice',
    'expert opinions',
    'AI-powered Q&A',
    'verified professionals',
    'professional consensus'
  ],
  openGraph: {
    title: 'VERDICT.COM - Professional Q&A Platform',
    description: 'Get expert opinions from verified professionals on legal, medical, and financial questions.',
    type: 'website',
    url: 'https://verdict.com',
  },
}

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "AI-Powered Classification",
    description: "Every question automatically categorized and matched with the right professionals using advanced AI.",
    vertical: "legal" as const
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Verified Professionals",
    description: "All lawyers, doctors, and financial advisors are verified with licenses and credentials checked.",
    vertical: "medical" as const
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Professional Consensus",
    description: "Get multiple expert opinions and see the consensus view for balanced, reliable advice.",
    vertical: "financial" as const
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Quality Guarantee",
    description: "5-stage AI moderation ensures every question and answer meets our high standards.",
    vertical: "legal" as const
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Gamification System",
    description: "Professionals earn XP, levels, and badges for providing quality advice and helping the community.",
    vertical: "medical" as const
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Real-time Updates",
    description: "Get notified instantly when professionals respond to your questions with expert opinions.",
    vertical: "financial" as const
  }
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Employment Law Attorney",
    avatar: "/avatars/sarah-chen.jpg",
    content: "VERDICT.COM has transformed how I help clients. The AI categorization saves hours of work, and the gamification keeps me engaged.",
    rating: 5,
    xp: 12500,
    level: 18,
    badges: 12
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "Internal Medicine Physician",
    avatar: "/avatars/dr-rodriguez.jpg",
    content: "The platform's quality controls ensure I'm answering relevant questions. The professional consensus feature provides valuable peer insights.",
    rating: 5,
    xp: 8750,
    level: 14,
    badges: 8
  },
  {
    name: "Jennifer Kim",
    role: "Certified Financial Planner",
    avatar: "/avatars/jennifer-kim.jpg",
    content: "I love helping people make better financial decisions. The XP system and badges make it feel like a game while doing meaningful work.",
    rating: 5,
    xp: 15200,
    level: 22,
    badges: 15
  }
]

const stats = [
  { label: "Expert Professionals", value: "10,000+" },
  { label: "Questions Answered", value: "250,000+" },
  { label: "Average Response Time", value: "< 2 hours" },
  { label: "Satisfaction Rate", value: "98.5%" }
]

function getVerticalColor(vertical: 'legal' | 'medical' | 'financial') {
  switch (vertical) {
    case 'legal': return 'text-legal-primary'
    case 'medical': return 'text-medical-primary'
    case 'financial': return 'text-financial-primary'
  }
}

function getVerticalBg(vertical: 'legal' | 'medical' | 'financial') {
  switch (vertical) {
    case 'legal': return 'bg-legal-primary/10'
    case 'medical': return 'bg-medical-primary/10'
    case 'financial': return 'bg-financial-primary/10'
  }
}

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "VERDICT.COM",
            "description": "Multi-vertical AI-powered Q&A platform democratizing professional knowledge",
            "url": "https://verdict.com",
            "logo": "https://verdict.com/logo.png",
            "sameAs": [
              "https://twitter.com/verdictcom",
              "https://linkedin.com/company/verdictcom"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-VERDICT",
              "contactType": "customer service"
            }
          })
        }}
      />

      <div className="flex flex-col min-h-screen">
        {/* Navigation */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg verdict-gradient flex items-center justify-center">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <span className="text-xl font-bold verdict-text-gradient">VERDICT.COM</span>
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="/l" className="text-legal-primary hover:text-legal-secondary transition-colors">
                Legal
              </Link>
              <Link href="/m" className="text-medical-primary hover:text-medical-secondary transition-colors">
                Medical
              </Link>
              <Link href="/f" className="text-financial-primary hover:text-financial-secondary transition-colors">
                Financial
              </Link>
              <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
            </nav>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button size="sm" variant="verdict" asChild>
                <Link href="/sign-up">Get Started</Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4 max-w-4xl">
                <Badge variant="legal" className="mb-4">
                  🚀 Now Live: AI-Powered Legal Q&A
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  Get Expert Advice from
                  <span className="verdict-text-gradient block mt-2">
                    Verified Professionals
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  AI-powered Q&A platform connecting you with licensed lawyers, doctors, and financial advisors. 
                  Get professional consensus on your most important questions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="verdict" className="text-lg px-8 py-6" asChild>
                  <Link href="/l/ask">
                    Ask a Legal Question
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                  <Link href="/l">
                    Browse Legal Questions
                  </Link>
                </Button>
              </div>

              {/* Multi-vertical Preview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mt-16">
                <Card className="border-legal-primary/20 hover:border-legal-primary/40 transition-colors">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-legal-primary text-lg">Legal</CardTitle>
                    <CardDescription>Get legal advice from licensed attorneys</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="legal" size="sm" className="w-full" asChild>
                      <Link href="/l">Explore Legal <ChevronRight className="ml-1 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-medical-primary/20 hover:border-medical-primary/40 transition-colors opacity-60">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-medical-primary text-lg">Medical</CardTitle>
                    <CardDescription>Coming soon: Medical consultations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="medical" size="sm" className="w-full" disabled>
                      Coming Soon
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-financial-primary/20 hover:border-financial-primary/40 transition-colors opacity-60">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-financial-primary text-lg">Financial</CardTitle>
                    <CardDescription>Coming soon: Financial planning advice</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="financial" size="sm" className="w-full" disabled>
                      Coming Soon
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold verdict-text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Choose <span className="verdict-text-gradient">VERDICT.COM?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our AI-powered platform ensures you get the best professional advice through verified experts and community consensus.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className={`border transition-all duration-300 hover:shadow-lg ${getVerticalBg(feature.vertical)}`}>
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${getVerticalBg(feature.vertical)} flex items-center justify-center mb-4`}>
                      <div className={getVerticalColor(feature.vertical)}>
                        {feature.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Trusted by <span className="verdict-text-gradient">Professional Experts</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                See what verified professionals are saying about our platform and gamification system.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-base">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    
                    {/* Gamification Stats */}
                    <div className="border-t pt-4 space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Level {testimonial.level}</span>
                        <Badge variant="level" className="text-xs">
                          {testimonial.xp.toLocaleString()} XP
                        </Badge>
                      </div>
                      <Progress value={(testimonial.xp % 1000) / 10} className="h-2" />
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{testimonial.badges} Badges Earned</span>
                        <span>{(1000 - (testimonial.xp % 1000))} XP to next level</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <Card className="verdict-gradient p-8 md:p-12 text-center text-white">
              <div className="space-y-6 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to Get Expert Advice?
                </h2>
                <p className="text-xl opacity-90 leading-relaxed">
                  Join thousands of users getting professional advice from verified experts. 
                  Start with legal questions and expand to medical and financial advice soon.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                    <Link href="/l/ask">
                      Ask Your First Question
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-legal-primary" asChild>
                    <Link href="/sign-up">
                      Join as a Professional
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-12 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold">Platform</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <Link href="/l" className="block hover:text-legal-primary transition-colors">Legal Q&A</Link>
                  <Link href="/pricing" className="block hover:text-foreground transition-colors">Pricing</Link>
                  <Link href="/about" className="block hover:text-foreground transition-colors">About</Link>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">For Professionals</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <Link href="/sign-up" className="block hover:text-foreground transition-colors">Join as Expert</Link>
                  <Link href="/verification" className="block hover:text-foreground transition-colors">Verification</Link>
                  <Link href="/gamification" className="block hover:text-foreground transition-colors">XP & Badges</Link>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Support</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <Link href="/help" className="block hover:text-foreground transition-colors">Help Center</Link>
                  <Link href="/contact" className="block hover:text-foreground transition-colors">Contact</Link>
                  <Link href="/status" className="block hover:text-foreground transition-colors">Status</Link>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Legal</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <Link href="/privacy" className="block hover:text-foreground transition-colors">Privacy</Link>
                  <Link href="/terms" className="block hover:text-foreground transition-colors">Terms</Link>
                  <Link href="/disclaimer" className="block hover:text-foreground transition-colors">Disclaimer</Link>
                </div>
              </div>
            </div>
            
            <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded verdict-gradient flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="font-semibold verdict-text-gradient">VERDICT.COM</span>
              </div>
              <p className="text-sm text-muted-foreground mt-4 md:mt-0">
                © 2024 VERDICT.COM. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}