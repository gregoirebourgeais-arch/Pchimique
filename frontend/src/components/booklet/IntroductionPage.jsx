import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertCircle, Target, ShieldCheck } from "lucide-react";

const objectives = [
  "Identifier les différents types de produits de nettoyage",
  "Comprendre leurs applications spécifiques",
  "Connaître les règles de sécurité essentielles",
  "Appliquer les bonnes pratiques d'hygiène",
];

export default function IntroductionPage() {
  return (
    <div className="px-6 sm:px-8 lg:px-12 py-8 sm:py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Page 03</p>
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Introduction</h1>
        <div className="mt-3 w-16 h-1 bg-primary rounded-full mx-auto" />
      </motion.div>

      {/* Importance Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="mb-6 border-l-4 border-l-primary bg-primary/5">
          <CardContent className="py-5 px-5">
            <div className="flex gap-4">
              <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">L&apos;importance de l&apos;hygiène</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dans l&apos;industrie agroalimentaire, le nettoyage et la désinfection sont 
                  des étapes critiques pour garantir la sécurité des produits alimentaires 
                  et la santé des consommateurs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Objectives */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Objectifs de la formation</h2>
        </div>
        <div className="space-y-3">
          {objectives.map((obj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
            >
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{obj}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* pH Scale Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="bg-muted/30">
          <CardContent className="py-5 px-5">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-foreground">Comprendre l&apos;échelle du pH</h3>
            </div>
            
            {/* pH Scale */}
            <div className="space-y-3">
              <div className="h-4 ph-scale-gradient rounded-full" />
              <div className="flex justify-between text-xs text-muted-foreground font-medium">
                <span>0</span>
                <span className="text-acidic">Acide</span>
                <span>7 (Neutre)</span>
                <span className="text-basic">Basique</span>
                <span>14</span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
              Le pH détermine si un produit est acide (pH &lt; 7), neutre (pH = 7) 
              ou basique/alcalin (pH &gt; 7). Cette propriété définit son utilisation.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
