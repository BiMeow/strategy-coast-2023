import Image from "next/image";
import { Inter } from "next/font/google";
import MasterPage from "@/components/master/MasterPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <MasterPage>BiMeow</MasterPage>;
}
