import React from "react"

// コンテキストの作成。createContextの第一引数はデフォルト値らしい。
const TitleContext = React.createContext("");

// Contextの値を参照
const Title = () => {
  return (
    <TitleContext.Consumer>
      {/* Consumer直下の関数で、Contextの値を参照 */}
      {(title) => {
        return <h1>{title}</h1>
      }}
    </TitleContext.Consumer>
  )
}

// コンポーネントを跨ぐ
const Header = () => {
  return (
    <div>
      {/* Header から Titleへデータは渡さない */}
      <Title/>
    </div>
  )
}

// Contextに値をセット
const Page = () => {
  const title = `React Book`;

  // Provederで、Contextに値をセット
  return (
    <TitleContext.Provider value={title}>
      {/* Provider以下のコンポーネントから、Contextを参照できる*/}
      <Header/>
    </TitleContext.Provider>
  )
}

export default Page