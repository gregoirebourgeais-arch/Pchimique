import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BookletNavigation({ 
  currentIndex, 
  totalPages, 
  onPrev, 
  onNext,
  currentTitle 
}) {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalPages - 1;

  return (
    <div className="border-t border-border bg-muted/30 px-4 sm:px-6 py-3">
      <div className="flex items-center justify-between max-w-xl mx-auto">
        {/* Previous Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onPrev}
          disabled={isFirst}
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground disabled:opacity-40"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Précédent</span>
        </Button>

        {/* Page Info */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            {currentIndex + 1} / {totalPages}
          </p>
          <p className="text-sm font-medium text-foreground hidden sm:block">
            {currentTitle}
          </p>
        </div>

        {/* Next Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onNext}
          disabled={isLast}
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground disabled:opacity-40"
        >
          <span className="hidden sm:inline">Suivant</span>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
