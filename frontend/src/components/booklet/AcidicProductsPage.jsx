import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Droplet, CheckCircle, AlertTriangle, Sparkles } from "lucide-react";

const acidicProducts = [
  {
    name: "Acide Phosphorique",
    ph: "pH 1-2",
    usage: "Détartrage des surfaces et équipements",
    applications: ["Équipements laitiers", "Pasteurisateurs", "Tuyauteries"],
  },
  {
    name: "Acide Nitrique",
    ph: "pH 1-2",
    usage: "Passivation de l'inox et élimination des dépôts minéraux",
    applications: ["Cuves inox", "Réservoirs", "Évaporateurs"],
  },
  {
    name: "Acide Citrique",
    ph: "pH 2-3",
    usage: "Détartrage doux et respectueux",
    applications: ["Petits équipements", "Surfaces sensibles", "Rinçage final"],
  },
];

export default function AcidicProductsPage() {
  return (
    <div className="px-6 sm:px-8 lg:px-12 py-8 sm:py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Page 05</p>
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-acidic/10 flex items-center justify-center">
            <Droplets className="w-5 h-5 text-acidic" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Produits Acides</h1>
        </div>
        <Badge className="badge-acidic">pH &lt; 7 - Acides</Badge>
      </motion.div>

      {/* Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="mb-6 border-l-4 border-l-acidic bg-acidic-light/30">
          <CardContent className="py-4 px-5">
            <div className="flex gap-3">
              <Sparkles className="w-5 h-5 text-acidic flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Action principale</h3>
                <p className="text-sm text-muted-foreground">
                  Les produits acides dissolvent les <strong>dépôts calcaires</strong>, 
                  le <strong>tartre</strong> et les <strong>résidus minéraux</strong> (calcium, magnésium).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Products List */}
      <div className="space-y-4">
        {acidicProducts.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <Card className="product-card hover:border-acidic/30">
              <CardHeader className="pb-3 pt-4 px-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Droplet className="w-5 h-5 text-acidic" />
                    <CardTitle className="text-base font-semibold text-foreground">
                      {product.name}
                    </CardTitle>
                  </div>
                  <Badge variant="outline" className="text-acidic border-acidic/40 bg-acidic/5 text-xs">
                    {product.ph}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0 px-5 pb-4">
                <p className="text-sm text-muted-foreground mb-3">{product.usage}</p>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/60 text-xs text-foreground"
                    >
                      <CheckCircle className="w-3 h-3 text-success" />
                      {app}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Warning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6"
      >
        <div className="flex items-start gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
          <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <p className="text-sm text-foreground">
            <strong>Ne jamais mélanger</strong> un produit acide avec un produit chloré (javel). 
            Ce mélange libère du chlore gazeux, extrêmement toxique.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
