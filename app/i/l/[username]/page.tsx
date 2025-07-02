import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Award, 
  Calendar, 
  CheckCircle, 
  Clock, 
  ExternalLink, 
  MapPin, 
  MessageSquare, 
  Star, 
  ThumbsUp, 
  TrendingUp,
  User,
  Verified,
  FileText,
  Shield,
  Target,
  Trophy,
  Flame,
  Crown
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { formatXP, calculateLevel, getLevelTitle } from '@/lib/utils'

interface Props {
  params: {
    username: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // In real app, fetch user data based on username
  const username = params.username
  
  return {
    title: `Sarah Chen - Employment Law Attorney | VERDICT.COM`,
    description: `Sarah Chen is a verified Employment Law Attorney with 12 years experience. Level 28 Partner with 15,750 XP and 18 badges earned. Get expert legal advice on employment matters.`,
    keywords: [
      'employment law attorney',
      'sarah chen lawyer',
      'employment attorney',
      'workplace law expert',
      'verified lawyer',
      'legal advice employment'
    ],
    openGraph: {
      title: 'Sarah Chen - Employment Law Attorney | VERDICT.COM',
      description: 'Verified Employment Law Attorney with 12 years experience. Get expert legal advice.',
      type: 'profile',
      url: `https://verdict.com/i/l/${username}`,
    },
  }
}

// Mock professional data - in real app, fetch from API
const professionalData = {
  id: 'sarah-chen-employment',
  username: 'sarah-chen',
  firstName: 'Sarah',
  lastName: 'Chen',
  title: 'Employment Law Attorney',
  firm: 'Chen & Associates Employment Law',
  location: 'San Francisco, CA',
  avatar: '/avatars/sarah-chen.jpg',
  verified: true,
  tier: 'gold',
  bio: 'Passionate employment law attorney with over 12 years of experience helping employees navigate workplace challenges. I specialize in discrimination, harassment, wrongful termination, and wage disputes. My goal is to provide clear, actionable legal guidance that empowers workers to understand their rights.',
  
  // Professional credentials
  credentials: {
    licenseNumber: 'CA State Bar #287456',
    barAdmissions: ['California State Bar (2012)', 'Federal District Court N.D. Cal (2013)'],
    education: [
      'J.D., UC Berkeley School of Law (2012)',
      'B.A. Political Science, Stanford University (2009)'
    ],
    certifications: ['Employment Law Specialist - California Board of Legal Specialization']
  },
  
  // Gamification stats
  gamification: {
    totalXP: 15750,
    currentLevel: 28,
    levelTitle: 'Partner',
    weeklyXP: 420,
    monthlyXP: 1680,
    streak: 15,
    nextLevelXP: 17500,
    xpToNextLevel: 1750
  },
  
  // Professional stats
  stats: {
    totalOpinions: 342,
    acceptedOpinions: 89,
    avgResponseTime: '2.3 hours',
    helpfulnessScore: 4.8,
    consensusRate: 92,
    yearsExperience: 12
  },
  
  // Specialties
  specialties: [
    'Employment Discrimination',
    'Wrongful Termination', 
    'Workplace Harassment',
    'Wage & Hour Disputes',
    'Employment Contracts',
    'FMLA/Medical Leave'
  ],
  
  // Recent activity
  recentActivity: [
    {
      type: 'opinion',
      title: 'Can my employer fire me for filing a workers comp claim?',
      category: 'Wrongful Termination',
      date: '2024-01-15',
      verdictScore: 8.5,
      upvotes: 23,
      accepted: true
    },
    {
      type: 'opinion', 
      title: 'Is unpaid overtime legal for salaried employees?',
      category: 'Wage & Hour',
      date: '2024-01-14',
      verdictScore: 9.2,
      upvotes: 31,
      accepted: false
    },
    {
      type: 'badge',
      title: 'Earned "Consensus Builder" Badge',
      description: 'Achieved 90%+ consensus rate across 50+ opinions',
      date: '2024-01-12',
      rarity: 'epic'
    }
  ]
}

// Mock badges data - showcasing different rarities and categories
const badges = [
  {
    id: 'founding-member',
    name: 'Founding Member',
    description: 'One of the first 100 professionals on VERDICT.COM',
    category: 'special',
    rarity: 'legendary',
    icon: <Crown className="h-5 w-5" />,
    earned: true,
    earnedDate: '2024-01-01'
  },
  {
    id: 'consensus-builder',
    name: 'Consensus Builder',
    description: 'Achieved 90%+ consensus rate across 50+ opinions',
    category: 'quality',
    rarity: 'epic',
    icon: <Target className="h-5 w-5" />,
    earned: true,
    earnedDate: '2024-01-12'
  },
  {
    id: 'employment-expert',
    name: 'Employment Law Expert',
    description: 'Answered 100+ employment law questions with high accuracy',
    category: 'expertise',
    rarity: 'rare',
    icon: <Shield className="h-5 w-5" />,
    earned: true,
    earnedDate: '2024-01-08'
  },
  {
    id: 'rapid-responder',
    name: 'Rapid Responder',
    description: 'Maintained sub-2 hour average response time for 30 days',
    category: 'participation',
    rarity: 'uncommon',
    icon: <Clock className="h-5 w-5" />,
    earned: true,
    earnedDate: '2024-01-10'
  },
  {
    id: 'streak-champion',
    name: 'Streak Champion',
    description: 'Maintained 15+ day activity streak',
    category: 'participation',
    rarity: 'uncommon',
    icon: <Flame className="h-5 w-5" />,
    earned: true,
    earnedDate: '2024-01-15'
  },
  {
    id: 'top-contributor',
    name: 'Top Contributor',
    description: 'Ranked in top 10% of all professionals this month',
    category: 'community',
    rarity: 'rare',
    icon: <Trophy className="h-5 w-5" />,
    earned: true,
    earnedDate: '2024-01-14'
  }
]

function getBadgeVariant(rarity: string) {
  switch (rarity) {
    case 'legendary': return 'legendary'
    case 'epic': return 'epic' 
    case 'rare': return 'rare'
    case 'uncommon': return 'uncommon'
    default: return 'common'
  }
}

export default function ProfessionalProfilePage({ params }: Props) {
  const professional = professionalData
  const earnedBadges = badges.filter(badge => badge.earned)
  
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": `${professional.firstName} ${professional.lastName}`,
            "jobTitle": professional.title,
            "worksFor": {
              "@type": "Organization",
              "name": professional.firm
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": professional.location
            },
            "description": professional.bio,
            "url": `https://verdict.com/i/l/${params.username}`,
            "image": professional.avatar,
            "knowsAbout": professional.specialties,
            "alumniOf": professional.credentials.education,
            "hasCredential": professional.credentials.barAdmissions
          })
        }}
      />

      <div className="min-h-screen bg-background">
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
              <Link href="/i" className="text-muted-foreground hover:text-foreground transition-colors">
                Professionals
              </Link>
            </nav>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button size="sm" variant="legal" asChild>
                <Link href="/l/ask">Ask a Question</Link>
              </Button>
            </div>
          </div>
        </header>

        <div className="container py-8 space-y-8">
          {/* Profile Header */}
          <Card className="">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Avatar and Basic Info */}
                <div className="flex flex-col items-center lg:items-start space-y-4">
                  <div className="relative">
                    <Avatar className="h-24 w-24 lg:h-32 lg:w-32">
                      <AvatarImage src={professional.avatar} alt={`${professional.firstName} ${professional.lastName}`} />
                      <AvatarFallback className="text-2xl">
                        {professional.firstName[0]}{professional.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                    {professional.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-legal-primary rounded-full p-1">
                        <Verified className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <div className="text-center lg:text-left space-y-2">
                    <h1 className="text-3xl font-bold">
                      {professional.firstName} {professional.lastName}
                    </h1>
                    <p className="text-xl text-legal-primary font-semibold">
                      {professional.title}
                    </p>
                    <div className="flex items-center justify-center lg:justify-start space-x-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{professional.location}</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-2 text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{professional.firm}</span>
                    </div>
                  </div>
                </div>

                {/* Gamification Stats */}
                <div className="flex-1 space-y-6">
                  {/* Level and XP */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Badge variant="level" className="text-lg px-4 py-2">
                          Level {professional.gamification.currentLevel}
                        </Badge>
                        <span className="text-xl font-semibold text-legal-primary">
                          {professional.gamification.levelTitle}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Total XP</div>
                        <div className="text-xl font-bold">
                          {formatXP(professional.gamification.totalXP)}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress to Level {professional.gamification.currentLevel + 1}</span>
                        <span>{professional.gamification.xpToNextLevel} XP remaining</span>
                      </div>
                      <Progress 
                        value={(professional.gamification.totalXP / professional.gamification.nextLevelXP) * 100} 
                        className="h-3" 
                      />
                    </div>
                  </div>

                  {/* Professional Stats */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center p-3 rounded-lg bg-legal-primary/10">
                      <div className="text-2xl font-bold text-legal-primary">{professional.stats.totalOpinions}</div>
                      <div className="text-xs text-muted-foreground">Opinions Given</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-green-50">
                      <div className="text-2xl font-bold text-green-600">{professional.stats.acceptedOpinions}</div>
                      <div className="text-xs text-muted-foreground">Accepted</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-blue-50">
                      <div className="text-2xl font-bold text-blue-600">{professional.stats.avgResponseTime}</div>
                      <div className="text-xs text-muted-foreground">Avg Response</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-yellow-50">
                      <div className="text-2xl font-bold text-yellow-600">{professional.stats.helpfulnessScore}</div>
                      <div className="text-xs text-muted-foreground">Helpfulness</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1" variant="legal">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Ask Sarah a Question
                    </Button>
                    <Button className="flex-1" variant="outline">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="w-full lg:w-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="badges">Badges ({earnedBadges.length})</TabsTrigger>
              <TabsTrigger value="activity">Recent Activity</TabsTrigger>
              <TabsTrigger value="credentials">Credentials</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Bio and Specialties */}
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>About</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {professional.bio}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Practice Areas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        {professional.specialties.map((specialty, index) => (
                          <Badge key={index} variant="legal" className="justify-center py-2">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Performance Metrics */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Performance Metrics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Consensus Rate</span>
                        <span className="font-semibold">{professional.stats.consensusRate}%</span>
                      </div>
                      <Progress value={professional.stats.consensusRate} className="h-2" />
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Response Rate</span>
                        <span className="font-semibold">98%</span>
                      </div>
                      <Progress value={98} className="h-2" />
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Activity Streak</span>
                        <Badge variant="uncommon">{professional.gamification.streak} days</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Recent XP</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">This Week</span>
                        <span className="font-semibold text-legal-primary">+{professional.gamification.weeklyXP} XP</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">This Month</span>
                        <span className="font-semibold text-legal-primary">+{professional.gamification.monthlyXP} XP</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Badges Tab */}
            <TabsContent value="badges" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Badge Collection</CardTitle>
                  <CardDescription>
                    Badges earned through quality contributions, expertise, and community engagement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {earnedBadges.map((badge) => (
                      <Card key={badge.id} className="relative overflow-hidden">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <div className={`p-2 rounded-lg ${
                              badge.rarity === 'legendary' ? 'bg-gradient-to-r from-yellow-200 to-yellow-300' :
                              badge.rarity === 'epic' ? 'bg-purple-100' :
                              badge.rarity === 'rare' ? 'bg-blue-100' :
                              badge.rarity === 'uncommon' ? 'bg-green-100' :
                              'bg-gray-100'
                            }`}>
                              <div className={`${
                                badge.rarity === 'legendary' ? 'text-yellow-800' :
                                badge.rarity === 'epic' ? 'text-purple-600' :
                                badge.rarity === 'rare' ? 'text-blue-600' :
                                badge.rarity === 'uncommon' ? 'text-green-600' :
                                'text-gray-600'
                              }`}>
                                {badge.icon}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2">
                                <h3 className="font-semibold text-sm">{badge.name}</h3>
                                <Badge variant={getBadgeVariant(badge.rarity) as any} className="text-xs">
                                  {badge.rarity}
                                </Badge>
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">
                                {badge.description}
                              </p>
                              <p className="text-xs text-muted-foreground mt-2">
                                Earned {new Date(badge.earnedDate).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Activity Tab */}
            <TabsContent value="activity" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {professional.recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border">
                        <div className="p-2 rounded-lg bg-legal-primary/10">
                          {activity.type === 'opinion' ? (
                            <MessageSquare className="h-4 w-4 text-legal-primary" />
                          ) : (
                            <Award className="h-4 w-4 text-legal-primary" />
                          )}
                        </div>
                        <div className="flex-1 space-y-1">
                          <h4 className="font-semibold">{activity.title}</h4>
                          {activity.category && (
                            <Badge variant="outline" className="text-xs">
                              {activity.category}
                            </Badge>
                          )}
                          {activity.verdictScore && (
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>Verdict Score: {activity.verdictScore}/10</span>
                              <span>{activity.upvotes} upvotes</span>
                              {activity.accepted && <Badge variant="uncommon" className="text-xs">Accepted</Badge>}
                            </div>
                          )}
                          {activity.description && (
                            <p className="text-sm text-muted-foreground">{activity.description}</p>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {new Date(activity.date).toLocaleDateString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Credentials Tab */}
            <TabsContent value="credentials" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Verified className="h-5 w-5 text-legal-primary" />
                      <span>Bar Admissions</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {professional.credentials.barAdmissions.map((admission, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{admission}</span>
                      </div>
                    ))}
                    <div className="flex items-center space-x-2 mt-3">
                      <FileText className="h-4 w-4 text-legal-primary" />
                      <span className="text-sm font-medium">{professional.credentials.licenseNumber}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Education</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {professional.credentials.education.map((edu, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{edu}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Certifications & Specializations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {professional.credentials.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-legal-primary" />
                        <span className="text-sm">{cert}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}