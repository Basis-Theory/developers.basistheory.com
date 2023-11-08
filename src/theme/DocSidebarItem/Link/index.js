import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { isActiveSidebarItem } from "@docusaurus/theme-common/internal";
import ThemedImage from "@theme/ThemedImage";
import Link from "@docusaurus/Link";
import isInternalUrl from "@docusaurus/isInternalUrl";
import styles from "./styles.module.css";
import { Beta } from "@site/src/components/shared/Beta";
import { Enterprise } from "@site/src/components/shared/Enterprise";
import { Deprecated } from "@site/src/components/shared/Deprecated";

export default function DocSidebarItemLink({ item, onItemClick, activePath, level, index, ...props }) {
  const { href, label, className, autoAddBaseUrl } = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);

  return (
    <li className={clsx(ThemeClassNames.docs.docSidebarItemLink, ThemeClassNames.docs.docSidebarItemLinkLevel(level), "menu__list-item", className)} key={label}>
      <Link
        className={clsx("menu__link", item.customProps?.icon && styles["no-padding"], !isInternalLink && styles.menuExternalLink, {
          "menu__link--active": isActive,
        })}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? "page" : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}
      >
        {item.customProps?.icon && (
          <ThemedImage
            className={clsx({
              [styles.icon]: true,
              [styles.active]: isActive,
            })}
            sources={item.customProps?.icon}
          />
        )}
        <span className={styles.label}>{label}</span> {item.customProps?.beta && <Beta />} {item.customProps?.enterprise && <Enterprise />} {item.customProps?.deprecated && <Deprecated />}
        {!isInternalLink && (
          <ThemedImage
            sources={{
              light: "/img/sidebar/light/external.svg",
              dark: "/img/sidebar/dark/external.svg",
            }}
          />
        )}
      </Link>
    </li>
  );
}
