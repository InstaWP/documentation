---
sidebar_position: 3
sidebar_label: 'Webhooks'
---

# Webhooks

You can connect any platform which supports webhook calls with InstaWP. 

## Make + Google Sheet

Lets take an example of Make + InstaWP. To get started, create a free Make.com account and obtain a webhook. 

In this example, we are connecting Make to Google Sheet, so that every time a new template site is spawned, a new row with details is added to Google Sheet.

### Configure Make

**Create a new Scenario** - Add Webhook as the first step.

![make 1](https://ik.imagekit.io/instawp/instawp-make-1_lTaqkFREt.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655714634962)

**Provide a name to your Webhook** 

![make url](https://ik.imagekit.io/instawp/instawp-make-2_lkKK6R-7K.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655714634960)

**Copy URL**

![copy url](https://ik.imagekit.io/instawp/instawp-make-3-copy-url_FNJVPyL0J.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655714634962)


### Configure InstaWP

Now open the template sharing options, and paste the webhook URL into the webhook field. 

![webhook field](https://ik.imagekit.io/instawp/instawp-template-sharing-webhook_Y4pyuGGut.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655714877850)

Test the webhook URL by creating a new site and verifying it on the Make's interface. 

![make test](https://ik.imagekit.io/instawp/instawp-make-test_9UznQ1j-q.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655715139062)

### Google Sheet

Next, create an empty Google Sheet with following headers:

![google sheet](https://ik.imagekit.io/instawp/instawp-google-sheet_2x_i5F3J3AEm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655714928171)

Go to Make's dashboard and connect webhook module with a new Google Sheet module, choose the Action as "Add Row".

![google sheet connection](https://ik.imagekit.io/instawp/instawp-make-google-sheet-2_DkDqYZXzw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655714635859)

Now, map the Google sheet headers with the available headers from InstaWP.

![google sheet headers](https://ik.imagekit.io/instawp/instawp-make-google-sheet-3_TGBUvqcU-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655714635982)

### Testing

Try to create a new site from your template shared link. 

![new site](https://ik.imagekit.io/instawp/instawp-make-templat_0BlrrLlht.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655714636555)

You will see the email address appearing in your Google Sheet. 

![google sheet](https://ik.imagekit.io/instawp/instawp-make-google-sheet-preview_1ZkK1pEjK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655714635972)

