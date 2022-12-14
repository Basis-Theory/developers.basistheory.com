import { SDK } from "../types";

import Android from "@site/static/img/sdk/logos/android.svg";
import DotNet from "@site/static/img/sdk/logos/dotnet.svg";
import Go from "@site/static/img/sdk/logos/go.svg";
import Apple from "@site/static/img/sdk/logos/Apple.svg";
import JavaScript from "@site/static/img/sdk/logos/javascript.svg";
import Node from "@site/static/img/sdk/logos/nodejs.svg";
import Python from "@site/static/img/sdk/logos/python.svg";
import ReactSvg from "@site/static/img/sdk/logos/react.svg";
import Terraform from "@site/static/img/sdk/logos/terraform.svg";

export const getSdkIcon = (icon: SDK) =>
  ({
    [SDK.DOT_NET]: DotNet,
    [SDK.GO]: Go,
    [SDK.PYTHON]: Python,
    [SDK.TERRAFORM]: Terraform,
    [SDK.NODE]: Node,
    [SDK.REACT]: ReactSvg,
    [SDK.JAVASCRIPT]: JavaScript,
    [SDK.ANDROID]: Android,
    [SDK.IOS]: Apple,
  }[icon]);
