'use server'
async function fetchCustomerName(customer_id: string) {
  const response = await fetch(process.env.API_URL + '/client/customer/name', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({customer: {id: customer_id}}),
  })

  const data = await response.json()
  return data
}

async function fetchCustomerInfo(token: string) {
  const response = await fetch(process.env.API_URL + '/client/customer/info', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  })

  const data = await response.json()
  return data
}

async function fetchCustomerReview(token: string) {
  const response = await fetch(process.env.API_URL + '/client/review/customer-reviews', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  })

  const data = await response.json()
  return data
}

async function loginCustomer(customer: CustomerLogin | {}) {
  const response = await fetch(process.env.API_URL + '/client/customer/login', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
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
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({customer}),
  })

  const data = await response.json()
  return data
}

export {
  fetchCustomerName,
  fetchCustomerInfo,
  fetchCustomerReview,
  loginCustomer,
  signupCustomer
}