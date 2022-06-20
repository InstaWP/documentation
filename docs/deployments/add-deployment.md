---
sidebar_label: 'Add Deployment'
sidebar_position: 1
---

# Deployments

You can connect your existing Git repos (from any git provider such Github, Gitlab, Bitbucket etc) to InstaWP. 

### Adding a Deployment

To add a new deployment to InstaWP, use the Deployments tab. Click on Add New to connect an existing repository. 

![add new deployment](https://ik.imagekit.io/instawp/instawp-docs-deploy-add_2x_bUqaQhs3t.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655105941509)

- **Repo Type** - Public for public repo and Private for private repos. 
- **Repo URL** - Add the URL to your repo (for example - https://github.com/yourcompany/yourplugin)
- **Branch** - Mention the branch which this deployment points to (more on this later)
- **Destination Folder** - The folder where your respository content will be download to. 
- **Post Deployment Commands** - Shell commands which will be run after the git repository is cloned (for example, `composer install`, `npm install`, `npm run dev`, `wp config set WP_DEBUG true --raw`)

Click on "Add" to add the new Deployment. 

### SSH Key Pair

In case you are connecting a Private repository, you will be asked to generate a SSH Key pair. 

![private key](https://ik.imagekit.io/instawp/instawp-docs-deploy-private_2x_66jbaJqZa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655105943369)

Click on "+ Generate New" and you will get a public key, copy the key and add it to your Git repository. 


![github paste](https://ik.imagekit.io/instawp/instawp-docs-deploy-copy-github_2x_CWC1w9OeQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655105942792)

