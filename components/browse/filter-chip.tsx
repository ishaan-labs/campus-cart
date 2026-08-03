import { cn } from "@/lib/utils";

type FilterChipProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export function FilterChip({ label, active = false, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all",
        active
          ? "border-primary bg-primary text-primary-foreground shadow-sm"
          : "border-border/60 bg-background text-muted-foreground hover:border-border hover:bg-muted/50 hover:text-foreground"
      )}
    >
      {label}
    </button>
  );
}
