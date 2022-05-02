This is a starter template for [Learn Next.js](https://nextjs.org/learn).
* use DatePicker from [here](https://codeburst.io/form-validation-with-next-js-react-part-2-60753d98c252)

* Next.js images are [here](https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/background.js) [demo](https://image-component.nextjs.gallery/background)
* Grid [here](https://theme-ui.com/components/grid)
```javascript
<Grid gap={2} columns={[2, 3, 6]}>
// first row is 2 in mobile
// 2 in ipad 
// 6 in desktopxs
```
```javascript
<Grid gap={1} columns={[1, "1fr 7fr 1fr", 1, "1fr", 1, "1fr"]}>
// one row in mobile
// one row in ipad
// 3 rows in desktops
// 1 left bar, 7 middle and 1 right bar in desktop
// 1 bar for ipad
// 1, 3 and 1 in mobile 
```

* User media response index [here](https://theme-ui.com/packages/match-media/) to have break point

## Middleware
* Add auth or redirection by creating a file like _middleware.ts in each folder at pages like here
https://nextjs.org/docs/advanced-features/middleware
