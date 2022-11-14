import Head from "next/head";
import styles from "../styles/Home.module.css";
import * as React from "react";
import HomePage from "./HomePage";
import Navbar from "../components/shared/Navbar";
import useFetchProjects from "../hooks/useFetchProjects";
import { useProjectContext } from "../hooks/useProjectContext";
import { Router } from "next/router";
import NProgress from "nprogress";
import { useInView } from "react-intersection-observer";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  const { getProjects, getReviews, getSocials } = useFetchProjects();
  const { projects, isLoading, reviews, socials } = useProjectContext();

  React.useEffect(() => {
    getProjects();
    getReviews();
    getSocials();
  }, []);

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const [ref1, inView1] = useInView({
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.1,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.5,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.5,
  });
  const [ref5, inView5] = useInView({
    threshold: 0.5,
  });
  const [ref6, inView6] = useInView({
    threshold: 0.5,
  });

  const activeTab = () => {
    if (inView) {
      return "About Us";
    } else if (inView1 && !inView2) {
      return "About Us";
    } else if (inView2) {
      return "Our Services";
    } else if (inView3) {
      return "Featured Projects";
    } else if (inView4) {
      return "Why Us";
    } else if (inView5) {
      return "Get In Touch";
    }
  };

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
        <meta
          name="description"
          content="We're a consultative app development company for businesses of all sizes and industries. One-stop solution for all your digital needs."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=supreme@800,400,300,500,700&display=swap"
          rel="stylesheet"
        ></link>
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
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="canonical" href="https://solustack.com/" />
      </Head>

      <main className="bg-dark4 backdrop-blur-sm ">
        <Navbar activeTab={activeTab} socials={socials} />

        <HomePage
          projects={projects}
          reviews={reviews}
          //  ref={ref}
          ref1={ref1}
          ref2={ref2}
          ref3={ref3}
          ref4={ref4}
          ref5={ref5}
          inView={inView}
        />
      </main>
    </div>
  );
}
