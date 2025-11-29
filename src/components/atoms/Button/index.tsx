import type { ReactNode } from "react";
import Button from "./styles";

export default function ProjectButton({
  children,
  isOn,
  onClick,
}: {
  children: ReactNode;
  isOn: boolean;
  onClick: () => void;
}) {
  return (
    <Button onClick={onClick} is_selected={isOn}>
      {children}
    </Button>
  );
}
