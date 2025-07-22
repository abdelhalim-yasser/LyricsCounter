function clear() {
    document.getElementById("word").value = "";
    document.getElementById("lyrics").value = "";
    document.getElementById("result").innerHTML = "";

    const button = document.getElementById("button");
    button.textContent = "Count Words";
    button.onclick = countWord;
}

function countWord() {
    const word = document.getElementById("word").value.toLowerCase().trim();
    const lyrics = document.getElementById("lyrics").value.toLowerCase().trim().replace(/[^\p{Script=Arabic}\s]/gu, '');;

    if (!word || !lyrics) {
        document.getElementById("result").innerHTML = "Please enter both a word and lyrics.";
        return;
    }

    const regex = new RegExp(`(?<!\\w)${word}(?!\\w)`, 'gu');
    const match = lyrics.match(regex);
    const count = match ? match.length : 0;
    document.getElementById("result").innerHTML = `The word "${word}" appears ${count} times in the lyrics.`;

    const button = document.getElementById("button");
    button.textContent = "Clear";
    button.onclick = clear;
}
