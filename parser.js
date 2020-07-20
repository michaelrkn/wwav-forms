var myPostRender = function(args) {
  fetch('./formtest_files/autodata.json')
  .then(function(response) {
    response.json().then(function(sections) {
      for (var i = 0; i < sections.length; i++) {
        var section = sections[i].data;
        var sectionFields= sections[i].fields;

        autocomplete(
          {
            minLength: 1,
            input: document.querySelector(sections[i].label.type+'[title="'+sections[i].label.loc+'"]'),
            fetch: function(text, update) {
              text = text.toLowerCase();
              var suggestions = section.filter(n => n.label.toLowerCase().match(text))
              update(suggestions);
          },
          onSelect: function (item, inputfield) {
            for (field in item) {
              if (field !== 'label' && field in sectionFields){
                if (sectionFields[field].type==='input') {
                  document.querySelector(sectionFields[field].type+'[title="'+sectionFields[field].loc+'"]').value=item[field];
                } else if (sectionFields[field].type==='select') {
                  var options=Array.from(document.querySelector(sectionFields[field].type+'[title="'+sectionFields[field].loc+'"]').children).filter(function(option){ // to find the text that matches the State Value
                    return option.text == item[field];
                  });
                  options[0].selected=true;
                }
              }
            }
            inputfield.value = item.label;
          },
          preventSubmit: true,
        });
      }
    });
  });
  return args;
};

var nvtag_callbacks = nvtag_callbacks || {};
nvtag_callbacks.postRender = nvtag_callbacks.postRender || [];
nvtag_callbacks.postRender.push(myPostRender);
