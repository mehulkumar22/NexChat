const AuthImagePattern = ({ title, subtitle }) => {
  const imageUrls = [
    "https://images.unsplash.com/photo-1750175546521-67761dbc7400?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1727343268376-0521b84e43ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1748443157965-e504a6532648?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1728443814449-7a2ad4d86ec3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1728443433557-3fc9e37b58c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1750086721456-28c384a8896b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1743736750720-5d927199fc15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1749810364373-5e2f18bb842a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1749222013825-fe2025dcf0cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
  ];

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 px-12 py-16 xl:px-24 xl:py-20">
      <div className="w-full max-w-lg xl:max-w-2xl text-center">
        <div className="grid grid-cols-3 gap-4 xl:gap-6 mb-10 xl:mb-12">
          {imageUrls.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`person-${i}`}
              loading="lazy"
              className="aspect-square rounded-2xl object-cover animate-fadeInOut"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
        <h2 className="text-3xl xl:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-base xl:text-lg text-base-content/70">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
