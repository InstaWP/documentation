---
sidebar_label: 'Map Domain'
---

# Mapping a Domain

By default a site created on InstaWP has a `*.instawp.xyz` subdomain. In paid plans, its possible to map a custom domain to any site. This is particularly useful if you want to showcase a site to a client. 

To map a domain, open the Map Domain option from the site dropdown. 

[[screenshot-map-domain-menu]]

**Entering Domain**

Before you use this feature, you should already have access to DNS settings of a domain you own or manage. In this example, we are going to point `yourawesomeclient.com` to an InstaWP site. 

Enter the domain into the modal box as shown:

[[screenshot-enter-domain]]

**Map www as well**

Tick this box to map the www version of the site too. (You will need to create two A records for this work).

**Redirect www to Root**

Tick this box if you want to auto redirect the www version to the main domain. 

**Create an A record**

Copy the IP address and create an `A` record in your domain provider's control panel. In this example, we are using namecheap. 

[[screenshot-namecheap]]

:::info Background processing

InstaWP automatically verifies the domain's A record(s) and issues a free SSL certificate. It may take from few minutes to few hours, depending on the DNS propogation time. 

:::

