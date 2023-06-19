import Layout from "@theme/Layout";
import React, { ComponentProps, useState } from "react";

import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import clsx from "clsx";
import { Card } from "../components/shared/Card";

import styles from "./index.module.css";

import CardIcon from "@site/static/img/getting-started/icons/card.svg";
import PiiIcon from "@site/static/img/getting-started/icons/pii.svg";
import BankIcon from "@site/static/img/getting-started/icons/bank.svg";

import ApiReference from "@site/static/img/homepage/console.svg";
import Info from "@site/static/img/homepage/info.svg";
import Package from "@site/static/img/homepage/package.svg";
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
import Link from "@docusaurus/Link";

interface Step {
  id: string;
  sources: ComponentProps<typeof ThemedImage>["sources"];
  text: string;
}

const Step = ({ sources, id, text }: Step) => {
  const [hover, setHover] = useState(false);

  const toggleState = () => setHover(!hover);

  return (
    <div
      onMouseEnter={toggleState}
      onMouseLeave={toggleState}
      className={clsx({
        [styles.step]: hover,
      })}
    >
      <div
        className={clsx({
          [styles[`${id}-img--hover`]]: hover,
          [styles["img-container--hover"]]: hover,
          [styles[`${id}-img-container`]]: true,
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
      <p>{text}</p>
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
          <div className={styles.cards}>
            <Card className={styles.card} hoverable={false}>
              <div className={styles["card-body"]}>
                <Link to="/docs/">
                  <div>
                    <Step
                      text="Getting Started"
                      id="getting-started"
                      sources={{
                        light: "/img/homepage/light/getting-started.png",
                        dark: "/img/homepage/dark/getting-started.png",
                      }}
                    />
                  </div>
                </Link>
              </div>
            </Card>
            <Card className={styles.card} hoverable={false}>
              <div className={styles["card-body"]}>
                <Link to="/docs/guides/cards/">
                  <div>
                    <Step
                      text="Card Data"
                      id="card-data"
                      sources={{
                        light: "/img/homepage/light/card.png",
                        dark: "/img/homepage/dark/card.png",
                      }}
                    />
                  </div>
                </Link>
                <Link to="/docs/guides/share/">
                  <div>
                    <Step
                      text="PII Data"
                      id="pii-data"
                      sources={{
                        light: "/img/homepage/light/pii.png",
                        dark: "/img/homepage/dark/pii.png",
                      }}
                    />
                  </div>
                </Link>
                <Link to="/docs/guides/process/">
                  <div>
                    <Step
                      text="Bank Data"
                      id="bank-data"
                      sources={{
                        light: "/img/homepage/light/bank.png",
                        dark: "/img/homepage/dark/bank.png",
                      }}
                    />
                  </div>
                </Link>
                <Link to="/docs/guides/govern/">
                  <div>
                    <Step
                      text="Any Data"
                      id="any-data"
                      sources={{
                        light: "/img/homepage/light/any.png",
                        dark: "/img/homepage/dark/any.png",
                      }}
                    />
                  </div>
                </Link>
              </div>
            </Card>
          </div>
        </header>
        <main>
        <div className={styles["sdks"]}>
          <h2>SDKs</h2>
          <div className={styles["sdks-container"]}>
            <div>
              Server-side SDKs
              <div className={styles["sdk-column"]}>
                <Card
                  href="/docs/sdks/server-side/dotnet"
                  img={<DotNet />}
                  className={styles.sdk}
                >
                  .NET
                </Card>
                <Card
                  href="/docs/sdks/server-side/java"
                  img={<Java />}
                  className={styles.sdk}
                >
                  Java
                </Card>
                <Card
                  href="/docs/sdks/server-side/go"
                  img={<Go />}
                  className={styles.sdk}
                >
                  Go
                </Card>
                <Card
                  href="/docs/sdks/server-side/node"
                  img={<Node />}
                  className={styles.sdk}
                >
                  NodeJS
                </Card>
                <Card
                  href="/docs/sdks/server-side/python"
                  img={<Python />}
                  className={styles.sdk}
                >
                  Python
                </Card>
                <Card
                  href="/docs/sdks/server-side/terraform"
                  img={<Terraform />}
                  className={styles.sdk}
                >
                  Terraform
                </Card>
              </div>
            </div>
            <div>
              Web SDKs
              <div className={styles["sdk-column"]}>
                <Card
                  href="/docs/sdks/web/javascript/"
                  img={<JavaScript />}
                  className={styles.sdk}
                >
                  Javascript
                </Card>
                <Card
                  href="/docs/sdks/web/react/"
                  img={<ReactSvg />}
                  className={styles.sdk}
                >
                  React
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
                <Card
                  href="/docs/sdks/mobile/android/"
                  img={<Android />}
                  className={styles.sdk}
                >
                  Android
                </Card>
              </div>
            </div>
          </div>
        </div>
          <div className={styles["explore-cards-container"]}>
            <h2>Start Building</h2>
            <div className={styles["explore-cards"]}>
              <Card
                href="/docs/guides/cards/collect-cards"
                img={<CardIcon />}
                heading="Collect Cards"
                column
              >
                Securely collect cardholder data in your web or mobile applications.
              </Card>
              <Card
                href="/docs/guides/collect/collect-inbound-sensitive-data"
                img={<PiiIcon />}
                heading="Collect PII"
                column
              >
                Securely collect SSNs, e-mail, date of birth, etc. in your web or mobile applications.
              </Card>
              <Card
                href="/docs/guides/share/send-data-to-third-party"
                img={<BankIcon />}
                heading="Collect Banking Data"
                column
              >
                Securely collect routing and account numbers in your web or mobile applications.
              </Card>
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
