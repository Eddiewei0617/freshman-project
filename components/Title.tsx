// 一開始標題的元件
import Link from "next/link";

const Title = ({ category }) => {
  return (
    <>
      <div className="">
        <span>
          <Link href="/">
            <a className="">首頁</a>
          </Link>
        </span>
        <span>
          <Link href="/photo">
            <a className="explore text-gray-400">探索生活</a>
          </Link>
        </span>
        <span>
          <Link href="/photo">
            <a className="takePhoto text-gray-400">{category}</a>
          </Link>
        </span>
      </div>
    </>
  );
};

export default Title;
