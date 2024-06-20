// Write your code here
import {useState} from 'react'
import {UnlockContainer, Image, Message, Button} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(false)

  const onClickLock = () => {
    setLock(prevState => !prevState)
  }

  const displayImage = lock
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const displayMessage = lock
    ? 'Your Device is Unlocked'
    : 'Your Device is Locked'

  const displayButtonText = lock ? 'Lock' : 'Unlock'

  const displayAltName = lock ? 'unlock' : 'lock'

  return (
    <UnlockContainer>
      <Image src={displayImage} alt={displayAltName} />
      <Message>{displayMessage}</Message>
      <Button type="button" onClick={onClickLock}>
        {displayButtonText}
      </Button>
    </UnlockContainer>
  )
}

export default Unlock
