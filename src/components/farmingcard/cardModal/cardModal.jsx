import React, { useState, useEffect } from 'react'

import 
  cardModalBalance
 from './cardModal.module.scss'

import cardModal from './cardModal.module.scss'
import cardModalTitle from './cardModal.module.scss'
import cardModalInputContainer from './cardModal.module.scss'
import cardModalInput from './cardModal.module.scss'
import cardModalMaxButton from './cardModal.module.scss'


import { Modal, Title, Button, Input } from '../../'

export function CardModal(props) {
  const { title, isOpen, closeHandler, balance, callMethod, buttonText } = props
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    props.updateWalletAmount(inputValue)
  }, [inputValue])

  const inputHandler = (e) => {
    setInputValue(e.target.value)
  }

  const callMethodHandler = () => {
    if (props.walletAmount === 0 || props.walletAmount === '') {
      return
    }
    callMethod()
  }

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler}>
      <div className={cardModal}>
        <Title className={cardModalTitle} level={3}>
          {title}
        </Title>
        <div className={cardModalInputContainer}>
          <Input
            onChange={inputHandler}
            value={inputValue}
            className={cardModalInput}
          />
          <Button
            className={cardModalMaxButton}
            onClick={() => {
              setInputValue(String(balance))
            }}
          >
            Max
          </Button>
        </div>

        <span className={cardModalBalance}>Balance: {balance}</span>

        <Button
          onClick={callMethodHandler}
          disabled={props.walletAmount === 0 || props.walletAmount === ''}
        >
          {buttonText}
        </Button>
      </div>
    </Modal>
  )
}
