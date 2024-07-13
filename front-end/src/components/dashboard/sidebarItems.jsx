import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

const SidebarItems = ({ link, navigate, open,index }) => {
    const location = useLocation();

    const matchRoute = (path) => {
        return location.pathname === path;
    }

    return (
        <React.Fragment key={index}>
            <ListItem
                key={link.id}
                disablePadding
                sx={{ display: "block", }}
                onClick={() => {
                    navigate(`${link.path}`);
                }}

            >
            <ListItemButton
                    sx={{
                        "&:hover": {
                            backgroundColor: "#434EB3",
                            margin: "5px",
                        },
                        minHeight: 48,
                        justifyContent: "center",
                        px: 2.5,
                        backgroundColor: matchRoute(link.path) ? '#434EB3' : 'inherit',
                        margin: matchRoute(link.path) ? '5px' : 'inherit',
                        borderRadius:'5px',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color:open? '#FAFAFA':''
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mb: 1, 
                            justifyContent: "center",
                            color:open? '#FAFAFA':''
                        }}
                    >
                        {link.icon}
                    </ListItemIcon>
                    <Typography sx={{opacity: open ? 1 : 0,
                            textAlign: 'center', 
                            display: open ? 'block' : 'none' ,
                            whiteSpace:'wrap',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden'   }}>
                        {link.title}
                    </Typography>
                </ListItemButton>
            </ListItem>
        </React.Fragment>
    );
};

export default SidebarItems;
