import { Container, Typography } from "@mui/material";
import theme from '../components/theme';

import { UserAuth } from "../context/AuthContext";

function AddPost() {
    return (
    <Container sx={{ bgcolor: `${theme.palette.primary.main}`}}>
      <Typography> {UserAuth}</Typography>
    </Container>
    );
  }
  
  export default AddPost;