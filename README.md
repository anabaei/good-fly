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
// It means 3 columns, if we pass two or one numbers like this 
// ["1fr", "1fr 1fr"] it means one row in mobile, two same rows in desktop
// columns={["mobile", "desktop"]} >
// gap 1 is distance between each box
// mobile:  left and right are 1 and 2 is middle
// desktop: left and right boxes are 1 and middle is 7
```

* User media response index [here](https://theme-ui.com/packages/match-media/) to have break point

## Middleware
* Add auth or redirection by creating a file like _middleware.ts in each folder at pages like here
https://nextjs.org/docs/advanced-features/middleware

## Modal
* use bootstrap to create  modal, before that make sure to import bootstrap css in the root of the _app 


## Git
* `git config pull.rebase false` using to merge local branch with repository branch when `git pull` we have divergent branch and need to specify how to reconcile them


## TravelInfos
```javascript
// departure location date 
// destination location date
// explanation
// cost 

```
## PackageInfos
```javascript
// destination location
// departure location 
// explanation
// willing to pay

```

## .env 

* To save env variable define `env` file as define here https://nextjs.org/docs/basic-features/environment-variables
* 
