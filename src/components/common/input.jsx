import { Box, Label, Input, Button } from "theme-ui";

export default (props) => (
  <Box sx={{ md: props.md }}>
    <Label htmlFor={props.label}>{props.label}</Label>
    <Input
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      pattern={props.pattern}
      list={props.list}
      autoComplete={props.autoComplete}
      // add background color in inputs
      style={{background: "rgb(255, 255, 255)"}}
    />
  </Box>
);
