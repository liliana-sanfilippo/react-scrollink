export const handleScroll = (scrollId: string) => {
    const scrollElement = document.getElementById(scrollId);
    if (scrollElement) {
        const elementTop = scrollElement.getBoundingClientRect().top + window.pageYOffset;
        const offset = window.innerHeight / 2 - scrollElement.offsetHeight;
        const scrollPosition = elementTop - offset;

        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth',
        });
    }
};