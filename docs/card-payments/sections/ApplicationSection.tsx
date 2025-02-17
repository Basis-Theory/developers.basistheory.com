import React from "react";
import { Alert } from "@site/src/components/shared/Alert";

interface Props {
  type: "public" | "private";
  permissions?: string[];
}

export const ApplicationSection = ({ type, permissions = [] }: Props) => {
  const link = encodeURI(`https://portal.basistheory.com/applications/create?name=Frontend&type=${type}&${permissions.map((p) => `permissions=${p}`).join("&")}`);

  const permissionsBlock = (
    <>
      <p>
        This will create an application with the following <a href="/docs/concepts/access-controls">Access Controls</a>:
      </p>
      <ul>
        <li>
          Permissions:{" "}
          {permissions.map((p, i) => (
            <>
              <code>{p}</code>
              {i < permissions.length - 1 ? ", " : ""}
            </>
          ))}
        </li>
      </ul>
    </>
  );

  if (type === "private") {
    return (
      <>
        <p>
          You will need a <a href="/docs/api/applications/#application-types">Private Application</a> to allow your backend to call Basis Theory APIs.{" "}
          <a href={link} target="_blank">
            Click here to create one
          </a>{" "}
          using the Basis Theory Customer Portal.
        </p>
        {permissionsBlock}
        <Alert>Save the API Key from the created Private Application as it will be used later in this guide.</Alert>
      </>
    );
  }

  if (type === "public") {
    return (
      <>
        <p>
          You will need a <a href="/docs/api/applications/#application-types">Public Application</a> for your frontend.{" "}
          <a href={link} target="_blank">
            Click here to create one
          </a>{" "}
          using the Basis Theory Customer Portal.
        </p>
        {permissionsBlock}
        <Alert>Save the API Key from the created Public Application as it will be used later in this guide.</Alert>
      </>
    );
  }

  return null;
};
