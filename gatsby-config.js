require('dotenv').config({ path: `.env` });
const flattenMenu = require('@gatsbystorefront/gatsby-theme-storefront-shopify/src/utils/flattenMenu');

module.exports = {
  plugins: [
    {
      resolve: '@gatsbystorefront/gatsby-theme-storefront-shopify',
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        basePath: '/',
        shopifyLite: false,
        enableWebp: true,
        imageQuality: '95',
        gatsbyImageProps: {
          loading: 'eager',
          fadeIn: false,
          durationFadeIn: 500,
        },
        manifest: {
          name: 'Final',
          short_name: 'Final',
          start_url: '/',
          background_color: '#fff',
          theme_color: '#333',
          display: 'standalone',
          icon: 'images/logo.svg',
          icon_options: {
            purpose: 'any maskable',
          },
          cache_busting_mode: 'none',
        },
      },
    },
  ],
  siteMetadata: {
    siteUrl: 'https://finalco.netlify.app',
    gatsbyStorefrontConfig: {
      storeName: 'Final',
      storeDescription: 'Final description',
      email: 'hello@final.co',
      logoUrl: '/images/logo.svg',
      company: 'The Final Co. LLC',
      location: 'Seattle, WA',
      address: '3518 Fremont Avenue N #353',
      phone: '+1 (800) 123-1234',
      workingDays: 'Mon - Fri',
      workingHours: '8AM - 6PM',
      socialNetworks: [
        'https://facebook.com',
        'https://instagram.com',
        'https://pinterest.com',
        'https://twitter.com',
        'https://youtube.com',
      ],
      // Payments icons are temporarily disabled, due to large package size and negative impact on Lighthouse 6 performance.
      // Need to find an alternative package to react-payment-icons-inline.
      payments: ['visa', 'mastercard', 'amex', 'discover', 'shopify', 'paypal'],
      // For available social share buttons see: https://github.com/nygardk/react-share
      shareButtons: [
        'Facebook',
        'Pinterest',
        'Twitter',
      ],
      googleAnalyticsId: 'UA-117529759-2',
      //
      // carousel, collection, product
      //
      mainPage: [
        {
          type: 'carousel',
          children: [
            {
              name: 'FinalStraw',
              type: 'collection',
              handle: 'finalstraw',
              textColor: 'black',
              textBgColor: 'white',
            },
            {
              name: 'Accessories',
              type: 'collection',
              handle: 'accessories',
              textColor: 'white',
              textBgColor: 'primary',
            },
            {
              name: 'Secret Sucker',
              type: 'product',
              handle: 'secret-sucker',
              textColor: 'white',
              textBgColor: 'primary',
            },
          ],
        },
        {
          name: 'Wholesale',
          type: 'collection',
          handle: 'wholesale',
          textColor: 'white',
          textBgColor: 'primary',
        },
        {
          name: 'Featured',
          type: 'collection',
          handle: 'featured-finalstraw',
          textColor: 'white',
          textBgColor: 'primary',
        },
        {
          name: 'Final Cutlery',
          type: 'product',
          handle: 'finalcutlery',
          textColor: 'black',
          textBgColor: 'white',
        },
        {
          name: 'Biggie Straw',
          type: 'product',
          handle: 'biggiestraw',
          textColor: 'black',
          textBgColor: 'white',
        },
        {
          name: 'Carabiner',
          type: 'product',
          handle: 'carabiner',
          textColor: 'black',
          textBgColor: 'white',
        },
        {
          name: 'Stickers',
          type: 'product',
          handle: 'stickers',
          textColor: 'black',
          textBgColor: 'white',
        },
        {
          name: 'Final Straw',
          type: 'product',
          handle: 'finalstraw',
          textColor: 'white',
          textBgColor: 'primary',
        },
      ],
      // Menu types: "header", "collection", "product", "link"
      menu: flattenMenu({
        name: 'Menu',
        type: 'top',
        children: [
          {
            name: "Shop",
            type: 'header',
            handle: '',
            link: '',
            children: [
              {
                name: 'Final Straw',
                type: 'collection',
                handle: 'finalstraw',
              },
              {
                name: 'Biggie Straw',
                type: 'product',
                handle: 'biggiestraw',
              },
              {
                name: 'Cutlery',
                type: 'product',
                handle: 'finalcutlery',
              },
            ],
          },
          {
            name: "About Us",
            type: 'header',
            children: [
              {
                name: 'Our Mission',
                type: 'page',
                handle: 'our-mission',
              },
              {
                name: 'Our Team',
                type: 'page',
                handle: 'our-team',
              },
              {
                name: 'Blog',
                type: 'blog',
                handle: 'blog',
              },
            ],
          },
          { name: 'Blog', type: 'blog', handle: 'news' },
        ],
      }),
      footerLinks: [
        {
          name: 'About us',
          link: '/pages/about-us',
        },
        {
          name: 'Terms of Service',
          link: '/policy/termsOfService',
        },
        {
          name: 'Privacy policy',
          link: '/policy/privacyPolicy',
        },
        {
          name: 'Refunds',
          link: '/policy/refundPolicy',
        },
        {
          name: 'External',
          link: 'https://amazon.com',
        },
      ],
      locales: 'en-US',
      currency: 'USD',
      productsPerCollectionPage: '9',
      articlesPerBlogPage: '6',
    },
  },
};
