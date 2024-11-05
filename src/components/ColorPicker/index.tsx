import React, { useState } from "react";
import { StyleSheetManager } from "styled-components";
import { ColorPickerProps } from "./type";
import * as CP from "./styles";





const ColorPicker = React.forwardRef<HTMLInputElement, ColorPickerProps>(
  (
    {
      initialColor = "#000",
      onChange,
      width,
      height,
      backgroundcolor,
      border,
      borderradius,
      padding,
      ...rest
    },
    ref
  ) => {
    const [color, setColor] = useState(initialColor);

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newColor = event.target.value;
      setColor(newColor);
      if (onChange) {
        onChange(event); 
      }
    };

    return (
      <StyleSheetManager
        shouldForwardProp={(prop) =>
          !["width", "height", "backgroundcolor", "border", "borderradius", "padding"].includes(prop)
        }
      >
        <CP.ColorInput
          type="color"
          value={color}
          onChange={handleColorChange}
          width={width}
          height={height}
          backgroundcolor={backgroundcolor}
          border={border}
          borderradius={borderradius}
          padding={padding}
          ref={ref}
          {...rest}
        />
      </StyleSheetManager>
    );
  }
);

export default ColorPicker;
