import './PageSwitch.css'

const PageSwitch = ({selected, clickEvent}: {selected: string; clickEvent: () => void;}) => {
    return (
        <div className="pageswitch">
            <div className="pageswitch-header">
                <div className={`switch-text ${selected === "Login" ? "selected" : "unselected"}`} onClick={clickEvent}>Login</div>
                <div className={`switch-text ${selected === "Register" ? "selected" : "unselected"}`} onClick={clickEvent}>Register</div>
            </div>
            <div className="pageswitch-footer">
                <div className="animated-line"></div>
                <div className="line-foreground"></div>
            </div>
        </div>
    )
}

export default PageSwitch;