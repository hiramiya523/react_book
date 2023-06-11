import React from "react";

// 名前を入力するためのテキストボックスを返す
const Name = () => {
  // onChangeの引数には、ChangeEvent型のイベント引数が必要。any型でもコンパイル通るらしいが。。。
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    console.log(e.target.value);
  }

  return (
    // 最初の{}は、JSの記述宣言。2つ目の{}はオブジェクト。
    <div style={{padding:'16px', backgroundColor: 'gray'}}>
      {/* forはjsの予約語なので、htmlFors */}
      <label htmlFor="name">名前</label>
      {/* classや、onchangeも同様 */}
      <input type="text" id="name" className="input-name" onChange={onChange} />
    </div>
  )
}

export default Name