---
sidebar_position: 4
sidebar_label: 'SSH & SFTP'
---

# SSH & SFTP

It is possible to enable SSH or SFTP access for a site. Before proceeding add a SSH public key to your profile by navigating to your profile. 

:::info Pro Feature

Accessing FTP & SSH is a pro feature.

:::

## Adding a key

Copy your ssh key from `~/.ssh/id_rsa.pub` file from your local machine. 

:::tip SSH Key 

If you don't have a ssh key, you can generate one. To learn more about it, check [this guide](https://docs.oracle.com/en/cloud/cloud-at-customer/occ-get-started/generate-ssh-key-pair.html) from Oracle. 

:::

![ssh key copy](https://ik.imagekit.io/instawp/instawp-docs-copy-ssh_2x_KbqjDIW9C.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654773820666)

Navigate to your [profile](https://app.instawp.io/user/profile) and paste this key.

![ssh key paste](https://ik.imagekit.io/instawp/instawp-docs-ssh-profile_2x_uofgz08Ya.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654773821467)

## Enable SFTP

Once your key is setup in the profile, you can enable FTP and SSH depending on which [plan](https://instawp/pricing) you are on.

To enable SFTP access, open the "Access FTP/SSH" dropdown for the site. 

![menu sftp/ssh](https://ik.imagekit.io/instawp/instawp-docs-access-sftp-ssh_2x_WYLSjLv9L.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654775382396)

Then toggle, the FTP settings and you will see a username and IP address to connect. 

![enable ftp](https://ik.imagekit.io/instawp/instawp-docs-sftp-enable_U107jF6L5m.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1654775235945)

Copy all the details and open FileZilla (or any other FTP client).

![file zilla settings](https://ik.imagekit.io/instawp/instawp-docs-sftp-filezilla_2x_Ppv8EweS4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654775236161)

## Enable SSH

Enabling SSH access is very similar to FTP, in the same modal box, go to SSH tab and enable SSH. 

![enable ssh](https://ik.imagekit.io/instawp/instawp-docs-enable-ssh_2x_eXYxvhPEGm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654775235499)

You will see the same username and IP address (as you did in the FTP step). Copy these details and open your SSH terminal. 

Enter the following command to connect via SSH

```
ssh username@IP
```

![ssh terminal](https://ik.imagekit.io/instawp/instawp-docs-ssh-access_2x_SvOK6_XvO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654775236492)

