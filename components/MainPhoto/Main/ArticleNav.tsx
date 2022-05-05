import React from "react";
import cx from "classnames";
import { TYPE_CURATION } from "@root/typings/graphql";
import { NavSTY } from "./style";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ARTICLENAV_TYPE {
  curationsArr: TYPE_CURATION[];
  arrow: { arrowLeft: string; arrowRight: string };
}

const ArticleNav: React.FC<ARTICLENAV_TYPE> = (props) => {
  const { curationsArr, arrow } = props;

  return (
    <NavSTY arrow={arrow}>
      <FaArrowLeft className={cx("arrow", arrow.arrowLeft)} />
      <div>
        <div className={cx("singleArticle")}>
          <h1>1</h1>
          <p>108響！東京增上寺跨年 敲敲除夜之鐘</p>
        </div>
        <div className={cx("singleArticle")}>
          <h1>2</h1>
          <p>特搜！世界搞怪美食節 滾起司丟番茄通通來</p>
        </div>
        <div className={cx("singleArticle")}>
          <h1>3</h1>
          <p>X PARTY-迎接夏天，日本夏祭狂歡節開趴囉！</p>
        </div>
      </div>
      <FaArrowRight className={cx("arrow", arrow.arrowRight)} />
    </NavSTY>
  );
};

export default ArticleNav;
