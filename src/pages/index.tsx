import Layout from "@theme/Layout";
import React, { ComponentProps, useEffect, useState } from "react";

import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import clsx from "clsx";
import { Card } from "../components/shared/Card";

import styles from "./index.module.css";

import Collect from "@site/static/img/getting-started/icons/collect.svg";

import ApiReference from "@site/static/img/homepage/console.svg";
import Info from "@site/static/img/homepage/info.svg";
import Package from "@site/static/img/homepage/package.svg";
import Question from "@site/static/img/homepage/question.svg";
import Arrow from "@site/static/img/homepage/arrow.svg";
import Blueprint from "@site/static/img/homepage/blueprint.svg";

import Android from "@site/static/img/sdk/logos/android.svg";
import DotNet from "@site/static/img/sdk/logos/dotnet.svg";
import Go from "@site/static/img/sdk/logos/go.svg";
import JavaScript from "@site/static/img/sdk/logos/javascript.svg";
import Node from "@site/static/img/sdk/logos/nodejs.svg";
import Python from "@site/static/img/sdk/logos/python.svg";
import ReactSvg from "@site/static/img/sdk/logos/react.svg";
import Terraform from "@site/static/img/sdk/logos/terraform.svg";
import Link from "@docusaurus/Link";

interface Image {
  id: string;
  sources: ComponentProps<typeof ThemedImage>["sources"];
}

const Image = ({ sources, id }: Image) => {
  const [hover, setHover] = useState(false);
  const [step, setStep] = useState(null);

  const toggleState = (e) => {
    setStep(e.target.id);
    setHover(!hover);
  };

  return (
    <div
      onMouseEnter={toggleState}
      onMouseLeave={toggleState}
      className={clsx({
        [styles[`${step}-img--hover`]]: hover && step,
        [styles["img-container--hover"]]: hover,
        [styles[`${id}-img-container`]]: !!id,
        [styles["img-container"]]: true,
      })}
    >
      <ThemedImage
        id={id}
        sources={{
          light: useBaseUrl(sources.light),
          dark: useBaseUrl(sources.dark),
        }}
      />
    </div>
  );
};

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
          <Card className={styles.card} hoverable={false}>
            <div className={styles["card-body"]}>
              <Link to="/docs/">
                <div>
                  <Image
                    id="getting-started"
                    sources={{
                      light: "/img/homepage/light/getting-started.png",
                      dark: "/img/homepage/dark/getting-started.png",
                    }}
                  />
                  <p>Get Started</p>
                </div>
              </Link>
              <Arrow className={styles.arrow} />
              <Link to="/docs/guides/collect/">
                <div>
                  <Image
                    id="collect-data"
                    sources={{
                      light: "/img/homepage/light/collect-data.png",
                      dark: "/img/homepage/dark/collect-data.png",
                    }}
                  />
                  <p>Collect Data</p>
                </div>
              </Link>
              <Arrow className={styles.arrow} />
              <Link to="/docs/guides/share/">
                <div>
                  <Image
                    id="share-data"
                    sources={{
                      light: "/img/homepage/light/share-data.png",
                      dark: "/img/homepage/dark/share-data.png",
                    }}
                  />
                  <p>Share Data</p>
                </div>
              </Link>
              <Arrow className={styles.arrow} />
              <Link to="/docs/guides/process/">
                <div>
                  <Image
                    id="process-data"
                    sources={{
                      light: "/img/homepage/light/process-data.png",
                      dark: "/img/homepage/dark/process-data.png",
                    }}
                  />
                  <p>Process Data</p>
                </div>
              </Link>
              <Arrow className={styles.arrow} />
              <Link to="/docs/guides/govern/">
                <div>
                  <Image
                    id="govern-data"
                    sources={{
                      light: "/img/homepage/light/govern-data.png",
                      dark: "/img/homepage/dark/govern-data.png",
                    }}
                  />
                  <p>Govern Data</p>
                </div>
              </Link>
            </div>
          </Card>
        </header>
        <main>
          <div className={styles["explore-cards-container"]}>
            <h2>Start Building</h2>
            <div className={styles["explore-cards"]}>
              <Card
                href="/docs/guides/collect/collect-data-from-web"
                img={<Collect />}
                heading="Collect Data from Web"
                column
              >
                Securely collect data in your web browser.
              </Card>
              <Card
                href="/docs/guides/collect/collect-inbound-data-to-api"
                img={<Collect />}
                heading="Collect Inbound Data to API"
                column
              >
                Tokenize sensitive data before it touches your API.
              </Card>
            </div>
          </div>

          <div className={styles["quickstarts"]}>
            <h2>SDKs</h2>
            <div className={styles["quickstarts-container"]}>
              <div>
                Server-side SDKs
                <div className={styles["quickstart-column"]}>
                  <Card
                    href="/docs/sdks/server-side/dotnet"
                    img={<DotNet />}
                    className={styles.quickstart}
                  >
                    .NET
                  </Card>
                  <Card
                    href="/docs/sdks/server-side/go"
                    img={<Go />}
                    className={styles.quickstart}
                  >
                    Go
                  </Card>
                  <Card
                    href="/docs/sdks/server-side/node"
                    img={<Node />}
                    className={styles.quickstart}
                  >
                    NodeJS
                  </Card>
                  <Card
                    href="/docs/sdks/server-side/python"
                    img={<Python />}
                    className={styles.quickstart}
                  >
                    Python
                  </Card>
                  <Card
                    href="/docs/sdks/server-side/terraform"
                    img={<Terraform />}
                    className={styles.quickstart}
                  >
                    Terraform
                  </Card>
                </div>
              </div>
              <div>
                Web SDKs
                <div className={styles["quickstart-column"]}>
                  <Card
                    href="/docs/sdks/web/javascript/"
                    img={<JavaScript />}
                    className={styles.quickstart}
                  >
                    Javascript
                  </Card>
                  <Card
                    href="/docs/sdks/web/react/"
                    img={<ReactSvg />}
                    className={styles.quickstart}
                  >
                    React
                  </Card>
                </div>
              </div>
              <div className={styles["quickstart-column"]}>
                Mobile SDKs
                <div className={styles["quickstart-column"]}>
                  <Card
                    href="/docs/sdks/mobile/ios/"
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
                  <Card
                    href="/docs/sdks/mobile/android/"
                    img={<Android />}
                    className={styles.quickstart}
                  >
                    Android
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["explore-cards-container"]}>
            <h2>Explore Basis Theory</h2>
            <div className={styles["explore-cards"]}>
              <Card
                href="/docs/api/"
                img={<ApiReference />}
                heading="API Reference"
                column
              >
                API endpoints to manage the full lifecycle of your data and
                Basis Theory instance.
              </Card>
              <Card href="/docs/sdks/" img={<Package />} heading="SDKs" column>
                Libraries and tools for interacting with your Basis Theory
                integration.
              </Card>
              <Card
                href="/docs/concepts/"
                img={<Info />}
                heading="Concepts"
                column
              >
                Learn about key concepts of Basis Theory's platform.
              </Card>
              <Card
                href="/docs/blueprints/"
                img={<Blueprint />}
                heading="Blueprints"
                column
              >
                Explore end-to-end guides for your regulatory and compliance use
                cases.
              </Card>
              <Card
                href="https://support.basistheory.com/"
                img={<Question />}
                heading="Support"
                column
              >
                Have a question or problem with your integration? Reach out to
                get support from one of our engineers.
              </Card>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
