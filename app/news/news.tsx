import { getNewsList } from "@/app/_libs/microcms";

export default async function Page() {
    const { contents: news } = await getNewsList();

    return <div>{JSON.stringify(news)}</div>;
}