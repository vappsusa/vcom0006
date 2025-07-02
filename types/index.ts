// VERDICT.COM Type Definitions
// Based on architecture docs and multi-vertical design

export type Vertical = 'legal' | 'medical' | 'financial'

export type UserType = 'user' | 'professional' | 'admin' | 'moderator'

// User and Profile Types
export interface Profile {
  id: string
  email: string
  firstName?: string
  lastName?: string
  userType: UserType
  avatarUrl?: string
  createdAt: string
  updatedAt: string
}

// Professional Types
export interface Professional extends Profile {
  verificationStatus: 'pending' | 'verified' | 'rejected'
  specialties: string[]
  yearsExperience: number
  jurisdiction?: string
  licenseNumber?: string
  firmName?: string
  bio?: string
  tier: 'bronze' | 'silver' | 'gold' | 'platinum'
}

// Question Types
export interface Question {
  id: string
  slug: string
  title: string
  body: string
  category: string
  subcategory: string
  keywords: string[]
  vertical: Vertical
  authorId: string
  aiSummary?: string
  complexity: 'simple' | 'moderate' | 'complex'
  aiQualityScore: number
  moderationPassed: boolean
  viewCount: number
  upvotes: number
  downvotes: number
  createdAt: string
  updatedAt: string
}

// Opinion/Answer Types
export interface Opinion {
  id: string
  questionId: string
  professionalId: string
  body: string
  isAccepted: boolean
  upvotes: number
  downvotes: number
  confidence: number
  citations?: Citation[]
  createdAt: string
  updatedAt: string
}

export interface Citation {
  id: string
  title: string
  url?: string
  source: string
  type: 'case_law' | 'statute' | 'regulation' | 'article' | 'other'
}

// Verdict Types
export interface Verdict {
  id: string
  questionId: string
  score: number // 1-10
  confidence: number // 0-100
  consensus: 'strong' | 'moderate' | 'weak' | 'none'
  reasoning: string
  generatedAt: string
}

// Gamification Types
export interface UserXP {
  userId: string
  totalXp: number
  currentLevel: number
  weeklyXp: number
  monthlyXp: number
  streak: number
}

export interface Badge {
  id: string
  name: string
  description: string
  category: 'participation' | 'quality' | 'expertise' | 'community' | 'special' | 'legendary'
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
  iconUrl: string
  requirements: string[]
}

export interface UserBadge {
  userId: string
  badgeId: string
  earnedAt: string
  featured: boolean
}

// AI Classification Types
export interface AIClassification {
  questionId: string
  primaryCategory: string
  confidence: number
  keywords: string[]
  suggestedTitle?: string
  qualityScore: number
  moderationFlags: string[]
  cost: number
  cacheHit: boolean
  servedFromRegion: string
  createdAt: string
}

// Organization Types
export interface Organization {
  id: string
  slug: string
  name: string
  type: 'law_firm' | 'medical_practice' | 'financial_firm'
  description?: string
  website?: string
  logoUrl?: string
  locations: Location[]
  professionals: Professional[]
  verified: boolean
  createdAt: string
}

export interface Location {
  id: string
  address: string
  city: string
  state: string
  country: string
  zipCode: string
  isPrimary: boolean
}

// API Response Types
export interface APIResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> extends APIResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Form Types for UI
export interface QuestionFormData {
  title: string
  body: string
  category: string
  subcategory?: string
  urgency: 'low' | 'medium' | 'high'
  isAnonymous: boolean
}

export interface OpinionFormData {
  body: string
  confidence: number
  citations: Citation[]
  isPartialAnswer: boolean
}

// Search and Filter Types
export interface SearchFilters {
  vertical?: Vertical
  category?: string
  subcategory?: string
  complexity?: string
  dateRange?: {
    start: string
    end: string
  }
  sortBy: 'newest' | 'oldest' | 'most_popular' | 'most_relevant'
  hasVerdict?: boolean
  hasAcceptedAnswer?: boolean
}

export interface SearchResult {
  questions: Question[]
  total: number
  facets: {
    categories: Array<{ name: string; count: number }>
    subcategories: Array<{ name: string; count: number }>
    complexity: Array<{ name: string; count: number }>
  }
}

// Component Props Types
export interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  openGraph?: {
    title?: string
    description?: string
    image?: string
    type?: string
  }
  structuredData?: object
}