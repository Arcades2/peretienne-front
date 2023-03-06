import { useState, useEffect } from 'react';

export default function ProgressIndicator() {
  const [progress, setProgress] = useState(0);

  const documentHeight =
    typeof document !== 'undefined'
      ? document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      : 0;

  useEffect(() => {
    const trackProgress = () => {
      const scrollPosition =
        document.body.scrollTop || document.documentElement.scrollTop;

      setProgress((scrollPosition / documentHeight) * 100);
    };

    document.addEventListener('scroll', trackProgress);
    document.dispatchEvent(new Event('scroll'));

    return () => {
      document.removeEventListener('scroll', trackProgress);
    };
  }, [documentHeight]);

  return (
    <div className="relative h-[3px]">
      <div className="h-[1px] w-full bg-teal-500 opacity-85 absolute top-[1px] left-0" />
      <div
        className="h-[3px] bg-teal-500 absolute top-[1px] left-0"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
