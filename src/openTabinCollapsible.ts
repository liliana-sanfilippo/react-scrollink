export const openTabInCollapsible = (tabId: string, collapsibleId: string) => {
    // Warten Sie, bis das DOM vollständig geladen wurde
    setTimeout(() => {
        // Holen Sie sich das Collapsible
        const collapsible = document.getElementById(collapsibleId);
        if (!collapsible) {
            console.error(`Collapsible mit ID ${collapsibleId} nicht gefunden!`);
            return;
        }
        const tab = collapsible.querySelector(`#${tabId}`);
        if (!tab) {
            console.error(`Tab mit ID ${tabId} im Collapsible ${collapsibleId} wurde nicht gefunden!`);
            return;
        }
        let tabClass = tab!.className;
        const tabs = document.getElementsByClassName(tabClass);
        for (let index = 0; index < tabs.length; index++) {
            (tabs[index] as HTMLElement).style.display = 'none';
        }
        // Wenn der Tab gefunden wurde, stellen Sie sicher, dass der Tab sichtbar gemacht wird
        //console.log(`Tab mit ID ${tabId} im Collapsible ${collapsibleId} wird jetzt geöffnet.`);
        (tab as HTMLElement).style.display = 'block';
        (tab as HTMLElement).style.visibility = 'visible';
        (tab as HTMLElement).style.position = 'relative';  // Falls es ein Positionierungsproblem gibt
        (tab as HTMLElement).style.zIndex = '10';  // Stelle sicher, dass der Tab über anderen Elementen liegt


        // Loggen Sie den Stil des Tabs, um zu überprüfen, ob er tatsächlich auf 'block' gesetzt wurde
        //console.log(`Tab-Display-Stil für ${tabId}: ${(tab as HTMLElement).style.display}`);

    }, 100); // 100 ms Verzögerung für DOM-Ladezeit
};
