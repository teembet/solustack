import Head from "next/head";
import styles from "../styles/Home.module.css";
import * as React from "react";
import HomePage from "./HomePage";
import Navbar from "../components/shared/Navbar";
import useFetchProjects from "../hooks/useFetchProjects";
import { useProjectContext } from "../hooks/useProjectContext";
import { Router } from "next/router";
import NProgress from "nprogress";
export default function Home() {
  const { getProjects } = useFetchProjects();
  const { projects, isLoading } = useProjectContext();
  React.useEffect(() => {
    getProjects();
  }, []);
  React.useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      NProgress.start();
      isLoading;
    });

    Router.events.on("routeChangeComplete", (url) => {
      NProgress.done(false);
      isLoading;
    });

    Router.events.on("routeChangeError", (url) => {
      isLoading;
      NProgress.done(false);
    });
  }, [Router]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Solutack</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Navbar />
      <main className="bg-white dark:bg-darkBg">
        <HomePage projects={projects} />
      </main>
    </div>
  );
}
