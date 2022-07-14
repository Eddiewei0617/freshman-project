import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AlltopicSTY } from "../../MainPhoto/AllTopic/style";
import { TYPE_ARTICLE } from "@root/typings/graphql";

interface photoType {
  img: String;
  date: String;
  title: String;
  content: String;
}

export function Photos(props) {
  const { data, no } = props;
  const [article, setArticle] = useState<TYPE_ARTICLE[]>([]);
  const [count, setCount] = useState<number>(6);

  useEffect(() => {
    if (data) {
      const articleArr: TYPE_ARTICLE[] = [];
      for (let i = 0; i < count; i++) {
        articleArr.push(data.curation.data.article[i]);
      }
      setArticle(articleArr);
    }
  }, [data]);

  const handleMore = () => {
    const articleArr: TYPE_ARTICLE[] = [];
    for (let i = count; i < count + 6; i++) {
      articleArr.push(data.curation.data.article[i]);
      setCount(count + 6);
    }
    const newArticle = article.concat(articleArr);
    setArticle(newArticle);
  };

  return (
    <AlltopicSTY>
      <div className="allTopicCard">
        {article.map((v, i) => {
          return (
            v && (
              <div key={i} className="topicCard">
                <Link href={`/article/${v.no}?curation=${no}`}>
                  <a>
                    <div>
                      <Image
                        src={v.cover}
                        alt="Photo of the main area"
                        width={346}
                        height={195}
                      />
                    </div>
                    <div className="dateStyle">
                      <span>{v.publish_date}</span>
                    </div>
                    <div className="font-bold">{v.title}</div>
                    <div>{v.content}</div>
                  </a>
                </Link>
              </div>
            )
          );
        })}
      </div>
      <div className="moreButton">
        <button onClick={handleMore}>看更多</button>
      </div>
    </AlltopicSTY>
  );
}
