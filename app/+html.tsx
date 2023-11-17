import type { PropsWithChildren } from 'react'

/**
 * HTML ROOT
 * -
 */
export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <title>Le Shef | Cook Multiple Frozen Meals At Once!</title>

        <link rel="canonical" href="https://le-shef.web.app" />
        <link rel="image_src" href="https://le-shef.web.app/og-image.jpg" />
        <meta name="title" content="Le Shef | Cook Multiple Frozen Meals At Once!" />
        <meta
          name="description"
          content="Le Shef is an application that allows you to cook multiple frozen meals at the same time in the oven. Whether it's Egg Rolls & Pizza or French Fries and Quiche, you can do it all with Le Shef."
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="le shef, chef, cook, frozen, meals, timer, kitchen" />
        <meta name="author" content="The Dev Environment, Inc." />
        <meta name="publisher" content="The Dev Environment, Inc." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://le-shef.web.app" />
        <meta property="og:title" content="Le Shef | Cook Multiple Frozen Meals At Once!" />
        <meta
          property="og:description"
          content="Le Shef is an application that allows you to cook multiple frozen meals at the same time in the oven. Whether it's Egg Rolls & Pizza or French Fries and Quiche, you can do it all with Le Shef."
        />
        <meta property="og:image" content="https://le-shef.web.app/og-image.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://le-shef.web.app" />
        <meta property="twitter:title" content="Le Shef | Cook Multiple Frozen Meals At Once!" />
        <meta
          property="twitter:description"
          content="Le Shef is an application that allows you to cook multiple frozen meals at the same time in the oven. Whether it's Egg Rolls & Pizza or French Fries and Quiche, you can do it all with Le Shef."
        />
        <meta property="twitter:image" content="https://le-shef.web.app/og-image.jpg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
