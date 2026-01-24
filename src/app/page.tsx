'use client'

import TopBar from "@/app/components/TopBar"
import Cards from "./components/Cards"
import { useTranslation } from "react-i18next"
import { Col, Row } from "antd"
import { useRouter } from "next/navigation";


const Home = () => {
  const { t } = useTranslation()
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path)
  }

  return (
    <div
      style={{
        height: "100%",
        background: 'linear-gradient(90deg, #7ED56F 0%, #F9C74F 100%)',
      }}>
      <TopBar />
      <Row justify="center" gutter={20} className="w-100 h-100" align="middle" >
        <Col>
          <Cards title={t("TEST") + " 1"} desc={t("LAYOUT_AND_STYLE")} click={() => handleClick("/layout-and-style")} />
        </Col>
        <Col>
          <Cards title={t("TEST") + " 2"} desc={t("CONNECT_API")} click={() => { }} />
        </Col>
        <Col>
          <Cards title={t("TEST") + " 3"} desc={t("FORM_AND_TABLE")} click={() => handleClick("/form-and-table")} />
        </Col>
      </Row>



    </div>
  )
}
export default Home
