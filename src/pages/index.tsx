import Layout from "@theme/Layout";
import React from "react";

import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import clsx from "clsx";
import { Card } from "../components/shared/Card";

import styles from "./index.module.css";

import ApiReference from "@site/static/img/homepage/console.svg";
import Info from "@site/static/img/homepage/info.svg";
import Package from "@site/static/img/homepage/package.svg";
import Question from "@site/static/img/homepage/question.svg";
import Star from "@site/static/img/homepage/star.svg";
import Arrow from "@site/static/img/homepage/arrow.svg";
import Collect from "@site/static/img/homepage/collect-data.svg";
import Share from "@site/static/img/homepage/share-data.svg";
import Process from "@site/static/img/homepage/process-data.svg";
import Govern from "@site/static/img/homepage/govern-data.svg";

import Android from "@site/static/img/sdk/logos/android.svg";
import DotNet from "@site/static/img/sdk/logos/dotnet.svg";
import Go from "@site/static/img/sdk/logos/go.svg";
import JavaScript from "@site/static/img/sdk/logos/javascript.svg";
import Node from "@site/static/img/sdk/logos/nodejs.svg";
import Python from "@site/static/img/sdk/logos/python.svg";
import ReactSvg from "@site/static/img/sdk/logos/react.svg";
import Terraform from "@site/static/img/sdk/logos/terraform.svg";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <div className={clsx(["col", styles.container])}>
        <header>
          <h1>Integrate with Basis Theory</h1>
          <p>
            Basis Theory will guide you on how to safely collect, share, process
            and govern your data in your applications.
          </p>
          <Card className={styles.card}>
            <div className={styles["card-body"]}>
              <div>
                <ThemedImage
                  sources={{
                    light: useBaseUrl(
                      "/img/homepage/light/getting-started.svg"
                    ),
                    dark: useBaseUrl("/img/homepage/dark/getting-started.svg"),
                  }}
                />
                <p>Get Started</p>
              </div>
              <Arrow />
              <div>
                <ThemedImage
                  sources={{
                    light: useBaseUrl("/img/homepage/light/collect-data.svg"),
                    dark: useBaseUrl("/img/homepage/dark/collect-data.svg"),
                  }}
                />
                <p>Collect Data</p>
              </div>

              <Arrow />
              <div>
                <ThemedImage
                  sources={{
                    light: useBaseUrl("/img/homepage/light/share-data.svg"),
                    dark: useBaseUrl("/img/homepage/dark/share-data.svg"),
                  }}
                />
                <p>Share Data</p>
              </div>
              <Arrow />
              <div>
                <ThemedImage
                  sources={{
                    light: useBaseUrl("/img/homepage/light/process-data.svg"),
                    dark: useBaseUrl("/img/homepage/dark/process-data.svg"),
                  }}
                />
                <p>Process Data</p>
              </div>
              <Arrow />
              <div>
                <ThemedImage
                  sources={{
                    light: useBaseUrl("/img/homepage/light/govern-data.svg"),
                    dark: useBaseUrl("/img/homepage/dark/govern-data.svg"),
                  }}
                />
                <p>Govern Data</p>
              </div>
            </div>
          </Card>
        </header>
        <main>
          <div className={styles["quickstarts"]}>
            <h2>Quickstarts</h2>
            <div className={styles["quickstarts-container"]}>
              <div>
                Web Applications
                <div className={styles["quickstart-column"]}>
                  <Card img={<DotNet />} className={styles.quickstart}>
                    .NET
                  </Card>
                  <Card img={<Go />} className={styles.quickstart}>
                    Go
                  </Card>
                  <Card img={<Node />} className={styles.quickstart}>
                    NodeJS
                  </Card>
                  <Card img={<Python />} className={styles.quickstart}>
                    Python
                  </Card>
                  <Card img={<Terraform />} className={styles.quickstart}>
                    Terraform
                  </Card>
                </div>
              </div>
              <div>
                Single Page Applications
                <div className={styles["quickstart-column"]}>
                  <Card img={<ReactSvg />} className={styles.quickstart}>
                    React
                  </Card>
                  <Card img={<JavaScript />} className={styles.quickstart}>
                    Javascript
                  </Card>
                </div>
              </div>
              <div className={styles["quickstart-column"]}>
                Mobile
                <div className={styles["quickstart-column"]}>
                  <Card img={<Android />} className={styles.quickstart}>
                    Android
                  </Card>
                  <Card
                    img={
                      <ThemedImage
                        width="100%"
                        height="100%"
                        sources={{
                          light: useBaseUrl("/img/sdk/logos/apple.svg"),
                          dark: useBaseUrl("/img/sdk/logos/apple-dark.svg"),
                        }}
                      />
                    }
                    className={styles.quickstart}
                  >
                    iOS
                  </Card>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["explore-cards-container"]}>
            <h2>Explore Basis Theory</h2>
            <div className={styles["explore-cards"]}>
              <Card img={<ApiReference />} heading="API Reference" column>
                Meatloaf shoulder ground round jerky chuck, ham filet mignon.
              </Card>
              <Card img={<Package />} heading="SDKs" column>
                Meatloaf shoulder ground round jerky chuck, ham filet mignon.
              </Card>
              <Card img={<Info />} heading="Concepts" column>
                Meatloaf shoulder ground round jerky chuck, ham filet mignon.
              </Card>
              <Card img={<Star />} heading="Migration Guides" column>
                Meatloaf shoulder ground round jerky chuck, ham filet mignon.
              </Card>
              <Card img={<Question />} heading="Support" column>
                Meatloaf shoulder ground round jerky chuck, ham filet mignon.
              </Card>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
