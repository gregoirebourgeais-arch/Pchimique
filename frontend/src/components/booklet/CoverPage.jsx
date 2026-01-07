import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Droplets, Shield, FlaskConical, ChevronRight } from "lucide-react";

export default function CoverPage({ onNavigate }) {
  return (
    <div className="relative min-h-[70vh] sm:min-h-[75vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513828646384-e4d8ec30d2bb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxpbmR1c3RyaWFsJTIwY2xlYW5pbmd8ZW58MHx8fHwxNzY3ODI4MTc4fDA&ixlib=rb-4.1.0&q=85')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-foreground/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] sm:min-h-[75vh] px-6 sm:px-8 py-12 text-center">
        {/* Logo/Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/30">
            <Droplets className="w-10 h-10 sm:w-12 sm:h-12 text-primary-foreground" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <p className="text-primary-foreground/80 text-sm sm:text-base font-medium uppercase tracking-widest">
            Livret de Formation
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight">
            Produits de Nettoyage
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-display text-primary-foreground/90">
            en Industrie Agroalimentaire
          </h2>
        </motion.div>

        {/* Product Types Preview */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {[
            { icon: FlaskConical, label: "Produits Basiques", color: "bg-basic/20 border-basic/40" },
            { icon: Droplets, label: "Produits Acides", color: "bg-acidic/20 border-acidic/40" },
            { icon: Shield, label: "Désinfectants", color: "bg-disinfectant/20 border-disinfectant/40" },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full border backdrop-blur-sm ${item.color}`}
            >
              <item.icon className="w-4 h-4 text-primary-foreground" />
              <span className="text-xs sm:text-sm font-medium text-primary-foreground">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10"
        >
          <Button
            onClick={() => onNavigate(1)}
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-6 py-6 rounded-full group"
          >
            Commencer la Formation
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Format Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8"
        >
          <div className="px-3 py-1.5 rounded-md bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
            <span className="text-xs font-medium text-primary-foreground/80">Format A5</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
