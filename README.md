# Dailymotion Playback Technology<br />for [Video.js](https://github.com/videojs/video.js)

## Install
You can use bower (`bower install @lawchihon/videojs-dailymotion`), npm (`npm install @lawchihon/videojs-dailymotion`) or the source and build it using `npm run build`. Then, the only file you need is dist/Dailymotion.min.js.

## Version Note
It only support v5 - v7

## Example
```html
<!DOCTYPE html>
<html>
<head>
  <link type="text/css" rel="stylesheet" href="../node_modules/video.js/dist/video-js.min.css" />
</head>
<body>
  <video
    id="vid1"
    class="video-js vjs-default-skin"
    controls
    autoplay
    width="640" height="264"
    data-setup='{ "techOrder": ["dailymotion"], "sources": [{ "type": "video/dailymotion", "src": "https://www.dailymotion.com/video/k3ZKw075Zoh6OtvWUNO"}] }'
  >
  </video>

  <script src="../node_modules/video.js/dist/video.min.js"></script>
  <script src="../dist/Dailymotion.min.js"></script>
</body>
</html>
```

See the examples folder for more

## How does it work?
Including the script Dailymotion.min.js will add the Dailymotion as a tech. You just have to add it to your techOrder option. Then, you add the option src with your Dailymotion URL.

It supports:
- dailymotion.com
- Regular URLs: https://www.dailymotion.com/video/x7t3la2
- Embeded URLs: https://www.dailymotion.com/embed/video/x7t3la2
- Playlist URLs: https://www.dailymotion.com/video/x7t3la2?playlist=x6lgtp
- Embeded Playlist URLs: https://www.dailymotion.com/embed/video/x7t3la2?playlist=x6lgtp

## Options
It supports every regular Video.js options. Additionally, you can change any [Dailymotion parameter](https://developer.dailymotion.com/player/#player-parameters). Here is an example of setting the `ui-highlight` parameter to `fff`.

```html
<video
  id="vid1"
  class="video-js vjs-default-skin"
  controls
  autoplay
  width="640" height="264"
  data-setup='{ "techOrder": ["dailymotion"], "sources": [{ "type": "video/dailymotion", "src": "https://www.dailymotion.com/video/x7t3la2"}], "dailymotion": { "ui-highlight": "fff" } }'
>
</video>
```

### Dailymotion controls
Because `controls` is already a Video.js option, to use the Dailymotion controls, you must set the `dmControls` parameter.

```html
<video
  id="vid1"
  class="video-js vjs-default-skin"
  controls
  autoplay
  width="640" height="264"
  data-setup='{ "techOrder": ["dailymotion"], "sources": [{ "type": "video/dailymotion", "src": "https://www.dailymotion.com/video/x7t3la2"}], "dailymotion": { "dmControls": true } }'
>
</video>
```

### Custom Player Options
If you need to set any additional options on the Dailymotion player, you may do so with the `customVars` parameter:

```html
<video
  id="vid1"
  class="video-js vjs-default-skin"
  controls
  autoplay
  width="640" height="264"
  data-setup='{ "techOrder": ["dailymotion"], "sources": [{ "type": "video/dailymotion", "src": "https://www.dailymotion.com/video/x7t3la2"}], "dailymotion": { "customVars": { "wmode": "transparent" } } }'
>
</video>
```

## Special Thank You
Thanks to everyone contributed on [videojs-youtube](https://github.com/videojs/videojs-youtube)

## License
[MIT](LICENSE)
