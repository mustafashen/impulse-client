'use server'
async function fetchCustomerName(customer_id: string) {
  const response = await fetch(process.env.API_URL + '/client/customer/name', {
    method: 'POST',
    cache: 'no-cache',
    //@ts-ignore
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
    body: JSON.stringify({customer: {id: customer_id}}),
  })
  
  const data = await response.json()
  return data
}

async function loginCustomer(customer: CustomerLogin | {}) {
  console.log(customer)
  const response = await fetch(process.env.API_URL + '/client/customer/login', {
    method: 'POST',
    cache: 'no-cache',
    //@ts-ignore
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
    body: JSON.stringify({customer}),
  })
  
  const data = await response.json()
  return data
}

async function signupCustomer(customer: Customer | {}) {
  console.log(customer)
  const response = await fetch(process.env.API_URL + '/client/customer/signup', {
    method: 'POST',
    cache: 'no-cache',
    //@ts-ignore
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
    body: JSON.stringify({customer}),
  })
  
  const data = await response.json()
  return data
}

export {
  fetchCustomerName,
  loginCustomer,
  signupCustomer
}