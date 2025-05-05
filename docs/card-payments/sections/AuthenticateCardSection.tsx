import React from "react";
import CodeBlock from "@theme/CodeBlock";
import { Alert } from "@site/src/components/shared/Alert";

interface Props {
  type: "token" | "intent";
}

export const AuthenticateCardSection = ({ type }: Props) => {
  return (
    <>
      <h2>Authentication</h2>
      <p>Once the Token{type === "intent" && " Intent"} has been created, merchants may need to authenticate the cardholder to comply with PSD2’s Strong Customer Authentication (SCA) requirements and reduce fraud. The specific authentication steps depend on the card’s region, issuer requirements, and the merchant’s risk strategy.</p>
      <h3>3D Secure</h3>
      <p>3D Secure (3DS) is the standard protocol for meeting PSD2 SCA requirements in Europe and enhancing fraud prevention globally. It introduces an additional verification step, such as a one-time password (OTP) or biometric authentication. SCA exemptions may apply for certain transactions, such as low-risk or merchant-initiated payments. Implementing 3DS2 ensures compliance while keeping checkout friction minimal. </p>
      <CodeBlock language="javascript">
        {`if (${type === "token" ? "token" : "intent"}.card.authentication === 'sca_required') {
  // trigger the 3DS authentication flow
}`}
      </CodeBlock>
      <a href="/docs/guides/threeds/overview">Click here</a> to visit the Basis Theory Universal 3DS integration guide.
      <Alert>
        Learn more about 3DS and all supported integration options <a href="/docs/features/3d-secure">here</a>.
      </Alert>
    </>
  );
};
