import { FC } from "react";

export const Image: FC<{ imgUrl: string }> = ({
  imgUrl
}) => (
  <img src={imgUrl} />
)