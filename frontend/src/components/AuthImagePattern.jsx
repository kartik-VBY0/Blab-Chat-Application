const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center p-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-secondary/12" />
      <div className="absolute top-16 left-14 size-28 rounded-full bg-primary/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-12 size-36 rounded-full bg-secondary/20 blur-3xl animate-pulse" />

      <div className="max-w-md text-center relative z-10">
        <div className="grid grid-cols-3 gap-3 mb-8 perspective-[1000px]">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-primary/10 border border-primary/15 hover-lift ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4 display-font">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;