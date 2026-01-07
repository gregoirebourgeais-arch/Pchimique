import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Droplet, CheckCircle, AlertTriangle, Bug, Timer } from "lucide-react";

const disinfectants = [
  {
    name: "Hypochlorite de Sodium (Javel)",
    type: "Chloré",
    action: "Bactéricide, virucide, fongicide",
    applications: ["Surfaces", "Eau", "Équipements"],
    contact: "5-15 min",
  },
  {
    name: "Ammoniums Quaternaires",
    type: "Tensioactif",
    action: "Bactéricide, détergent",
    applications: ["Sols", "Murs", "Plans de travail"],
    contact: "10-15 min",
  },
  {
    name: "Acide Peracétique",
    type: "Oxydant",
    action: "Large spectre, sans résidu",
    applications: ["CIP", "Emballages", "Surfaces alimentaires"],
    contact: "5-10 min",
  },
  {
    name: "Peroxyde d'Hydrogène",
    type: "Oxydant",
    action: "Écologique, décomposition en eau",
    applications: ["Salles blanches", "Équipements sensibles"],
    contact: "10-20 min",
  },
];

export default function DisinfectantsPage() {
  return (
    <div className="px-6 sm:px-8 lg:px-12 py-8 sm:py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Page 06</p>
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-disinfectant/10 flex items-center justify-center">
            <Shield className="w-5 h-5 text-disinfectant" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Désinfectants</h1>
        </div>
        <Badge className="badge-disinfectant">Agents antimicrobiens</Badge>
      </motion.div>

      {/* Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="mb-6 border-l-4 border-l-disinfectant bg-disinfectant-light/30">
          <CardContent className="py-4 px-5">
            <div className="flex gap-3">
              <Bug className="w-5 h-5 text-disinfectant flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Action principale</h3>
                <p className="text-sm text-muted-foreground">
                  Les désinfectants éliminent ou inactivent les <strong>bactéries</strong>, 
                  <strong> virus</strong>, <strong>levures</strong> et <strong>moisissures</strong>.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Products Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {disinfectants.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <Card className="product-card h-full hover:border-disinfectant/30">
              <CardHeader className="pb-2 pt-4 px-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Droplet className="w-4 h-4 text-disinfectant" />
                    <CardTitle className="text-sm font-semibold text-foreground leading-tight">
                      {product.name}
                    </CardTitle>
                  </div>
                </div>
                <Badge variant="outline" className="w-fit text-xs mt-2 border-disinfectant/30 text-disinfectant">
                  {product.type}
                </Badge>
              </CardHeader>
              <CardContent className="pt-2 px-4 pb-4">
                <p className="text-xs text-muted-foreground mb-3">{product.action}</p>
                
                <div className="flex items-center gap-1.5 text-xs text-foreground mb-3">
                  <Timer className="w-3.5 h-3.5 text-disinfectant" />
                  <span>Temps de contact: <strong>{product.contact}</strong></span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {product.applications.map((app, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-muted/60 text-xs text-foreground"
                    >
                      <CheckCircle className="w-2.5 h-2.5 text-success" />
                      {app}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Important Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6"
      >
        <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
          <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-foreground">
            <strong>Rappel :</strong> La désinfection n&apos;est efficace que sur des surfaces 
            préalablement nettoyées. Respectez toujours le temps de contact indiqué.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
