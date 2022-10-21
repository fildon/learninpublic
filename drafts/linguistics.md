# Falsehoods programmers believe about language

[WALS](https://wals.info/languoid) have documented 2,662 languoids. Whatever assumptions you have about language, will be untrue in some.

For each falsehood, I will provide a counter example and where possible a reference for further reading. The falsehoods are loosely grouped by theme.

For the purpose of this article I have chosen to omit [Constructed Languages](https://en.wikipedia.org/wiki/Constructed_language).

## Each language is spoken in only one country

English is spoken in the UK and USA. TODO better example which can't be dismissed as different dialects.

## Each country uses only one language

The official languages of Malta are `Maltese` and `English`. TODO iso codes and reference.

## Every language is associated with at least one country

## Every language has exactly one name for itself

## Every language has exactly one letter system

## Every language has a written form

## Every language with a written form has exactly one written form

## Every language with a written form can express the same concepts either spoken or written

## Every language can be written in ASCII

TODO also UTF/UNICODE breakdowns

## For every language with multiple alphabets you use only one alphabet in a given sentence

Japanese will happily mix and match hirogana, katakana and the other one TODO

## If a language has plural forms, all nouns use it

TODO

## In every language word order matters

## In every language word order conveys meaning

## Languages never change

French

## Languages have an official source to determine what is correct

French

## Languages do not have an official source to determine what is correct

## Languages have a dictionary

## Every language has a word for "yes"

Latin `la`, Mandarin `cmn`, Cantonese `yue`.

## Every language has articles

Polish does not have articles

## Every language uses stress consistently

> Lexical marking yields systems with unpredictable stress by definition. Because stress is lexical, it can be a distinctive property, as we see in these Pashto (Iranian; Pakistan and Afghanistan) examples: ˈguta ‘knot’, guˈta ‘pochard’.

[ref](https://wals.info/chapter/16)

## Every language with 'gender' has exactly two genders

Modern Greek has Masculine, Feminine and Neutral

## Every language with 'gender' has either two or three genders

Zulu has 16 noun classes. [ref](https://en.wikipedia.org/wiki/Zulu_grammar#Noun_classes)

Swahili has 18 noun classes. [ref](https://en.wikipedia.org/wiki/Swahili_grammar#Noun_classes)

## Every language with 'gender' puts 'man' and 'woman' in different genders

Note on "Noun Class" vs "Grammatical Gender": [Grammatical Gender](https://en.wikipedia.org/wiki/Grammatical_gender)

> Whereas some authors use the term "grammatical gender" as a synonym of "noun class", others use different definitions for each; many authors prefer "noun classes" when none of the inflections in a language relate to sex.

The Ojibwe language puts `ikwe` (woman) and `inini` (man) in the same noun class: animate nouns.

## A singular masculine noun is still masculine when plural

[Somali](https://en.wikipedia.org/wiki/Somali_grammar#Number)

> buug-ga (the book) is masculine in the singular, but buugag-ta (the books) is feminine.

## Every language with 'gender' has always had the same number of genders

(French collapsed from 3 to 2) TODO source?

## Every language has a way to indicate questions

The Mixtec language spoken by over half a million people has no way to distinguish a question from a statement.

> Matthew S. Dryer. 2013. Polar Questions.
> In: Dryer, Matthew S. & Haspelmath, Martin (eds.)
> The World Atlas of Language Structures Online.
> Leipzig: Max Planck Institute for Evolutionary Anthropology.
> (Available online at http://wals.info/chapter/116, Accessed on 2022-06-04.)

[url](https://wals.info/valuesets/116A-mxc)

## Every language has a way to express numbers

The Pirahã language does not seem to have any number system.

## TODO

The [Seneca Language](https://en.wikipedia.org/wiki/Seneca_language) (ISO: `see`) has `

## TODOs

TODO does every written language have a spoken form.

TODO cases

TODO tenses

TODO

[PluralResolver](https://github.com/i18next/i18next/blob/master/src/PluralResolver.js)

## Localization is more than just Translation

TODO

## Internationalization vs Localization

`Internationalization` is the technical means by which a program can support multiple languages. This should include for example the capability to insert different text to the UI depending on the user's locale. But there's more to it than that. It might also include the UI flexibly adapting to handle text that reads either left-to-right or right-to-left.

`Localization` is the more specific process of creating the information necessary to provide for a particular locale. This work includes the translation of text in one language into another.

> In computing, internationalization and localization (American) or internationalisation and localisation (British English), often abbreviated i18n and L10n,[1] are means of adapting computer software to different languages, regional peculiarities and technical requirements of a target locale.[2] Internationalization is the process of designing a software application so that it can be adapted to various languages and regions without engineering changes. Localization is the process of adapting internationalized software for a specific region or language by translating text and adding locale-specific components. Localization (which is potentially performed multiple times, for different locales) uses the infrastructure or flexibility provided by internationalization (which is ideally performed only once before localization, or as an integral part of ongoing development).

## Example with inputs

What inputs does your program accept? Does it presuppose a locale? Typically command line flags are the first letter of an associated word, e.g. `git commit -m "commit message"` the `-m` flag is short for `message`. What about commandline confirmation such as `This operation cannot be reversed. Would you like to proceed? [y/n]`. `y/n` here is indicative of `yes` or `no` but that pair of letters might have no particular significance in another locale. `y` and `n` might not even be available on the keyboard of a user in a different locale. How therefore can we support users responding to a yes-no question with letter keys which better reflect their locale's preferences?

## Polish

Mam jeden plik

Nie mam jednego pliku

Numbers get gender!?

Gender alters the word of a number

Case alters the ...

jeden - male nominative
jedna - female nominative
jednego - male accussative
jedna - female accussative

## References

[i18next:pluralresolver](https://github.com/i18next/i18next/blob/master/src/PluralResolver.js)
[MDN:Localization](https://developer.mozilla.org/en-US/docs/Glossary/Localization)
[Launchpad.net:Plural rules](https://translations.launchpad.net/+languages)
[GNU gettext docs](http://www.gnu.org/software/gettext/manual/gettext.html#Plural-forms)
[WALS](https://wals.info/)
