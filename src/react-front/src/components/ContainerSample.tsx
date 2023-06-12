// propsの型を定義

import React from "react";

// 型エイリアス(自分で型を定義できる). interfaceと似ているが、継承不可。
type ContainerProps = {
  title:string
  children: React.ReactNode
}

// Containerの、childrenの利用方法
// 開始・終了タグで囲われた
// const Container = (props:{ title: string; children: React.ReactElement }) => {
const Container = (props: ContainerProps) => {
  const {title, children} = props;

  return (
    <div style={{background: 'red'}}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  )
}

const Parent = () => {
  return (
    // childrenで渡す要素を囲う
    <Container title="Hello Children">
      <p>私はコンテナです。ここの部分が背景色で囲われます。</p>
    </Container>
  )
}

export default Parent;