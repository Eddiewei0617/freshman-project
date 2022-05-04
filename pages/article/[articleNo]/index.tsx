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
import { TYPE_ARTICLE, TYPE_CURATIONS } from "@typings/graphql";
import ArticleDetail from "../../../components/MainPhoto/Main/ArticleDetail";

interface PAGE_TYPE {
  article: TYPE_ARTICLE;
  data: TYPE_CURATIONS[];
}

const ArticlePage = (props: PAGE_TYPE) => {
  const { article } = props;
  const router = useRouter();

  const [curationsData, setCurationsData] = useState<TYPE_CURATIONS[]>([]);
  const { data, loading, refetch } = useQuery(Curations);
  // 當loading是false是設定狀態 (原本不是陣列，我把資料放進陣列)
  // useEffect(() => {
  //   if (loading === false) {
  //     setCurationsData((prev) => [...prev, data]);
  //   }
  // }, [loading]);

  return (
    <>
      <Head>
        <title>{data?.curations?.data?.edges[0].title}</title>
      </Head>
      <Layout>
        <Title category={"攝影"}></Title>
        <ArticleDetail article={article} data={data} />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // 取得單一article資料
  const articleResult = await client.query({
    query: Article,
    variables: { no: ctx.query.articleNo },
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
