# Payment Experience Review

## Topics to consider

- no-js
- iframes
- semantic HTML
- "We are all just temporarily abled"
- No one cares about your website

## No JS

`about:config` set `javascript.enabled` to `false`

Takes 1.2 minutes to load the front page. Everything is broken.

Fucking unbearable

## JS

_20MB_ to load a fucking landing page

## 4G

35seconds

## iframes

Fine for users, horrible for devs

## Warning message

Nested `p` tag?

## Logical Content Flow

[W3/WAI](https://www.w3.org/WAI/tutorials/page-structure/headings/)

Utterly non-existant on payment page (probably equally balls elsewhere)

## Credit/Debit Card

Fields can be navigated by keyboard, but focus is sent on a goose chase afterwards. It goes via... _something_ around the radio button, and then the tooltip.

Tooltip question mark has no visual focus indication. Also has no alt text description.

Tooltip dialogue has peculiar HTML element choices. Uses `strong` instead of a low rank heading. Uses a whitespace only `p` as a spacer.

Then focus jumps down to gift code checkbox

## Klarna

_Unconventional_ keyboard handling

I cannot tab-highlight between inner options, but I can cursor key navigate.

Unfocusable external links?

## PAYPAL

_Cannot be selected by keyboard navigation at all!?_

## Gift Card

Hefty finger printing analytics on every select and unselect

Animation on load in? TODO does it respect CSS preference reduced animation?

## Submit buttons

Provide no visual indication of focus state.

If validation error, visual field scrolls up, but focus remains on submission button. (Not sure if this is _bad_ per se, but might be less surprising to move focus to invalid element)

No ARIA-live regions for validation errors

## Terms and Conditions

What the fuck is going on in this HTML!? Supremely nested spans with exactly one style each!?

Bizzare decision to add `lang="ES"` attribute _deep down_ in nested spans.

Where the hell does focus go after exit?

Dialog boxes are missing aria description labels

[reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Text_labels_and_names#dialogs_should_be_labeled)

Exit button has no visual indication of focus

`Back to Top` link has no visual indication of focus

## Side bar

_Some_ correct usage of headings, but then also some random `strong` elements instead of appropriate heading elements.

No alt text on edit links.

No visual indication of focus state on clickable edit links.

`Need Help` area has clickable spans? Because like fuck giving any semantic indication of what is going on. (They should be role `button`).

Accepted payment methods at bottom has no alt text

## Footer

Cookie configuration is incorrectly an anchor tag. It should have role button.

Data dialog uses a div with explicit role `radiogroup`... is that standard?

Data dialog has form validation without an Aria-live region.

Latter three links are ok.

## The Console

Why is _anything_ getting logged to the console in production!?
