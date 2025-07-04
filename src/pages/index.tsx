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
import Question from "@site/static/img/homepage/question.svg";
import Blueprint from "@site/static/img/homepage/blueprint.svg";

import Android from "@site/static/img/sdk/logos/android.svg";
import DotNet from "@site/static/img/sdk/logos/dotnet.svg";
import Go from "@site/static/img/sdk/logos/go.svg";
import JavaScript from "@site/static/img/sdk/logos/javascript.svg";
import Node from "@site/static/img/sdk/logos/nodejs.svg";
import Python from "@site/static/img/sdk/logos/python.svg";
import ReactSvg from "@site/static/img/sdk/logos/react.svg";
import Terraform from "@site/static/img/sdk/logos/terraform.svg";
import Java from "@site/static/img/sdk/logos/java.svg";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <div className={clsx(["col", styles.container])}>
        <header>
          <h1>Basis Theory Docs</h1>
          <p>Basis Theory will guide you on how to safely collect, share, process and govern your data in your applications.</p>
        </header>
        <main>
          <div className={styles["explore-cards-container"]}>
            <h2>Start Building</h2>
            <div className={styles["explore-cards"]}>
              <Card
                href="/docs/"
                img={
                  <ThemedImage
                    alt="Getting Started icon"
                    sources={{
                      light: "/img/homepage/light/getting-started.png",
                      dark: "/img/homepage/dark/getting-started.png",
                    }}
                    className={styles["explore-cards-image"]}
                  />
                }
                heading={<Card.PrimaryHeader>Getting Started</Card.PrimaryHeader>}
                column
                raised
              >
                A quick overview of how Basis Theory works and key concepts.
              </Card>
              <Card
                href="/docs/card-payments"
                img={
                  <ThemedImage
                    alt="Card icon"
                    sources={{
                      light: "/img/homepage/light/cards.png",
                      dark: "/img/homepage/dark/cards.png",
                    }}
                    className={styles["explore-cards-image"]}
                  />
                }
                heading={<Card.PrimaryHeader>Card Payments</Card.PrimaryHeader>}
                column
                raised
              >
                Integrate Basis Theory to optimize payments, increase flexibility, and reduce complexity.
              </Card>
              <Card
                href="/docs/guides/any"
                img={
                  <ThemedImage
                    alt="Any Data icon"
                    sources={{
                      light: "/img/homepage/light/any-data.png",
                      dark: "/img/homepage/dark/any-data.png",
                    }}
                    className={styles["explore-cards-image"]}
                  />
                }
                heading={<Card.PrimaryHeader>Any Data</Card.PrimaryHeader>}
                column
                raised
              >
                Guides for collecting, sharing and processing any type of data.
              </Card>
            </div>
          </div>

          <div className={styles["sdks"]}>
            <h2>Basis Theory SDKs</h2>
            <div className={styles["sdks-container"]}>
              <div>
                Server-side SDKs
                <div className={styles["sdk-column"]}>
                  <Card href="/docs/sdks/server-side/dotnet" img={<DotNet />} className={styles.sdk}>
                    .NET
                  </Card>
                  <Card href="/docs/sdks/server-side/java" img={<Java />} className={styles.sdk}>
                    Java
                  </Card>
                  <Card href="/docs/sdks/server-side/go" img={<Go />} className={styles.sdk}>
                    Go
                  </Card>
                  <Card href="/docs/sdks/server-side/node" img={<Node />} className={styles.sdk}>
                    NodeJS
                  </Card>
                  <Card href="/docs/sdks/server-side/python" img={<Python />} className={styles.sdk}>
                    Python
                  </Card>
                  <Card href="/docs/sdks/server-side/terraform" img={<Terraform />} className={styles.sdk}>
                    Terraform
                  </Card>
                </div>
              </div>
              <div>
                Web SDKs
                <div className={styles["sdk-column"]}>
                  <Card href="/docs/sdks/web/web-elements/?implementation=react" img={<ReactSvg />} className={styles.sdk}>
                    React
                  </Card>
                  <Card href="/docs/sdks/web/web-elements/" img={<JavaScript />} className={styles.sdk}>
                    Javascript
                  </Card>
                </div>
              </div>
              <div className={styles["sdk-column"]}>
                Mobile SDKs
                <div className={styles["sdk-column"]}>
                  <Card
                    href="/docs/sdks/mobile/ios/"
                    img={
                      <div className={styles["logo-container"]}>
                        <ThemedImage
                          width="100%"
                          height="100%"
                          sources={{
                            light: useBaseUrl("/img/sdk/logos/apple.svg"),
                            dark: useBaseUrl("/img/sdk/logos/apple-dark.svg"),
                          }}
                        />
                      </div>
                    }
                    className={styles.sdk}
                  >
                    iOS
                  </Card>
                  <Card href="/docs/sdks/mobile/android/" img={<Android />} className={styles.sdk}>
                    Android
                  </Card>
                  <Card href="/docs/sdks/mobile/react-native/" img={<ReactSvg />} className={styles.sdk}>
                    React Native
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["explore-cards-container"]}>
            <h2>Explore Basis Theory</h2>
            <div className={styles["explore-cards"]}>
              <Card href="/docs/api/" img={<ApiReference />} heading="API Reference" column>
                API endpoints to manage the full lifecycle of your data and Basis Theory resources.
              </Card>
              <Card href="/docs/concepts/" img={<Info />} heading="Concepts" column>
                Learn about key concepts of Basis Theory's platform.
              </Card>
              <Card href="/docs/" img={<Blueprint />} heading="Guides" column>
                Explore end-to-end guides for your regulatory and compliance use cases.
              </Card>
              <Card href="https://github.com/Basis-Theory-Labs" img={<Blueprint />} heading="Basis Theory Labs" column>
                Code examples and tools to help you get started faster.
              </Card>
              <Card href="https://support.basistheory.com/" img={<Question />} heading="Support" column>
                Have a question or problem with your integration? Reach out to get support
              </Card>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
