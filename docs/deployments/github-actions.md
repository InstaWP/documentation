---
sidebar_position: 4
sidebar_label: 'Github Actions'
---

# Github Actions

We support Github actions out of the box. You can auto create new instances (and destroy them, optionally) when creating a new PR on your Github repo. 

## Create Site

### Step 1 - Setup Template

To get started, create a site and save as template. You can find more on this in our [Create Template](/docs/templates/create) doc. 

### Step 2 - Add and Connect Deployment

Next, [add a deployment](/docs/deployments/add-deployment) and [connect it to the template](/docs/deployments/connect-to-template). 

### Step 3 - Copy the Github Action yml

Now, copy the Github Action yml file, you can get it from the Template screen, like this:

![github action yml file](https://ik.imagekit.io/instawp/instawp-templates-connect_2x_JSfUwhRsvi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655717595353)

Paste this yml file contents to your Github workflow folder `.github/workflows/instawp.yml`

Contents of this yml file will look similar to this:

```
name: InstaWP WordPress Testing

on:
  pull_request:
    types: [opened]

jobs:
  create-wp-for-testing:
    runs-on: ubuntu-latest
    steps:
      - uses: instawp/wordpress-testing-automation@main
        with:
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
          INSTAWP_TOKEN: ${{secrets.INSTAWP_TOKEN}}
          INSTAWP_TEMPLATE_SLUG: gutenawithkit
          REPO_ID: 22
          INSTAWP_ACTION: create-site-template
```


Let us look at the yml file contents in details:

1. `pull_request` - The workflow will trigger based on Pull Requests. 
2. `types: [opened]` - In this case, it will trigger only when a new PR is opened. 
3. `uses: instawp/wordpress-testing-automation@main` - Our [Github Action](https://github.com/marketplace/actions/instawp-wordpress-github-action) is live on marketplace for you to use in the workflows. 
4. `GITHUB_TOKEN` - This is automatically populated by Github during workflow runs. 
5. `INSTAWP_TOKEN` - You will need to copy paste an [API Token](/docs/account/api-tokens) to your Github enviornment variable. 

![paste api token](https://ik.imagekit.io/instawp/instawp-paste-token_2x_g1TGl2SO5c.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655717604868)

6. `INSTAWP_TEMPLATE_SLUG` - Slug of your InstaWP template.
6. `REPO_ID` - This is the ID for your InstaWP connected repository.
7. `INSTAWP_ACTION` - As the name suggests, you can customize which action you want to trigger. Currently, we support two actions - `create-site-template` and `destroy-site`.

Once you have saved and committed this file to your Github repository, every time a new PR is created, a new site will be deployed with your PR contents and the github issue will be commented with details of the new site.

![github comment](https://ik.imagekit.io/instawp/instawp-pr_2x_aIUU81SHW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655717972348)

## Destroy Site

Once the PR is closed, you can destroy the site as it may longer be required. Modify the yml file and append the following contents:

```
name: InstaWP WordPress Testing

on:
  pull_request:
    types: [opened, closed, merged]

jobs:
	create-wp-for-testing:
		[...]

	destroy-wp-after-testing:
	    runs-on: ubuntu-latest
	    steps:
	      - uses: instawp/wordpress-testing-automation@main
	        if: github.event.action == 'closed' || github.event.action == 'merged'
	        id: detroy-wp
	        with:
	          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
	          INSTAWP_TOKEN: ${{secrets.INSTAWP_TOKEN}}
	          INSTAWP_DOMAIN: ${{secrets.INSTAWP_DOMAIN}}
	          INSTAWP_TEMPLATE_SLUG: gutenawithkit
	          REPO_ID: 22
	          INSTAWP_ACTION: destroy-site
```

You may notice that all details except `INSTAWP_ACTION`, `types: [opened, closed, merged]` and there is an extra `if` statement which plays a vital role

```
if: github.event.action == 'closed' || github.event.action == 'merged'
```

