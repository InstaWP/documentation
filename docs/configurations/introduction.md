---
sidebar_position: 1
sidebar_label: 'Introduction'
---

# Configurations

A configuration allows you to set a list of "pre-set" config values when you are creating a new site. Every InstaWP account comes with a "default" configurations, which is accessible in the Configurations menu.

![config screen](https://ik.imagekit.io/instawp/instawp-docs-config-1_2x_bPd58PRK4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655475714295)

:::info Templates vs Configurations

Templates are a snapshot of a site - it is a full blown WordPress site with content, plugins, themes, settings etc. Configurations on the other hand, is a set of pre-configured PHP and WordPress values, for example a list of pre-installed plugins and themes. Both serve different purpose. 

:::

## General

You can select a default WP and PHP version here, this will auto select the values in the "create site" modal box. 

![gif wp php selector](https://ik.imagekit.io/instawp/instawp-docs-config-selector_M5U6-525Qh.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1655475715272)

## PHP

You can change PHP values from this screen which will be used to launch a new site. 

![php screen](https://ik.imagekit.io/instawp/instawp-docs-config-php_2x_8skVlqZ7Y.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655475714400)

## WordPress

You can pre-set WordPress related settings in this screen. 

![wordpress configuration](https://ik.imagekit.io/instawp/instawp-docs-config-wordpress_2x_tTEp5TMdo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655475857659)

### wp-config values

- **WP_DEBUG** - Enable WordPress debug mode.
- **AUTOMATIC_UPDATER_DISABLED** - Disables any kind of auto update.
- **WP_AUTO_UPDATE_CORE** - Just disables core updates.

### Multi-site Installation

Toggle this option to auto install Multi site (directory based).

### Pre install Plugins

You can supply a list of plugin slugs from wordpress.org.

### Pre install Themes

In the same way, you could pre-install theme slugs from wordpress.org. 

### Install plugin or theme from a URL.

In addition to WordPress.org slugs we also support direct URL (.zip). We will then download the archive and activate the plugin or theme for you. 


![plugin/theme slugs](https://ik.imagekit.io/instawp/instawp-docs-config-wordpress-filled_2x_oZU4aV_Mv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655475857534)

