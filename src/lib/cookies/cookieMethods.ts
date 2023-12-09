'use server'
import { cookies } from 'next/headers'

function setCookie(name: string, value: string) {
  const cookieStore = cookies()
  cookieStore.set(name, value, {sameSite: 'strict'})
}

function getCookie(name: string) {
  const cookieStore = cookies()
  const token = cookieStore.get(name)
  return token
}

export {
  setCookie,
  getCookie,
}