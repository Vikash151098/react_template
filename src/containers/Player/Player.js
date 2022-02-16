import React, { useEffect } from 'react'
import VideoPlayer from './VideoPlayer'

const Player = (props) => {
  const playerRef = React.useRef(null)
  const adCount = 1
  const adsUrl = [
    '',
    'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator=',
    'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpost&cmsid=496&vid=short_onecue&correlator=',
    'https://cdn.ajgc1137.online/zQVSVmbyRSRI3iXJQFFKBOzEOpvBAFKDJERkS0IY-H9A89VMjsSsS5OQK6JKOHZ9n0HZ6FQ3JeeuFmh3fpRBgoMroOuLvlAc',
  ]
  const count = 1
  const videoUrl = [
    {
      src: 'https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/m3u8s/11331.m3u8',
      type: 'application/vnd.apple.mpegurl',
      keySystems: {
        'com.widevine.alpha': 'https://widevine-proxy.appspot.com/proxy',
      },
    },
    {
      src: 'https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd',
      type: 'application/dash+xml',
      keySystems: {
        'com.widevine.alpha': 'https://widevine-proxy.appspot.com/proxy',
      },
    },
    {
      src: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
      type: 'application/dash+xml',
    },
    {
      src: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
      type: 'application/vnd.apple.mpegurl',
    },
    {
      src: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
      type: 'application/vnd.apple.mpegurl',
    },
  ]
  useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [playerRef])

  const videoJsOptions = {
    userActions: {
      click: true,
    },
    preload: 'auto',
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player
    player.eme()
    player.src(videoUrl[count])

    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting')
    })

    player.on('dispose', async () => {
      console.log('player will dispose')
    })
  }

  const onLoadIMA = (player) => {
    player.ima({
      adTagUrl: adsUrl[adCount],
    })
  }
  // const changePlayerOptions = () => {
  //   // you can update the player through the Video.js player instance
  //   if (!playerRef.current) {
  //     return;
  //   }
  //   // [update player through instance's api]
  //   playerRef.current.src([{src: 'http://ex.com/video.mp4', type: 'video/mp4'}]);
  //   playerRef.current.autoplay(false);
  // };

  return (
    <>
      <VideoPlayer
        options={videoJsOptions}
        onReady={handlePlayerReady}
        onLoadIMA={onLoadIMA}
      />
    </>
  )
}

export default Player
