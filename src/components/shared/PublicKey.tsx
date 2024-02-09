import axios from "axios";
import React, {useEffect, useState} from "react";
import CodeBlock from '@theme/CodeBlock';
import styles from "./PublicKey.module.css";

// this fallback needs to be updated when the key cycles
const PUBLIC_KEY_FALLBACK = `-----BEGIN PGP PUBLIC KEY BLOCK-----

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
=4nRa
-----END PGP PUBLIC KEY BLOCK-----
`

export const PublicKey = () => {

  const [publicKey, setPublicKey] = useState<string>();

  useEffect(() => {
    if (!publicKey) {
      axios('https://cdn.basistheory.com/pgp/bt.public.gpg.txt').then(({data}) => {
        setPublicKey(data)
      }).catch(() => {
        // in lower environments this request fails because of CORS
        setPublicKey(PUBLIC_KEY_FALLBACK)
      })
    }
  }, []);

  return <CodeBlock language="text" title="bt.public.gpg.txt" className={styles.publicKey}>{publicKey}</CodeBlock>
}
