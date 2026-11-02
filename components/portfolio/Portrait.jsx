import Image from "next/image";

export default function Portrait({ className = "", ...props }) {
  return <Image {...props} loading="lazy" sizes="(max-width: 560px) 80vw, (max-width: 800px) 40vw, 370px"
    className={`${className} transition-transform duration-500 ease-out`} />;
}
