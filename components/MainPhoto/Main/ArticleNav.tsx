import React, { useRef, useState } from "react";
import cx from "classnames";
import { TYPE_ARTICLE, TYPE_CURATION } from "@root/typings/graphql";
import { NavSTY } from "./style";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ARTICLENAV_TYPE {
  curationsArr: TYPE_CURATION[];
  curationTitle: Array<TYPE_ARTICLE>;
  arrow: { arrowLeft: string; arrowRight: string };
}

const ArticleNav: React.FC<ARTICLENAV_TYPE> = (props) => {
  const { curationsArr, arrow, curationTitle } = props;
  const [slideIndex, setSlideIndex] = useState(1);
  const slideRef = useRef(null);
  console.log("curationTitle", curationTitle);

  const scroll = (direction: string): void => {
    const { current }: any = slideRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  // const handleRight = () => {
  //   if (slideIndex < curationTitle.length - 3) setSlideIndex(slideIndex + 3);
  // };
  // const handleLeft = () => {
  //   if (slideIndex > 3) setSlideIndex(slideIndex - 3);
  // };

  return (
    <NavSTY arrow={arrow} slideIndex={slideIndex}>
      <FaArrowLeft
        className={cx("arrow", arrow.arrowLeft)}
        onClick={() => {
          scroll("left");
        }}
      />
      <div className="sliderContainer" ref={slideRef}>
        <div className="slider">
          {curationTitle &&
            curationTitle.map((v, i) => {
              return (
                <>
                  <div type={`${i + 1}`} className={`singleArticle`}>
                    <h1>{i + 1}</h1>
                    <p>{v.title}</p>
                  </div>
                </>
              );
            })}
        </div>
      </div>

      <FaArrowRight
        className={cx("arrow", arrow.arrowRight)}
        onClick={() => {
          scroll("right");
        }}
      />
    </NavSTY>
  );
};

export default ArticleNav;
