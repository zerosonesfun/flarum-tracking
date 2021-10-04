# Tracking

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/zerosonesfun/flarum-tracking.svg)](https://packagist.org/packages/zerosonesfun/flarum-tracking) [![Total Downloads](https://img.shields.io/packagist/dt/zerosonesfun/flarum-tracking.svg)](https://packagist.org/packages/zerosonesfun/flarum-tracking)

A [Flarum](http://flarum.org) extension. Track bugs, issues, data requests, and everything else. Data is not stored in the Flarum database which means you can access your tracker even if you forum implodes

##### Before installing this, first read these points:
1. This was created for my own personal use. No improvements are planned any time soon. However, eventually, the following major manual step may not be required if I ever fully integrate everything together. Right now, all **this** extension does is creates an admin page with an iframe. Therefore, you need basic website creation skills to understand and complete the following step. But, it just boils down to uploading files into a folder, then navigating to that folder.
2. What I'm talking about in point #1 above is the fact that this requires a minimal flat-file bug tracking php application called [Bumpy Booby](https://github.com/piero-la-lune/Bumpy-Booby). Currently, you must manually install Bumpy Booby on your own, and then manually change **this** extension's iframe URL [here](https://github.com/zerosonesfun/flarum-tracking/blob/5ad8cea98880357beed847f64b5ec5235093f1b5/js/src/admin/components/TrackingPage.js#L16) (line 16 of TrackingPage.js).
3. At the time of writing this, the latest release of Bumpy Booby needs a few small PHP syntax updates and so if you download the version from its repository, it may not work out of the box. However, in the "bumpy" folder of this repository is a version which has been updated for the latest version PHP (as of Oct. 2021). In other words, use the version I have included in this repository. Follow the install instructions [here](https://github.com/piero-la-lune/Bumpy-Booby).
4. Only after understanding and completing the above, you may then install this extension.

## Installation

Install with composer:

```sh
composer require zerosonesfun/flarum-tracking:"*"
```

## Updating

```sh
composer update zerosonesfun/flarum-tracking:"*"
php flarum migrate
php flarum cache:clear
```

## Links

- [Packagist](https://packagist.org/packages/zerosonesfun/flarum-tracking)
- [GitHub](https://github.com/zerosonesfun/flarum-tracking)
- [Discuss](https://discuss.flarum.org/d/PUT_DISCUSS_SLUG_HERE)
