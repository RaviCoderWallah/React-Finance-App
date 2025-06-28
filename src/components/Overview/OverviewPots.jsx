import { useOutletContext } from "react-router-dom"
import ContentCardHeader from "../UI/ContentCardHeader"
import OverviewPotsCard from "./OverviewPotsCard";

const OverviewPots = () => {

    const data = useOutletContext();
    const potsData = data.pots;

    if(!potsData){
        return <h1>Loding..</h1>
    }
  
    return (
        <div className="">
            <ContentCardHeader name="Pots" navigatePage="/pots" />
            <div className="grid md:grid-cols-5 gap-6 mt-6">

                <div className="md:col-span-2 bg-[var(--color-beige-100)] rounded-xl pt-6">
                    <div className="flex items-center justify-center gap-4">
                        <img src="/public/images/icon-pot.svg" alt="pots icons" />
                        <div>
                            <p className="text-[15px] text-slate-600">Total Saved</p>
                            <p className="text-3xl font-bold">$935 </p>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-3 grid grid-cols-2 gap-2">
                    {
                      potsData.map((items, index) => {
                        return <OverviewPotsCard key={index} data={items}/>
                      })
                    }
                </div>

            </div>

        </div>
    )
}

export default OverviewPots