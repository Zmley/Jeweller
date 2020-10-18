import React, { useState, useEffect, useContext } from 'react'
import createAuth0Client from '@auth0/auth0-spa-js'
export interface Auth0RedirectState {
  targetUrl?: string
}

export interface Auth0User extends Omit<any, '__raw'> {}

interface Auth0Context {
  user?: Auth0User
  isAuthenticated: boolean
  isInitializing: boolean
  isPopupOpen: boolean
  loginWithPopup(o?: any): Promise<void>
  handleRedirectCallback(): Promise<any>
  getIdTokenClaims(o?: any): Promise<any>
  loginWithRedirect(o?: any): Promise<void>
  getTokenSilently(o?: any): Promise<string | undefined>
  getTokenWithPopup(o?: any): Promise<string | undefined>
  logout(o?: any): void
}
interface Auth0ProviderOptions {
  children: React.ReactElement
  onRedirectCallback(result: any): void
}

export const Auth0Context = React.createContext<Auth0Context | null>(null)
export const useAuth0 = () => useContext(Auth0Context)!
export const Auth0Provider = ({
  children,
  onRedirectCallback,
  ...initOptions
}: Auth0ProviderOptions & any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isInitializing, setIsInitializing] = useState(true)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [user, setUser] = useState<Auth0User>()
  const [auth0Client, setAuth0Client] = useState<any>()

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions)
      setAuth0Client(auth0FromHook)

      if (window.location.search.includes('code=')) {
        let appState: any = {}
        try {
          ;({ appState } = await auth0FromHook.handleRedirectCallback())
        } finally {
          onRedirectCallback(appState)
        }
      }

      const authed = await auth0FromHook.isAuthenticated()

      if (authed) {
        const userProfile = await auth0FromHook.getUser()

        setIsAuthenticated(true)
        setUser(userProfile)
      }

      setIsInitializing(false)
    }

    initAuth0()
    // eslint-disable-next-line
  }, [])

  const loginWithPopup = async (options?: any) => {
    setIsPopupOpen(true)

    try {
      await auth0Client!.loginWithPopup(options)
    } catch (error) {
      console.error(error)
    } finally {
      setIsPopupOpen(false)
    }

    const userProfile = await auth0Client!.getUser()
    setUser(userProfile)
    setIsAuthenticated(true)
  }

  const handleRedirectCallback = async () => {
    setIsInitializing(true)

    const result = await auth0Client!.handleRedirectCallback()
    const userProfile = await auth0Client!.getUser()

    setIsInitializing(false)
    setIsAuthenticated(true)
    setUser(userProfile)
    return result
  }

  const loginWithRedirect = (options?: any) =>
    auth0Client!.loginWithRedirect(options)

  const getTokenSilently = (options?: any) =>
    auth0Client!.getTokenSilently(options)

  const logout = (options?: any) => auth0Client!.logout(options)

  const getIdTokenClaims = (options?: any) =>
    auth0Client!.getIdTokenClaims(options)

  const getTokenWithPopup = (options?: any) =>
    auth0Client!.getTokenWithPopup(options)

  return (
    <Auth0Context.Provider
      value={{
        user,
        isAuthenticated,
        isInitializing,
        isPopupOpen,
        loginWithPopup,
        loginWithRedirect,
        logout,
        getTokenSilently,
        handleRedirectCallback,
        getIdTokenClaims,
        getTokenWithPopup
      }}
    >
      {children}
    </Auth0Context.Provider>
  )
}
