import { motion } from "motion/react";
import { ArrowRight, ExternalLink, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PORTFOLIO, TESTIMONIALS } from "@/constants";
import { useTranslation } from "react-i18next";

export function Portfolio() {
  const { t } = useTranslation();

  return (
    <section id="portfolio" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block"
            >
              {t('nav.portfolio')}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]"
            >
              Selected <span className="text-muted-foreground italic font-extralight block md:inline">Case Studies</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button variant="ghost" className="rounded-full group px-8 py-8 border border-muted-foreground/20 hover:border-primary transition-all duration-300">
              <span className="uppercase tracking-[0.2em] text-[10px] font-bold">View All Projects</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PORTFOLIO.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] bg-muted mb-8 shadow-2xl shadow-black/5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-[1.5s] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                  <Button className="rounded-full w-full py-8 bg-white text-black hover:bg-white/90 text-[10px] font-bold uppercase tracking-widest shadow-xl">
                    Explore Case Study <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="px-4">
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4 block group-hover:translate-x-1 transition-transform">{item.category}</span>
                <h3 className="text-3xl font-bold mb-4 tracking-tight leading-tight transition-colors group-hover:text-primary">{item.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-6 opacity-80">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="py-32 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block"
          >
            {t('testimonials.title_badge')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8"
          >
            What Our <span className="text-muted-foreground italic font-extralight block">Clients</span> Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1, ease: "easeOut" }}
            >
              <Card className="h-full rounded-[3rem] border-0 p-12 lg:p-16 relative bg-card shadow-2xl shadow-primary/[0.03] overflow-visible">
                 <div className="absolute -top-10 left-16 w-20 h-20 bg-primary flex items-center justify-center rounded-[2rem] shadow-2xl shadow-primary/30">
                   <Quote className="h-8 w-8 text-primary-foreground" />
                 </div>
                 
                 <CardContent className="p-0">
                    <p className="text-2xl italic text-foreground/90 mb-12 leading-relaxed font-light">
                      “{testimonial.content}”
                    </p>
                    <div className="flex items-center gap-6 pt-10 border-t border-muted-foreground/10">
                       <div className="relative">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover border-4 border-background"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 rounded-full border border-primary/20" />
                       </div>
                       <div>
                          <h4 className="font-bold text-xl leading-tight mb-1">{testimonial.name}</h4>
                          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest opacity-60">{testimonial.role}</p>
                       </div>
                    </div>
                 </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Dynamic circle decoration */}
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 blur-[150px] rounded-full -z-10" />
    </section>
  );
}
