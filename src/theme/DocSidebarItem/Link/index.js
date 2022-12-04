import isInternalUrl from "@docusaurus/isInternalUrl";
import Link from "@docusaurus/Link";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { isActiveSidebarItem } from "@docusaurus/theme-common/internal";
import IconExternalLink from "@theme/Icon/ExternalLink";
import ThemedImage from "@theme/ThemedImage";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";
export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}) {
  const { href, label, className, autoAddBaseUrl } = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);

  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        "menu__list-item",
        className
      )}
      key={label}
    >
      <Link
        className={clsx(
          "menu__link",
          item.customProps?.icon && styles["no-padding"],
          !isInternalLink && styles.menuExternalLink,
          {
            "menu__link--active": isActive,
          }
        )}
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
        {label}
        {!isInternalLink && <IconExternalLink />}
      </Link>
    </li>
  );
}
