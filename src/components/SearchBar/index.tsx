import { Box, InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import styles from "./SearchBar.module.css";

type Props = {
  searchHandler: (e: any) => void;
};

const SearchBar = ({ searchHandler }: Props) => {
  return (
    <Box className={styles.searchBox}>
      <TextField
        sx={{
          "& fieldset": {
            borderRadius: "8px",
          },
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#FFF",
          },
        }}
        onChange={searchHandler}
        placeholder="Buscar"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
