---
sidebar_position: 1
sidebar_label: 'Setup Product Demos'
---

# Product Demos (Sandbox)

Setting up a plugin/theme sandbox demo can be really painful, lot of folks try with WP multi-site or struggle setting up demos using in-house bash scripts, resulting in a frustrated experience for both - you and your users. Not to mention, you miss out on important usage insights too. 

Well.. InstaWP has solved this problem and we already have some well known plugin authors like extendify.com and newsletterglue.com using this feature.

To setup a product demo, you need to create a site and create a shared template after that. Lets learn a little bit about shared templates and various options available with it.

## Shared Templates

You may have [created a template](/docs/templates/create) before, if not, you may try out now (go to Sites, choose any site, select “Save as Template” button).

In the modal box, select "Shared" as template type and click save. Now if you go to Templates screen, you will get a sharable link to the template something like this:

![templates screen copy link]

```
https://app.instawp.com/launch?t=extendifydemo
```

You can now share the link to your potential customers or your teammates, effectively creating a product sandbox / demo for your plugin , theme or SaaS business.

Now, lets dive deep into the process, step by step:

### Step 1 – Create a new site.

If you not a registered user, create a quick free account [here](https://app.instawp.io/register). After your email is verified, you are now logged into your InstaWP Dashboard, which looks something like this:

![dashboard]

Click on “Add New +" to add a new site and provide a site name.

![new site dialog]

Click on “Access Now” and it should open a new tab in order to automagically take you to the “wp-admin” panel.

### Step 2 – Configure your site for the demo

At this point, think like your customer. Install and configure the site in such a way that if a customer is presented with the wp-admin panel, it will be to clear on how to use your product.

Some tips for plugin authors (others can follow the same approach):

- Install your plugin (free or pro – depending on whom you are targetting).
- Install a theme which works best with your demo.
- Add some demo content, may be create a sample page.
- Add a message on Dashboard on how to use your demo. (You can use a plugin like [this](https://wordpress.org/plugins/ultimate-dashboard/) or [this](https://wordpress.org/plugins/wp-dashboard-messages/) OR custom code inside the theme files).

In this example, I am going to configure the demo for a [wordpress quiz plugin](https://quizandsurveymaster.com), this is how it looks after I am done.

Front Page:

![qsm demo front]


Admin Page:

![qsm demo admin]

 
At this point, I am happy with how my demo looks. Lets move on to the next step.

### Step 3 – Save as Template

On the InstaWP Dashboard, click on the Save as Template for your site. 

![save as template modal]

Provide a meaningful template name, description and mark the template as "Shared". 

:::tip Instant Template

If you are on a paid plan which supports Instant Template, switch this ON. This will allow users to spinup a new instance within milliseconds as opposed to 4-5 seconds. 

:::

### Step 4 - Customize Template

You can customize the look and feel of your template landing page. For this, go to the templates screen, and click on Edit button. 

![template edit]

Full explaination of options are covered in [Template Options](/docs/templates/shared-templates/options) doc, however here are few notable ones:

- **Site Lifetime** - Demo sites will be auto deleted after this. 
- **Collect Email** - Switch this off, if you want people to just try your product without an email address.
- **Auto Login** - Automatically login to wp-admin panel, instead of showing credentials to users. 

Alright! at this point your “Product Demo” is all set and you can pass the template link to your users and post it on your website.

The template landing page should look something like this:

![template landing page]


## FAQs

### How can I get the emails of users via the shared template?

You can download a CSV and connect to Mailchimp account using [Webhooks](/docs/templates/shared-templates/webhooks). This is available only for paid members.

### What are Advance Options?

Advance options allow you to customize the look and feel of the template landing page. This is available in the Professional plan and above.

### What is an Instant Template?

You may notice that the demo instances are taking 2-4 seconds to create, Instant Template changes that. New instances will be launched, well, instantly!

### Is there a limit of how many sites can be created by shared templates? And does this limit eat up my “Active Sites” limit?

We have seperate limit for this, its called “Template Sites”, if you click on the top of your account. You will find a separate line item in the Pricing Plans for this (when you scroll down). So, this doesn’t eat up your “Active Sites” limit.


### What if I make changes to the site, can I sync changes to the template?

Yes, you can sync your changes. We have made a simple "sync" icon under each template, you can also choose to auto sync changes based on a schedule (available in paid plans).