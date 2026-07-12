interface PageSeoOptions {
  title: string
  description: string
  ogBadge?: string
}

export function usePageSeo(opts: PageSeoOptions) {
  useSeoMeta({
    title: opts.title,
    description: opts.description,
    ogLocale: 'pl_PL'
  })
  defineOgImage(
    'Default',
    { title: opts.title, description: opts.description, badge: opts.ogBadge },
    { width: 1200, height: 630 }
  )
}
