import { Moon, Sun } from "lucide-react";

import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const { t } = useI18n();
  const label = theme === "dark" ? t("nav.theme.light") : t("nav.theme.dark");

  return (
    <button
      type="button"
      onClick={toggle}
      title={label}
      aria-label={label}
      className={
        "grid size-11 place-items-center rounded-full border border-line bg-background/60 text-foreground transition-colors duration-300 hover:border-accent hover:text-accent " +
        (className ?? "")
      }
    >
      {theme === "dark" ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </button>
  );
}
