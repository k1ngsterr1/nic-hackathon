'use client'

import React, { useEffect } from "react"
import { useModal } from "@ebay/nice-modal-react"

type Props = {
  children: React.ReactNode
}

const BODY_MODAL_IS_OPENED_CLASS = 'modalIsOpened'

export default function Modal(props: Props) {
  const modal = useModal();

  useEffect(() => {
    document.addEventListener('keydown', onEscapeKeyClick)
    document.body.classList.add(BODY_MODAL_IS_OPENED_CLASS)

    return () => {
      document.removeEventListener('keydown', onEscapeKeyClick)
      document.body.classList.remove(BODY_MODAL_IS_OPENED_CLASS)
    }
  }, [])

  const onEscapeKeyClick = () => modal.remove()

  return (
    <div className="">
      <div 
        onClick={() => modal.remove()} 
        className=""
      ></div>
      <div className="">
        {props.children}
      </div>
    </div>
  )
}