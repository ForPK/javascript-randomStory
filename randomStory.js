"use strict";

function init() {
  const form = document.getElementById("form");
  const name = document.getElementById("name");
  const story = document.getElementById("story");

  const allStory =
    "It was 94 fahrenheit outside, so :senA: went for a walk. When they got to :senB:, they stared in horror for a few moments, then :senC:. Bob saw the whole thing, but was not surprised — :senA: weighs 300 pounds, and it was a hot day.";
  const senA = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
  const senB = ["the soup kitchen", "Disneyland", "the White House"];
  const senC = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away",
  ];

  function createSentence() {
    let sentences = allStory;
    // const randomSenA = Math.floor(Math.random() * senA.length);
    // const randomSenB = Math.floor(Math.random() * senB.length);
    // const randomSenC = Math.floor(Math.random() * senC.length);

    function randomArray(array) {
      const randomSen = Math.floor(Math.random() * array.length);
      return array[randomSen];
    }

    sentences = sentences
      .replace(":senA:", randomArray(senA))
      .replace(":senA:", randomArray(senA))
      .replace(":senB:", randomArray(senB))
      .replace(":senC:", randomArray(senC));

    function replaceName() {
      if (name.value !== "") {
        sentences = sentences.replace("Bob", name.value);
      }
    }

    function temper(fahrenheit) {
      const celsius = Math.round(((fahrenheit - 32) * 5) / 9);
      return celsius;
    }

    function weight(pound) {
      const stones = Math.round(pound / 14);
      return stones;
    }

    function checkUnit() {
      const uk = document.getElementById("uk");
      if (uk.checked === true) {
        sentences = sentences.replace("94 fahrenheit", temper(94) + " celsius");
        sentences = sentences.replace("300 pounds", weight(300) + " stone");
      }
    }

    replaceName();
    checkUnit();

    story.style.visibility = "visible";
    story.textContent = sentences;
  }

  function storySubmit(e) {
    e.preventDefault();
    createSentence();
  }

  form.addEventListener("submit", storySubmit);
}

init();
