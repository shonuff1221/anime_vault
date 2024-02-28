import Image from "next/image";
import { MotionDiv } from "./MotionDiv";

export interface TokeneProp {
  url: string;
  chainId: string;
  pairAddress: string;
  baseAddress: string;
  baseAddressName: string;
  baseAddressSymbol: string;
  priceUsd: string;
  txns5MBuys: number;
  txns5MSells: number;
  txns1HBuys: number;
  txns1HSells: number;
  txns6HBuys: number;
  txns6HSells: number;
  txns24HBuys: number;
  txns24HSells: number;
  volume5MINS: number;
  volume1HR: number;
  volume6HR: number;
  volume24HR: number;
  priceChange5MINS: number;
  priceChange1HR: number;
  priceChange6HR: number;
  priceChange24HR: number;
  liquidityUSD: number;
  liquidityBASE: number;
}

interface Prop {
  token: TokeneProp;
  index: number;
}
const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
function AnimeCard({ token, index }: Prop) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: index * 0.25, ease: "easeInOut" }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full"
    >
      <div className="relative w-full h-[37vh]"></div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {token.baseAddressName}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {token.priceUsd}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">
              {token.liquidityUSD || token.txns5MBuys}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">
              {token.priceChange5MINS}
            </p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export default AnimeCard;
