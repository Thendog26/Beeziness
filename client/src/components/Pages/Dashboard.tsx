import { useState } from "react";

const DashboardPage = () => {
    const [spin, setSpin] = useState(false);

    const triggerSpin = () => {
        setSpin(true);
        setTimeout(function() {
            setSpin(false)
        }, 1000);
    }

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div className="flex-row">
                    <div className="logo-small"></div>
                    <h3>SWARMWATCH</h3>
                </div>
                <div className="flex-row">
                    <i className={`reload-icon ${spin === true ? 'spin' : ''}`} onClick={spin ? () => {} : triggerSpin}/>
                    <i className="menu-list-icon"/>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;