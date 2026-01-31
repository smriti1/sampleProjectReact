import React from 'react'

export const VideoCards = ({info}) => {

    const {snippet, statistics } = info;
    const {thumbnails, title, channelTitle } = snippet;
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img fetchPriority='high' className='rounded-lg' alt="videos" src = {thumbnails.medium.url}/>
        <ul>
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}</li>
        </ul>
    </div>
  )
}


// higher order component
export const AdVideoCard = ({info}) => {

    const {statistics } = info;
    const isLowView = statistics.viewCount < 90705;

  return (
    <div className={`font-bold ${isLowView ? "border-2 border-red-600" : ""}`}>
      <VideoCards info={info} />
    </div>
  );
};
