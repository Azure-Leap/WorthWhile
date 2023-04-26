import React, { useState } from "react";
import SideLayout from "@/components/SideLayout";
import EmptyFavourite from "./empty";
import Favourite from "./favourite";

interface IFavourite {
  services: string;
  serviceImage: string;
  description: string;
}

export default function App() {
  const [apps, setApps] = useState<IFavourite[]>([
    {
      services: "Beard trim",
      serviceImage:
        "https://plus.unsplash.com/premium_photo-1661382271654-544249f09cf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      description: "409 University Ave, San Diego, CA, 92103",
    },
    {
      services: "HairCut",
      serviceImage:
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      description: "XD XD XD XD XD XD",
    },
    {
      services: "HairCut",
      serviceImage:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      description: "ХУД 18-хороо үшйрүиөхүшйөхийо",
    },
    {
      services: "HairCut",
      serviceImage:
        "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      description: "ХУД 18-хороо үшйрүиөхүшйөхийо",
    },

    {
      services: "HairCut",
      serviceImage: "",
      description: "ХУД 18-хороо үшйрүиөхүшйөхийо",
    },
    {
      services: "HairCut",
      serviceImage: "/image/profile/forms.png",
      description: "ХУД 18-хороо үшйрүиөхүшйөхийо",
    },
  ]);

  return (
    <SideLayout>
      {apps.length ? <Favourite apps={apps} /> : <EmptyFavourite />}
    </SideLayout>
  );
}
