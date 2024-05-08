import { unstable_setRequestLocale } from 'next-intl/server';
// import BpmBar from '@/components/bpmBar/bpmBar';
// import styles from './page.module.scss'
// import BpmContent from './BpmContent';
// import BpmHeader from './BpmHeader';
// import ScrollListenerWrapper from './ScrollListenerWrapper';
// import LanguageSwitcher from '@/components/LanguageSwitcher';
// import BpmDistribution from './BpmDistribution';

type MetadataProps = {
  params: { locale: string }
}

const robots = {
  index: false,
  follow: true,
  nocache: true,
  googleBot: {
    index: true,
    follow: false,
    noimageindex: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
}

export function generateMetadata({ params }: MetadataProps) {
  const locale = params.locale
  unstable_setRequestLocale(locale);
  if (locale === 'en') {
    return {
      title: 'DJ Ressources',
      description: 'Ressources related to DJing Balboa',
      robots,
    }
  }

  return {
    title: 'Ressources DJ',
    description: 'Ressources pour les DJ de balboa',
    robots,
  }
}


export default function DJ() {
  return (
    // <ScrollListenerWrapper>
    //   <div className={styles.language}>
    //     <LanguageSwitcher />
    //   </div>
    //   <div className={styles.container}>
    //     <div className={styles.header}>
    //       <BpmHeader />
    //     </div>
    //     <div className={styles.bar}>
    //       <div className={styles.sticky}>
    //         <BpmBar />
    //       </div>
    //     </div>
    //     <div className={styles.content}>
    //       <BpmContent />
    //     </div>
    //     {/* <div className={styles.distribution}>
    //       <BpmDistribution />
    //     </div> */}
    //   </div>
    // </ScrollListenerWrapper>
    <div>
      <p>En construction</p>
    </div>
  )
}