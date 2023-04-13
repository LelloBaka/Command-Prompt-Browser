
var commands = [
    "list",
    "search",
    "time",
    "cls",
    "light",
    "dark",
    "cut",
]

var shortcuts = [
    {
        nome: "youtube",
        url: "https://www.youtube.com",
    },
    {
        nome: "campus",
        url: "https://campus.marconivr.it/",
    },
    {
        nome: "github",
        url: "https://github.com/",
    },
    {
        nome: "classeviva",
        url: "https://web.spaggiari.eu/home/app/default/login.php?ch=scuola",
    },
    {
        nome: "gmail",
        url: "https://mail.google.com/mail/u/0/#inbox",
    },
    {
        nome: "drive",
        url: "https://drive.google.com/drive/u/0/my-drive",
    },
]

var path = 'C:/Web/User>';


function execute() {
    let searchBox = document.getElementById("searchBox");
    let output = document.getElementById("output");

    if (searchBox.value.includes("list")) {
        getList();
    } else if (searchBox.value.includes("search")) {
        value = searchBox.value.split(" ").slice(1);
        value = value.join(" ");

        window.open("https://www.google.com/search?q=" + value, "_blank");
        output.innerHTML = output.innerHTML + "<p class='text'>" + path + searchBox.value + "<br>" + "Searching -> " + value + "</p>";

    } else if (searchBox.value.includes("url")) {
        value = searchBox.value.split(" ").slice(1);
        value = value.join("");

        window.open(value, "_blank");
        output.innerHTML = output.innerHTML + "<p class='text'>" + path + searchBox.value + "<br>" + "Opening url -> " + value + "</p>";

    } else if (searchBox.value.includes("time")) {
        time = new Date();
        output.innerHTML = output.innerHTML + "<p class='text'>" + path + searchBox.value + "<br>" + "Now it's " + time.toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' }) + " " + time.toLocaleTimeString() + "</p>";
    } else if (searchBox.value.includes("cls")) {
        output.innerHTML = "";
    } else if (searchBox.value.includes("light")) {
        light();
        output.innerHTML = output.innerHTML + "<p class='text'>" + path + searchBox.value + "<br>Passing to Light Mode</p>";
    } else if (searchBox.value.includes("dark")) {
        dark();
        output.innerHTML = output.innerHTML + "<p class='text'>" + path + searchBox.value + "<br>Passing to Dark Mode</p>";
    } else if (searchBox.value.includes("cut")) {

        value = searchBox.value.split(" ").slice(1);
        value = value.join(" ");
        let check = 0;
        for (let i = 0; i < shortcuts.length; i++) {
            if (value.toLowerCase() == shortcuts[i].nome) {
                window.open(shortcuts[i].url, "_blank");
                check = 1;
            }
        }
        if (check == 1) {
            output.innerHTML = output.innerHTML + "<p class='text'>" + path + searchBox.value + "<br>Opening shortcut -> " + value + "</p>";
        } else {
            if (value.length > 0) {
                output.innerHTML = output.innerHTML + "<p class='text'>" + path + searchBox.value + "<br>Shortcut not found</p>";
            } else {
                output.innerHTML = output.innerHTML + "<p class='text'>" + path + searchBox.value + "<br>Shortcut list</p>";
            }

            let shorts = "";

            for (let i = 0; i < shortcuts.length; i++) {
                shorts = shorts + "- " + shortcuts[i].nome + "<br>";
            }
            output.innerHTML = output.innerHTML + "<p class='text'>Your shortcuts are<br>" + shorts + "</p>";
        }
    } else {
        output.innerHTML = output.innerHTML + "<p class='text'>" + path + searchBox.value + "<br>" + "Command not found<br>Use 'list' to see the commands";
    }
    searchBox.value = "";
}

function getList() {
    let searchBox = document.getElementById("searchBox");
    let output = document.getElementById("output");

    let list = "- search stringToSearch -> (Makes you search on internet a string)<br>" +
        "- url stringToSearch -> (Makes you search on internet an url)<br>" +
        "- cut shortcutName -> (Makes you search on internet a saved shortcut)<br>" +
        "- time -> (Shows the Time in your Area)<br>" +
        "- cls -> (Clears the screen)<br>" +
        "- light -> (turns on light mode)<br>" +
        "- dark -> (turns on dark mode)";

    output.innerHTML = output.innerHTML + "<p class='text'>" + path + searchBox.value + "<br>" + list + "</p>";
}

function light() {
    let root = document.querySelector(':root');

    root.style.setProperty('--background-color', 'rgb(240, 240, 240)');
    root.style.setProperty('--text-color', 'rgb(40, 40, 40)');
}

function dark() {
    let root = document.querySelector(':root');

    root.style.setProperty('--background-color', 'rgb(40, 40, 40)');
    root.style.setProperty('--text-color', 'rgb(240, 240, 240)');

}
