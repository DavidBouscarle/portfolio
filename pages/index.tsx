import Head from "next/head";
import Image from "next/image";
import { Jost } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const jost = Jost({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>David Bouscarle | Photography</title>
                <meta
                    name="description"
                    content="David Bouscarle photography portfolio, under construction, comming soon..."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <main className={styles.main}></main>
        </>
    );
}