import React, { useEffect, useState } from "react";
import axios from "axios";

import { Highlight } from "prism-react-renderer";

const WebElementsCdnExample = ({ organization, repository }) => {
  const [sri, setSri] = useState(undefined);

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        const { data: sri } = await axios.get(`https://js.basistheory.com/sri/?version`);

        setSri(sri);
      } catch (error) {
        console.error("Error fetching latest release:", error);
      }
    };

    fetchLatestRelease();
  }, [organization, repository]);

  return (
    <Highlight
      code={`  <!-- Including this tag will export a global/window "basistheory" variable -->
  <!-- 
    You can either pin the version to a specific release for stability 
    or use the latest tag to always pull the most recent version. 
    However, relying on latest can be risky, as it may introduce unexpected changes or breaking updates. 
    For detailed information about each version, refer to our changelog.
  -->
      
  <script src="https://js.basistheory.com/web-elements/latest/index.js"></script>
 <!-- or -->
 ${sri?.html}`}
      language="html"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              <span>{i + 1}</span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export { WebElementsCdnExample };
