import { motion, Variants } from "motion/react";
import * as LucideIcons from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES } from "@/constants";
import { useTranslation } from "react-i18next";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-32 bg-muted/10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block"
            >
              capabilities
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]"
            >
              Digital Solutions for <span className="text-muted-foreground italic font-extralight block md:inline">Growth</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-xl font-light max-w-sm leading-relaxed"
          >
            We combine strategy, design, and engineering to build products that deliver measurable results and elevate your brand globally.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {SERVICES.map((service) => {
            const IconComponent = (LucideIcons as any)[service.icon];
            return (
              <motion.div key={service.id} variants={item}>
                <Card className="group h-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 border-muted/50 overflow-hidden bg-card/50 backdrop-blur-sm rounded-[2rem] p-4">
                  <CardHeader className="p-6">
                    <div className="h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-10 transition-all duration-500 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-[10deg]">
                      {IconComponent && <IconComponent className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />}
                    </div>
                    <CardTitle className="text-3xl font-bold mb-4 tracking-tight">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground text-base leading-relaxed font-light">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 mt-auto">
                    <div className="pt-6 border-t border-muted-foreground/10 flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-primary transition-all group-hover:translate-x-2">
                      Explore Service <LucideIcons.ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />
    </section>
  );
}
