# Commerce.Next

Checkout only or all Glass?

Whatever we do, side-by-side partial rollout

Who are our stakeholders? What features are non-negotiable for them?

[Notion migrating to Next](https://www.notion.so/blog/migrating-notion-marketing-to-next-js)

[Joel on Software: don't rewrite](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/)

Between BFF and Commerce.Next Where does CHKAPI live in the future?

Should CHKAPI continue, but only as a "dumb" layer? If so what about its existing complexity/logic? Can _all_ of that shift left or right into BFF or Commerce.Next?

Assume CHKAPI is too big to rewrite. How to migrate it to make it "thinner?"

---

CHK Service exists... still young. Will need to take over CHKAPI functionality bit-by-bit

Glass will need to be kept in sync to reference the correct service CHKAPI/CHKSERVICE

_How_ to arrange calls to backend services? In client/React vs during server side rendered? Advantages favour server side.

- Server side caching benefits even cold clients
- Minimal interface layer between client and server (server controls complexity)

Many _exceptions_ to handle: Adidas/Reebok/Yeezy/IvyPark

## Creation of new BFF

To handle server side rendering and logical routing to services. Potentially makes many requests, but provides the client with a minimal response to render.

Some of this functionality is already handled by Glass's BFF, but not all (and not exactly how we would like).

## Path to deprecating CHKAPI

Existing logic in CHKAPI should either move "down" into BFF or "up" into CHKService

Product don't want to wait years for us to migrate. Deliver new features to buy time.

x amount of time spent adding new features
x amount of time spent moving old features out of CHKAPI to either BFF or CHKSERVICE

Expect to continue using CHKAPI for years

## BONUS: Reduce reliance on Redux in Glass?

Pure functional components that do not know about Redux. Consumers of these components are welcome to provide Redux and inject values via props or context (or whatever)
