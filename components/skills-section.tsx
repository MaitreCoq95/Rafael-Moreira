'use client'

import { motion } from "framer-motion"
import { CheckCircle2, ShieldCheck, GitBranch, TrendingUp, Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function SkillsSection() {
  const { t } = useTranslation()

  const categoryIcons = [ShieldCheck, GitBranch, TrendingUp, Settings, Settings]

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.skills.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.skills.categories.map((category, categoryIndex) => {
            const Icon = categoryIcons[categoryIndex] || CheckCircle2
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
