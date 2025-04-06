export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <span>
        ここはBlogレイアウトで定義したコンテンツです。
        <br />
        以下はblog/配下にあるpage.tsxの内容です
      </span>
      <section>{children}</section>
    </div>
  );
}
