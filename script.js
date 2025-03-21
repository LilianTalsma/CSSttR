ranges = document.querySelectorAll('[type="range"]'); // Reassign ranges

 updateRange = range => {
    // the name of the custom property is the name of the input
    rangeName = range.name;
    // the value of the custom property is the value of the input
     rangeValue = range.value;
    // a custom property is set on the HTML element
    document.documentElement.style.setProperty("--"+rangeName, rangeValue);
}

ranges.forEach(range => {
    // the custom property is set initially after loading the document
    updateRange(range);
    
    // the custom property is updated when the input is changed
    range.oninput = () => {
        updateRange(range)
    };
});
