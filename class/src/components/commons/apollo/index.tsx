import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { useEffect } from "react";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  /* 1.프리렌더링 에제 process.browser 방법
  if (process.browser) { 
    const result = localStorage.getItem("accessToken");
    setAccessToken(result ?? "");
  } else {
    console.log("아직 브라우저 안감");
  }*/

  /* 2.프리렌더링 예제 = typeof window 방법
  if (process.browser) { 
    const result = localStorage.getItem("accessToken");
    setAccessToken(result ?? "");
  } else {
    console.log("아직 브라우저 안감");
  }*/

  // 3. 프리렌더링 무시 - useEffect 방법
  useEffect(() => {
    const result = localStorage.getItem("accessToken");
    setAccessToken(result ?? "");
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql", //백엔드 서버 주소
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE, // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해놓기 => 나중에 더 자세히 알아보기
  });

  //prettier-ignore
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
