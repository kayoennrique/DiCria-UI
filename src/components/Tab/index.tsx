import React, { useState } from "react";
import { TabProps } from "./types";
import * as S from "./styles";
import { StyleSheetManager } from "styled-components";

const Tab: React.FC<TabProps & React.HTMLAttributes<HTMLDivElement>> = ({
    tabs,
    bgcolor,
    activebgcolor,
    hoverbgcolor,
    containertextcolor,
    listitemtextcolor,
    width,
    height,
    alignitems,
    fontfamilylist,
    active: initialActive = true,
    fontfamily,
    ...rest
}) => {
    const [activeTab, setActiveTab] = useState(0);
    const [active, setActive] = useState(initialActive);

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== "active"}>
            <S.TabContainer
                tabs={tabs}
                containertextcolor={containertextcolor}
                alignitems={alignitems}
                fontfamily={fontfamily} // Passed fontfamily
                {...rest}
            >
                <S.TabList>
                    {tabs.map((tab, index) => (
                        <S.TabListItem
                            tabs={tabs}
                            key={index}
                            active={activeTab === index && active}
                            bgcolor={bgcolor}
                            activebgcolor={activebgcolor}
                            hoverbgcolor={hoverbgcolor}
                            textcolor={listitemtextcolor}
                            height={height}
                            width={width}
                            fontfamilylist={fontfamilylist} // Passed fontfamily
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.title}
                        </S.TabListItem>
                    ))}
                </S.TabList>
                <S.TabContent > 
                    {tabs[activeTab].content}
                </S.TabContent>
            </S.TabContainer>
        </StyleSheetManager>
    );
};

export default Tab;
