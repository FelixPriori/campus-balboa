import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'fr',
  localePrefix: 'always'
});
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};