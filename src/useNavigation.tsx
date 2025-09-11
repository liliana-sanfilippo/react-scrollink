import {useNavigate} from "react-router-dom";

export const useNavigation = () => {
    const navigate = useNavigate();

    const goToPlace = ({
                           path,
                           scrollToId,
                           tabId,
                           subTabId,
                           collapseId,
                           tabincolId
                       }: {
        path: string;
        scrollToId?: string;
        tabId?: string;
        subTabId?: string;
        collapseId?: string;
        tabincolId?: string;
    }) => {
        // Den vollständigen Pfad erstellen, indem wir den basePath und path kombinieren
        let url = `/${path.startsWith("/") ? path.slice(1) : path}`;

        let paramsAdded = false;
        console.log("Found path: " + path)
        // 1. Tab-Logik (tabId und subTabId)
        if (tabId) {
            console.log("Found tabID: " + tabId)
            url += `?tab=${tabId}`;
            paramsAdded = true;
            if (subTabId) {
                console.log("Found subTabId: " + subTabId)
                url += `&subTab=${subTabId}`;
            }
        }

        // 2. Collapse-Logik (collapseId und tabincolId)
        if (collapseId) {
            console.log("Found collapseId: " + collapseId)
            if (!tabId) {
                // Wenn kein tabId gesetzt ist, fügen wir collapseId hinzu
                url += url.includes('?') ? `&collapseId=${collapseId}` : `?collapseId=${collapseId}`;
                paramsAdded = true;
            }
            if (tabincolId) {
                console.log("Found tabincolId: " + tabincolId)
                url += `&colTab=${tabincolId}`;
            }
        }

        // 3. Scroll-Logik (scrollToId)
        if (scrollToId) {
            // console.log("Found scrollToId: " + scrollToId)
            // Wenn bereits Parameter existieren, fügen wir & hinzu, ansonsten ?
            const separator = paramsAdded ? '&' : '?';
            paramsAdded = true;
            url += `${separator}scrollTo=${scrollToId}`;
        }
        console.log("Final URL:", url);
        // Navigiere zur URL
        navigate(url);
        if(paramsAdded == false) {
            console.log("No params")
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    };

    return {goToPlace};
}


export default useNavigation;