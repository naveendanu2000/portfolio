import gsap from "gsap";

export const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  console.log(e.clientX, e.clientY);
  const el = e.currentTarget;
  if (!el) return;

  const rect = el.getBoundingClientRect();

  // mouse position relative to center
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  // max rotation in degrees
  const maxRotate = 12;

  const rotateY = (x / (rect.width / 2)) * maxRotate;
  const rotateX = -(y / (rect.height / 2)) * maxRotate;
  gsap.to(e.currentTarget, {
    rotateX,
    rotateY,
    duration: 0,
  });
};
