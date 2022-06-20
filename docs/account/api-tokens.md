---
sidebar_position: 2
---

# API Tokens


API Tokens allow you to access the InstaWP API via Postman, Github Actions or using any programming language. 

## Creating A Token

To create a token select the permission to the token and click on "Create". In the following screenshot, we are creating an API key which has permission to create a new site. 

![api token create]


## Using API Token

To use the token you can either copy paste in your Github Repo when using [Github Actions](/docs/deployments/github-actions) or use the following command. 

```
curl 'https://app.instawp.io/api/v1/site' -X POST -H 'Authentication: Bearer <token>' \
--data {
	"wp_version": "6.0"
	"php_version": "7.4"
}
```

Full API schema will soon be available. 

