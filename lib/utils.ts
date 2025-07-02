import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility functions for VERDICT.COM
export function formatXP(xp: number): string {
  if (xp < 1000) return xp.toString()
  if (xp < 1000000) return `${(xp / 1000).toFixed(1)}K`
  return `${(xp / 1000000).toFixed(1)}M`
}

export function getVerticalColor(vertical: 'legal' | 'medical' | 'financial'): string {
  switch (vertical) {
    case 'legal':
      return 'text-legal-primary'
    case 'medical':
      return 'text-medical-primary'
    case 'financial':
      return 'text-financial-primary'
    default:
      return 'text-legal-primary'
  }
}

export function getVerticalBg(vertical: 'legal' | 'medical' | 'financial'): string {
  switch (vertical) {
    case 'legal':
      return 'bg-legal-primary'
    case 'medical':
      return 'bg-medical-primary'
    case 'financial':
      return 'bg-financial-primary'
    default:
      return 'bg-legal-primary'
  }
}

export function calculateLevel(xp: number): number {
  // Logarithmic progression as per gamification docs
  if (xp < 1000) return Math.floor(xp / 100) + 1
  if (xp < 5000) return Math.floor((xp - 1000) / 500) + 10
  if (xp < 25000) return Math.floor((xp - 5000) / 2000) + 18
  if (xp < 75000) return Math.floor((xp - 25000) / 5000) + 28
  if (xp < 360000) return Math.floor((xp - 75000) / 15000) + 38
  return Math.min(100, Math.floor((xp - 360000) / 100000) + 58)
}

export function getLevelTitle(level: number): string {
  if (level <= 5) return 'Legal Intern'
  if (level <= 10) return 'Associate'
  if (level <= 15) return 'Senior Associate'
  if (level <= 20) return 'Counsel'
  if (level <= 30) return 'Partner'
  if (level <= 50) return 'Legal Authority'
  if (level <= 100) return 'VERDICT Immortal'
  return 'Unknown'
}