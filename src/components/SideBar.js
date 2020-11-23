import React from 'react'
import './SideBar.css'
import SearchIcon from "@material-ui/icons/Search"
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined'
import { IconButton } from '@material-ui/core'
import SideBarThread from './SideBarThread'

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__search">
                    <SearchIcon className="sidebar__searchIcon" />
                    <input placeholder="Search" className="sidebar__input" />
                </div>
                <IconButton variant="outlined" id="sidebar__button" >
                    <BorderColorOutlinedIcon />
                </IconButton>
            </div>
            <div className="sidebar__thread">
                <SideBarThread />
            </div>
            <div className="sidebar__bottom">
                
            </div>
        </div>
    )
}

export default SideBar