export default function Hero({ children ,link }) {
  return (
    <div className={`w-full ${!link && 'bg-pink items-center justify-center'} text-white h-80   flex flex-col `} style={link ? {
        background: link,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height:'500px'
      } : undefined}>
      {children}
    </div>
  );
}
