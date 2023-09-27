import styles from './page.module.scss'
import LanguageSwitcher from '@/components/languageSwitcher/languageSwitcher';
import LandingHero from './LandingHero';
import LandingText from './LandingText';
import MissionsSection from './MissionsSection';
import AboutUsSection from './AboutUsSection';
import ToBeAnnouncedSection from './ToBeAnnouncedSection';
import Footer from './Footer';

export default function Home() {
  return (
    <div className={styles.home}>
      <LandingHero>
        <div className={styles.languageSwitcher}>
          <LanguageSwitcher />
        </div>
        <LandingText />
      </LandingHero>
      <MissionsSection />
      <AboutUsSection />
      <ToBeAnnouncedSection />
      <Footer />
    </div>
  )
}