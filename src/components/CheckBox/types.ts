export type CheckboxProps = {
  backgroundcolor?: string;
  size?: string;
  borderradius?: string;
  fontsize?: string;
  fontcolor?: string;
  id?: string;
  disabled?: boolean;
  children?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;
