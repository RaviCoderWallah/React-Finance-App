import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"
import { useEffect, useState } from "react"

const PageLayout = () => {

  const [finaceAppData, setFinaceAppData] = useState([]);

  useEffect(() => {
    async function financeAppAllData() {
      try {
        const fetchingData = await fetch("/data/data.json");;
        const responseData = await fetchingData.json();
        setFinaceAppData(responseData);

      } catch (error) {
        console.log(error);
      }
    }

    financeAppAllData();

  }, [])

  return (
    <div className="grid md:grid-cols-5 grid-rows-[1fr_auto] md:grid-rows-none min-h-[100vh] bg-[var(--color-beige-100)]" id="finance-app">
      <main className="order-1 md:order-2 md:col-span-4 md:p-10 px-4" id="content">
        <Outlet context={finaceAppData} />
      </main>
      <div className="order-2 md:order-1 md:col-span-1">
        <div className="fixed bottom-0 left-0 w-full md:col-span-1 md:h-screen md:sticky md:top-0 z-50 bg-white shadow-t md:shadow-none">
          <SideBar />
        </div>
      </div>
    </div>

  )
}

export default PageLayout