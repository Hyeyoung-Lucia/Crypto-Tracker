# Crypto-Tracker

### **Setup**

- Reset CSS
  https://github.com/zacanger/styled-reset/blob/master/src/index.ts

      ✳ createGlobalStyle : 전역 스타일을 처리
        https://styled-components.cm/docs/api#createglobalstyle

- Google Fonts
  https://fonts.google.com

      > Source Sans Pro

- Flat UI Color
  https://flatuicolors.com/palette/gb

### **APIs**

- [Coinpaprika_1]("https://api.coinpaprika.com/v1/coins)
- [Coinpaprika_2]("https://api.coinpaprika.com/v1/tickers")
- [Crypto Icon API]("https://coinicons-api.vercel.app/")

### **Error**

(1)
react-router-dom v6 이상일 경우 usePrams를 사용하는 순간 타입이 string|undefined로 default됨

(2)

```
<Link to={{
  pathname: `/${coin.id}`,
  state:{name:coin.name}
  }}>
```

> React-router-dom 6 🔻

```
<Link to={`/${coin.id}`} state={coin.name}>
```

(3)

nested routes \_v6

https://ui.dev/react-router-nested-routes/

- 부모 route의 path 마지막에 /\*를 적어 명시적으로 이 route의 내부에서 nested route가 render 될 수 있음을 표시하고 자식 route를 부모 route의 element 내부에 작성하는 방법

Router.tsx 🔻

```
<Route path="/:coinId/*" element={<Coin/>} />
```

Coin.tsx 🔻

```
<Routes>
  <Route path="chart" element={<Chart />} />
  <Route path="price" element={<Price />} />
</Routes>
```

✳Routes가 상대경로도 지원하기 때문에 path="chart"와 같이 써도 동작함.

- 자식 Route를 부모 element의 내부가 아닌 Router.tsx 내부에 작성하는 방법

Router.tsx에서
chart와 price 컴포넌트를 import하고

```
<Route path="/:coinId" element={<Coin />} >
  <Route path="chart" element={<Chart />} />
  <Route path="price" element={<Price />} />
</Route>
```

그리고 이 자식 Route들이 어디에 render 될지 부모의 element안에 Outlet을 이용해 표시해주면 된다.

Coin.tsx에서 Outlet을 import하고,
Overview와 Container 사이에 `<Outlet />`를 작성.

[React router v6 Docs_Nested Routes]("https://reactrouter.com/docs/en/v6/getting-started/overview")

(4)

```
useRouteMatch() => useMatch()
```

: 현재 위치를 기준으로 지정된 경로에 대한 일치 데이터를 반환.

```
const priceMatch = useMatch("/:coinId/price");
const chartMatch = useMatch("/:coinId/chart");
```
