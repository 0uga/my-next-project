import Image from "next/image";

import styles from "./NewsList.module.scss";
import { News } from "@/app//_libs/microcms";


type Props = {
    news: News[];
};

export default function NewsList({ news }: Props) {
    if (news.length === 0) {
        return <p>記事がありません</p>;
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
                            <dd className={styles.meta}>
                                <span className={styles.tag}>{article.category.name}</span>
                                <span className={styles.date}>
                                    <Image
                                        src="/calendar.svg"
                                        alt=""
                                        width={16}
                                        height={16}
                                        priority
                                    />
                                    {article.publishedAt}
                                </span>
                            </dd>
                        </dl>
                    </div>
                </li>
            ))}
        </ul>
    );
}