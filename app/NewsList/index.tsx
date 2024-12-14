import Image from "next/image";

import styles from "./NewsList.module.scss";

type news = {
    id: string;
    title: string;
    category: {
        name: string;
    };
    publishedAt: string;
    createdAt: string;
}

type Props = {
    news: news[];
}

export default function NewsList({ news }: Props) {
    if (news.length === 0) {
        return <div>記事がありません</div>;
    }
    return (
        <ul>
            {news.map((article) => (
                <li key={article.id} className={styles.list}>
                    <div className={styles.limk}>
                        <Image
                            className={styles.image}
                            src="/no-Image.png"
                            alt="No Image"
                            width={1200}
                            height={630}
                        />
                        <dl className={styles.content}>
                            <dt className={styles.content}>{article.title}</dt>
                            <dd className={styles.meta}
                        </dl>
                    </div>
                </li>
            )
        </ul>
}