import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sun, Moon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { useTheme } from "./ThemeProvider";

const NAV_LINKS = [
  { nameKey: "nav.home", href: "#home" },
  { nameKey: "nav.services", href: "#services" },
  { nameKey: "nav.about", href: "#about" },
  { nameKey: "nav.process", href: "#process" },
  { nameKey: "nav.portfolio", href: "#portfolio" },
  { nameKey: "nav.testimonials", href: "#testimonials" },
  { nameKey: "nav.contact", href: "#contact" },
];

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'am', label: 'አማ' },
  { code: 'ti', label: 'ትግር' },
];

export function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      for (const sectionId of sections.reverse()) {
        const element = document.getElementById(sectionId);
        if (element && window.scrollY >= element.offsetTop - 120) {
          setActiveHash(`#${sectionId}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-500",
          isScrolled 
            ? "bg-background/80 backdrop-blur-xl border-b py-3" 
            : "bg-transparent py-8"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold tracking-tighter transition-transform duration-300 group-hover:skew-x-[-10deg]">
              KAL<span className="text-muted-foreground font-light">DIGITALS</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            <div className="flex items-center space-x-8 mr-8 border-r border-muted-foreground/10 pr-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.nameKey}
                  href={link.href}
                  className={cn(
                    "text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-primary",
                    activeHash === link.href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {t(link.nameKey)}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center bg-muted/30 rounded-full p-1 border">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => toggleLanguage(lang.code)}
                    className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold transition-all",
                      i18n.language.startsWith(lang.code) 
                        ? "bg-primary text-primary-foreground" 
                        : "hover:bg-muted"
                    )}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <Button size="sm" className="rounded-full px-6 h-10 font-bold text-[11px] uppercase tracking-widest">
                {t('nav.talk')} <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>
            </div>
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="lg:hidden flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-[70] p-2 hover:bg-muted rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Modern Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] bg-background/95 backdrop-blur-2xl lg:hidden flex flex-col pt-32 pb-12 px-8 overflow-y-auto"
          >
            <div className="flex flex-col flex-1 justify-center space-y-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  key={link.nameKey}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-5xl md:text-7xl font-bold tracking-tighter hover:text-primary transition-colors inline-block"
                >
                  {t(link.nameKey)}.
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 pt-8 border-t border-muted flex flex-col space-y-8"
            >
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mr-4">Language</span>
                <div className="flex gap-2">
                  {LANGUAGES.map((lang) => (
                    <Button
                      key={lang.code}
                      variant={i18n.language.startsWith(lang.code) ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleLanguage(lang.code)}
                      className="rounded-full min-w-[60px]"
                    >
                      {lang.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 rounded-full h-14 font-bold text-base">
                  {t('nav.talk')}
                </Button>
                <div className="flex space-x-4">
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
