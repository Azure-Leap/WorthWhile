import React, { useContext, useState } from "react";
import SideLayout from "@/components/SideLayout";
import EmptyGiftCard from "./empty";
import GiftCard from "./giftCard";
import { AuthContext } from "@/context/authContext";

interface IGiftCard {
  price: number;
  amount: number;
  cardNumber: number;
}

export default function App() {
  const { user } = useContext(AuthContext);
  const giftcards = user?.giftCards;

  return (
    <SideLayout>
      {giftcards?.length ? <GiftCard apps={giftcards} /> : <EmptyGiftCard />}
    </SideLayout>
  );
}
