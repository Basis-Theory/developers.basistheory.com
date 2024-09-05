import axios from "axios";
import React, { useEffect, useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import styles from "./PublicKey.module.css";

// this fallback needs to be updated when the key cycles
const PUBLIC_KEY_FALLBACK = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBGYFwzUBEACqbmQz1SWGuZQUUVLmpWft1OV46HsVSrfFGpQGE4tSV9ifJn/p
GjrCdlbrw2elq5WhgxNcSvgmvjxHYt9CZiKQlXsCfd5xHixTDfk3d35/45RHRc0i
r107ZcNLsrIWxDbd/AbvLDT90u1H0nPYc3hwV6nE8qRDaQQxcNpGdJJQlFgjY4jb
g6RaeOu2CBKTZawlZ0WO5Zp0YEzWPsMgNpWq08+4vWGs4+7nI2C+xOb4htM1/tKj
Kz0efthntTdEqC2jD1ZljPiRe4NY+23EJJXAWiuk+hLcZlu5QMq6eypuxVpN1W+6
mVVwH/set5v1qZSx0N+jCUzPLrLV9HpwzxaNNnxFAowLYBg0Kd+0yziSLuzblw9R
NgDo27s+ojlNzZ5vIKQ7YJktaQ+xZAD09x8xZvJc1gJFsajTHecu1WgBcyaYCKDt
TA8Ll7maI0vYlvyRu/EpomrEI58WWIxuWqDVZuf6OUC/EOy1lmVSU1dnjXK3ecSJ
R7x+WPkBGue5prwmc9tWTAE9okJZ2tIlFBcCJ2C6iwu15SZ6PIs4iD4kLlPYk+U2
6VEesOE8X0sJpysX/1cnlrgY4cMqJeLhbietJOyBJCmtB+xcgkYPxypDTrxlLPwf
awOF4btm3bZ5HzkSn6AY7KhAUiOxnaQoj5Psg9/kDAn3u1dXF1OBCqEhzwARAQAB
tGtCYXNpcyBUaGVvcnk6ICgnQmFzaXMgVGhlb3J5OiAiQmFzaXMgVGhlb3J5IFB1
YmxpYyBJbXBvcnQgRGF0YSBNaWdyYXRpb24gS2V5IicsKSA8cGxhdGZvcm1AYmFz
aXN0aGVvcnkuY29tPokCVAQTAQoAPhYhBETGOzx9119JXyLzKMOULgXCYgm1BQJm
BcM1AhsDBQkCD1gABQsJCAcCBhUKCQgLAgQWAgMBAh4BAheAAAoJEMOULgXCYgm1
J/sP/j1GDi86512j3+FXXWGzmLd1amZ1skPo7pUUqs2zzWbmvPWgqzCyI7u+V4mD
cURFHSkO9042oQgjWxvr2GDjgy9oadP1veHsy/v4CdSLqE7Rf8f015/7h4qcCpP1
b5ZIOlz6j2feqjltralUNxb8NqSoG8tBNBhT4tufVTVjeimBlvDF8i/KWu/2CE3K
6NLEFUYZ9GS+WnfAEGW0slR2KYBuCN+O0BCS47/90EYSUPZ6A8n7BfLr+zTIaYex
nQJthDlxGR3vVDW+/0rhfB1fnutjYdYaRoZ2V1CwOt1yQuNGNXjnXZbrxDKkR1WY
CkCSTvKnSBnQYGR/9zGPzofs60VorTMF/y07dhemfVNxjok3Icwg57pZtoJzVdU2
e6XrGK8rQnmW9mO0fgzewaSxe9lFwuEXHgNAjj1RHeLp+zxf24x3lc2tn4lKZg/s
pPaA71yBwrCvawc11UEVODWUYADDO5wj7l/cT+VESoOU+uG3CJPmgCO5xr3Q9ONg
72I+PFL/Kg6okiJVypouA5LE61Q2DnARENC+9usGqtBi1QlYWlynQCpFRkBRhseo
BbU0NC1OVow9BaCC+9cU7flcnYuMxUz0gX+P5HCXYVn+wR5gaYPtZEDO6cAkR0az
ZsVgJdQlXOcE3joFxyFBpD1c+aSuMkj6p5uGHeMV3bhT3vJQuQINBGYFwzkBEAC8
f4Vype7v0/BXnG1+FgJB5P2SaYCRRZrQJ2K5PcxGhv+WdHR26f6QqxiHRz2KHu6h
RM4GgFnrsA3WQwDUuFSojK6ugWy8rdTr2JVV/ohijucAP7tEUfJBAJpnDYCRgtPc
IUDXFjLO1i8tXgTgxXzmV8mFpIB2nkbOx1tzX/XwggWpJ9s6PKlVg3Ns5coG8Sr+
IePYI4oOWfYOOvnn78iJCa6qrx4Sd4MGzB5yuACrfWyGYOb6brUGA4MQ8/EpRRSg
z9u3DZpETX/2h5ny+0AXHAetTDiXA+zusa0s8dH+GXnSUttldBk/+om5SpHG+Gjv
LbM2ph92GfXZbJldY+i0OY/55sDpeRdIW6m6hAhyPIzSOglQxzuUZ7+NNfnhlRla
mAO3UPt+bZohvjg9AlCh8Cpg6ZUNGE5bZGdTJ6QYbasJaJs+BchWLNI/gOxK4S0K
vOgNVG/+V+la0kfV0k3kZmts00zd/JzluX2wpDGn+gby9sqvR1yfi25fzkmm4e6Z
dUYI2vLfmucIzMXSb+dPu/l4JW6j/z3DxclhZAgsgAlN013HmpxjmVSdi9v2jEUf
hays6I+GtIkuSDAsZKKBzmg3FwGMseaxKNR5R1bq5RDFV50rWL9BSNoLabfu4ygN
+j1R7UX7ApD4MWSUbnY408Gr/z/bSmOwKj54BmbP+QARAQABiQI8BBgBCgAmFiEE
RMY7PH3XX0lfIvMow5QuBcJiCbUFAmYFwzkCGwwFCQHhM4AACgkQw5QuBcJiCbWf
dA/+NtTY3EM1PU6XwgLIRuH/eGEwMI2SCsZuLZKhP0bfSLHJROpAmiRhuzmHfQw9
4eKYTY2/qq+iXs73xE4yGBo78d9+gIIP7E9ElWj8EhHFLwG69JDW5+He+vULXvX1
PlQgtm/mKtvXb8hshjhLYNnbTF+zeDxozAzO8ZT0ArSEF0BH9JwGktDapspWhLlt
fzRKzfMyAU+rPC+G6dhWS0V0dIdgMlp23W4KUsyGQLdftkst6QW6xxAqAQar2Uzf
86U7uwzNJ72mmKHiGyRanlE4hHqhiB74Ooq4exZd7yOu7KdzrZrX7jJNJn1cTks4
aergP4rjCmDPz9/baeEf/tAPuQA5eJkPzaeKV9WS7F+FROfNqLjGbm9Nw6aCozy5
HpS4oXN4zOu2IywD2CnkwYpiNZ+dZamKrzKO27zu5R+jZwKpO9jIvRlFFDq7JbnR
eG6VXTo/usd/yFO+v7OkJbFicic0OKQycQCWBy8Zseqwtnck6KgIXhhrqQcu59mc
08oFsQ1f0iroesr2J3LX94CaMN4o2EjZfYrJZQTiN7MB8B9aQD9G13iGD8fQaMj0
jlWDUcFfcJRhTIldLMf6obl+jhYN2nbviAeKPSyNMXN8HGuqu9r9KaT0/81H4oXI
fZi7GiocB3FK3f8Ob08VOybeQ8or4psitDMjaiEbV6GofZk=
=Maq4
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
