import { ClientComponent } from "./ClientComponent";

export default async function Page({
  params,
}: {
  params: Promise<{ blogId: string }>
}) {

  const { blogId } = await params
  return (<div><span>Here is Blog Page</span><div>blogId is {blogId}</div>
  <ClientComponent /></div>);
}
