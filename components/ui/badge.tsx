import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        // VERDICT-specific badge variants
        legal: "border-transparent bg-legal-primary text-white hover:bg-legal-secondary",
        medical: "border-transparent bg-medical-primary text-white hover:bg-medical-secondary",
        financial: "border-transparent bg-financial-primary text-white hover:bg-financial-secondary",
        // Gamification badges
        common: "border-gray-300 bg-gray-100 text-gray-700",
        uncommon: "border-green-300 bg-green-100 text-green-700",
        rare: "border-blue-300 bg-blue-100 text-blue-700",
        epic: "border-purple-300 bg-purple-100 text-purple-700",
        legendary: "border-gold-300 bg-gradient-to-r from-yellow-200 to-yellow-300 text-yellow-800 badge-glow",
        // Level badges
        level: "border-transparent bg-gradient-to-r from-verdict-gold to-yellow-400 text-white font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }