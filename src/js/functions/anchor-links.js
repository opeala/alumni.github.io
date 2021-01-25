export function anchorLinks() {
    // this finds all links in the page:
    let anchors = document.querySelectorAll("a");

    // this applies the following to each a separately:
    anchors.forEach((element) => {
    // this takes the hashed link and stores it as a variable to use later, it also removes the first character as when we need it the first character would be a # and we dont need that for the scrolling function:
    const hash = element.hash.substring(1);
    // this checks if the first character of the hash is actuall a # as those are the only ones we want, this may be redundant at this point but I dont think it hurts:
    if (element.hash.charAt(0) === "#") {
        // this makes each element listen out to see if it is being clicked on:
        element.addEventListener(
        "click",
        function () {
            // this activates on the click and scrolls the page to the id that uses the specified hash:
            document.getElementById(hash).scrollIntoView({ behavior: "smooth" });
        },
        false
        );
        // this bit just removes the hrefs once everything else is set up as they are no longer needed and would only interfere with the scrolling functionality:
        element.removeAttribute("href");
    }
    });
}