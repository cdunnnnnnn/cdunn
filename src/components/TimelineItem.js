import React from 'react'

export default function TimelineItem({ data }) {
  return (
    <div className="timeline__item">
      <div className="timeline__item-inner">
        <span className="timeline__item-tag">{data.category.tag}</span>
        <time>{data.date}</time>
        <p>{data.text}</p>
        {data.link && (
          <a href={data.link.url} target="_blank" rel="noopener noreferrer">
            {data.link.text}
          </a>
        )}
      </div>
    </div>
  )
}
