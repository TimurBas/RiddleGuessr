import Image from "next/image";
import { FC } from "react";

type Props = {
  url: string;
};

const MovieImage: FC<Props> = ({ url }: Props) => {
  return <Image src={url} alt="AI Generated Image" width={192} height={192} />;
};

export default MovieImage;
