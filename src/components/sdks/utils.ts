import { SDK } from "../types";

import Android from "@site/static/img/sdk-card/android.svg";
import DotNet from "@site/static/img/sdk-card/dotNet.svg";
import Go from "@site/static/img/sdk-card/go.svg";
import Ios from "@site/static/img/sdk-card/ios.svg";
import JavaScript from "@site/static/img/sdk-card/javascript.svg";
import Node from "@site/static/img/sdk-card/node.svg";
import Package from "@site/static/img/sdk-card/package.svg";
import Python from "@site/static/img/sdk-card/python.svg";
import ReactSvg from "@site/static/img/sdk-card/react.svg";
import Terraform from "@site/static/img/sdk-card/terraform.svg";

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
    [SDK.IOS]: Ios,
  }[icon]);
