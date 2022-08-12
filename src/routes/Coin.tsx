import { useParams } from "react-router-dom";

function Coin() {
  const { coinId } = useParams();

  return <h1>Coin: {coinId}</h1>;
}

export default Coin;

// react-router-dom v6 이상일 경우 usePrams를 사용하는 순간 타입이 string|undefined로 default됨
