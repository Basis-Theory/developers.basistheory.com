import ComponentTypes from "@theme-original/NavbarItem/ComponentTypes";
import { SignInButton } from "@site/src/components/navbar/SignInButton";
import { GithubButton } from "@site/src/components/navbar/GithubButton";

import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";

export default {
  ...ComponentTypes,
  "custom-SignInButton": SignInButton,
  "custom-GithubButton": GithubButton,
  "custom-ColorModeToggle": NavbarColorModeToggle,
};
