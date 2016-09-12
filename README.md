# customSocial
Brightcove player plugin to allow dynamic customization of the social sharing embedCode


This Brightcove Player plugin provide macro functionality for the embedCode.  This is most useful to change the embedCode with in-page variables or with metadata from Video Cloud.



## Getting Started
* Do NOT configure the standard social plugin.
* Instead, use the Plugin section and configure the custom plugin using these steps:
* Download the plugin and place on your server.
* Edit the player configuration in the [Players Module of Video Cloud Studio](https://studio.brightcove.com/products/videocloud/players).
* Under _Plugins>JavaScript_, add the URL to the plugin to the player configuration and click +.
* Under _Plugins>Name, enter `customSocial` as the name. 
* Under _Plugins>Options (JSON)_, enter the configuration options described below and click `+`.

## Plugin Configuration

This example inserts the location.hostname (domain name) of the calling site into the embedCode by replacing the instance of {domain}

```json
{
  "debug": true,
  "embedMacros": {
    "{domain}": "location.hostname"
  },
  "embedCode": "<iframe src='//players.brightcove.net/1235/default_default/index.html?videoId=12345678&domain={domain}' allowfullscreen frameborder=0></iframe>",
  "services": {
    "linkedin": true,
    "pinterest": true,
    "tumblr": true,
    "twitter": true,
    "google": true,
    "facebook": true
  },
  "deeplinking": true
}
```


