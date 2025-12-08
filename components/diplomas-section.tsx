'use client'

import { motion } from "framer-motion"
import { GraduationCap, Award, ShieldCheck, FileBadge, CheckCircle2, ScrollText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function DiplomasSection() {
  const { t } = useTranslation()

  const diplomas = [
    {
      title: t.diplomas.items[0].title,
      institution: t.diplomas.items[0].institution,
      year: t.diplomas.items[0].year,
      description: t.diplomas.items[0].description,
      icon: GraduationCap,
      color: "text-cyan-400",
    },
    {
      title: t.diplomas.items[1].title,
      institution: t.diplomas.items[1].institution,
      year: t.diplomas.items[1].year,
      description: t.diplomas.items[1].description,
      icon: ScrollText,
      color: "text-blue-400",
    },
    {
      title: t.diplomas.items[2].title,
      institution: t.diplomas.items[2].institution,
      year: t.diplomas.items[2].year,
      description: t.diplomas.items[2].description,
      icon: Award,
      color: "text-purple-400",
    },
  ]

  return (
    <section id="diplomas" className="py-20 bg-[#0A1B2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyan-400">{t.diplomas.title.split(' & ')[0]}</span>
            <span className="text-white"> & {t.diplomas.title.split(' & ')[1]}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.diplomas.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-semibold text-white">Parcours Académique</h3>
          </div>

          <div className="space-y-4">
            {diplomas.map((diploma, index) => (
              <motion.div
                key={diploma.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#0D2438] border-[#1E4976] hover:border-cyan-400/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-cyan-400/10 flex items-center justify-center flex-shrink-0`}>
                        <diploma.icon className={`w-6 h-6 ${diploma.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">{diploma.title}</h4>
                        <p className="text-sm text-gray-400 mb-1">{diploma.institution}</p>
                        <p className="text-sm text-cyan-400 mb-2">{diploma.year}</p>
                        <p className="text-sm text-gray-300">{diploma.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
