// 状態を扱う
// 配列の1番目に初期値, 2に更新関数
// 更新関数の呼び出しで状態変化、フックコンポーネントは再描画

// カウンターコンポーネント
import { useState } from "react";

type CounterProps = {
  initialValue: number
}

const Counter = (props: CounterProps) =>{
  const initialValue = props.initialValue;

  // useState()で、状態を宣言
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <p>Count:{count}</p>
      {/* 更新関数を呼び、状態を更新 */}
      <button onClick={() => setCount(count - 1)}>-</button>
      {/* prevCount: 前回の値を参照。useStateフックのコールバック関数(今回でいうsetCount)に渡すことが出来る引数 */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  )
}

export default Counter