function meTubeStatistics(array) {
  const sortType = array.pop();
  array.pop();
  let videos = {};
  for (const line of array) {
    if (line.includes('-')) {
      const [video, views] = line.split('-');
      addViews(video, views);
    } else if (line.includes(':')) {
      const [action, video] = line.split(':');
      if (action === 'like') {
        likeVideo(video);
      } else if (action === 'dislike') {
        dislikeVideo(video);
      }
    }
  };
  let videosArray = [];
  for (let [key, value] of Object.entries(videos)) {
    videosArray.push(value);
  }
  videosArray.sort(sortVideos);
  videosArray.forEach(element => {
    console.log(`${element.name} - ${element.views} views - ${element.likes} likes`);
  })

  function addViews(video, views) {
    if (videos.hasOwnProperty(video)) {
      videos[video].views += Number(views);
    } else {
      videos[video] = {
        name: video,
        views: Number(views),
        likes: 0
      };
    };
  }

  function likeVideo(video) {
    if (videos.hasOwnProperty(video)) {
      videos[video].likes++;
    };
  }

  function dislikeVideo(video) {
    if (videos.hasOwnProperty(video)) {
      videos[video].likes--;
    };
  }

  function sortVideos(a, b) {
    if (sortType === 'by likes') {
      return b.likes - a.likes;
    } else if (sortType === 'by views') {
      return b.views - a.views
    }
  }
}
meTubeStatistics(['Eninem Venom-500',
  'like:Eninem Venom',
  'Funny Cats-700',
  'like:Funny Cats',
  'like:Funny Cats',
  'Eninem Venom-300',
  'stats time',
  'by likes'
]);