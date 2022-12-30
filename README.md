This is a starter template for [Learn Next.js](https://nextjs.org/learn).
* use DatePicker from [here](https://codeburst.io/form-validation-with-next-js-react-part-2-60753d98c252)

* Next.js images are [here](https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/background.js) [demo](https://image-component.nextjs.gallery/background)
* Grid [here](https://theme-ui.com/components/grid)
```javascript
import { Box, Grid } from "theme-ui";
<Grid gap={2} columns={[2, 3, 6]}>
// first row is 2 in mobile
// 2 in ipad 
// 6 in desktopxs
```
```javascript
<Grid gap={1}
      columns={["1fr 2fr 1fr", "1fr 7fr 1fr"]}>
      <Box> left box   </Box>
      <Box> right box  </Box>
      <Box> middle box </Box>
</Grid>
// columns={["mobile", "desktop"]} >
// gap 1 is distance between each box
// mobile:  left and right are 1 and 2 is middle
// desktop: left and right boxes are 1 and middle is 7
```

* User media response index [here](https://theme-ui.com/packages/match-media/) to have break point

## Middleware
* Add auth or redirection by creating a file like _middleware.ts in each folder at pages like here
https://nextjs.org/docs/advanced-features/middleware
