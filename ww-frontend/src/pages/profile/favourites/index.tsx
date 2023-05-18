import React, { useContext, useEffect, useState } from "react";
import SideLayout from "@/components/SideLayout";
import EmptyFavourite from "./empty";
import Favourite from "./favourite";
import axios from "axios";
import { BASE_URL } from "@/variables";
import { AuthContext } from "@/context/authContext";

interface IFavourite {
  services: string;
  serviceImage: string;
  description: string;
}

export default function App() {
  const [favorites, setFavorites] = useState<any>(null);
  const { user } = useContext(AuthContext);
  const getFavs = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/users/favorites/${user._id}`);
      setFavorites(res.data.favorites);
    } catch (err) {
      console.log("error uuslee", err);
    }
  };
  user && getFavs();
  return (
    <SideLayout>
      {favorites?.length ? <Favourite apps={favorites} /> : <EmptyFavourite />}
    </SideLayout>
  );
}
