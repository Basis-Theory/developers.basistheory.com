import axios from "axios";
import React, { useEffect, useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import styles from "./PublicKey.module.css";

// this fallback needs to be updated when the key cycles
const PUBLIC_KEY_FALLBACK = `-----BEGIN PGP PUBLIC KEY BLOCK-----

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
=Ru3w
-----END PGP PUBLIC KEY BLOCK-----
`;

export const PublicKey = () => {
  const [publicKey, setPublicKey] = useState<string>();

  useEffect(() => {
    if (!publicKey) {
      axios("https://cdn.basistheory.com/pgp/bt.public.gpg.txt")
        .then(({ data }) => {
          setPublicKey(data);
        })
        .catch(() => {
          // in lower environments this request fails because of CORS
          setPublicKey(PUBLIC_KEY_FALLBACK);
        });
    }
  }, []);

  return (
    <CodeBlock language="text" title="bt.public.gpg.txt" className={styles.publicKey}>
      {publicKey}
    </CodeBlock>
  );
};
