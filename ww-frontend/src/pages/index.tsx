import { useState } from "react";
import HomeCard from "@/components/Card";
import HomeSearch from "@/components/General/homeSearch";
import HomeModal from "@/components/Modals/HomeModal";
import Layout from "@/components/layout";
import { Tangerine } from "@next/font/google";
import styles from "@/styles/style.module.css";
import Logo from "@/components/logo";
export interface IItem {
  title: string;
  BgURL: string;
  icon: string;
}

const tangerine = Tangerine({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const categories: IItem[] = [
  {
    title: "Hair",
    BgURL:
      "https://images.unsplash.com/photo-1614838000027-76439aa4aedc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGhhaXIlMjBjdXR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    icon: "/svg/hair.svg",
  },
  {
    title: "Nails",
    BgURL:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpbCUyMHNhbG9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    icon: "svg/nail.svg",
  },
  {
    title: "Skin Care",
    BgURL:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjaWFsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    icon: "svg/skincare.svg",
  },
  {
    title: "Makeup",
    BgURL:
      "https://plus.unsplash.com/premium_photo-1661768055500-45bf4357bb85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    icon: "svg/makeup.svg",
  },
  {
    title: "Spa & Massage",
    BgURL:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhJTIwbWFzc2FnZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    icon: "/svg/spa.svg",
  },
  {
    title: "Brows & Lashes",
    BgURL:
      "https://images.unsplash.com/photo-1542833807-ad5af0977050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fGxhc2hlcyUyMG1ha2V1cHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    icon: "/svg/lashes.svg",
  },
];

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      <div className={styles.header}>
        <div className={`${styles.innerHeader} ${styles.flex}`}>
          <div style={{ marginTop: "45px" }}>
            <Logo color={"white"} />
          </div>
          <div>
            <h1 className={styles.h1}>WorthWhile</h1>
            <p
              className={tangerine.className}
              style={{
                fontSize: "30px",
                lineHeight: 0,
              }}
            >
              Discover your beauty
            </p>
          </div>
        </div>
        <div>
          <svg
            className={styles.waves}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className={styles.parallax}>
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
        <div className={styles.search}>
          <HomeSearch setIsOpen={setIsOpen} />
        </div>
      </div>
      <div className="w-full bg-cyan-50 py-10">
        <div className="my-[10px] w-10/12 mx-auto grid grid-cols-3">
          {categories?.map((el, idx) => {
            return <HomeCard key={idx} item={el} />;
          })}
        </div>
      </div>
      <HomeModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </Layout>
  );
}
