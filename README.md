# customSocial
Brightcove player plugin to allow dynamic customization of the social sharing embedCode


This Brightcove Player plugin provide macro functionality for the embedCode.  This is most useful to change the embedCode with in-page or with data from Video Cloud custom metadata.



## Getting Started
* Do NOT configure the standard social plugin.
* Instead, use the Plugin section and configure the custom plugin using these steps:
* Download the plugin and place on your server.
* Edit the player configuration in the [Players Module of Video Cloud Studio](https://studio.brightcove.com/products/videocloud/players).
* Under _Plugins>JavaScript_, add the URL to the plugin to the player configuration and click +.
* Under _Plugins>Name, enter `customSocial` as the name. 
* Under _Plugins>Options (JSON)_, enter the configuration options described below and click `+`.

## Plugin Configuration
```json
{
  "debug": true,
  "embedMacros": {
    "{domain}": "location.hostname"
  },
  "embedCode": "<iframe src='//players.brightcove.net/769341148/rJPvbTkK_default/index.html?videoId=5069740903001&domain={domain}' allowfullscreen frameborder=0></iframe>",
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


