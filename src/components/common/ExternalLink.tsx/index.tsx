import { ExternalIcon } from "../../../assets/svgs";

interface props {
  url: string;
}

export const ExternalLink = ({ url }: props) => (
  <a href={url} target="_blank" rel="noreferrer">
    <div className="bg-[#CDFFC0] ml-6 w-7 h-7 flex items-center rounded-full cursor-pointer">
      {ExternalIcon}
    </div>
  </a>
);
