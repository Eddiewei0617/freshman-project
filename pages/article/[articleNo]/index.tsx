import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GetServerSideProps } from "next";
import Head from "next/head";
// -------------
import Layout from "@root/components/Layout";
import Title from "../../../components/Title";
import { client } from "../../_app";
import { Article, Curations } from "@graphql/_pages/album";
import { TYPE_ARTICLE, TYPE_CURATION } from "@typings/graphql";
import ArticleDetail from "../../../components/MainPhoto/Main/ArticleDetail";
import ArticleNav from "@components/MainPhoto/Main/ArticleNav";

interface PAGE_TYPE {
  article: TYPE_ARTICLE;
  data: TYPE_CURATION[];
}

const ArticlePage = (props: PAGE_TYPE) => {
  const { article } = props;
  const router = useRouter();
  console.log("article", article);

  const [curationsArr, setCurationsArr] = useState<TYPE_CURATION[]>([]);
  const { data, loading, refetch } = useQuery(Curations);
  // 當loading是false是設定狀態 (原本不是陣列，我把資料放進陣列)
  // useEffect(() => {
  //   if (loading === false) {
  //     setCurationsData((prev) => [...prev, data]);
  //   }
  // }, [loading]);

  useEffect(() => {
    if (data) {
      setCurationsArr(data.curations.data.edges);
    }
  }, [data]);

  const arrow: { arrowLeft: string; arrowRight: string } = {
    arrowLeft: "left",
    arrowRight: "right",
  };

  let curationTitle;
  if (curationsArr[0]?.article.length > 0) {
    curationTitle = curationsArr[0].article;
  }

  return (
    <>
      <Head>
        <title>{data?.curations?.data?.edges[0].title}</title>
      </Head>
      <Layout>
        <Title category={"攝影"}></Title>
        <ArticleNav
          curationsArr={curationsArr}
          arrow={arrow}
          curationTitle={curationTitle}
        />
        <ArticleDetail article={article} data={data} />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // 取得單一article資料
  const articleResult = await client.query({
    query: Article,
    // variables: { no: ctx.query.articleNo },
  });
  // .catch((err) => {
  //   console.log("err->>>", err);
  // });
  const articleData = articleResult.data.article.data;

  return {
    props: { article: articleData },
  };
};

export default ArticlePage;
