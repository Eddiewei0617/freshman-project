// 大圖和主要區域
import Link from "next/link";
import Image from "next/image";
import { MainSTY } from "./style";
import { useEffect, useState } from "react";
import cx from "classnames";
import React from "react";

export default function Main(props) {
  const { photodata, category, curations } = props;
  const [check, setCheck] = React.useState(true);

  if (!photodata) return <p>loading</p>;
  const curation_no = photodata[0].no;

  const handleOpen = () => {
    setCheck(!check);
  };

  return (
    <>
      <MainSTY>
        <div className={cx({ " text-color": check })}>
          <h1 onClick={handleOpen}>測試測試</h1>
        </div>

        {/* ------------------- */}
        <div className="py-4">
          <h6 className="fontColor text-sm">封面專題</h6>
          <div className="homeTitle">
            <h2
              className="h-8 text-2xl font-bold"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              夏天必朝聖！跟著Tripadvisor嗨玩澎湖國際海上花火節！
            </h2>
            <div className="fontColor sideTitle">
              <span>Nov 9, 2020 | </span>
              <span>{category}</span>
            </div>
          </div>
        </div>
        <div>
          <Link href="/photo/TP00106">
            <a>
              <Image
                src="/images/photo/photo_big.jpg"
                alt="Photo of the main area"
                width={920}
                height={518}
              />
            </a>
          </Link>
        </div>

        <div className=" infoWidth">
          {curations?.map((v, i) => {
            if (i > 5) return;
            return (
              <div key={i} className="infoBorder infoHover">
                <Link
                  href={`/article/${v.article[0].no}?curation=${curation_no}`}
                >
                  <a>
                    <div className="dateStyle">{v.article[0].publish_date}</div>
                    <div className="font-bold text-lg">{v.title}</div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </MainSTY>
    </>
  );
}
