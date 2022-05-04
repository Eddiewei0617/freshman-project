import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Title from "../../components/Title";
import Main from "../../components/MainPhoto/Main";
import AllTopic from "../../components/MainPhoto/AllTopic";
import { BodySTY } from "../../styles/photo/style";
import { useQuery, useLazyQuery } from "@apollo/client";
import {
  Article,
  Covers,
  Curations,
  Curation,
} from "../../graphql/_pages/album";

import { GetServerSideProps } from "next";
import { client } from "../_app";
import { Category } from "../../graphql/_pages/album";
import { TYPE_CATEGORY, TYPE_CURATIONS, TYPE_CURATION } from "@typings/graphql";
export type Maybe<T> = T | null;

// 各種TYPE
interface Photo_TYPE {
  no: string;
  title: string;
  article: string[];
  cover: string;
  publish_date: string;
}
interface PhotoI {
  photodata?: Array<Photo_TYPE>;
}

interface PAGE_TYPE {
  category: TYPE_CATEGORY;
  curations: TYPE_CURATIONS;
  curation: TYPE_CURATION[];
}

// 頁面開始
const Photo = (props: PAGE_TYPE) => {
  const { category, curations, curation } = props;

  // 取得專題資料
  const { data, loading, error } = useQuery<any>(Curations);
  const [photodata, setPhotoData] = useState<PhotoI>();

  useEffect(() => {
    if (data !== null && data) {
      setPhotoData(data.curations.data.edges);
    }
  }, [data]);

  // const [getArticle, { data: articleData, loading: articleLoading }] =
  //   useLazyQuery<any>(Article);

  // useEffect(() => {
  //   if (data) {
  //     if (data?.curations?.code === 200) {
  //       getArticle({
  //         variables: {
  //           no: ,
  //         },
  //       });
  //     }
  //   }
  // }, [data]);
  // console.log("articleData", articleData);

  return (
    <>
      <Head>
        <title>攝影 | 欣傳媒 (作業)</title>
      </Head>

      <Layout>
        <BodySTY>
          <main className="mainArea">
            <Title category={category}></Title>
            <Main
              photodata={photodata}
              category={category}
              curations={curations}
            ></Main>
            <AllTopic photodata={photodata} curation={curation}></AllTopic>
          </main>
        </BodySTY>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // 取得category graph
  const categoryResult = await client.query({ query: Category });
  const categoryData = categoryResult.data.category.data.name;

  // 取得專題資料
  const curationsResult = await client.query({ query: Curations });
  const curationsData = curationsResult.data.curations.data.edges;

  const curation_no = curationsResult.data.curations.data.edges[0].no;

  // 取得單一專題資料
  const curationResult = await client.query({
    query: Curation,
    variables: { no: curation_no },
  });
  // .catch((err) => {
  //   console.log("err->>>", err);
  // });
  const curationData = curationResult.data.curation.data;

  // 取得article graph
  // const articleResult = await client.query({
  //   query: Article,
  //   variables: { no: article_no },
  // });
  // console.log(articleResult);

  return {
    props: {
      category: categoryData,
      curations: curationsData,
      curation: curationData,
    },
  };
};

export default Photo;
