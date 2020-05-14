const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,            // 吸附模式
    mini: true,             // 不启用迷你播放模式 
    autoplay: false,        // 音频不自动播放 
    theme: '#FADFA3',       // 主题色 
    loop: 'all',            // 音频循环播放, 可选值: 'all', 'one', 'none'-->
    order: 'random',        // 音频循环顺序, 可选值: 'list', 'random'-->
    preload: 'auto',        // 预加载，可选值: 'none', 'metadata', 'auto'-->
    volume: 0.7,            // 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效-->
    mutex: true,            // 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器 -->
    listFolded: true,      // 列表默认折叠， false表示不折叠-->
    listMaxHeight: '120px', // 列表最大高度，超出此高度将有滚动条-->
    lrcType: 0,             // 歌词类型，0表示不显示歌词-->
    audio: [
      {
        name: "夜空中最亮的星",
        artist: '邓紫棋',
        url: 'https://www.0dutv.com/upload/dance/AE084F6EED21972CDA11E9274CE2622B.mp3',
        cover: 'http://img2.kuwo.cn/star/albumcover/300/22/2/1620507024.jpg',
      },
      {
        name: '极乐净土（中文版）',
        artist: '祈Inory',
        url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_9927541&response=res&type=convert_url&',
        cover: 'https://imgessl.kugou.com/uploadpic/softhead/400/20160722/20160722185354390495.jpg',
      },
      {
        title: '光年之外',
        author: '邓紫棋',
        url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_15195332&response=res&type=convert_url&',
        pic: 'http://img2.kuwo.cn/star/albumcover/300/23/91/496164472.jpg',
      },
      {
        title: '句号',
        author: '邓紫棋',
        url: 'http://www.0dutv.com/plug/down/up2.php/247347346.mp3',
        cover: 'http://img3.kuwo.cn/star/albumcover/300/51/23/3888402613.jpg',
      },
      {
        title: '死了都要爱',
        author: '邓紫棋',
        url: 'https://www.0dutv.com/upload/dance/9F59C12F42B17C4AA9D6274E022F0423.mp3',
        cover: 'http://img2.kuwo.cn/star/albumcover/300/22/2/1620507024.jpg',
      },
      {
        title: '最美的期待',
        author: '周笔畅',
        url: 'http://www.0dutv.com/plug/down/up2.php/212877015.mp3',
        cover: 'http://img4.kuwo.cn/star/albumcover/300/85/65/3490087360.jpg',
      },
      {
        title: '献天缘',
        author: '贾卿卿',
        url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_22815410&response=res&type=convert_url&',
        cover: 'http://img3.kuwo.cn/star/albumcover/300/34/10/2749971065.jpg',
      },
      {
        title: '下山',
        author: '麦小兜',
        url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_83406239&response=res&type=convert_url&',
        cover: 'http://img3.kuwo.cn/star/albumcover/300/76/13/3721197992.jpg',
      }
    ]
});