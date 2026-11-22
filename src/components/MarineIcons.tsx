import React from "react";

interface IconProps {
  className?: string;
}

/** Visor de buceo con burbujas (inspirado en el logo y brand board de CarlyUnderWater) */
export function DiveMaskIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M5.5 14.5C5.5 11.4 8 9.5 11.5 9.5H20.5C24 9.5 26.5 11.4 26.5 14.5V18.2C26.5 21.1 24.2 23 21.3 23C19.2 23 18.2 21.8 17.5 20.1C17.1 19.1 16.7 18.6 16 18.6C15.3 18.6 14.9 19.1 14.5 20.1C13.8 21.8 12.8 23 10.7 23C7.8 23 5.5 21.1 5.5 18.2V14.5Z"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 14C10.4 13.1 11.8 12.8 13 13.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M3 14.5V17.5M29 14.5V17.5"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <circle cx="24.5" cy="5.8" r="1.4" fill="currentColor" />
      <circle cx="27.5" cy="8.2" r="1" fill="currentColor" />
    </svg>
  );
}

/** Aletas de buceo / apnea del brand board */
export function FinsIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M11.5 26.5C9.6 26.5 8.5 25.2 8.7 23.2L10.3 9.2C10.5 7.4 11.8 6 13.5 6C15.2 6 16.4 7.4 16.2 9.2L14.5 23.4C14.3 25.3 13.3 26.5 11.5 26.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.8 26.5C18.1 26.5 17.2 25.2 17.4 23.3L18.9 10.2C19.1 8.5 20.3 7.2 21.9 7.2C23.5 7.2 24.6 8.5 24.4 10.2L22.9 23.3C22.7 25.2 21.6 26.5 19.8 26.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.6 19.5H14.8M18.1 20H23.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Bolsa playera con estrella de mar (del brand board — reemplaza carrito genérico) */
export function BeachToteIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M11.5 11V8.8C11.5 6.4 13.5 4.5 16 4.5C18.5 4.5 20.5 6.4 20.5 8.8V11"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M6.8 11.2H25.2L26.7 24.6C26.9 26.2 25.7 27.5 24.1 27.5H7.9C6.3 27.5 5.1 26.2 5.3 24.6L6.8 11.2Z"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M16 15.2L17.1 17.7L19.8 18L17.8 19.8L18.3 22.4L16 21.1L13.7 22.4L14.2 19.8L12.2 18L14.9 17.7L16 15.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Caracola Nautilus orgánica (del brand board) */
export function ShellIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16.5 26C22.4 26 26.5 21.6 26.5 16C26.5 10.2 21.9 6 16 6C10.5 6 6.2 10.1 6.2 15.2C6.2 19.4 9.5 22.5 13.5 22.5C16.9 22.5 19.3 20.1 19.3 17C19.3 14.5 17.4 12.7 15 12.7C13.2 12.7 11.9 14 11.9 15.7C11.9 17.1 13 18 14.2 18"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M16 6V11.8M22.5 8.5L18.8 13M26.2 15.5H20.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

/** Traje de baño bikini del brand board */
export function SwimsuitIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M11 6V9.2M21 6V9.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7.5 15.5L11 9.2L15.2 15.5H7.5ZM16.8 15.5L21 9.2L24.5 15.5H16.8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 20H24C23.2 23.2 20.5 24.4 17.7 26.4C16.7 27.1 15.3 27.1 14.3 26.4C11.5 24.4 8.8 23.2 8 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Flor de hibisco costera (del brand board — reemplaza Sparkles IA) */
export function HibiscusIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 14C13.8 11 13.8 6.8 16 5.5C18.2 6.8 18.2 11 16 14Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M17.8 15.2C20.9 13.2 25 13.8 26 16.2C24.5 18.2 20.5 17.8 17.8 15.2Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M17.2 17.2C19.8 19.6 20.2 23.8 18.2 25.4C15.9 24.6 15.3 20.6 17.2 17.2Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M14.8 17.2C16.7 20.6 16.1 24.6 13.8 25.4C11.8 23.8 12.2 19.6 14.8 17.2Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M14.2 15.2C11.5 17.8 7.5 18.2 6 16.2C7 13.8 11.1 13.2 14.2 15.2Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="15.8" r="1.6" fill="currentColor" />
    </svg>
  );
}

