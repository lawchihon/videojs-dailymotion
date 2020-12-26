var Dailymotion = videojs.getTech('Dailymotion');

describe('parseUrl', function() {
  var videoId = 'x7t3la2';
  it('should read the correct video ID', function() {
    var regularUrl = 'https://www.dailymotion.com/video/' + videoId;
    var embedUrl = 'https://www.dailymotion.com/embed/video/' + videoId + '/';
    expect(Dailymotion.parseUrl(regularUrl).video).toBe(videoId);
    expect(Dailymotion.parseUrl(embedUrl).video).toBe(videoId);
  });

  var playlistId = 'x6lgtp';
  it('should read the list in the URL', function() {
    var regularUrl = 'https://www.dailymotion.com/video/' + videoId + '?playlist=' + playlistId;
    var embedUrl = 'https://www.dailymotion.com/embed/video/' + videoId + '?playlist=' + playlistId;
    expect(Dailymotion.parseUrl(regularUrl).playlist).toBe(playlistId);
    expect(Dailymotion.parseUrl(embedUrl).playlist).toBe(playlistId);
  });
});
