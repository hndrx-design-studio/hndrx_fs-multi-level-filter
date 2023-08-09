var level1SelectField = document.querySelector('[hndrx-select-field="level1"]');
var level2SelectField = document.querySelector('[hndrx-select-field="level2"]');
var level3SelectField = document.querySelector('[hndrx-select-field="level3"]');
var level2CollectionList = document.querySelector('[hndrx-select-element="level2-list"]');
var level3CollectionList = document.querySelector('[hndrx-select-element="level3-list"]');

level2SelectField.disabled = true;
level3SelectField.disabled = true;

window.addEventListener("load", start, false);

function start() {
  level1SelectField.addEventListener("change", onChangeLevel1, false);
  level2SelectField.addEventListener("change", onChangeLevel2, false);
}

function onChangeLevel1(e) {
  e.preventDefault();
  var selectedLevel1Value = level1SelectField.value;

  // Reset the Level 2 AND Level 3 Select Fields
  // select back to default
  reset('[hndrx-reset-button="level2"]');
  reset('[hndrx-reset-button="level3"]');

  const level2SelectFieldLength = level2SelectField.options.length;
  const level3SelectFieldLength = level3SelectField.options.length;

  // Take each option from level 2 AND level 3 select and remove it, so that theres an empty list
  for (t = level2SelectFieldLength; t >= 2; t--) {
    document.querySelector('[hndrx-select-field="level2"] :nth-child(' + t + ")").remove();
  }

  for (y = level3SelectFieldLength; y >= 2; y--) {
    document.querySelector('[hndrx-select-field="level3"] :nth-child(' + y + ")").remove();
  }

  // insert each item from [hndrx-select-field="level2"] and [hndrx-select-field="level3"] back in
  for (i = 0; i < level2CollectionList.childElementCount; i++) {
    $('[hndrx-select-field="level2"]').append(
      `<option value="${
        level2CollectionList.querySelectorAll(
          '[hndrx-select-element="level2-list"] > div > div[hndrx-select-element="level2"]'
        )[i].textContent
      }">${
        level2CollectionList.querySelectorAll(
          '[hndrx-select-element="level2-list"] > div > div[hndrx-select-element="level2"]'
        )[i].textContent
      }</option>`
    );
  }

  for (p = 0; p < level3CollectionList.childElementCount; p++) {
    $('[hndrx-select-field="level3"]').append(
      `<option value="${
        level3CollectionList.querySelectorAll(
          '[hndrx-select-element="level3-list"] > div > div[hndrx-select-element="level3"]'
        )[p].textContent
      }">${
        level3CollectionList.querySelectorAll(
          '[hndrx-select-element="level3-list"] > div > div[hndrx-select-element="level3"]'
        )[p].textContent
      }</option>`
    );
  }

  // Loop through all classes of [hndrx-select-element="level2of1"] and compare with selectedLevel1Value
  for (i = 0; i < level2CollectionList.childElementCount; i++) {
    // If equals false, read out text of sibling class [hndrx-select-field="level2"]
    if (
      selectedLevel1Value !=
      level2CollectionList.querySelectorAll(
        '[hndrx-select-element="level2-list"] > div > div[hndrx-select-element="level2of1"]'
      )[i].textContent
    ) {
      var level1Level2TextBlock = level2CollectionList.querySelectorAll(
        '[hndrx-select-element="level2-list"] > div > div[hndrx-select-element="level2of1"]'
      )[i];
      var level2TextBlock = level1Level2TextBlock.previousElementSibling.textContent;

      // Loop Select options, if same, remove option
      for (j = 0; j < level2SelectField.options.length; j++) {
        if (level2TextBlock === level2SelectField.options[j].value) {
          $('[hndrx-select-field="level2"]')
            .children('option[value="' + level2SelectField.options[j].value + '"]')
            .remove();
        }
      }
    }
  }

  // Disable select fields; disable level 2 select field, if "Select Level 1..." was selected (no real value)
  if (level1SelectField.value) {
    level2SelectField.disabled = false;
  } else {
    level2SelectField.disabled = true;
  }
  level3SelectField.disabled = true;
}

function onChangeLevel2(e) {
  e.preventDefault();
  var selectedLevel2Value = level2SelectField.value;

  // Reset the Level 2 Select Field
  // select back to default
  reset('[hndrx-reset-button="level3"]');

  const level3SelectFieldLength = level3SelectField.options.length;

  // Take each option from level 3 select and remove it, so that theres an empty list
  for (s = level3SelectFieldLength; s >= 2; s--) {
    document.querySelector('[hndrx-select-field="level3"] :nth-child(' + s + ")").remove();
  }

  // insert each item from [hndrx-select-field="level3"] back in
  for (u = 0; u < level3CollectionList.childElementCount; u++) {
    $('[hndrx-select-field="level3"]').append(
      `<option value="${
        level3CollectionList.querySelectorAll(
          '[hndrx-select-element="level3-list"] > div > div[hndrx-select-element="level3"]'
        )[u].textContent
      }">${
        level3CollectionList.querySelectorAll(
          '[hndrx-select-element="level3-list"] > div > div[hndrx-select-element="level3"]'
        )[u].textContent
      }</option>`
    );
  }

  // Loop through all classes of [hndrx-select-element="level3of2"] and compare with selectedLevel2Value
  for (i = 0; i < level3CollectionList.childElementCount; i++) {
    // If equals false, read out text of sibling class [hndrx-select-field="level3"]
    if (
      selectedLevel2Value !=
      level3CollectionList.querySelectorAll(
        '[hndrx-select-element="level3-list"] > div > div[hndrx-select-element="level3of2"]'
      )[i].textContent
    ) {
      var level2Level3TextBlock = level3CollectionList.querySelectorAll(
        '[hndrx-select-element="level3-list"] > div > div[hndrx-select-element="level3of2"]'
      )[i];
      var level3TextBlock = level2Level3TextBlock.previousElementSibling.textContent;

      // Loop Select options, if same, remove option
      for (j = 0; j < level3SelectField.options.length; j++) {
        if (level3TextBlock === level3SelectField.options[j].value) {
          $('[hndrx-select-field="level3"]')
            .children('option[value="' + level3SelectField.options[j].value + '"]')
            .remove();
        }
      }
    }
  }

  // Disable level 3 select field; disable level 3 select field, if "Select Level 2..." was selected (no real value)
  if (level2SelectField.value) {
    level3SelectField.disabled = false;
  } else {
    level3SelectField.disabled = true;
  }
}

function reset(linkAttribute) {
  document.querySelector(linkAttribute).click();
}
