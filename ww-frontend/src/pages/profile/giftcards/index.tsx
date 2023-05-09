import React, { useState } from "react";
import SideLayout from "@/components/SideLayout";
import EmptyGiftCard from "./empty";
import GiftCard from "./giftCard";

interface IGiftCard {
  price: number;
  amount: number;
  cardNumber: number;
}

export default function App() {
  const [apps, setApps] = useState<IGiftCard[]>([
    {
      price: 10,
      amount: 11,
      cardNumber: 11,
    },
    {
      price: 10,
      amount: 11,
      cardNumber: 11,
    },
  ]);

  return (
    <SideLayout>
      {apps.length ? <GiftCard apps={apps} /> : <EmptyGiftCard />}
    </SideLayout>
  );
}
