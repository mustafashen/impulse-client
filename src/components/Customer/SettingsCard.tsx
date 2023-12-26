import { Card } from '../ui/card'
import DeleteDialog from './DeleteDialog'
import UpdateAccount from './UpdateAccount'


export default function SettingsCard() {
  return (
    <Card>
      <UpdateAccount/>
      <DeleteDialog/>
    </Card>
  )
}
