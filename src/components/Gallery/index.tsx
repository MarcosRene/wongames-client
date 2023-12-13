/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react'
import SlickSlider from 'react-slick'

import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import Slider from '../Slider'

import { GalleryProps, SliderSettingsProps } from './types'

import * as S from './styles'
import { Close } from '@styled-icons/material-outlined'

const commonSettings: SliderSettingsProps = {
  arrows: true,
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

const settings: SliderSettingsProps = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ]
}

const modalSettings: SliderSettingsProps = {
  ...commonSettings,
  slidesToShow: 1
}

const Gallery = ({ items }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const sliderRef = useRef<SlickSlider>(null)

  const handleTurnOnOffModal = (index?: number) => {
    setIsOpen((prevState) => !prevState)
    if (index) {
      sliderRef.current?.slickGoTo(index, true)
    }
  }

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keyup', handleKeyUp)
    return () => document.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <S.Wrapper>
      <Slider ref={sliderRef} settings={settings}>
        {items.map((item, index) => (
          <img
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            role="button"
            onClick={() => handleTurnOnOffModal(index)}
          />
        ))}
      </Slider>

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => handleTurnOnOffModal()}
        >
          <Close size={40} />
        </S.Close>

        <S.Content>
          <Slider ref={sliderRef} settings={modalSettings}>
            {items.map((item, index) => (
              <img key={`gallery-${index}`} src={item.src} alt={item.label} />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
