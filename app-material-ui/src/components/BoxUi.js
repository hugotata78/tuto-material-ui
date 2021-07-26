import { Grid, Box } from "@material-ui/core";

const BoxUi = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Box border={1}>Box 1</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box border={1}>Box 1</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box border={1}>Box 1</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box border={1}>Box 1</Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default BoxUi;
