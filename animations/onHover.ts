const zoomOnHover: ZoomOnHoverProps = {
  position: "relative",
  zIndex: 1,
  scale: 1.05,
  transition: {
    duration: 0.5,
  },
};

export { zoomOnHover };

type ZoomOnHoverProps = {
  position: "relative" | "absolute";
  zIndex: number;
  scale: number;
  transition: {
    duration: number;
  };
};