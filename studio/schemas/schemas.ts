import React from 'react'
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import { saneShopify } from '@sane-shopify/sanity-plugin'

// We import object and document schemas
import blockContent from './blockContent'
import blockText from './blockText'
import siteSettings from './siteSettings'

// Content Types
import product from './types/product'
import page from './types/page'
import collection from './types/collection'
import siteGlobal from './types/siteGlobal'
import menus from './types/menus'
import redirect from './types/redirect'
import post from './types/post'
import variant from './types/variant'
import doc from './types/doc'
import subscription from './types/subscription'

// Modules
import externalLink from './modules/externalLink'
import internalLink from './modules/internalLink'
import metaCard from './modules/metaCard'
import social from './modules/social'
import nestedPages from './modules/nestedPages'
import pageItem from './modules/pageItem'
import pageModule from './modules/pageModule'
import imageModule from './modules/imageModule'
import productGrid from './modules/productGrid'
import standardText from './modules/standardText'
import moduleContent from './modules/moduleContent'

// Product Modules
import productModule from './modules/productModule'
import shopifyProductModule from './modules/shopifyProductModule'
import shopifyVariantModule from './modules/shopifyVariantModule'
import variantModule from './modules/variantModule'
import defaultVariant from './modules/defaultVariant'


// GraphQL Tab Modules
import globalContent from './tabs/globalContent'
import pageContent from './tabs/pageContent'
import variantContent from './tabs/variantContent'
import productContent from './tabs/productContent'


const saneShopifyConfig = {

}

const saneShopifyTypes = saneShopify(saneShopifyConfig)

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    ...saneShopifyTypes,
    // The following are document types which will appear
    // in the studio.
    page,
    post,
    redirect,
    menus,
    siteSettings,
    siteGlobal,
    //variant,
    subscription, // This can be disabled/hidden if not using recharge
    // Modules
    externalLink,
    internalLink,
    productGrid,
    pageModule,
    nestedPages,
    pageItem,
    social,
    standardText,
    imageModule,
    moduleContent,
    metaCard,
    blockContent,
    blockText,
    // Product Specific Modules
    // productModule,
    // shopifyProductModule,
    // shopifyVariantModule,
    // variantModule,
    // defaultVariant,
    // Grapqhl Tab sthings
    globalContent,
    pageContent
    // productContent,
    // variantContent
  ])
})
