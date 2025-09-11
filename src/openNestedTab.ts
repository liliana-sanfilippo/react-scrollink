import { openTab } from "./openTab";

// Funktion, um verschachtelte Tabs zu öffnen
export const openNestedTab = (parentTabId: string, childTabId: string, parentClass: string, childClass: string) => {
    openTab(parentTabId, parentClass);

    const nestedTabs = document.querySelectorAll(`#${parentTabId} ${childClass}`);
    nestedTabs.forEach((tab) => {
        (tab as HTMLElement).style.display = 'none';
    });

    const selectedNestedTab = document.getElementById(childTabId);
    if (selectedNestedTab) {
        selectedNestedTab.style.display = 'block';
    }
};