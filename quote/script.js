function sub() {
    var h;
    var obj;
    var num;
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    .then(response => response.text())
    .then(html => {
        h = html;
        obj = JSON.parse(h);
        num = Math.floor(Math.random() * obj.quotes.length);
        document.getElementById("text").innerHTML = obj.quotes[num].quote;
        document.getElementById("author").innerHTML = obj.quotes[num].author;
    });
}