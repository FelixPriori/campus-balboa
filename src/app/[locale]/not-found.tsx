import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Footer } from './sections';
import Main from '@/layout/main'
import CampusLogo from '@/assets/svgs/campus-logo';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import BackButton from './components/BackButton';
import { Link } from '../../navigation';

type Props = {
    params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: Props) {
    unstable_setRequestLocale(locale);

    if (locale === 'fr') {
        return {
            title: '404 | Page non trouvée',
            description: 'Désolé, cette page n\'existe pas',
        }
    } else {
        return {
            title: '404 | Page not found',
            description: 'Sorry, this page does not exist',
        }
    }
}

export default function NotFoundPage() {
    const t = useTranslations('NotFoundPage');

    return (
        <div className='not-found'>
            <nav className="app-nav">
                <Link href="/">
                    <CampusLogo />
                </Link>
                <LanguageSwitcher customStyling='noOutline' />
            </nav>
            <Main>
                <div className="content">
                    <Image
                        className='not-found-image'
                        src="/404.png" alt="404" width={100} height={100}
                    />
                    <h1>{t('title')}</h1>
                    <BackButton>{t('return')}</BackButton>
                    <Link href="/">
                        {t('home')}
                    </Link>
                </div>
            </Main>
            <Footer
                contact={t('footer.contact')}
                contactLink={{
                    href: t('footer.contactLink.href'),
                    text: t('footer.contactLink.text')
                }}
                copyright={t('footer.copyright')}
                socialMediasCollection={{
                    items: [
                        {
                            sys: {
                                id: t('footer.socialMedia.facebook.id'),
                            },
                            accessibilityDescription: t('footer.socialMedia.facebook.accessibilityDescription'),
                            href: t('footer.socialMedia.facebook.href'),
                            logo: {
                                url: t('footer.socialMedia.facebook.logo.url'),
                                title: t('footer.socialMedia.facebook.logo.title'),
                            }
                        },
                        {
                            sys: {
                                id: t('footer.socialMedia.instagram.id'),
                            },
                            accessibilityDescription: t('footer.socialMedia.instagram.accessibilityDescription'),
                            href: t('footer.socialMedia.instagram.href'),
                            logo: {
                                url: t('footer.socialMedia.instagram.logo.url'),
                                title: t('footer.socialMedia.instagram.logo.title'),
                            }
                        },
                    ]
                }}
            />
        </div>
    )
}