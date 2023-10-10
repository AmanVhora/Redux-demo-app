import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { fetchNotifications, selectAllNotifications } from '../features/notifications/notificationsSlice'
import { useDispatch, useSelector } from 'react-redux'

export const Navbar = () => {
  const dispatch = useDispatch()
  const notifications = useSelector(selectAllNotifications)
  const totalUnreadNotifications = notifications.filter(n => !n.read).length

  const fetchNewNotifications = () => {
    dispatch(fetchNotifications())
  }

  let unreadNotifications

  if (totalUnreadNotifications > 0) {
    unreadNotifications = <span className='badge'>{totalUnreadNotifications}</span>
  }

  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
            <Link to="/users">Users</Link>
            <Link to="/notifications">Notifications {unreadNotifications}</Link>
          </div>
          <button className="button" onClick={fetchNewNotifications}>
            Refresh Notifications
          </button>
        </div>
      </section>
    </nav>
  )
}
