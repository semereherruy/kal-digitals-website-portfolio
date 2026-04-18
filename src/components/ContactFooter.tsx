import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const { t } = useTranslation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    form.reset();
  }

  return (
    <section id="contact" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-6 block">{t('nav.contact')}</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
              {t('contact.title')} <span className="text-muted-foreground italic font-extralight block">{t('contact.extraordinary')}</span>
            </h2>
            <p className="text-muted-foreground text-xl mb-16 font-light max-w-lg leading-relaxed">
              {t('contact.description')}
            </p>

            <div className="space-y-12">
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-full border border-muted-foreground/10 flex items-center justify-center shrink-0 transition-colors group-hover:border-primary group-hover:bg-primary/5">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{t('contact.email_label')}</h4>
                  <p className="text-xl font-medium">hello@kaldigitals.com</p>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-full border border-muted-foreground/10 flex items-center justify-center shrink-0 transition-colors group-hover:border-primary group-hover:bg-primary/5">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{t('contact.phone_label')}</h4>
                  <p className="text-xl font-medium">+251 900 000 000</p>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-full border border-muted-foreground/10 flex items-center justify-center shrink-0 transition-colors group-hover:border-primary group-hover:bg-primary/5">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{t('contact.address_label')}</h4>
                  <p className="text-xl font-medium">{t('contact.address_value')}</p>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-12 border-t border-muted-foreground/10 flex gap-6">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <Button key={i} variant="ghost" size="icon" className="rounded-full w-12 h-12 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card p-10 md:p-14 rounded-3xl border shadow-2xl shadow-primary/5"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase tracking-widest font-bold">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="rounded-none border-0 border-b border-muted-foreground/20 bg-transparent px-0 focus:ring-0 focus:border-primary transition-all text-lg h-14" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase tracking-widest font-bold">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} className="rounded-none border-0 border-b border-muted-foreground/20 bg-transparent px-0 focus:ring-0 focus:border-primary transition-all text-lg h-14" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] uppercase tracking-widest font-bold">Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Project Inquiry" {...field} className="rounded-none border-0 border-b border-muted-foreground/20 bg-transparent px-0 focus:ring-0 focus:border-primary transition-all text-lg h-14" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] uppercase tracking-widest font-bold">Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project goals..."
                          className="min-h-[120px] rounded-none border-0 border-b border-muted-foreground/20 bg-transparent px-0 focus:ring-0 focus:border-primary transition-all text-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full h-16 rounded-full text-base font-bold transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-primary/20">
                  Send Message <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-muted-foreground/10 pt-32 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="flex flex-col gap-8">
            <span className="text-3xl font-bold tracking-tighter">
              KAL<span className="text-muted-foreground font-light">DIGITALS</span>
            </span>
            <p className="text-muted-foreground leading-relaxed text-lg font-light">
              Premium digital marketing and development agency based in Addis Ababa, helping businesses achieve global excellence in the digital age.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-10">Quick Links</h4>
            <ul className="space-y-6 text-lg font-medium">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="hover:text-primary transition-colors duration-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-10">Services</h4>
            <ul className="space-y-6 text-lg font-medium">
              {['Web Design', 'Web Development', 'Digital Marketing', 'Branding', 'SEO Strategy'].map(service => (
                <li key={service}>
                  <a href="#services" className="hover:text-primary transition-colors duration-300">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-10">Newsletter</h4>
            <p className="text-muted-foreground leading-relaxed mb-8">Stay updated with the latest trends and our newest projects.</p>
            <div className="flex flex-col gap-4">
              <Input placeholder="Email Address" className="rounded-full h-12 bg-muted/30 px-6 border-0" />
              <Button className="rounded-full h-12 font-bold uppercase tracking-widest text-[10px]">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-16 border-t border-muted-foreground/10 gap-8">
          <p className="text-muted-foreground text-[11px] font-medium uppercase tracking-widest">
            © {currentYear} Kal Digitals. All rights reserved.
          </p>
          <div className="flex gap-12 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
