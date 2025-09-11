// Function to open a main tab
export const openTab = (tabId: string, tabClass: string) => {
    // console.log(`Trying to find tab with ID ${tabId}`);
    const selectedTab = document.querySelector(`#${tabId}`);
    if (selectedTab) {
        //console.log('Tab found!');
        const tabs = document.getElementsByClassName(tabClass);
        for (let index = 0; index < tabs.length; index++) {
            (tabs[index] as HTMLElement).style.display = 'none';
        }
        const selectedTab = document.getElementById(tabId);
        if (selectedTab) {
            selectedTab.style.display = 'block';
            selectedTab.style.visibility = 'visible';
            selectedTab.style.position = 'relative';  // In case there's a positioning issue
            selectedTab.style.zIndex = '10';  // Ensure the tab is above other elements
        }
    } else {
        console.error(`Tab with ID ${tabId} not found.`);
    }
};
