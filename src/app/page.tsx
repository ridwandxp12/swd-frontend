'use client'

import TopBar from "@/app/components/TopBar"
import Cards from "./components/Cards"
import { useTranslation } from "react-i18next"



const Home = () => {
  const { t } = useTranslation()


  return (
    <div className="h-100">
      <TopBar />
      <div className="home-container">
        <Cards title={t("TEST") + " 1"} desc={t("LAYOUT_AND_STYLE")} />
        <Cards title={t("TEST") + " 2"} desc={t("CONNECT_API")} />
        <Cards title={t("TEST") + " 3"} desc={t("FORM_AND_TABLE")} />
      </div>
    </div>
  )
}
export default Home
