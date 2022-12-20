import React, { useState } from "react";
import clsx from "clsx";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { translate } from "@docusaurus/Translate";
import IconLightMode from "@theme/Icon/LightMode";
import IconDarkMode from "@theme/Icon/DarkMode";
import styles from "./styles.module.css";
function ColorModeToggle({ className, value, onChange }) {
  const [applyHoverStyles, setApplyHoverStyles] = useState(false);
  const isBrowser = useIsBrowser();
  const title = translate(
    {
      message: "Switch between dark and light mode (currently {mode})",
      id: "theme.colorToggle.ariaLabel",
      description: "The ARIA label for the navbar color mode toggle",
    },
    {
      mode:
        value === "dark"
          ? translate({
              message: "dark mode",
              id: "theme.colorToggle.ariaLabel.mode.dark",
              description: "The name for the dark color mode",
            })
          : translate({
              message: "light mode",
              id: "theme.colorToggle.ariaLabel.mode.light",
              description: "The name for the light color mode",
            }),
    }
  );

  const toggleHoverStyles = () => setApplyHoverStyles(!applyHoverStyles);

  return (
    <div className={clsx(styles.toggle, className)}>
      <button
        onMouseEnter={toggleHoverStyles}
        onMouseLeave={toggleHoverStyles}
        className={clsx(
          "clean-btn",
          styles.toggleButton,
          !isBrowser && styles.toggleButtonDisabled
        )}
        type="button"
        onClick={() => onChange(value === "dark" ? "light" : "dark")}
        disabled={!isBrowser}
        title={title}
        aria-label={title}
        aria-live="polite"
      >
        {value == "dark" ? (
          <IconLightMode hover={applyHoverStyles} />
        ) : (
          <IconDarkMode hover={applyHoverStyles} />
        )}
      </button>
    </div>
  );
}
export default React.memo(ColorModeToggle);
