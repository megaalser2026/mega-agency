import type { SVGProps } from "react";

export function VisaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 16" role="img" aria-label="Visa" {...props}>
      <text
        x="24"
        y="13"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="14"
        fontStyle="italic"
        fontWeight="700"
        letterSpacing="0.5"
        fill="#1A1F71"
      >
        VISA
      </text>
    </svg>
  );
}

export function MastercardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 30" role="img" aria-label="Mastercard" {...props}>
      <circle cx="17" cy="15" r="13" fill="#EB001B" />
      <circle cx="31" cy="15" r="13" fill="#F79E1B" />
      <path
        fill="#FF5F00"
        d="M24 5.1a13 13 0 0 0 0 19.8 13 13 0 0 0 0-19.8Z"
      />
    </svg>
  );
}
