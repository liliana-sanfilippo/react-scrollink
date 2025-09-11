export function openFromOtherPage(it: string, openclass?: string) {
    var opcla: string;
    if (openclass){
        opcla = openclass;
    }
    // if no tab specified use default class
    else{
        opcla = "tab-class";
    }
    return (event: React.MouseEvent<HTMLElement> | { currentTarget: HTMLElement }) => {
        // Get all elements with the specified class and hide them
        let tabcontent = document.getElementsByClassName(opcla);
        for (let i = 0; i < tabcontent.length; i++) {
            (tabcontent[i] as HTMLElement).style.display = "none";
        }
        // Show the specific tab content based on the "it" parameter
        const tabToOpen = document.getElementById(it);
        if (tabToOpen) {
            tabToOpen.style.display = "block";

            // Scroll the tab content into view
            const elementTop = tabToOpen.getBoundingClientRect().top + window.pageYOffset;
            const offset = window.innerHeight / 2 - tabToOpen.offsetHeight / 2;
            const scrollPosition = elementTop - offset;

            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth',
            });
        }
        // Optionally, add an "active" class to the clicked button (if needed)
        const tabs = document.querySelectorAll('.btn-new');
        tabs.forEach(tab => tab.classList.remove('active'));

        if (event.currentTarget) {
            event.currentTarget.classList.add('active');
        }

    }
}