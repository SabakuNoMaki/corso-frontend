let card = document.createElement("div");
card.className = "card";
document.body.appendChild(card);

let score = document.createElement("span");
score.className = "score";
scoreText = document.createTextNode("4.8");
score.appendChild(scoreText);
card.appendChild(score);

let svgScore = document.createElement("svg");
let svgScore2 =
    '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.45976 1.536C6.64642 1.04366 7.35284 1.04366 7.54009 1.536L8.74759 4.88083C8.78971 4.98979 8.86389 5.08341 8.96033 5.14934C9.05677 5.21526 9.17094 5.25039 9.28776 5.25008H12.2552C12.8035 5.25008 13.0427 5.93258 12.6116 6.26683L10.4999 8.16675C10.4053 8.23946 10.3362 8.34027 10.3025 8.45471C10.2687 8.56915 10.2721 8.69134 10.3121 8.80375L11.0833 12.0722C11.2711 12.5972 10.6633 13.0481 10.2036 12.7249L7.33534 10.9049C7.23711 10.8359 7.11998 10.7988 6.99992 10.7988C6.87986 10.7988 6.76273 10.8359 6.66451 10.9049L3.79626 12.7249C3.33717 13.0481 2.72876 12.5966 2.91659 12.0722L3.68776 8.80375C3.72776 8.69134 3.73113 8.56915 3.69739 8.45471C3.66364 8.34027 3.59451 8.23946 3.49992 8.16675L1.38826 6.26683C0.956589 5.93258 1.19692 5.25008 1.74409 5.25008H4.71151C4.82834 5.25047 4.94254 5.21537 5.039 5.14944C5.13545 5.0835 5.20962 4.98984 5.25167 4.88083L6.45917 1.536H6.45976Z" fill="#FFD057" stroke="#FFD057" stroke-linecap="round" stroke-linejoin="round"/></svg>';
svgScore.innerHTML = svgScore2;
score.appendChild(svgScore);

let sandwichImg = document.createElement("div");
let sImg = document.createElement("img");
sImg.className = "sandwich-img";
sImg.src = "assets/unsplash_SqYmTDQYMjo.png";
sImg.alt = "Sandwich";
sandwichImg.appendChild(sImg);
card.appendChild(sandwichImg);

let titolo = document.createElement("div");
titolo.className = "titolo";
card.appendChild(titolo);

let par1 = document.createElement("h2");
let par2 = document.createElement("h2");
let par1Text = document.createTextNode("Sandwich");
let par2Text = document.createTextNode("12K");
par1.appendChild(par1Text);
par2.appendChild(par2Text);
titolo.appendChild(par1);
titolo.appendChild(par2);

let descrizione = document.createElement("div");
descrizione.className = "descrizione";
card.appendChild(descrizione);
let paragraph = document.createElement("span");
paragraph.className = "paragraph";
let paragraphText = document.createTextNode("bread with meat and vegetables");
paragraph.appendChild(paragraphText);
descrizione.appendChild(paragraph);

let pulsante = document.createElement("button");
let svgPlus =
    '<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect x="0.321045" width="18" height="17" fill="url(#pattern0)"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_3_28856" transform="translate(0 -0.0294118) scale(0.0166667 0.0176471)"/></pattern><image id="image0_3_28856" width="60" height="60" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALZSURBVHgB7ZuBddowEIbPTMAGVSdoNqjZIJ0g7QRNJ4BMEDpByAbpBKETlE6AMgFkgusddvpoym9LwjxOjr/3ZL+cbcX/0+l0kgyRwMxTKRv+H7XdSXHUF0TMLYcxpT4AWhZRUu5ECv5FmTOS8j3i/gsRfUEZo4LnUnzEMyVlzKgoiq2cP0U884H6gLjqdWA/3lBfEDGPgaIdZcro1d9fpGwDnispU/4RLP3ZUyW6jY/UJ8Rl5y0uvaZMKQ4ZRdBYTppkOMoP7ZJLKQ/isfevLxboqTrBeJQypnzxUiZ1V90xQnfKTSs53VDeOClrabyrF0PR9oQOVZR5dkWVm2tLr0IEOzllG6T2WIrgSatgpc6ucu7LL0yC7mrIwD6TMfSdGE9570aB9fwGdnNTRXHbhZy+gctlqOAVsFudOT0Au6MQdEwGLmJ25gTel2MqQP3CkTH0ncC7rkNdWvHAbtGtHbD7GMEocL0ne8AhNEYwClwl2cMBu+9CsEWXRi381IVgDRDWsjAH7NtgwfXqpgeXrSUg74A9KkorP4E9l8X551jBufRjB+yeYpC+eokGdDIEH5tl7VU0ZoyJwNXwjrs0OMqlWwKXIxs4YPd6iO3DivUEBHnaboMhRfATsFsJXA7Yn/WQIngJ7FaGJgfsXg9durQjG3Tr0vWi9qENN42OFloZZVleDyktrKBWtiAYtbDXQ6pgNDe+ojNSr76U4HLINjCs+LIhAZnyGZZ95H+WmvFxSyYYtBB/oHJ1G60kl8X5hcSe3b53kkvXGVfM507n5u+mYGofVvRzpxXZ52Z/u/QouFoOXbNdZtQ1XIlesC10Df360PsmBS0kXE4zqnLqc4zHGle0i+mqzLyOMwMDAwMDbxMZlr5y888J9NotJXDKupPg6kOSUGZW6k6Gw7+zVqI+k+i67mMmD/ucMqvptO6uBP+IuPee4jhl3elo/+HmmdMmtY91Wfcfe0B48y7j/zUAAAAASUVORK5CYII="/></defs></svg>';
pulsante.innerHTML = svgPlus;
descrizione.appendChild(pulsante);
