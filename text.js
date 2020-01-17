/* eslint-disable */
const textarea = document.querySelector('[name="text"]');
const result = document.querySelector(".result");
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));

const funkyLetters = {
  "-": "₋",
  "!": "ᵎ",
  "?": "ˀ",
  "(": "⁽",
  ")": "₎",
  "+": "⁺",
  "=": "₌",
  "0": "⁰",
  "1": "₁",
  "2": "²",
  "4": "₄",
  "5": "₅",
  "6": "₆",
  "7": "⁷",
  "8": "⁸",
  "9": "⁹",
  a: "ᵃ",
  A: "ᴬ",
  B: "ᴮ",
  b: "ᵦ",
  C: "𝒸",
  d: "ᵈ",
  D: "ᴰ",
  e: "ₑ",
  E: "ᴱ",
  f: "𝒻",
  F: "ᶠ",
  g: "ᵍ",
  G: "ᴳ",
  h: "ʰ",
  H: "ₕ",
  I: "ᵢ",
  i: "ᵢ",
  j: "ʲ",
  J: "ᴶ",
  K: "ₖ",
  k: "ₖ",
  l: "ˡ",
  L: "ᴸ",
  m: "ᵐ",
  M: "ₘ",
  n: "ₙ",
  N: "ᴺ",
  o: "ᵒ",
  O: "ᴼ",
  p: "ᵖ",
  P: "ᴾ",
  Q: "ᵠ",
  q: "ᑫ",
  r: "ʳ",
  R: "ᵣ",
  S: "ˢ",
  s: "ˢ",
  t: "ᵗ",
  T: "ₜ",
  u: "ᵘ",
  U: "ᵤ",
  v: "ᵛ",
  V: "ᵥ",
  w: "𝓌",
  W: "ʷ",
  x: "ˣ",
  X: "ˣ",
  y: "y",
  Y: "Y",
  z: "𝓏",
  Z: "ᶻ"
};

const filters = {
  sarcastic(letter, index) {
    if (index % 2) {
      return letter.toUpperCase();
    }
    return letter.toLowerCase();
  },
  funky(letter) {
    // first check if there is a funky letter for this case
    let funkyLetter = funkyLetters[letter];
    if (funkyLetter) return funkyLetter;
    // if not, check if there is a lower case version
    funkyLetter = funkyLetters[letter.toLowerCase()];
    if (funkyLetter) return funkyLetter;
    // if nothing, just do a normal letter
    return letter;
  },
  unable(letter) {
    var random = Math.floor(Math.random() * 3);
    if (letter === " " && random === 2) return "...";
    return letter;
  }
};

function transformText(eventTarget) {
  // const filter = document.querySelector('[name="filter"]:checked').value;

  // better way to do it with .find() since we already have the var
  const filter = filterInputs.find(item => item.checked).value;
  // text the text and loop over each letter
  const mod = Array.from(eventTarget.value).map(filters[filter]);
  result.textContent = mod.join("");
}

textarea.addEventListener("input", function() {
  transformText(textarea);
});

document.addEventListener("change", function(e) {
  if (e.target.matches('[name="filter"]')) {
    transformText(textarea);
  }
});