/** Pin de destino sobre olas (del brand board) */
export function WavePinIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 20.5C16 20.5 22 15.6 22 10.8C22 7.5 19.3 4.8 16 4.8C12.7 4.8 10 7.5 10 10.8C10 15.6 16 20.5 16 20.5Z"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="10.8" r="2.1" fill="currentColor" />
      <path
        d="M5.5 24.2C7.8 22.8 10.2 22.8 12.5 24.2C14.8 25.6 17.2 25.6 19.5 24.2C21.8 22.8 24.2 22.8 26.5 24.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8.5 27.6C10.5 26.6 12.5 26.6 14.5 27.6C16.5 28.6 18.5 28.6 20.5 27.6C21.8 27 22.8 26.9 23.8 27.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

/** Paquete con lazo costero / envío a todo México (reemplaza Truck genérico) */
export function CoastalParcelIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.5 12.2L16 7L25.5 12.2V22.2L16 27.2L6.5 22.2V12.2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M6.8 12.4L16 17.2L25.2 12.4M16 17.2V27"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M11.2 9.6L20.5 14.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Ciclo de olas orgánico (reemplaza RefreshCw genérico en política de cambios) */
export function TideCycleIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M7.5 14.2C8.3 9.7 12.2 6.5 16.9 6.8C20.2 7 22.9 8.9 24.3 11.7"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M21 11.4L24.7 12.1L25.1 8.3"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.5 17.8C23.7 22.3 19.8 25.5 15.1 25.2C11.8 25 9.1 23.1 7.7 20.3"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M11 20.6L7.3 19.9L6.9 23.7"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2 16.3C13.5 15.1 14.8 15.1 16 16.3C17.2 17.5 18.5 17.5 19.8 16.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Gota de agua dulce + sol para cuidados de la tela (reemplaza Sparkles IA) */
export function WaterCareIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 5.5C16 5.5 8.5 14 8.5 19.4C8.5 23.7 11.8 27 16 27C20.2 27 23.5 23.7 23.5 19.4C23.5 14 16 5.5 16 5.5Z"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M12.8 19.8C12.8 21.8 14.2 23.2 16 23.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Cinta métrica costera orgánica para medidas a la medida */
export function MeasureTapeIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <rect
        x="4.5"
        y="11"
        width="23"
        height="10"
        rx="4"
        stroke="currentColor"
        strokeWidth="2.1"
      />
      <path
        d="M10 11V15.5M14 11V14M18 11V15.5M22 11V14"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Rama de coral (del brand board) */
export function CoralIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 27V14M16 21C12.5 20.5 10 18.2 9.5 14.5M16 17.5C19.2 17 21.5 15 22.5 11.5M16 14C14.2 12 13.5 9.2 14.2 6.5M16 14C17.8 12.2 18.5 9.5 18 6.8M9.5 14.5C7.6 13.8 6.6 12.2 6.5 10.2M22.5 11.5C24.4 10.8 25.4 9.2 25.5 7.5"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Estrella de mar orgánica (del brand board) */
export function StarfishIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 5.2L19 12.1L26.5 12.9L20.9 17.9L22.5 25.3L16 21.5L9.5 25.3L11.1 17.9L5.5 12.9L13 12.1L16 5.2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="15.8" r="1.4" fill="currentColor" />
    </svg>
  );
}

/** Ola marina simple (del brand board) */
export function OceanWaveIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M4.5 19.5C7.8 19.5 9.5 16.5 12.8 16.5C16.1 16.5 17.6 19.5 20.8 19.5C24 19.5 25.5 17.5 27.5 16.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M6.5 24C9.5 24 11.2 21.6 14 21.6C16.8 21.6 18.4 24 21.2 24C23.5 24 24.8 22.8 26 22"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M11 12.5C11.8 9.2 15 7.5 18 8.5C20.2 9.2 21.2 11.2 20.2 12.8C19.4 14 17.8 14 17.2 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
