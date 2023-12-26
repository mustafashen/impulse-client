'use server'
import { cookies } from 'next/headers'

async function setCookie(name: string, value: string) {
  const cookieStore = cookies()
  cookieStore.set(name, value, {sameSite: 'strict'})
}

async function getCookie(name: string) {
  const cookieStore = cookies()
  const token = cookieStore.get(name)
  return token
}

async function deleteCookie(name: string) {
  const cookieStore = cookies()
  cookieStore.delete(name)
}

export {
  setCookie,
  getCookie,
  deleteCookie
}