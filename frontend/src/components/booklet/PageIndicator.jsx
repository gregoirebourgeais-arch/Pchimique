import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function PageIndicator({ pages, currentIndex, onPageClick }) {
  return (
    <TooltipProvider>
      <div className="flex justify-center gap-1.5 sm:gap-2 mb-6 px-4">
        {pages.map((page, index) => (
          <Tooltip key={page.id}>
            <TooltipTrigger asChild>
              <button
                onClick={() => onPageClick(index)}
                className="relative group"
                aria-label={`Aller à ${page.title}`}
              >
                <motion.div
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary scale-125'
                      : index < currentIndex
                      ? 'bg-primary/50'
                      : 'bg-muted-foreground/30'
                  }`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                />
                {index === currentIndex && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -inset-1 rounded-full border-2 border-primary/30"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="text-xs">
              {page.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
