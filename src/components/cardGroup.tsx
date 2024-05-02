import { FC, PropsWithChildren } from "react";

export const CardGroup: FC<PropsWithChildren> = ({ children }) => (
  <div className="card-container">
    {children}
  </div>
)