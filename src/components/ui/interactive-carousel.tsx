"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface SlideData {
  title: string;
  button: string;
  description?: string;
  features?: Array<{
    title: string;
    description: string;
  }>;
  highlights?: string[];
  type?: 'growth' | 'opportunity' | 'support' | 'technology' | 'community';
  buttonLink?: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const getCardBackground = (type: string) => {
  switch (type) {
    case 'growth':
      return 'bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400';
    case 'opportunity':
      return 'bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500';
    case 'support':
      return 'bg-gradient-to-br from-cyan-400 via-emerald-400 to-lime-400';
    case 'technology':
      return 'bg-gradient-to-br from-purple-400 via-fuchsia-400 to-pink-400';
    case 'community':
      return 'bg-gradient-to-br from-teal-300 via-cyan-300 to-blue-400';
    default:
      return 'bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400';
  }
};

const getCardStyle = (type: string) => {
  switch (type) {
    case 'growth':
      return 'backdrop-blur-sm border border-white/20 shadow-[0_0_30px_rgba(16,185,129,0.3)]';
    case 'opportunity':
      return 'backdrop-blur-sm border border-white/30 shadow-[0_8px_32px_rgba(59,130,246,0.4)] hover:translate-y-[-2px] transition-transform';
    case 'support':
      return 'backdrop-blur-sm border border-white/20 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-shadow';
    case 'technology':
      return 'backdrop-blur-sm border border-white/25 shadow-[0_0_25px_rgba(192,132,252,0.4)]';
    case 'community':
      return 'backdrop-blur-sm border border-white/15 shadow-[0_0_20px_rgba(6,182,212,0.2)]';
    default:
      return 'backdrop-blur-sm border border-white/20';
  }
};

const getFeatureBackground = (index: number) => {
  const backgrounds = [
    'bg-white/10',
    'bg-white/15',
    'bg-white/10',
    'bg-white/15'
  ];
  return backgrounds[index % backgrounds.length];
};

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const navigate = useNavigate();
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const { button, title } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[85vmin] h-[85vmin] mx-[2vmin] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden transition-all duration-300 ease-out ${getCardBackground(slide.type || 'growth')} ${getCardStyle(slide.type || 'growth')}`}
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          {current === index && (
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent transition-all duration-1000" />
          )}
        </div>

        <article
          className={`relative p-8 md:p-10 transition-opacity duration-1000 ease-in-out flex flex-col justify-between h-full ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex-1 flex flex-col">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white leading-tight font-serif">
                {title}
              </h2>
              {slide.description && (
                <p className="text-base md:text-lg text-white/90 leading-relaxed font-light">
                  {slide.description}
                </p>
              )}
            </div>

            {slide.features && (
              <div className="space-y-3 mb-4 flex-1">
                {slide.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className={`p-3 rounded-lg ${getFeatureBackground(idx)} backdrop-blur-sm border border-white/20`}>
                    <div className="flex items-start gap-3 text-left">
                      <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1 text-sm md:text-base leading-tight">{feature.title}</h3>
                        <p className="text-xs md:text-sm text-white/90 leading-relaxed line-clamp-2">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {slide.features.length > 3 && (
                  <p className="text-xs text-white/70 text-center">+{slide.features.length - 3} more features</p>
                )}
              </div>
            )}

            {slide.highlights && (
              <div className="mb-6 flex-1">
                <div className="space-y-3 text-left">
                  {slide.highlights.slice(0, 4).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors">
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 mt-2.5"></div>
                      <span className="text-sm md:text-base text-white/95 leading-relaxed font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center mt-6">
            <button 
              onClick={() => {
                console.log('Button clicked!', slide.buttonLink);
                if (slide.buttonLink) {
                  navigate(slide.buttonLink);
                } else {
                  console.log('No buttonLink found');
                }
              }}
              className="px-8 py-4 bg-white/95 text-gray-900 font-bold rounded-2xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl text-base md:text-lg border border-white/20 cursor-pointer"
            >
              {button}
            </button>
          </div>
        </article>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

interface InteractiveCarouselProps {
  slides: SlideData[];
}

export function InteractiveCarousel({ slides }: InteractiveCarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className="relative w-[85vmin] h-[85vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-2vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}