import React from "react"

import TimelineItem from "./TimelineItem"

import timeline_data from "../data/timeline"

export default function Timeline() {
  return (
    <div className="timeline">
      {timeline_data.map((data, index) => (
        <TimelineItem data={data} key={index} />
      ))}
    </div>
  )
}
