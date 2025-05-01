import { createContext, useState, useContext } from 'react'

export const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = (userData) => {
    setUser(userData)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

// 3. Optional helper to use context in any component
export const useUser = () => useContext(UserContext)
