import gql from "graphql-tag";

export const CurationFragment = {
  fragments: {
    Curation: gql`
      fragment ComCuration on Curation {
        no
        title
        subTitle
        desp
        image_path
        url
        sdate
        edate
        article {
          no
          title
          cover
          publish_date
        }
        category {
          name
          no
        }
        level {
          name
        }
      }
    `,
  },
};
