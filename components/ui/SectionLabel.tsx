import { Hairline } from "./Hairline";

type SectionLabelProps = {
  index: string;
  label: string;
  className?: string;
  trailing?: React.ReactNode;
  hairline?: boolean;
  hairlineOnView?: boolean;
};

export function SectionLabel({
  index,
  label,
  className = "",
  trailing,
  hairline = true,
  hairlineOnView = false,
}: SectionLabelProps) {
  return (
    <div className={`section-label ${className}`}>
      <span className="section-label__index">{index}</span>
      <span>/{label}</span>
      {trailing}
      {hairline && (
        <Hairline
          className="absolute bottom-0 left-0 right-0"
          animated
          triggerOnView={hairlineOnView}
        />
      )}
    </div>
  );
}
