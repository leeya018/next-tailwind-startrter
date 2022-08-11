export default function Image({
  children,
  icon,
  className1 = "",
  className2 = "",
  alt,
}) {
  return (
    <div className={className1}>
      <img src={icon} alt={alt} className={className2} />
      {children}
    </div>
  );
}
