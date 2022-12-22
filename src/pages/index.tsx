import Layout from "@theme/Layout";
import React from "react";

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
import Star from "@site/static/img/homepage/star.svg";
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
              <Link to="/docs/">
                <div>
                  <ThemedImage
                    sources={{
                      light: useBaseUrl(
                        "/img/homepage/light/getting-started.svg"
                      ),
                      dark: useBaseUrl(
                        "/img/homepage/dark/getting-started.svg"
                      ),
                    }}
                  />
                  <p>Get Started</p>
                </div>
              </Link>
              <Arrow className={styles.arrow} />
              <Link to="/docs/guides/collect/">
                <div>
                  <ThemedImage
                    sources={{
                      light: useBaseUrl("/img/homepage/light/collect-data.svg"),
                      dark: useBaseUrl("/img/homepage/dark/collect-data.svg"),
                    }}
                  />
                  <p>Collect Data</p>
                </div>
              </Link>
              <Arrow className={styles.arrow} />
              <Link to="/docs/guides/share/">
                <div>
                  <ThemedImage
                    sources={{
                      light: useBaseUrl("/img/homepage/light/share-data.svg"),
                      dark: useBaseUrl("/img/homepage/dark/share-data.svg"),
                    }}
                  />
                  <p>Share Data</p>
                </div>
              </Link>
              <Arrow className={styles.arrow} />
              <Link to="/docs/guides/process/">
                <div>
                  <ThemedImage
                    sources={{
                      light: useBaseUrl("/img/homepage/light/process-data.svg"),
                      dark: useBaseUrl("/img/homepage/dark/process-data.svg"),
                    }}
                  />
                  <p>Process Data</p>
                </div>
              </Link>
              <Arrow className={styles.arrow} />
              <Link to="/docs/guides/govern/">
                <div>
                  <ThemedImage
                    sources={{
                      light: useBaseUrl("/img/homepage/light/govern-data.svg"),
                      dark: useBaseUrl("/img/homepage/dark/govern-data.svg"),
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
