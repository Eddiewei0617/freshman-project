import { gql } from "@apollo/client";
import { CurationFragment } from "../../curation";

// 抓分類: 攝影
export const Category = gql`
  query category {
    category(no: "photo") {
      code
      msg
      data {
        name
        parent_no
      }
    }
  }
`;

// 抓所有專題
export const Curations = gql`
  query curations {
    curations(filter: { type: local, category: "photo" }) {
      code
      msg
      data {
        edges {
          no
          title
          desp
          sdate
          image_path
          article {
            no
            title
            cover
            publish_date
          }
        }
      }
    }
  }
`;

// 抓單一專題
export const Curation = gql`
  query curation($no: String!) {
    curation(no: $no) {
      code
      msg
      data {
        no
        title
        image_path
        main_image_path
        content_image_path
        desp
        article {
          no
          title
          cover
          publish_date
        }
        recommend {
          no
          title
        }
      }
    }
  }
`;

// 抓文章列表+內容
export const Article = gql`
  query article($no: String!) {
    article(filter: { no: $no, author_type: local }) {
      code
      msg
      data {
        id
        pv
        title
        content
        tags {
          name
        }
        photos {
          url
          urlPath
        }
      }
    }
  }
`;

export const Covers = gql`
  query Covers(
    $filter: CurationFilter!
    $no: String!
    $page: Int
    $per_page: Int
  ) {
    curations(filter: $filter, page: $page, per_page: $per_page) {
      code
      msg
      data {
        pageInfo {
          ...PageInfoFragment
        }
        edges {
          ...ComCuration
        }
      }
    }
    category(no: $no) {
      code
      msg
      data {
        no
        name
        path
        desp
        url
        parent_no
        imagePath {
          type
          file {
            path
            desp
          }
        }
      }
    }
  }

  ${CurationFragment.fragments.Curation}
`;
