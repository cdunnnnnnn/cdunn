import React from "react"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

import ProgressiveImage from "./ProgressiveImage"

import tags_data from "../data/tags"

import avatar_src from "../img/avatar.jpg"

const avatar = {
  alt: "Chris Dunn | ui desginer &amp; developer in St. Pete, FL",
  src: avatar_src,
  // src: "https://s3.amazonaws.com/cdunn.io/img/avatar.jpg",
}

function Header() {
  const getStartYear = (date) => {
    const startDate = new Date(date)
    return new Date().getFullYear() - startDate.getFullYear()
  }

  return (
    <header className="w-full text-black bg-white">
      <div className="container py-16">
        <Link className="block w-16 h-16 p-2 bg-black rounded-full" to={`/`}>
          <svg viewBox="172 -172 400 400">
            <path
              fill="#fafafa"
              d="M497-83.8c9.5 16.2 12.8 33.4 6.7 51.6 -2.3 6.9-7.8 11.5-14.7 15.7 6.5-12.4 13.5-23.9 11.8-35.2 -2.3 6.3-6.1 16.1-9.3 24.8 -0.3-0.1 0.5-14.4-0.6-20.6 -1.1-6.4-4.2-12.4-6.7-18.6 0.6 4 1.5 8 1.8 12.1 0.8 10.5 1.8 21 1.8 31.5 0 6.1-3.6 10.6-9.2 13.8 -4.2 2.5-4.1 4.2 0 6.2 -1.9 0.2-3.1 0.6-4.3 0.4 -3.3-0.5-3.7 1.4-2.8 3.6 3.1 7.6 6 15.5 10 22.7 5 8.8 1 17.5-9 18.1 -2.7 0.2-5.5 0.2-8.2 0.5 -0.8 0.1-1.8 1-2 1.7 -0.5 1.7-0.7 3.5-0.9 5.3 -0.5 5.6-0.5 11.2-4.1 16.1 -1.1 1.6-0.9 4.3-1.2 6.5 -0.6 4.8-0.4 9.6-4.5 13.5 -1.9 1.8-2.2 5.4-3.1 8.2 -1.6 5.3-1.9 11.3-4.8 15.7 -6.1 9.2-12.6 11.1-23.3 7.8 -10.9-3.4-21.5-7.5-32.4-10.9 -1.6-0.5-4.1 1.3-5.9 2.6 -4.6 3.3-9.6 6.4-13.1 10.7 -3.4 4.1-5.5 9.5-7.3 14.6 -1.2 3.4 2.2 5.3 5 5.7 5.1 0.8 7.9 4.1 10 8.1 3.2 6.1 5.7 12.6 8.9 18.7 3.4 6.4 7 12.6 10.9 18.7 3.7 5.8 7.9 11.2 11.9 16.9 -7.2 1.6-12.5-3.1-18.1-6 -12.8-6.8-25.1-14.5-38-21.1 -8.3-4.3-17.5-6.8-25.9-10.8 -6.5-3.1-12.6-7.3-18.8-11.2 -6.2-3.8-12.2-7.9-18.4-11.6 -10.6-6.4-21.4-12.6-32-19 -7.6-4.5-15.1-9.1-22.5-13.8 -0.5-0.3-0.9-1.9-0.6-2.2 9.5-11.5 19.4-22.7 28.7-34.4 5.1-6.4 9.6-13.5 13.2-20.8 5.5-11 9.7-22.7 15.1-33.8 6.9-14.3 8.6-28.9 6.3-44.5 -1.1-7.9 0-16.1 0.4-24.1 0.4-7.5 0.4-15.2 2.1-22.4 2.3-9.8 4.2-20.6 9.7-28.5 9.4-13.4 20.8-25.3 37-32 10.6-4.4 21.1-7.7 32.4-9.2 6.8-0.9 13.4-4 20.1-4 8.2 0 16.3 2.2 24.5 3.3 5.4 0.7 10.9 0.9 16.2 1.8 3.4 0.5 6.7 1.7 10 2.8 7.9 2.5 13.2 8.4 18.2 14.5 3 3.7 5.7 7.7 8.8 11.4 0.9 1 2.5 1.7 4 2 3.9 0.8 6.8 2.5 6.9 7 0.1 4.9 2.3 7.4 7.5 6.5 0.9-0.2 1.9 0.2 2.7 0.6 5.7 2.5 12.9 16.1 11.7 23.6C507.6-80.7 502.8-82.9 497-83.8 497.1-83.7 497-83.8 497-83.8L497-83.8z"
            />
          </svg>
        </Link>
        <section className="block py-24">
          <h1 className="text-5xl font-black tracking-wide">
            Hi, my name is Chris.
            <small className="block text-3xl font-bold">
              I design &amp; code digital products.
            </small>
          </h1>
        </section>
      </div>
      <div className="pb-16 container--wide">
        <section className="flex flex-col flex-no-wrap items-center justify-center -mx-4 sm:flex-row">
          <div className="order-last px-4 sm:w-1/2 sm:order-first">
            <h3 className="pb-3 text-lg font-bold">Things I do:</h3>
            <ul className="flex flex-wrap items-center -mx-2">
              {tags_data.length &&
                tags_data.map((tag, index) => (
                  <li className="block px-2 pb-6" key={index}>
                    <a
                      className="px-4 py-2 text-white transition-all duration-200 ease-in-out bg-black hover:bg-primary"
                      href={tag.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tag.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="px-4 sm:w-1/2">
            <div className="mb-3">
              <ProgressiveImage image={avatar} />
            </div>
          </div>
        </section>
      </div>
      <div className="container--wide">
        <p className="block pb-8 leading-relaxed">
          I started my career about {getStartYear("01/01/2008")} years ago as a
          UI/UX designer and frontend developer. Since then, I've done remote
          frontend and fullstack work for agencies, consulted for startups and
          collaborated with skilled folks to create digital products.
        </p>
        <p className="block pb-8 leading-relaxed">
          Currently, I'm avaiable and searching for new opportunities in
          the&nbsp;
          <em>St. Pete/Tampa Bay area</em> or remote. Feel free to&nbsp;
          <HashLink className="font-bold hover:underline" to="/#contact">
            send me a note
          </HashLink>{" "}
          and let's connect. Thanks!
        </p>
      </div>
    </header>
  )
}

export default Header
