import { useRouter } from 'next/dist/client/router'
import NextHead from 'next/head'
import { NextSeo, NextSeoProps } from 'next-seo'
import * as React from 'react'

import { defaultMeta, siteOrigin } from '~/lib/constants'

type Meta = {
  title?: string
  description?: string
  ogImage?: string
  noIndex?: boolean
}

export type HeadProps = Meta & { rawNextSeoProps?: NextSeoProps }

export const Head = (props: HeadProps) => {
  const router = useRouter()

  const nextSeoProps: NextSeoProps = React.useMemo(() => {
    return {
      title: props.title ?? defaultMeta.title,
      description: props.description ?? defaultMeta.description,
      canonical: `${siteOrigin}${router.pathname}`,
      openGraph: {
        images: [
          {
            url: props.ogImage ?? defaultMeta.ogImage,
            alt: props.title ?? defaultMeta.title,
            width: 1200,
            height: 630
          }
        ]
      },
      twitter: {
        cardType: 'summary_large_image',
        handle: defaultMeta.twitter.handle,
        site: defaultMeta.twitter.site
      },
      noindex: props.noIndex,
      ...props.rawNextSeoProps
    }
  }, [props, router.pathname])

  return (
    <>
      <NextSeo {...nextSeoProps} />
      <NextHead>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href={'/favicon.png'} />
        <link rel="mask-icon" href="/favicon.svg" color="#000" />

        <link
          href="/fonts/tusker/TuskerGrotesk-7600Semibold.woff2"
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          href="/fonts/tusker/TuskerGrotesk-7600Semibold.woff"
          rel="preload"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          href="/fonts/tusker/TuskerGrotesk-6700Bold.woff2"
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          href="/fonts/tusker/TuskerGrotesk-6700Bold.woff"
          rel="preload"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          href="/fonts/helvetica-now/HelveticaNowDisplay-Bold.woff2"
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          href="/fonts/helvetica-now/HelveticaNowDisplay-Bold.woff"
          rel="preload"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          href="/fonts/helvetica-now/HelveticaNowDisplay-Medium.woff2"
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          href="/fonts/helvetica-now/HelveticaNowDisplay-Medium.woff"
          rel="preload"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </NextHead>
    </>
  )
}
