// the idea of this is that you can just add class tab index to all elements you want to tab to, and this will automatically add +1 incremented tab indexes to those elements in the order in which they appear which is hopefully better for accessibility and usability instead of setting everything to tabindex 0 or incrementing them all manually
export function tabIndex() {
    // this bit adds the class to all links as they should be indexed anyway:
    const hrefs = document.querySelectorAll('a');
    hrefs.forEach((element) => {
        element.classList.add('tabindex');
    });

    // this adds the actual index:
    const tabElement = document.querySelectorAll('.tabindex');
    let tabIndex = 0;
    tabElement.forEach((element) => {
        tabIndex++;
        element.tabIndex = tabIndex;
    });
}