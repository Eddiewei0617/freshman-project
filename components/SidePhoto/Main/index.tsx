import React, { useEffect, useState } from "react";
import { BodySTY } from "./style";
import { TYPE_CURATION } from "@root/typings/graphql";

export function FirstArea(props) {
  const { data } = props;

  const [curation, setCuration] = useState<TYPE_CURATION[]>([]);
  useEffect(() => {
    if (data) {
      setCuration((prev) => [...prev, data.curation.data]);
    }
  }, [data]);

  return (
    <>
      <BodySTY>
        {curation.map((v, i) => {
          return (
            <div key={i}>
              <div className="bigImg">
                <img src={v.main_image_path} />
              </div>
              <div className="firstarea">
                <div className="firstImg">
                  <img src={v.content_image_path} />
                </div>
                <p>{v.desp}</p>
              </div>
            </div>
          );
        })}
      </BodySTY>
    </>
  );
}
