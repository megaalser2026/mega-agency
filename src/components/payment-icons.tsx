import type { SVGProps } from "react";

export function VisaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 16" role="img" aria-label="Visa" {...props}>
      <path
        fill="#1A1F71"
        d="M18.9 15.6h-3.9L17.4.4h3.9l-2.4 15.2Zm-7.2-15.2-3.7 10.5-.4-2.2L6.3 2.3S6.1.4 3.7.4H.1L0 .8s2.6.5 5.7 2.4l3.4 12.4h4L19.3.4h-3.6l-4 .0ZM44.4 15.6H48L44.9.4h-3.2c-1.5 0-1.8 1.1-1.8 1.1l-5.8 14.1h4l.8-2.2h4.9l.6 2.2Zm-4.4-5.2 2-5.5 1.1 5.5h-3.1ZM35.2 4 35.7.9S34.1.3 32.4.3c-1.8 0-6.2.8-6.2 4.7 0 3.7 5.1 3.7 5.1 5.6s-4.6 1.6-6.1.4l-.6 3.2s1.7.8 4.2.8 6.3-1.3 6.3-4.8c0-3.7-5.2-4-5.2-5.6 0-1.6 3.6-1.4 5.3-.6Z"
      />
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
