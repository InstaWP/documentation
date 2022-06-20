---
sidebar_label: 'Map Domain'
---

# Mapping a Domain

By default a site created on InstaWP has a `*.instawp.xyz` subdomain. In paid plans, its possible to map a custom domain to any site. This is particularly useful if you want to showcase a site to a client. 

To map a domain, open the Map Domain option from the site dropdown. 

![map-domain-menu](https://ik.imagekit.io/instawp/instawp-docs-map-domain-link_2x_ZH8Ld82ck.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655518780969)

**Entering Domain**

Before using this feature, you should already have access to DNS settings of a domain you own or manage. In this example, we are going to point `yourawesomeclient.com` to an InstaWP site. 

Enter the domain into the modal box as shown:

![enter-domain](https://ik.imagekit.io/instawp/instawp-docs-map-domain_2x_eK5YPrKX3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655518780936)

1. Enter the domain name into the box
2. Copy the IP Address


**Map www as well**

Tick this box to map the www version of the site too. (You will need to create two A records for this work).

**Redirect www to Root**

Tick this box if you want to auto redirect the www version to the main domain. 

**Create an A record**

Copy the IP address and create an `A` record in your domain provider's control panel. In this example, we are using namecheap. 

![namecheap](https://ik.imagekit.io/instawp/instawp-docs-namecheap_2x_1FsYGmbSx.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655518781070)

:::info Background processing

InstaWP automatically verifies the domain's A record(s) and issues a free SSL certificate. It may take from few minutes to few hours, depending on the DNS propogation time. 

:::

