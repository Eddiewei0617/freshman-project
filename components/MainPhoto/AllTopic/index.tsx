// 最後所有專題區塊
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AlltopicSTY } from "./style";

export default function AllTopic(props) {
  const { photodata, curation } = props;

  return (
    <>
      <AlltopicSTY>
        <div>
          <h3>所有專題</h3>
        </div>
        <div className="allTopicCard">
          {photodata?.map((v, i) => {
            return (
              <div key={i} className="topicCard">
                <Link href={`/photo/${v.no}`}>
                  <a>
                    <div>
                      <Image
                        src={`${v.article[0].cover}`}
                        alt="Photo of the main area"
                        width={346}
                        height={195}
                      />
                    </div>
                    <div className="dateStyle">
                      <span>{v.article[0].publish_date}</span>
                    </div>
                    <div className="font-bold">{v.title}</div>
                    <div>{v.desp}</div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </AlltopicSTY>
    </>
  );
}
