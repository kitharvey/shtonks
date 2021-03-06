import React from "react"
import { NewsData } from "../interfaces/interfaces"

interface NewsCardProps {
  data: NewsData
}

const NewsCard: React.FC<NewsCardProps> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row overflow-hidden rounded-xl shadow-lg">
      <div
        className="w-full h-1/2 md:h-full md:w-3/5"
        style={{
          backgroundImage: `url(${data.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="w-full md:w-2/5 min-w-2/5 h-1/2 md:h-full bg-white text-black p-4 md:p-10 flex flex-col justify-between">
        <div className="h-full w-full">
          <p className="text-lg leading-tight md:text-2xl">{data.title}</p>
        </div>
        <div>
          <p className="font-thin text-xs">{data.publishedDate.split(" ")[0]}</p>
          <p className="font-thin text-xs">{data.site}</p>
          <a
            className="text-xs hover:text-blue-800"
            rel="noreferrer"
            target="_blank"
            href={data.url}
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
