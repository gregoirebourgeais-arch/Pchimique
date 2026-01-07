import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  FlaskConical, 
  Droplets, 
  Shield, 
  AlertTriangle,
  ClipboardList,
  ChevronRight 
} from "lucide-react";

const tocItems = [
  { id: 2, icon: BookOpen, title: "Introduction", subtitle: "Comprendre l'hygiène agroalimentaire", pageNum: "03" },
  { id: 3, icon: FlaskConical, title: "Produits Basiques (Alcalins)", subtitle: "Élimination des graisses et protéines", pageNum: "04", color: "text-basic" },
  { id: 4, icon: Droplets, title: "Produits Acides", subtitle: "Élimination du calcaire et minéraux", pageNum: "05", color: "text-acidic" },
  { id: 5, icon: Shield, title: "Désinfectants", subtitle: "Élimination des micro-organismes", pageNum: "06", color: "text-disinfectant" },
  { id: 6, icon: AlertTriangle, title: "Règles de Sécurité", subtitle: "Précautions et bonnes pratiques", pageNum: "07" },
  { id: 7, icon: ClipboardList, title: "Résumé", subtitle: "Points clés à retenir", pageNum: "08" },
];

export default function TableOfContents({ onNavigate }) {
  return (
    <div className="px-6 sm:px-8 lg:px-12 py-8 sm:py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 sm:mb-10"
      >
        <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Page 02</p>
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Sommaire</h1>
        <div className="mt-3 w-16 h-1 bg-primary rounded-full mx-auto" />
      </motion.div>

      {/* Table of Contents */}
      <div className="space-y-3 sm:space-y-4 max-w-xl mx-auto">
        {tocItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Button
              variant="ghost"
              onClick={() => onNavigate(item.id)}
              className="w-full h-auto py-4 px-4 sm:px-5 justify-start hover:bg-muted/60 group rounded-xl border border-transparent hover:border-border transition-all"
            >
              <div className="flex items-center gap-4 w-full">
                {/* Icon */}
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color ? 'bg-current/10' : 'bg-primary/10'}`}>
                  <item.icon className={`w-5 h-5 ${item.color || 'text-primary'}`} />
                </div>

                {/* Title & Subtitle */}
                <div className="flex-1 text-left min-w-0">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base truncate">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                {/* Page Number */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-sm font-medium text-muted-foreground">{item.pageNum}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Visual Element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-10 flex justify-center gap-3"
      >
        {["basic", "acidic", "disinfectant"].map((type, i) => (
          <div
            key={type}
            className={`w-3 h-3 rounded-full ${type === 'basic' ? 'bg-basic' : type === 'acidic' ? 'bg-acidic' : 'bg-disinfectant'}`}
          />
        ))}
      </motion.div>
    </div>
  );
}
