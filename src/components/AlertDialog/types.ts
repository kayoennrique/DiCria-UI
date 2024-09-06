type ButtonProps = {
  textdecoration?: string;
  textcolor?: string;
  textcolorhover?: string;
  bgcolor?: string;
  hoverbgcolor?: string;
  boxshadowbutton?: string;
  textbutton: string;
  widthbutton?: string;
  borderbutton?: string;
  fontweightbutton?: string;
  paddingbutton?: string;
  onClick: () => void;
};

type AlertDialogButtonsProps = {
  confirmbutton?: ButtonProps;
  cancelbutton?: ButtonProps;
};

export type AlertDialogProps = {
  maintext?: string;
  title?: string;
  buttons?: AlertDialogButtonsProps;
  width?: string;
  height?: string;
  padding?: string;
  borderradius?: string;
  backgroundcolor?: string;
  sizetitle?: string;
  sizetext?: string;
  titlecolor?: string;
  textcolorcontainer?: string;
  separatorcolor?: string;
  separatorheight?: string;
  separatorwidth?: string;
  flexdirection?: string;
  alignitems?: string;
  onClose?: () => void;
  gap?: string;
  justifycontent?: string;
  margintop?: string;
  fontfamily?: string;
};
