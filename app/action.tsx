"use server";

import TokenCard, { TokeneProp } from "@/components/TokenCard";

export const fetchTokensSB = async () => {
  const response = await fetch(
    `https://ptxsliywuzngeehkghts.supabase.co/rest/v1/TokenDexInfo?select=*&apikey=${process.env.SUPABASE_API_KEY}`
  );
  const data = await response.json();

  return data.map((item: TokeneProp, index: number) => (
    <TokenCard key={item.baseAddress} token={item} index={index} />
  ));
};
