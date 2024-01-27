// Store the initial content of the h3 tag
var initialContent = document.querySelector(".content h3").innerText;

function updateInfo(content) {
    document.getElementById("info").innerText = content;
}

function updateImage(imageUrl) {
    document.getElementById("placeholderImage").src = imageUrl;
}

function changeContentAndImage(content, imageUrl) {
    // Update the content of the h3 tag
    document.querySelector(".content h3").innerText = content;

    // Update the info and image
    updateInfo(content);
    updateImage(imageUrl);
}

function change1789() {
    changeContentAndImage("1789- U.S. Congress passes the Bill of Rights, the first 10 amendments to the U.S. Constitution. The rights the amendments establish include freedom of speech and the press, the right to bear arms and numerous legal rights of those accused of crimes, including the right to a trial by an impartial jury, protection from cruel and unusual punishments and protection against self-incrimination.", "https://picsum.photos/300/300?random=1");
}

function change1957() {
    changeContentAndImage("1957- The Little Rock Nine begin their first full day of classes at Central High School in Little Rock, Arkansas.", "https://picsum.photos/300/300?random=2");
}

function change1981() {
    changeContentAndImage("1981- Sandra Day O'Connor, the first female U.S. Supreme Court Justice, is sworn in.", "https://picsum.photos/300/300?random=3");
}

function change1992() {
    changeContentAndImage("1992 NASA launches the Mars Observer. The robotic space probe's main goal was to study Mars. Almost a year later all communications with it were lost.", "https://picsum.photos/300/300?random=4");
}

function change2005() {
    changeContentAndImage("2005 - IRA officially disarms.", "https://picsum.photos/300/300?random=5");
}

// Function to reset the content to an empty value
function resetContent() {
    // Update the content of the h3 tag to an empty value
    document.querySelector(".content h3").innerText = "";

    // Clear info and set a default image
    updateInfo("");
    updateImage("https://picsum.photos/300/300");
}
