import axios from "axios";
import React, {Fragment, useEffect, useState} from "react";

const ENVS = {
  "uat": "UAT",
  "production": "Production",
  "dev": "Development",
} as any;

const REGIONS = {
  "us": "North America",
  "eu": "Europe",
} as any;

// This fallback doesn't need to be kept up-to-date
const IP_LIST_FALLBACK = {
  "production": {
    "us": [
      "18.223.139.88",
      "35.85.10.157"
    ],
    "eu": [
      "3.79.164.35",
      "54.154.39.83"
    ]
  },
  "uat": {
    "us": [
      "18.191.73.1",
      "52.13.142.52"
    ]
  }
};

export const IpList = () => {
  const [ipList, setIpList] = useState<any>({});

  useEffect(() => {
    axios("https://cdn.basistheory.com/networking/ips.json")
      .then(({data}) => {
        setIpList(data);
      })
      .catch(() => {
        // in lower environments this request fails because of CORS
        setIpList(IP_LIST_FALLBACK);
      });
  }, []);

  return (
    <>
      {(Object.keys(ipList)).map((env) => (
        <Fragment key={env}>
          <h2>{ENVS[env]}</h2>
          {Object.keys(ipList[env]).map((region) => (
            <Fragment key={region}>
              <h3>{REGIONS[region]}</h3>
              <ul>
                {ipList[env][region].map((ip: string) => (
                  <li key={ip}>{ip}</li>
                ))}
              </ul>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </>
  );
};
