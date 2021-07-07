import Chart from 'src/components/Chart';
import {useParams} from "react-router-dom";
import Header from "src/components/Header";

interface typeForm {
    type: string;
}

interface Hive {
    id: number;
    clientName: string;
    date: Date;
    dateFrom: Date;
    dateTo: Date;
    percentage: number;
    sound: number;
    temp: number;
    status: string;
}

const HivePage = () => {
    const safeHives: Hive[] = [{
        id: 1,
        clientName: "Jeff",
        date: new Date(),
        dateFrom: new Date(),
        dateTo: new Date(),
        percentage: 50,
        sound: 30,
        temp: 10,
        status: "safe",
    }];

    // }];

    // Gets params from type in URL
    const type: typeForm = useParams();

    const renderedHives = safeHives.map(hive => {
        return (
            <div className="hivepage-listitem">
                <div className="hive-header">Hive: {hive.id}</div>
                <div className="hive-paragraph">Swarm Likelihood: {hive.status}</div>
                <div className="hivepage-listitem-icons">
                    <div className="sound-icon"></div>
                    <div className="hive-paragraph">{hive.sound}dB</div>
                    <div className="divider-icon"></div>
                    <div className="temp-icon"></div> 
                    <div className="hive-paragraph">{hive.temp}°C</div>
                </div>
            </div>
        );
    })

    if (type?.type) {
        return <div className="dashboard-container min-height">
            <Header/>
            <div className={`hivepage-content hivepage-${type.type}`}>
                <div className="space">
                    <div className="hive-header white">
                        {type.type === "safe" ? "Healthy Hives" : ""}
                        {type.type === "warning" ? "Swarm Warnings" : ""}
                        {type.type === "critical" ? "Swarm Alerts" : ""}
                    </div>
                    {/* <div className="hive-subheader white">Total: {safeHives.length}</div> */}
                </div>
                {renderedHives}
            </div>
        </div>
    } else {
        return <div>None specified type in URL</div>
    }
}

export default HivePage;