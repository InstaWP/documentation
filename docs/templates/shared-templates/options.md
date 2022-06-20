---
sidebar_position: 1
sidebar_label: 'Template Options'
---

# Template Options

A shared template can be customized using many in-built template options. You can access these options from, [Shared Templates](https://app.instawp.io/templates?type=shared) page.

![template options](https://ik.imagekit.io/instawp/instawp-docs-template-options-1_iZsnlKftOC.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1655468458258)

Lets talk about all the options one by one. 

### Enable Sharing

As the name suggests, you can use this option to enable or disable sharing of the template. If you enable the sharing toggle, you get a link to share the template with your users. 

![enable sharing](https://ik.imagekit.io/instawp/instawp-docs-enable-sharing_2x_7N1j8AEIU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655468457626)

:::tip Embed Link

You can also whitelabel the launcher by embedding the iframe link into your webpage

:::

## Advance Options

### Site Lifetime

You can set the lifetime of a "template site" after which it will auto delete the site. This value depends on the usecase, it can vary from 1 hour to maximum value of your plan limit. 

### Disallow File Modifications

Enabling this will lock the site editing features in the template site. Your users will not be able to upload a plugin or theme and cannot access the theme & plugin editors. This is particularly useful when you don't want the user to upload or download any sensitive information, say, when building a demo for your pro plugin/theme. 

## Landing Page Customization

You can customize landing flow look and feel using this option. 

### Collect Email

If you don't people to enter their email id, you can just disable this option. In case you wish for the users to provide email address, you can configure two more options. 

- **Email Required** - Users will not be able to proceed without filling an email address, if this option is checked. 
- **Send Credentials to Email** - If an email address is provided, we will send an email to the user. You can however, [customize the email](/docs/templates/shared-templates/options#branding). 

### Hide Privacy Checkbox

You can hide privacy checkbox for a user, effectively making it mandatory for users when they are using your shared template link.

## Redirect to wp-admin

By default, we show the username / password and a link to auto login to WP Admin panel to users, but you can change this behaviour and auto-redirect to wp-admin panel.

![default behaviour](https://ik.imagekit.io/instawp/instawp-docs-cred-template_2x_l_Gu4ZhDR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655468457632)

### Auto Login to wp-admin

This option is preciously what we discussed in the above point. Enabling it will not show the credentials to users, instead they will be re-directed to wp-admin Dashboard automatically. But, if you want them to see a specific page after redirection, keep reading.

### Redirect URL

Provide a relative URL in the text box where you want the users to automatically redirected to once their site is ready. 

![redirect link](https://ik.imagekit.io/instawp/instawp-docs-redirect-link_2x_EddamMD5W.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655468457631)

Examples: 

`/wp-admin/posts.php?addnew`

`/some-front-page`

## Webhook

Every time a user creates a new template site, we call this given webhook. You can connect it to Zapier or any other CRM of your choice to create an effective lead generator. 

More on this in our [Shared Templates > Webhooks](/docs/templates/shared-templates/webhooks) doc. 

## Branding

- **Logo** - You can provide a logo on the template landing page. 
- **Email** - Customize the email we send to you users when they first create a new template site.
- **Privacy Policy** - You can customize the default policy text on the landing page. 





