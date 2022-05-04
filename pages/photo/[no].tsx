import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Title from "../../components/Title";

import { FirstArea } from "../../components/SidePhoto/Main";
import { Photos } from "../../components/SidePhoto/Main/photos";
import { useQuery } from "@apollo/client";
import { Curation } from "@root/graphql/_pages/album";
import { TYPE_CURATION } from "@typings/graphql";

const PhotoNo = () => {
  const router = useRouter();
  const { no } = router.query;

  const { data, loading, refetch } = useQuery<TYPE_CURATION>(Curation, {
    variables: {
      no: no,
    },
  });

  return (
    <>
      <Head>
        <title>{data?.curation?.data.title}</title>
      </Head>
      <Layout>
        <Title category={"攝影"}></Title>
        <FirstArea data={data} />
        <Photos data={data} no={no}></Photos>
      </Layout>
    </>
  );
};

export default PhotoNo;
