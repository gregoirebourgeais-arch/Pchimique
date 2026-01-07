import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CoverPage from "@/components/booklet/CoverPage";
import TableOfContents from "@/components/booklet/TableOfContents";
import IntroductionPage from "@/components/booklet/IntroductionPage";
import BasicProductsPage from "@/components/booklet/BasicProductsPage";
import AcidicProductsPage from "@/components/booklet/AcidicProductsPage";
import DisinfectantsPage from "@/components/booklet/DisinfectantsPage";
import SafetyGuidelinesPage from "@/components/booklet/SafetyGuidelinesPage";
import SummaryPage from "@/components/booklet/SummaryPage";
import BookletNavigation from "@/components/booklet/BookletNavigation";
import PageIndicator from "@/components/booklet/PageIndicator";

const pages = [
  { id: "cover", component: CoverPage, title: "Couverture" },
  { id: "toc", component: TableOfContents, title: "Sommaire" },
  { id: "intro", component: IntroductionPage, title: "Introduction" },
  { id: "basic", component: BasicProductsPage, title: "Produits Basiques" },
  { id: "acidic", component: AcidicProductsPage, title: "Produits Acides" },
  { id: "disinfectant", component: DisinfectantsPage, title: "Désinfectants" },
  { id: "safety", component: SafetyGuidelinesPage, title: "Sécurité" },
  { id: "summary", component: SummaryPage, title: "Résumé" },
];

export default function TrainingBooklet() {
  const { pageId } = useParams();
  const navigate = useNavigate();
  const [direction, setDirection] = useState(1);
  
  // Calculate initial page index from URL parameter
  const initialPageIndex = useMemo(() => {
    if (pageId) {
      const index = pages.findIndex((p) => p.id === pageId);
      return index !== -1 ? index : 0;
    }
    return 0;
  }, [pageId]);

  const [currentPageIndex, setCurrentPageIndex] = useState(initialPageIndex);

  const goToPage = (index) => {
    if (index >= 0 && index < pages.length) {
      setDirection(index > currentPageIndex ? 1 : -1);
      setCurrentPageIndex(index);
      navigate(`/page/${pages[index].id}`);
    }
  };

  const goToNext = () => goToPage(currentPageIndex + 1);
  const goToPrev = () => goToPage(currentPageIndex - 1);

  const CurrentPageComponent = pages[currentPageIndex].component;

  const pageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 py-4 px-4 sm:py-8 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Indicator */}
        <PageIndicator
          pages={pages}
          currentIndex={currentPageIndex}
          onPageClick={goToPage}
        />

        {/* Booklet Container */}
        <div className="relative bg-card rounded-2xl shadow-booklet overflow-hidden border border-border/50">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPageIndex}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="min-h-[70vh] sm:min-h-[75vh]"
            >
              <CurrentPageComponent
                onNavigate={goToPage}
                pages={pages}
                currentIndex={currentPageIndex}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <BookletNavigation
            currentIndex={currentPageIndex}
            totalPages={pages.length}
            onPrev={goToPrev}
            onNext={goToNext}
            currentTitle={pages[currentPageIndex].title}
          />
        </div>

        {/* Footer */}
        <footer className="mt-6 text-center text-sm text-muted-foreground">
          <p>Livret de Formation - Produits de Nettoyage en Industrie Agroalimentaire</p>
          <p className="mt-1">Format A5 - Version Interactive</p>
        </footer>
      </div>
    </div>
  );
}
