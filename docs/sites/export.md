---
sidebar_position: 5
sidebar_label: 'Export / Migrate'
---

# Export or Migrate a Site

InstaWP sites can be exported to use in your local system or to a hosting provider. 

## Export to LocalWP

If you are using LocalWP, exporting a site is as simple as a click. Open the Site dropdown and click on Export -> LocalWP.

![export to localwp](https://ik.imagekit.io/instawp/instawp-docs-localwp-export-menu_2x_647lL7YhFT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654693675789)

You will recieve an email after few minutes (depending on the size of your website) with a link to download the zip file. 

![localwp email](https://ik.imagekit.io/instawp/instawp-docs-mail-localwp_2x_Sx8sg8L0v.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654693675880)

You can then drag and drop this zip to LocalWP interface, something like this:

![localwp import](https://ik.imagekit.io/instawp/instawp-docs-localwp-import_2x_qFdzFV5yp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654693675955)

## Migrate to any Hosting Provider

To migrate to any hosting provider of your choice, open the site dropdown and click Migrate. 

![Migrate Option](https://ik.imagekit.io/instawp/instawp-docs-migrate-menu_2x_KRUJIAF-E.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654693938347)

This will open up a list of hosting providers you can migrate to. Select a hosting provider and enter details. 

![hosting provider list](https://ik.imagekit.io/instawp/instawp-docs-hosting-providers_2x_-r4MuNBdn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654693938547)

Make sure your target website is already created with a default WordPress installation, then enter the details of your target website. For example:

![sftp details](https://ik.imagekit.io/instawp/instawp-docs-sftp-details_2x_6nP6MMA6rY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654693938845)

- **Site URL** - URL of the website you have already created on the target host. 
- **SFTP Host** - Domain or IP address of the Server. 
- **SFTP Username** - Username of the target SFTP. 
- **SFTP Password** - Password of the target SFTP. 

Then click on Migrate and wait for the process to complete. 

:::warning Be careful

Target website on your hosting provider (as per the provided details), will be overwritten by the InstaWP site.

:::