import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FlaskConical, Droplet, CheckCircle, AlertTriangle, Beaker } from "lucide-react";

const basicProducts = [
  {
    name: "Soude Caustique (NaOH)",
    ph: "pH 13-14",
    usage: "Élimination des graisses et matières organiques",
    applications: ["Cuves de stockage", "Conduites", "Échangeurs thermiques"],
  },
  {
    name: "Détergents Alcalins",
    ph: "pH 9-12",
    usage: "Nettoyage quotidien des surfaces et équipements",
    applications: ["Sols", "Tables de travail", "Ustensiles"],
  },
  {
    name: "Produits Chlorés Alcalins",
    ph: "pH 10-13",
    usage: "Nettoyage et désinfection combinés",
    applications: ["Surfaces alimentaires", "Équipements inox"],
  },
];

export default function BasicProductsPage() {
  return (
    <div className="px-6 sm:px-8 lg:px-12 py-8 sm:py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Page 04</p>
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-basic/10 flex items-center justify-center">
            <FlaskConical className="w-5 h-5 text-basic" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Produits Basiques</h1>
        </div>
        <Badge className="badge-basic">pH &gt; 7 - Alcalins</Badge>
      </motion.div>

      {/* Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="mb-6 border-l-4 border-l-basic bg-basic-light/30">
          <CardContent className="py-4 px-5">
            <div className="flex gap-3">
              <Beaker className="w-5 h-5 text-basic flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Action principale</h3>
                <p className="text-sm text-muted-foreground">
                  Les produits basiques (alcalins) dissolvent efficacement les <strong>graisses</strong>, 
                  <strong> protéines</strong> et <strong>matières organiques</strong>.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Products List */}
      <div className="space-y-4">
        {basicProducts.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <Card className="product-card hover:border-basic/30">
              <CardHeader className="pb-3 pt-4 px-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Droplet className="w-5 h-5 text-basic" />
                    <CardTitle className="text-base font-semibold text-foreground">
                      {product.name}
                    </CardTitle>
                  </div>
                  <Badge variant="outline" className="text-basic border-basic/40 bg-basic/5 text-xs">
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
        <div className="flex items-start gap-3 p-4 rounded-lg bg-warning-light border border-warning/20">
          <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
          <p className="text-sm text-foreground">
            <strong>Attention :</strong> Les produits très alcalins sont corrosifs. 
            Toujours porter les EPI (gants, lunettes) lors de leur manipulation.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
