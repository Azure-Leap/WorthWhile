import React, { useState } from "react";
import SideLayout from "@/components/SideLayout";
import EmptyReviews from "./empty";
import Reviews from "./reviews";

interface IReviews {
  businessName: string;
  serviceName: string;
  reviewDate: Date;
  rating: number;
  text: string;
  // replies: [object];
}

export default function App() {
  const [apps, setApps] = useState<IReviews[]>([
    // {
    //   businessName: "",
    //   serviceName: "",
    //   reviewDate: new Date(),
    //   rating: 3,
    //   text: "",
    // },
  ]);

  return (
    <SideLayout>
      {apps.length ? <Reviews apps={apps} /> : <EmptyReviews />}
    </SideLayout>
  );
}
