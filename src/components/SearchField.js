import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchField() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', marginTop: "1em", marginLeft: "1em", marginRight: "1em", height: "2em", display: 'flex', width: "400px"}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Posts"
        inputProps={{ 'aria-label': 'search posts' }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: '10px', color:'white'}} aria-label="search">
        <SearchIcon style={{color: '#1976D2'}} />
      </IconButton>
    </Paper>
  );
}