import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { PROCESS } from "@/constants";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative group">
              <img
                src="https://picsum.photos/seed/agency-team/800/1000"
                alt="Kal Digitals Team"
                className="object-cover w-full h-full transition-transform duration-[2s] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            {/* Experience Badge */}
            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-10 -right-10 bg-primary text-primary-foreground p-10 rounded-full shadow-2xl flex flex-col items-center justify-center aspect-square min-w-[180px]"
            >
              <span className="text-6xl font-black leading-none">5+</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-center mt-2 opacity-80">Years of<br />Excellence</span>
            </motion.div>
          </motion.div>

          <div className="flex flex-col">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-6"
            >
              {t('nav.about')}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-10"
            >
              Excellence Redefined for the <span className="text-muted-foreground italic font-extralight block">Digital Age</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-xl mb-12 font-light leading-relaxed pr-10"
            >
              Based in Addis Ababa, Kal Digitals is more than a creative agency. We are a collective of strategists, designers, and engineers dedicated to elevating the Ethiopian digital landscape to global standards.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-16">
              {[
                "Strategy-Led Design",
                "High-Performance Build",
                "Global Design Standards",
                "Deep Local Market Insights",
                "Conversion-First Mindset",
                "Reliable Post-Launch Support"
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest opacity-80">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative p-8 border-l-2 border-primary/20 bg-muted/30 rounded-r-2xl"
            >
              <p className="italic text-xl text-muted-foreground font-light leading-relaxed">
                "Our mission is to empower the Ethiopian digital landscape by providing unparalleled quality that speaks for itself."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const { t } = useTranslation();

  return (
    <section id="process" className="py-32 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-32">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block"
          >
            Workflow
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8"
          >
            Our Strategic <span className="text-muted-foreground italic font-extralight block md:inline">Roadmap</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-xl font-light max-w-2xl leading-relaxed"
          >
            A systematic approach refined through years of experience to ensure your project exceeds expectations at every turn.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {PROCESS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="relative group"
            >
              {/* Massive background number */}
              <div className="absolute -top-20 -left-6 text-[180px] font-black text-primary/5 select-none -z-10 group-hover:text-primary/[0.08] transition-all duration-700 font-heading leading-none">
                {step.id < 10 ? `0${step.id}` : step.id}
              </div>
              
              <div className="flex flex-col h-full bg-card/50 backdrop-blur-sm p-10 rounded-[2.5rem] border hover:border-primary/20 transition-all duration-500 hover:-translate-y-2">
                 <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground font-bold mb-10 text-lg shadow-lg shadow-primary/20">
                   {step.id}
                 </div>
                 <h3 className="text-2xl font-bold mb-4 tracking-tight">{step.title}</h3>
                 <p className="text-muted-foreground font-light leading-relaxed">
                   {step.description}
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Dynamic line decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent -z-20 rotate-[-5deg]" />
    </section>
  );
}
