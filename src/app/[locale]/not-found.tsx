import { useTranslations } from 'next-intl';
import { Footer } from './sections';
import Main from '@/layout/main'
import CampusLogo from '@/assets/svgs/campus-logo';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import BackButton from './components/BackButton';

export default function NotFoundPage() {
    const t = useTranslations('NotFoundPage');

    return (
        <div className='not-found'>
            <nav className="app-nav">
                <CampusLogo />
                <LanguageSwitcher customStyling='noOutline' />
            </nav>
            <Main>
                <div className="content">
                    <h1>{t('title')}</h1>
                    <BackButton>{t('return')}</BackButton>
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