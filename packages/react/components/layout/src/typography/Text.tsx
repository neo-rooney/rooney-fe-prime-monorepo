import * as React from "react";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { vars } from "@rooney/themes";
import { clsx } from "clsx";
import { extractSprinkleProps } from "../utils/properties";
import { TextProps } from "./Typography.types";
import { textStyle } from "./Typography.css";

const Text = (props: TextProps, ref: React.Ref<HTMLElement>) => {
  const {
    as = "p",
    color = "gray",
    className,
    style,
    background,
    children,
    fontSize,
  } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        textStyle({
          fontSize,
        }),
        className,
      ]),
      style: {
        ...style,
        color: color && vars.colors.$scale?.[color]?.[700],
        background: background && vars.colors.$scale?.[background]?.[100],
      },
    },
    children,
  );
};

const _Text = React.forwardRef(Text);
export { _Text as Text };
