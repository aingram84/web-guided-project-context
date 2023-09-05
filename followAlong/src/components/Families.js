import { useContext } from "react"
import "../styles.scss"
import { FamilyContext } from "../App"
import React from "react"

const Families = () => {
    const FamilyContext = useContext(FamilyContext);
    
    return (<section className="header">
        <h1>Family Trees</h1>
        {FamilyContext.families.map(family => (
            <button
                className={`family-button ${family.familyName ===
                    FamilyContext.activeFamily.familyName && "active"}`}
                key={family.familyName}
                onClick={() => FamilyContext.setActiveFamily(family)}
            >
                {family.familyName}
            </button>
        ))}
    </section>);
}

export default Families;