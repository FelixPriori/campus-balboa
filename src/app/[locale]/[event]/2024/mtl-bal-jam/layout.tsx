import { Caveat_Brush } from 'next/font/google';

const caveatBrush = Caveat_Brush({ 
    subsets: ['latin'], 
    weight: ['400'],
    style: ['normal']
})

export default function MtlBalJamLayout({
  children
}: {
  children: React.ReactNode,
}) {
  return <div className={caveatBrush.className}>{children}</div>
}
