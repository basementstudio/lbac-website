export const isDev = process.env.NODE_ENV === 'development'
export const isProd = process.env.NODE_ENV === 'production'

export const isClient = typeof window !== 'undefined'
export const isServer = !isClient

export const siteURL = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (isDev ? 'http://localhost:3000' : 'https://lbac-website.vercel.app/') // TODO: use your actual production url as default
)
export const siteOrigin = siteURL.origin

// this is not used anywhere — just for our (basement.) projects.
// you can delete it if not needed.
export const basementLog = `

   ██╗
   ██║
   ██████╗
   ██╔══██╗  ██╗
   ██████╔╝  ██╝
   ╚═════╝   
                                                                                
   From the basement. https://basement.studio
`

// todo update this data
export const defaultMeta = {
  title: 'Official Page for LBAC | Community Driven and Controlled',
  description: `We are a global community built on a mutually shared vision and passion for the art of this project.`,
  ogImage: `${siteOrigin}/og.jpeg`,
  twitter: {
    handle: '@Lilbabyapeclub',
    site: '@Lilbabyapeclub'
  }
}

// todo update this data
export const gaTrackingId = '<your-tracking-id>'
