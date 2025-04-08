"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { Category } from "@/lib/blesta-api"

interface CategoryTabsProps {
  categories: Category[]
  activeCategory?: string
}

export function CategoryTabs({ categories, activeCategory }: CategoryTabsProps) {
  const pathname = usePathname()

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      <Link
        href="/plans"
        className={`px-4 py-2 rounded-full transition-colors ${
          !activeCategory
            ? "bg-gradient-to-r from-amber-400 to-amber-600 text-white"
            : "glass-button text-white hover:text-amber-300"
        }`}
      >
        All Plans
      </Link>

      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/plans?category=${category.id}`}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeCategory === category.id
              ? "bg-gradient-to-r from-amber-400 to-amber-600 text-white"
              : "glass-button text-white hover:text-amber-300"
          }`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  )
}
