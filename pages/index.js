import Head from "next/head";
import Image from "next/image";
import AddTop from "../components/Advertisement/AddTop";
import BollywoodNews from "../components/BollywoodNews";
import Contentcard from "../components/Card/Contentcard";
import Television from "../components/Television";
import Content from "../components/Content";
import Detailspage from "../components/Detailspage";
import JustBing from "../components/JustBing";
import LatestNews from "../components/LatestNews";

import Layout from "../components/layout/layout";
import Photos from "../components/Photos";
import styles from "../styles/Home.module.css";
import Slug from "./Slug/[slug]";
import NavitemLink from "../components/Card/NavitemLink";
import MobileDC3 from "../components/Card/MobileDC3";

export default function Home() {
  return (
    <>
      <div className="fontcss">
        <Layout>
          <div className="my-36">
            <div className="my-5">
              <AddTop />
            </div>
            <Content />
            <div className="my-5">
              <AddTop />
            </div>
            <BollywoodNews />
            <div className="my-5">
              <AddTop />
            </div>
            <JustBing />
            <div className="my-5">
              <AddTop />
            </div>
            <Television />
            <Photos />
            <LatestNews />
            <Slug />
            <NavitemLink />
            <MobileDC3 />
          </div>
        </Layout>
      </div>
    </>
  );
}