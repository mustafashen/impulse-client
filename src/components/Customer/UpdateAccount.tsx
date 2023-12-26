import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Dialog } from '@radix-ui/react-dialog'
import UpdatePasswordDialog from './UpdatePasswordDialog'

export default function UpdateAccount() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            Change Account Information
          </CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            Change Password
          </CardTitle>
        </CardHeader>
        <CardContent>
          <UpdatePasswordDialog/>
        </CardContent>
      </Card>
    </div>
  )
}
