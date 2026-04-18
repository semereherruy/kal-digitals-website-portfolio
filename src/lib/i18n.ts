import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        services: 'Services',
        about: 'About',
        process: 'Process',
        portfolio: 'Portfolio',
        testimonials: 'Testimonials',
        contact: 'Contact',
        talk: "Let's Talk",
        getStarted: 'Get Started'
      },
      hero: {
        tagline: 'EXPERIENCE BEYOND DIGITAL',
        title: 'We Build Digital Products and',
        experience: 'Experiences',
        description: 'We are a boutique creative agency specializing in design, development, and brand strategy. We partner with forward-thinking brands to create meaningful impact in the digital landscape.'
      },
      contact: {
        title: 'Let\'s create something',
        extraordinary: 'extraordinary',
        description: 'Have a project in mind? We\'d love to hear from you. Let\'s build the future together.',
        address_label: 'Studio',
        address_value: 'Addis Ababa, Ethiopia',
        email_label: 'Connect',
        phone_label: 'Phone'
      }
    }
  },
  am: {
    translation: {
      nav: {
        home: 'ቤት',
        services: 'አገልግሎቶች',
        about: 'ስለ እኛ',
        process: 'ሂደት',
        portfolio: 'ስራዎቻችን',
        testimonials: 'ምስክርነቶች',
        contact: 'ያግኙን',
        talk: 'እንወያይ',
        getStarted: 'ይጀምሩ'
      },
      hero: {
        tagline: 'ከዲጂታል ያለፈ ልምድ',
        title: 'ዲጂታል ምርቶችን እና',
        experience: 'ልምዶችን እንገነባለን',
        description: 'እኛ በዲዛይን፣ በልማት እና በብራንድ ስትራቴጂ ላይ የተካነን የፈጠራ ተቋም ነን። ትርጉም ያለው ተጽእኖ ለመፍጠር ከወደፊቱ ብራንዶች ጋር እንሰራለን።'
      },
      contact: {
        title: 'ድንቅ ነገር',
        extraordinary: 'አብረን እንፍጠር',
        description: 'ፕሮጀክት ካለዎት ከእርስዎ መስማት እንወዳለን። የወደፊቱን አብረን እንገንባ።',
        address_label: 'ስቱዲዮ',
        address_value: 'አዲስ አበባ፣ ኢትዮጵያ',
        email_label: 'ይገናኙ',
        phone_label: 'ስልክ'
      }
    }
  },
  ti: {
    translation: {
      nav: {
        home: 'ገዛ',
        services: 'ኣገልግሎታት',
        about: 'ብዛዕባና',
        process: 'መስርሕ',
        portfolio: 'ስራሕትና',
        testimonials: 'ምስክርነት',
        contact: 'ርኸቡና',
        talk: 'ንዛረብ',
        getStarted: 'ጀምሩ'
      },
      hero: {
        tagline: 'ካብ ዲጂታል ንላዕሊ',
        title: 'ዲጂታል ፍርያትን',
        experience: 'ተመኩሮታትን ንሰርሕ',
        description: 'ንሕና ኣብ ዲዛይን፣ ልምዓትን ስትራቴጂ ብራንድን ዝነጥፍ ናይ ፈጠራ ትካል ኢና። ትርጉም ዘለዎ ጽልዋ ንምፍጣር ምስቶም ናይ መጻኢ ብራንድታት ብሓባር ንሰርሕ።'
      },
      contact: {
        title: 'ድንቂ ነገር',
        extraordinary: 'ብሓባር ንፍጠር',
        description: 'ፕሮጀክት ምስ ዝህልወኩም ካባኹም ክንሰምዕ ንደሊ። መጻኢ ብሓባር ንህነጽ።',
        address_label: 'ስቱዲዮ',
        address_value: 'አዲስ አበባ፣ ኢትዮጵያ',
        email_label: 'ርኸቡና',
        phone_label: 'ቴሌፎን'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
