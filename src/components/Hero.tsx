import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThreeBackground } from "./ThreeBackground";
import { STATS } from "@/constants";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ThreeBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 bg-muted/50 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 border"
          >
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{t('hero.tagline')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tight leading-[0.9] mb-8"
          >
            {t('hero.title')}{" "}
            <span className="text-muted-foreground italic font-extralight block md:inline">
              {t('hero.experience')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground/80 mb-10 max-w-2xl font-light leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <Button size="lg" className="rounded-full px-10 h-16 text-base font-medium group transition-all duration-300 hover:scale-105 active:scale-95">
              Start Project <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-base font-medium hover:bg-muted/50 transition-all duration-300">
              View Our Work
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-5xl border-t border-muted-foreground/10 pt-12"
          >
            {STATS.map((stat, i) => (
              <motion.div 
                key={stat.label} 
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              >
                <span className="text-4xl md:text-5xl font-medium mb-1 tracking-tighter">{stat.value}</span>
                <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.15em]">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Atmospheric Backgrounds */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-20 animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] -z-20" />
    </section>
  );
}
