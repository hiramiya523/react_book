const Hello = () => {
  const onClick = () => {
    alert("Hello");
  }
  const text = "React";

  return (
    <div onClick={onClick}>
      こんにちは、{text}さん。
    </div>
  )
}

export default Hello