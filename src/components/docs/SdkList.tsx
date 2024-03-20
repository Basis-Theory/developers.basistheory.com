import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

import { Card } from "@site/src/components/shared/Card";
import styles from "@site/src/pages/index.module.css";
import JavaScript from "@site/static/img/sdk/logos/javascript.svg";
import Android from "@site/static/img/sdk/logos/android.svg";
import ReactSvg from "@site/static/img/sdk/logos/react.svg";
import DotNet from "@site/static/img/sdk/logos/dotnet.svg";
import Go from "@site/static/img/sdk/logos/go.svg";
import Node from "@site/static/img/sdk/logos/nodejs.svg";
import Python from "@site/static/img/sdk/logos/python.svg";
import Java from "@site/static/img/sdk/logos/java.svg";

export const SdkList = ({ type, sdks }: { type?: keyof typeof SDK_TYPES; sdks: (keyof typeof SDKS)[] }) => {
  const SDKS = {
    dotnet: (
      <Card href="/docs/sdks/server-side/dotnet/" img={<DotNet />} className={styles.sdk}>
        .NET
      </Card>
    ),
    go: (
      <Card href="/docs/sdks/server-side/go/" img={<Go />} className={styles.sdk}>
        Go
      </Card>
    ),
    node: (
      <Card href="/docs/sdks/server-side/node/" img={<Node />} className={styles.sdk}>
        Node
      </Card>
    ),
    python: (
      <Card href="/docs/sdks/server-side/python/" img={<Python />} className={styles.sdk}>
        Python
      </Card>
    ),
    java: (
      <Card href="/docs/sdks/server-side/java/" img={<Java />} className={styles.sdk}>
        Java
      </Card>
    ),
    javascript: (
      <Card href="/docs/sdks/web/javascript/" img={<JavaScript />} className={styles.sdk}>
        Javascript
      </Card>
    ),
    react: (
      <Card href="/docs/sdks/web/react/" img={<ReactSvg />} className={styles.sdk}>
        React
      </Card>
    ),
    ios: (
      <Card
        href="/docs/sdks/mobile/ios/"
        img={
          <div className={styles["logo-container"]}>
            <ThemedImage width="100%" height="100%" sources={{ light: useBaseUrl("/img/sdk/logos/apple.svg"), dark: useBaseUrl("/img/sdk/logos/apple-dark.svg") }} />
          </div>
        }
        className={styles.sdk}
      >
        iOS
      </Card>
    ),
    swift: (
      <Card
        href="https://github.com/Basis-Theory/basistheory-swift"
        img={
          <div className={styles["logo-container"]}>
            <ThemedImage width="100%" height="100%" sources={{ light: useBaseUrl("/img/sdk/logos/apple.svg"), dark: useBaseUrl("/img/sdk/logos/apple-dark.svg") }} />
          </div>
        }
        className={styles.sdk}
      >
        Swift
      </Card>
    ),
    android: (
      <Card href="/docs/sdks/mobile/android/" img={<Android />} className={styles.sdk}>
        Android
      </Card>
    ),
    "react-native": (
      <Card href="/docs/sdks/mobile/react-native/" img={<ReactSvg />} className={styles.sdk}>
        React Native
      </Card>
    ),
  };

  const SDK_TYPES: { [key: string]: (keyof typeof SDKS)[] } = {
    server: ["dotnet", "go", "java", "node", "python"],
    elements: ["javascript", "react", "ios", "android", "react-native"],
    client: ["javascript", "react", "swift", "android", "react-native"],
  };

  return (
    <div className={styles["sdk-column"]}>
      {type && SDK_TYPES[type].map((sdk) => SDKS[sdk])}
      {sdks && sdks.map((sdk) => SDKS[sdk])}
    </div>
  );
};
