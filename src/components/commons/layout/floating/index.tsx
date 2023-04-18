import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

import { v4 as uuidv4 } from "uuid";

export default function TodayViewedProduct() {
  const router = useRouter();

  const [recentlyLists, setRecentlyLists] = useState([]);
  useEffect(() => {
    const baskets = JSON.parse(sessionStorage.getItem("baskets") ?? "[]");
    setRecentlyLists(baskets);
  }, [router]);

  const Wrapper = styled.div`
    background-color: #f1e1d9;
    border: 1px solid #98847b;
    padding: 12px 0px;
    position: fixed;
    top: 30%;
    right: 20px;
    z-index: 2;
  `;
  const H5 = styled.h5`
    margin-bottom: 15px;
    font-size: 13px;
    text-align: center;
  `;
  const BoxWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  `;
  const Box = styled.div`
    width: 85px;
    height: 85px;
    background-color: #c4c4c4;
    & > a > img {
      width: 100%;
      height: 100%;
    }
  `;

  return (
    <>
      {recentlyLists?.length >= 0 && (
        <Wrapper>
          <H5>최근 본 상품</H5>

          <BoxWrap>
            {recentlyLists.map((cur: any) => (
              <Box key={cur?._id + uuidv4}>
                <Link href={`/products/${cur?._id}`}>
                  <a>
                    {cur?.images[0] && (
                      <img
                        src={`https://storage.googleapis.com/${cur?.images[0]}`}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src = "/music5.jpg";
                        }}
                      />
                    )}
                  </a>
                </Link>
              </Box>
            ))}
          </BoxWrap>
        </Wrapper>
      )}
    </>
  );
}
