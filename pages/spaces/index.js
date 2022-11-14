import Head from "next/head";
import { useRouter } from "next/router";
import { Calendar } from "react-calendar";
import styles from "../../styles/Home.module.css";
export default function Home() {
  const route = useRouter();
  const handleTileSelection = () => {
    // route.push("/");
    return <Calendar />;
  };
  return (
    <div>
      <Head>
        <title>Scheduler</title>
        <meta name="Scheduler" content="Assign your meeting rooms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.tile} onClick={handleTileSelection}>
          1
        </div>
      </main>
    </div>
  );
}
