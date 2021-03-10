import React, { useEffect, useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { SearchOutlined } from '@material-ui/icons'
import db from './firebase'

import './Sidebar.css'
import SidebarChat from './SidebarChat'
import { useStateValue } from './StateProvider'

function Sidebar() {
  const [rooms, setRooms] = useState([])
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    db.collection('rooms').onSnapshot(snapshot =>
      setRooms(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    )
  }, [])
  console.log('ROOMS::', rooms)
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar src={user?.photoURL} />
        {console.log('USER>>>>>>>>>>', user?.displayName)}
        <h1>{user?.displayName}</h1>
        <div className='sidebar__headerRight'>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <SearchOutlined />
          <input type='text' placeholder='Search or start new chat' />
        </div>
      </div>
      <div className='sidebar__chats'>
        <SidebarChat addNewChat />
        {rooms.map(room => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
