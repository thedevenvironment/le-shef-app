// import { ScrollViewStyleReset } from 'expo-router/html'
import type { PropsWithChildren } from 'react'

// This file is web-only and used to configure the root HTML for every
// web page during static rendering.
// The contents of this function only run in Node.js environments and
// do not have access to the DOM or browser APIs.
export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <title>The Dev Environment | Web Development Experts</title>

        <link rel="canonical" href="https://thedevenvironment.com" />
        <link rel="image_src" href="https://thedevenvironment.com/og-image.jpg" />
        <meta name="title" content="The Dev Environment | Web Development Experts" />
        <meta
          name="description"
          content="The Dev Environment, Inc. unifies the workmanship and creativity of software development and consulting with an innate passion for educating the next generation of engineers."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="the dev environment, thedevenvironment, developer, web, web developer, react, react-native, react native, youtube, tutorials, consulting, consultants, programming challenges, coding interview"
        />
        <meta name="author" content="The Dev Environment, Inc." />
        <meta name="publisher" content="The Dev Environment, Inc." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thedevenvironment.com" />
        <meta property="og:title" content="The Dev Environment | Web Development Experts" />
        <meta
          property="og:description"
          content="The Dev Environment, Inc. unifies the workmanship and creativity of software development and consulting with an innate passion for educating the next generation of engineers."
        />
        <meta property="og:image" content="https://thedevenvironment.com/og-image.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thedevenvironment.com" />
        <meta property="twitter:title" content="The Dev Environment | Web Development Experts" />
        <meta
          property="twitter:description"
          content="The Dev Environment, Inc. unifies the workmanship and creativity of software development and consulting with an innate passion for educating the next generation of engineers."
        />
        <meta property="twitter:image" content="https://thedevenvironment.com/og-image.jpg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
