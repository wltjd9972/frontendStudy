// import '../styles/globals.css'

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

//모든 페이지에서 하는 공통 설정을 _app.js에서 진행


export default function App({ Component, pageProps }) {

  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql", //graphql 플레이그라운드 사이트 입력
    cache: new InMemoryCache() // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해놓기 => 나중에 더 자세히 알아보기
  })

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} /> 
    </ApolloProvider>
  )
}
