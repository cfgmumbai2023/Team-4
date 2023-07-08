const Video = require('../models/Video');

exports.createVideo = async (req, res) => {
  try {
    const {
      title,
      description,
      author,
      views,
      creator,
      url,
      length,
      tags,
      garde,
      subject,
      lang,
      chapter,
    } = req.body;
    console.log(
      title,
      description,
      author,
      views,
      creator,
      url,
      length,
      tags,
      garde,
      subject,
      lang,
      chapter
    );
    const video = await Video.create({
      title,
      description,
      author,
      views,
      creator,
      url,
      length,
      tags,
      garde,
      subject,
      lang,
      chapter,
    });
    res.status(200).json({
      success: true,
      message: 'video created',
      video,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.searchVideo = async (req, res) => {
  const search = req.body.text;

  //   if (!search)
  //     return res.status(401).json({ success: false, message: 'Text is missing' });

  const videos = await Video.find();
  if (!search) {
    return res.status(300).json({
      success: true,
      payload: videos,
    });
  }
  const filtered_videos = videos.filter(vid => vid.title.toLowerCase().includes(search));

  res.status(300).json({
    success: true,
    payload: filtered_videos,
  });
};
