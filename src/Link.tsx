import useNavigation from "./useNavigation";
import LinkProps from "./LinkProps";

// 2^4 = 16 possible combinations + special cases müssen eventuell ergänzt werden
export function Link({page: page, scrollToId, tabId, subTabId, collapseId, text, tabincolId, keyvalue, classes}:LinkProps){

    const {goToPlace} = useNavigation();
    // 1. [1-1-1-1] go to page and open tab and open subTab and open colapsible in subtab and scroll to something
    if(tabId && subTabId && scrollToId && collapseId && !tabincolId) {
        return(<a key={keyvalue} className={classes} onClick={() => goToPlace({path: page, tabId: tabId, subTabId: subTabId, scrollToId:scrollToId, collapseId:collapseId})}>{text}</a>)
    }
    // special case if a tab in the collapsible shall be opened too
    if(tabId && subTabId && scrollToId && collapseId && tabincolId) {
        return(<a key={keyvalue} className={classes} onClick={() => goToPlace({path: page, tabId: tabId, subTabId: subTabId, scrollToId:scrollToId, collapseId:collapseId, tabincolId:tabincolId})}>{text}</a>)
    }
    // 2. [1-1-1-0] go to page and open tab and open subtab and scroll to something
    else if (tabId && subTabId && scrollToId && !collapseId){
        return(<a key={keyvalue} className={classes} onClick={() => goToPlace({path: page, tabId: tabId, subTabId: subTabId, scrollToId:scrollToId})}>{text}</a>)
    }
    //++3. [1-1-0-1] go to page and open tab and open collapsible
    else if (tabId && subTabId && !scrollToId && collapseId && !tabincolId){
        return(<a key={keyvalue} className={classes} onClick={() => goToPlace({path: page, tabId: tabId, subTabId: subTabId, collapseId:collapseId})}>{text}</a>)
    }
    //special case: go to page and open tab and open collapsible and open tab in collapsible
    else if (tabId && subTabId && !scrollToId && collapseId &&tabincolId){
        return(<a key={keyvalue} className={classes} onClick={() => goToPlace({path: page, tabId: tabId, subTabId: subTabId, collapseId:collapseId, tabincolId:tabincolId})}>{text}</a>)
    }
    //++4. [1-1-0-0] go to page and opent tab and open subtab NO SCROLLING
    else if (tabId && subTabId && !scrollToId && !collapseId){
        return(<a key={keyvalue} className={classes} onClick={() => goToPlace({path: page, tabId: tabId, subTabId: subTabId})}>{text}</a>)
    }
    //++5. [1-0-1-1] go to page and open tab and open collapsible and scroll to something in the collapsible
    else if (tabId && !subTabId && scrollToId && collapseId && !tabincolId){
        return(<a key={keyvalue} className={classes} onClick={() => goToPlace({path: page, tabId: tabId, scrollToId:scrollToId, collapseId:collapseId})}>{text}</a>)
    }
    //special case: go to page and open tab and open collapsible open tab i collapsible and scroll to something in the tab
    else if (tabId && !subTabId && scrollToId && collapseId && tabincolId){
        return(<a key={keyvalue} className={classes} onClick={() => goToPlace({path: page, tabId: tabId, scrollToId:scrollToId, collapseId:collapseId, tabincolId:tabincolId})}>{text}</a>)
    }
    //++6. [1-0-1-0] go to page and open tab and scroll to something
    else if (tabId && !subTabId && scrollToId && !collapseId){
        return(<a key={keyvalue} className={classes} onClick={() => goToPlace({path: page, tabId: tabId, scrollToId:scrollToId})}>{text}</a>)
    }
    //++7. [1-0-0-1] go to page and open tab and open collapsible in tab
    else if (tabId && !subTabId && !scrollToId && collapseId && !tabincolId){
        return(<a key={keyvalue} className={classes} onClick={() => goToPlace({path: page, tabId: tabId, collapseId:collapseId})}>{text}</a>)
    }
    //special case: go to page and open tab and open collapsible in tab and open tab in collapsible
    else if (tabId && !subTabId && !scrollToId && collapseId && tabincolId){
        return(<a key={keyvalue} className={classes} onClick={() => goToPlace({path: page, tabId: tabId, collapseId:collapseId, tabincolId:tabincolId})}>{text}</a>)
    }
    //++8. [1-0-0-0] go to page and open a tab
    else if (tabId && !subTabId && !scrollToId && !collapseId){
        return(<a key={keyvalue} className={classes} onClick={() => goToPlace({path: page, tabId:tabId})}>{text}</a>)
    }
    //++9. [0-1-1-1] go to page and open a collapsible and open a subtab in the collapsible and scroll to something in the subtab
    else if (!tabId && tabincolId && scrollToId && collapseId){
        return(<a key={keyvalue} className={classes} onClick={() => goToPlace({path: page, collapseId:collapseId, tabincolId:tabincolId, scrollToId:scrollToId})}>{text}</a>)
    }
        //++10. [0-1-1-0] it is not possible to only open a subtab and scroll to something there
        /*  */
    //++11. [0-1-0-1] go to page and open a collapsible and scroll to something in the collapsible
    else if (!tabId && subTabId && !scrollToId && collapseId && !tabincolId){
        return(<a key={keyvalue} className={classes} onClick={() => goToPlace({path: page, collapseId:collapseId, subTabId:subTabId})}>{text}</a>)
    }
    //special case: go to page and open a collapsible and open a tab in the collapsible and scroll to something in the tab
    else if (!tabId && subTabId && !scrollToId && collapseId && tabincolId){
        return(<a key={keyvalue} className={classes} onClick={() => goToPlace({path: page, collapseId:collapseId, subTabId:subTabId, tabincolId:tabincolId})}>{text}</a>)
    }
        //++12: [0-1-0-0] it is not possible to go to a page and only open a subtab
        /*  */
    //++13. [0-0-1-1] go to page and open a collapsible scroll to something in the collapsible
    else if (!tabId && !subTabId && scrollToId && collapseId){
        return(<a key={keyvalue} className={classes} onClick={() => goToPlace({path: page, scrollToId:scrollToId, collapseId:collapseId})}>{text}</a>)
    }
    //++14. [0-0-1-0] go to a page and scroll to something
    else if (!tabId && !subTabId && scrollToId && !collapseId){
        return(<a key={keyvalue} className={classes} onClick={() => goToPlace({path: page, scrollToId:scrollToId})}>{text}</a>)
    }
    // 15. [0-0-0-1] go to a page and open a collapsible
    else if (!tabId && !subTabId && !scrollToId && collapseId){
        return(<a key={keyvalue} className={classes} onClick={() => goToPlace({path: page, collapseId:collapseId})}>{text}</a>)
    }
    // 16. [0-0-0-0] Catch all - just go to the page
    else {
        return(<a key={keyvalue} className={classes} onClick={() => {
            goToPlace({path: page});
        }}>{text}</a>)
    }

}