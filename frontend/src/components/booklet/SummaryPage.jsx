import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FlaskConical, 
  Droplets, 
  Shield, 
  CheckCircle,
  Download,
  RotateCcw,
  Award
} from "lucide-react";

const summaryPoints = [
  {
    icon: FlaskConical,
    title: "Produits Basiques (Alcalins)",
    color: "basic",
    points: [
      "pH > 7 (généralement 9-14)",
      "Éliminent graisses et protéines",
      "Usage : nettoyage principal",
    ],
  },
  {
    icon: Droplets,
    title: "Produits Acides",
    color: "acidic",
    points: [
      "pH < 7 (généralement 1-4)",
      "Éliminent tartre et minéraux",
      "Usage : détartrage périodique",
    ],
  },
  {
    icon: Shield,
    title: "Désinfectants",
    color: "disinfectant",
    points: [
      "Action antimicrobienne",
      "Appliqués sur surfaces propres",
      "Respecter le temps de contact",
    ],
  },
];

export default function SummaryPage({ onNavigate }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="px-6 sm:px-8 lg:px-12 py-8 sm:py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Page 08</p>
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Award className="w-5 h-5 text-primary" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Résumé</h1>
        </div>
        <p className="text-sm text-muted-foreground">Points clés à retenir</p>
      </motion.div>

      {/* Summary Cards */}
      <div className="space-y-4 mb-8">
        {summaryPoints.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + index * 0.1 }}
          >
            <Card className={`border-l-4 ${
              item.color === 'basic' ? 'border-l-basic bg-basic-light/20' :
              item.color === 'acidic' ? 'border-l-acidic bg-acidic-light/20' :
              'border-l-disinfectant bg-disinfectant-light/20'
            }`}>
              <CardContent className="py-4 px-5">
                <div className="flex items-start gap-4">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    item.color === 'basic' ? 'bg-basic/10' :
                    item.color === 'acidic' ? 'bg-acidic/10' :
                    'bg-disinfectant/10'
                  }`}>
                    <item.icon className={`w-5 h-5 ${
                      item.color === 'basic' ? 'text-basic' :
                      item.color === 'acidic' ? 'text-acidic' :
                      'text-disinfectant'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-2">{item.title}</h3>
                    <ul className="space-y-1">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-success flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Key Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="py-5 px-5 text-center">
            <p className="text-sm text-foreground font-medium mb-1">Règle d&apos;Or</p>
            <p className="text-base sm:text-lg font-display font-semibold text-primary">
              &ldquo;Nettoyer avant de désinfecter, rincer entre chaque étape&rdquo;
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
      >
        <Button
          variant="outline"
          onClick={() => onNavigate(0)}
          className="flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Recommencer
        </Button>
        <Button
          onClick={handlePrint}
          className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Télécharger en PDF
        </Button>
      </motion.div>

      {/* Completion Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex justify-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/30">
          <Award className="w-5 h-5 text-success" />
          <span className="text-sm font-medium text-success">Formation complétée</span>
        </div>
      </motion.div>
    </div>
  );
}
