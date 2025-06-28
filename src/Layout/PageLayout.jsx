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
    <div className="md:grid md:grid-cols-5 min-h-[100vh] bg-[var(--color-beige-100)]" id="finance-app">
      <SideBar />
      <main className="col-span-4 md:p-10" id="content">
        <Outlet context={finaceAppData} />
      </main>
    </div>
  )
}

export default PageLayout