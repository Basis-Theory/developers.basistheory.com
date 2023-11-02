import { useThemeConfig } from "@docusaurus/theme-common";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import { SignInButton } from "@site/src/components/navbar/SignInButton";
import NavbarItem from "@theme/NavbarItem";
import Link from "@site/static/img/link.svg";
import React from "react";

import styles from "./index.module.css";

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
// The primary menu displays the navbar items
export default function NavbarMobilePrimaryMenu() {
  const mobileSidebar = useNavbarMobileSidebar();
  // TODO how can the order be defined for mobile?
  // Should we allow providing a different list of items?
  const items = useNavbarItems();

  const excludeCustomItems = (item) => !item.type?.includes("custom");
  const customItems = (item) => item.type?.includes("custom") && !item.type?.includes("toggle");

  return (
    <>
      <ul className="menu__list">
        {items.filter(excludeCustomItems).map((item, i) => (
          <NavbarItem mobile {...item} onClick={() => mobileSidebar.toggle()} key={i} />
        ))}
      </ul>
      <hr />
      <div className={styles["custom-links"]}>
        <SignInButton variant="primary" />
        <a href="https://github.com/basis-theory" target="_blank">
          Github <Link />
        </a>
      </div>
    </>
  );
}
