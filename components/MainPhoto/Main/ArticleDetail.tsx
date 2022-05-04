import React, { useEffect, useState } from "react";
import { ArticleSTY } from "./style";
import { TYPE_CURATIONS } from "@typings/graphql";
import Link from "next/link";

const ArticleDetail = (props) => {
  const { article, data } = props;
  const [curations, setCurations] = useState<TYPE_CURATIONS>();

  useEffect(() => {
    if (data) {
      setCurations(data);
    }
  }, [data]);

  return (
    <ArticleSTY>
      <div className="title">
        <h1>{article.title}</h1>
        <p>1</p>
      </div>
      <div className="content">
        <p
          dangerouslySetInnerHTML={{
            __html: article.content, // 'html string'
          }}
        ></p>
      </div>
      <div className="tag">
        {article.tags.map((v, i) => {
          return <p key={i}>{v.name}</p>;
        })}
      </div>
      <div className="recommend">
        <h2>推薦專題</h2>
        <div>
          {curations !== undefined &&
            curations.curations.data.edges.map((v, i) => {
              if (i < 6) {
                return (
                  <Link href={`/photo/${v.no}`} key={i}>
                    <a>
                      <div className="curImage">
                        <img src={v.image_path} alt="image" />
                      </div>
                      <div>
                        <p className="date">{v.sdate} | 攝影</p>
                        <p>{v.title}</p>
                      </div>
                    </a>
                  </Link>
                );
              }
            })}
        </div>
      </div>
    </ArticleSTY>
  );
};

export default ArticleDetail;
