import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { User } from 'react-feather'

export default function Account() {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <User/>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      hemlo
    </DropdownMenuContent>
  </DropdownMenu>
  )
}
