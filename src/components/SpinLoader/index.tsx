type SpinLoaderProps = {
  className?: string;
};

export function SpinLoader({ className = "" }: SpinLoaderProps) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className="w-10 h-10 border-5 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
