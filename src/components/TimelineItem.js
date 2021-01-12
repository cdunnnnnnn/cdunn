import React from "react"

export default function TimelineItem({ data }) {
  return (
    <div className="timeline__item">
      <span className="timeline__item-year">{data.year}</span>
      <h2 className="timeline__item-title">{data.title}</h2>
      <p>{data.text}</p>
    </div>
  )
}
