import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Glasses, 
  Hand, 
  Wind, 
  Shirt,
  XCircle,
  CheckCircle,
  ShieldAlert
} from "lucide-react";

const safetyEquipment = [
  { icon: Glasses, label: "Lunettes de protection", desc: "Protection oculaire obligatoire" },
  { icon: Hand, label: "Gants adaptés", desc: "Résistants aux produits chimiques" },
  { icon: Shirt, label: "Tablier/Combinaison", desc: "Protection corporelle" },
  { icon: Wind, label: "Masque respiratoire", desc: "Si vapeurs ou aérosols" },
];

const dosDonts = {
  dos: [
    "Lire les fiches de données de sécurité (FDS)",
    "Respecter les dosages recommandés",
    "Rincer abondamment après chaque produit",
    "Stocker les produits dans leurs emballages d'origine",
  ],
  donts: [
    "Mélanger différents produits chimiques",
    "Utiliser des produits périmés",
    "Transférer dans des contenants alimentaires",
    "Négliger le temps de contact",
  ],
};

export default function SafetyGuidelinesPage() {
  return (
    <div className="px-6 sm:px-8 lg:px-12 py-8 sm:py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Page 07</p>
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
            <ShieldAlert className="w-5 h-5 text-accent" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Règles de Sécurité</h1>
        </div>
        <Badge className="bg-accent/10 text-accent border border-accent/30">EPI & Bonnes Pratiques</Badge>
      </motion.div>

      {/* EPI Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <h2 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-accent" />
          Équipements de Protection Individuelle
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {safetyEquipment.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground">{item.label}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Do's and Don'ts */}
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Do's */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="h-full border-l-4 border-l-success bg-success-light/30">
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                À faire
              </h3>
              <ul className="space-y-2">
                {dosDonts.dos.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="w-3.5 h-3.5 text-success flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Don'ts */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="h-full border-l-4 border-l-destructive bg-destructive/5">
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-destructive" />
                À éviter
              </h3>
              <ul className="space-y-2">
                {dosDonts.donts.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <XCircle className="w-3.5 h-3.5 text-destructive flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Emergency Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6"
      >
        <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
          <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            En cas d&apos;accident
          </h3>
          <p className="text-sm text-foreground">
            Contact avec la peau ou les yeux : <strong>rincer immédiatement à l&apos;eau pendant 15 minutes</strong>. 
            Consulter un médecin. Avoir les FDS à disposition.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
