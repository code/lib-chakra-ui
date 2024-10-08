import { defineRecipe } from "../../styled-system"

export const markRecipe = defineRecipe({
  className: "chakra-mark",
  base: {
    bg: "transparent",
    color: "inherit",
    whiteSpace: "nowrap",
    colorPalette: "accent",
  },

  variants: {
    variant: {
      subtle: {
        bg: "colorPalette.muted",
        color: "inherit",
      },
      solid: {
        bg: "colorPalette.solid",
        color: "colorPalette.contrast",
      },
      text: {
        fontWeight: "medium",
      },
      plain: {},
    },
  },

  defaultVariants: {
    colorPalette: "accent",
  },
})
