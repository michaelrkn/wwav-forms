# wwav-forms
Autocompletion for voting forms (using https://github.com/kraaden/autocomplete)

# Usage 
Accepts a JSON file with an array of objects, one for each autocomplete "section." 

The `label` key contains the info for the form's primary field. `type` can be `input` or `select`, depending on the form element. `loc` is an attribute used to locate the field, looking for the `title` HTML attribute of an `input` or `select`, depending on the type. 

`fields` (can be an empty object, `{}`) contains info about other fields that should be populated based on the selection of the primary. Note that the field key must match the keys used in the `data` entries.

`data` stores all of the options available for completion.

```json
[
  {
    "label": {"type":"input","loc": "High School Name (required)"},
    "fields": {
      "city": {"type":"input","loc": "High School City"},
      "state": {"type":"select","loc": "High School State"},
      "zipCode": {"type":"input","loc": "High School Zip Code"}
    },
    "data": [
      {"label":"Albert Einstein High School","group":"Montgomery County, Maryland","city":"Kensington","zipCode":"20910","state":"Maryland"},
      {"label":"Bethesda-Chevy Chase","group":"Montgomery County, Maryland","zipCode":"20910"},
      {"label":"Clarksburg High School","group":"Montgomery County, Maryland"},
      {"label":"Col. Zadok Magruder H","group":"Montgomery County, Maryland"}]
  },
  
  {
    "label": {"type":"input","loc": "College Name (required)"},
    ...
  }

]

```
