# Table

Find out more about the table component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/).

## Example

[Preview the table component]()

## HTML markup

```html
<div class="nhsuk-table-responsive">
  <table class="nhsuk-table">
    <caption class="nhsuk-table__caption">Skin symptoms and possible causes</caption>
    <thead class="nhsuk-table__head">
      <tr class="nhsuk-table__row">
        <th class="nhsuk-table__header" scope="col">Skin symptoms</th>
        <th class="nhsuk-table__header" scope="col">Possible cause</th>
      </tr>
    </thead>
    <tbody class="nhsuk-table__body">
      <tr class="nhsuk-table__row">
        <td class="nhsuk-table__cell">Blisters on lips or around the mouth</td>
        <td class="nhsuk-table__cell ">cold sores</td>
      </tr>
      <tr class="nhsuk-table__row">
        <td class="nhsuk-table__cell">Itchy, dry, cracked, sore</td>
        <td class="nhsuk-table__cell ">eczema</td>
      </tr>  
      <tr class="nhsuk-table__row">
        <td class="nhsuk-table__cell">Itchy blisters</td>
        <td class="nhsuk-table__cell ">shingles, chickenpox</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Nunjucks macro

```html
{% from 'components/tables/macro.njk' import table %}

{{ table({
  panel: false,
  caption: "Skin symptoms and possible causes",
  firstCellIsHeader: false,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "eczema"
      }
    ],
    [
      {
        text: "Itchy blisters"
      },
      {
        text: "shingles, chickenpox"
      }
    ]
  ]
}) }}
```

## Table panel 

## Example

[Preview the table panel component]()

## HTML markup

```html
<div class="nhsuk-table__panel-with-heading-tab">
  <h3 class="nhsuk-table__heading-tab">Skin symptoms and possible causes</h3>
  <div class="nhsuk-table-responsive">
    <table class="nhsuk-table">  
      <caption class="nhsuk-table__caption">Skin symptoms and possible causes</caption>
      <thead class="nhsuk-table__head">
        <tr class="nhsuk-table__row">
          <th class="nhsuk-table__header" scope="col">Skin symptoms</th>
          <th class="nhsuk-table__header" scope="col">Possible cause</th>
        </tr>
      </thead>
      <tbody class="nhsuk-table__body">
        <tr class="nhsuk-table__row">
          <td class="nhsuk-table__cell">Blisters on lips or around the mouth</td>
          <td class="nhsuk-table__cell ">cold sores</td>
        </tr>
        <tr class="nhsuk-table__row">
          <td class="nhsuk-table__cell">Itchy, dry, cracked, sore</td>
          <td class="nhsuk-table__cell ">eczema</td>
        </tr>
        <tr class="nhsuk-table__row">
          <td class="nhsuk-table__cell">Itchy blisters</td>
          <td class="nhsuk-table__cell ">shingles, chickenpox</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

## Nunjucks macro

```html
{% from 'components/tables/macro.njk' import table %}

{{ table({
  panel: true,
  heading: "Skin symptoms and possible causes",
  caption: "Skin symptoms and possible causes",
  firstCellIsHeader: false,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "eczema"
      }
    ],
    [
      {
        text: "Itchy blisters"
      },
      {
        text: "shingles, chickenpox"
      }
    ]
  ]
}) }}
```
