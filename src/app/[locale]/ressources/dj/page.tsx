import BpmBar from '@/components/bpmBar/bpmBar';
import styles from './page.module.scss'
import BpmContent from './BpmContent';
import BpmHeader from './BpmHeader';
import ScrollListenerWrapper from './ScrollListenerWrapper';
import LanguageSwitcher from '@/components/languageSwitcher/languageSwitcher';
import BpmDistribution from './BpmDistribution';

type MetadataProps = {
  params: {locale: string}
}

export function generateMetadata({ params }: MetadataProps) {
  const locale = params.locale

  if (locale === 'en') {
    return {
      title: 'DJ Ressources',
      description: 'Ressources related to DJing Balboa',
    }
  }

  return {
    title: 'Ressources DJ',
    description: 'Ressources pour les DJ de balboa',
  }
}


export default function DJ() {
  return (
    <ScrollListenerWrapper>
      <div className={styles.language}>
        <LanguageSwitcher />
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <BpmHeader />
        </div>
        <div className={styles.bar}>
          <div className={styles.sticky}>
            <BpmBar />
          </div>
        </div>
        <div className={styles.content}>
          <BpmContent />
        </div>
        {/* <div className={styles.distribution}>
          <BpmDistribution />
        </div> */}
      </div>
    </ScrollListenerWrapper>
  )
}