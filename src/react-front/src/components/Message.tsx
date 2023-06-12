// Oomponentに外部からデータを与えるにはpropsを利用する
// 親から、contentというデータを受け取る
// データの流れは、親から子の一方通行。値の変更も不可。
const Text = (props: {content: string}) => {
  // propsから、contentという値を取り出す
  const {content} = props;
  return <p className="text">{content}</p>
}

// 無理してprops書かなくていいんじゃないかな。。。
const Message = (props: {}) => {
  const content_1 = "This is parent component";
  const content_2 = "Message uses Text component";

  return (
    <div>
      {/* contentという名のkeyでコンポーネントにデータを渡す */}
      <Text content={content_1} />
      <Text content={content_2} />
    </div>
  )
}

export default Message;