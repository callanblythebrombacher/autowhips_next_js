import {TextField} from "@mui/material";
import {withStyles} from "@mui/styles";

export const Theme = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'white',
        }, '& .MuiInput-underline:after': {
            borderBottomColor: 'yellow',
        }, '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            }, '&:hover fieldset': {
                borderColor: 'white',
            }, '&.Mui-focused fieldset': {
                borderColor: 'yellow',
            },
        },
    },
})(TextField);



