import { Dispatch, SetStateAction } from 'react'

import {
  DEFAULT_TEXT_STROKE_COLOR_DARK,
  DEFAULT_TEXT_STROKE_COLOR_LIGHT,
  SHAPES
} from '@/constants'
import { ShapeConfig } from '@/types'
import { isLightFontColor } from '@/utils'

export const useHandleChangeFillColor = ({
  setSelectedFillColor,
  selectedShapeIds,
  setShapeConfigList
}: {
  setSelectedFillColor: (fillColor: string) => void
  selectedShapeIds: string[]
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
}) => {
  const handleChangeFillColor = (newColor: string) => {
    setSelectedFillColor(newColor)

    if (selectedShapeIds.length === 0) {
      return
    }

    setShapeConfigList((currentConfigList) =>
      currentConfigList.map((currentConfig) => {
        if (!selectedShapeIds.includes(currentConfig.id)) {
          return currentConfig
        }

        switch (currentConfig.type) {
          case SHAPES.text:
            return {
              ...currentConfig,
              fill: newColor,
              stroke: isLightFontColor(newColor)
                ? DEFAULT_TEXT_STROKE_COLOR_DARK
                : DEFAULT_TEXT_STROKE_COLOR_LIGHT
            }
          case SHAPES.arrow:
            return {
              ...currentConfig,
              fill: newColor,
              stroke: newColor
            }
          default:
            return {
              ...currentConfig,
              stroke: newColor
            }
        }
      })
    )
  }

  return { handleChangeFillColor }
}

export const useHandleChangeStrokeWidth = ({
  setSelectedStrokeWidth,
  selectedShapeIds,
  setShapeConfigList
}: {
  setSelectedStrokeWidth: (strokeWidth: number) => void
  selectedShapeIds: string[]
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
}) => {
  const handleChangeStrokeWidth = (newStrokeWidth: number) => {
    setSelectedStrokeWidth(newStrokeWidth)

    if (selectedShapeIds.length === 0) {
      return
    }

    setShapeConfigList((currentConfigList) =>
      currentConfigList.map((currentConfig) => {
        if (!selectedShapeIds.includes(currentConfig.id)) {
          return currentConfig
        }

        if (currentConfig.type === SHAPES.text) {
          return currentConfig
        }

        return {
          ...currentConfig,
          strokeWidth: newStrokeWidth
        }
      })
    )
  }

  return { handleChangeStrokeWidth }
}
