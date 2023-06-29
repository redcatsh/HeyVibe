import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../../../../components/commons/login-success/LoginSuccess.queries";
import { gql, useMutation, useQuery } from "@apollo/client";
import { UserOutlined } from "@ant-design/icons";
import { Modal } from "antd";

const Wrapper = styled.div`
  height: 70px;
  font-family: "Poppins", sans-serif;
  border-bottom: 1px solid #635751;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: #00000054;
  line-height: 70px;
  border-bottom: 1px solid #dee85c78;
`;

const InnerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 50px;
  height: 100%;
`;

const Left = styled.div`
  display: flex;
`;
const Logo = styled.h3`
  font-size: 25px;
  font-weight: bold;
  font-family: "Poppins";
  color: #fff;
  margin: 0;
  cursor: pointer;
  padding-right: 50px;
`;
const Nav = styled.nav`
  & > ul {
    display: flex;
    flex-direction: row;
    margin: 0;
    height: 100%;

    & > li {
      color: #fff;
      font-weight: 200;
      font-family: "Poppins";
      list-style: none;
      margin-right: 30px;
      cursor: pointer;
      position: relative;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        font-weight: 300;
      }
      &:after {
        width: 0%;
        transition: all 0.3s;
        content: "";
      }
      &:hover:after {
        position: absolute;
        width: 100%;
        bottom: 0;
        height: 2px;
        background-color: #dee85c;
        content: "";
        left: 0;
      }
    }
  }
`;
const Join = styled.nav`
  & > ul {
    display: flex;
    flex-direction: row;
    margin: 0;

    & > li {
      color: #fff;
      font-weight: 200;
      font-family: "Poppins";
      list-style: none;
      margin-right: 30px;
      cursor: pointer;
      position: relative;
      &:last-child {
        margin-right: 0;
        font-size: 13px;
      }
      &:hover {
        font-weight: 300;
      }
      &:after {
        width: 0%;
        transition: all 0.3s;
        content: "";
      }
      &:hover:after {
        position: absolute;
        width: 100%;
        bottom: 0;
        height: 2px;
        background-color: #dee85c;
        content: "";
        left: 0;
      }
    }
  }
`;

const User = styled(UserOutlined)`
  color: #f2f2f2;
  & > svg {
    font-size: 18px;
    border: 1px solid #f2f2f2;
    border-radius: 50%;
    padding: 1px;
    margin-bottom: -1px;
  }
`;

const LogoCus = styled.img`
  width: 20%;
  object-fit: contain;
  filter: invert(1);
  cursor: pointer;
`;

export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function MyHeader() {
  const [logoutUser] = useMutation(LOGOUT_USER);
  const onClickLogout = async () => {
    try {
      const result = await logoutUser();
      router.push("/");
      location.reload();
    } catch (error) {
      Modal.error({ content: "다시 한번 확인해주세요." });
    }
  };
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const router = useRouter();

  const onClickBoard = () => {
    router.push(`/board`);
  };

  const onClickPlaylist = () => {
    router.push(`/playlist`);
  };

  const onClickHome = () => {
    router.push(`/`);
  };

  const onClickLogin = () => {
    router.push("/login");
  };

  const onClickJoin = () => {
    router.push("/join");
  };

  const onClickMarket = () => {
    router.push("/products");
  };

  const onClickMypage = () => {
    router.push("/mypage");
  };

  return (
    <Wrapper>
      <InnerHeader>
        <Left>
          {/* <Logo onClick={onClickHome}>MyMusic</Logo> */}
          <LogoCus src="/logocust.png" onClick={onClickHome} />
          <Nav>
            <ul>
              <li onClick={onClickPlaylist}>Playlist</li>
              <li onClick={onClickBoard}>Recommend</li>
              <li onClick={onClickMarket}>Market</li>
            </ul>
          </Nav>
        </Left>

        <Join>
          <ul>
            {/* <li onClick={onClickLogin}>
              {data?.fetchUserLoggedIn.name ? "Logout" : "Login"}
            </li> */}
            {data?.fetchUserLoggedIn.name ? (
              <li onClick={onClickLogout}>Logout</li>
            ) : (
              <li onClick={onClickLogin}>Login</li>
            )}
            <li onClick={onClickJoin}>
              {data?.fetchUserLoggedIn.name ? "" : "Join"}
            </li>
            <li onClick={onClickMypage}>
              <User /> {data?.fetchUserLoggedIn.name}
              {data?.fetchUserLoggedIn.name ? "님" : ""}
            </li>
          </ul>
        </Join>
      </InnerHeader>
    </Wrapper>
  );
}
