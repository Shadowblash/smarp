import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { SeoService } from '../../core/services/seo.service';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  id: string;
  title: string;
  icon: string;
  items: FaqItem[];
}

@Component({
  selector: 'app-faq',
  imports: [RouterLink],
  templateUrl: './faq.html',
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ height: '0px', opacity: 0, overflow: 'hidden' }),
        animate('260ms cubic-bezier(0.4, 0, 0.2, 1)', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ overflow: 'hidden' }),
        animate('200ms cubic-bezier(0.4, 0, 0.6, 1)', style({ height: '0px', opacity: 0 })),
      ]),
    ]),
  ],
})
export class Faq implements OnInit {
  private readonly seo = inject(SeoService);

  protected readonly openItems = signal<Set<string>>(new Set());

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Questions fréquentes',
      description: 'Réponses aux questions fréquentes sur l\'anesthésie, la consultation pré-anesthésique, les risques, la préparation et la récupération — Service SMARP, Saint-Étienne.',
    });
  }

  toggle(key: string): void {
    const next = new Set(this.openItems());
    next.has(key) ? next.delete(key) : next.add(key);
    this.openItems.set(next);
  }

  isOpen(key: string): boolean {
    return this.openItems().has(key);
  }

  protected readonly categories: FaqCategory[] = [
    {
      id: 'consultation',
      title: 'La consultation pré-anesthésique',
      icon: 'assignment_ind',
      items: [
        {
          question: 'Pourquoi dois-je consulter un anesthésiste avant mon opération ?',
          answer: 'La consultation pré-anesthésique est obligatoire avant toute anesthésie programmée. Elle permet à votre médecin anesthésiste d\'évaluer votre état de santé, d\'identifier les éventuels facteurs de risque, de vous présenter les techniques disponibles et de recueillir votre consentement éclairé. C\'est également le moment idéal pour poser toutes vos questions.',
        },
        {
          question: 'Comment prendre rendez-vous pour la consultation ?',
          answer: 'Contactez notre secrétariat au 04.77.42.27.00 ou par email à anesthesie@smarp42.fr. La consultation est généralement organisée plusieurs jours avant votre intervention, afin de laisser le temps à l\'équipe médicale de préparer votre prise en charge de façon optimale.',
        },
        {
          question: 'Que dois-je apporter à la consultation pré-anesthésique ?',
          answer: 'Préparez votre liste de médicaments actuels (avec dosages), vos antécédents médicaux et chirurgicaux, vos résultats d\'examens récents (prise de sang, ECG si disponible), et si possible votre dossier médical. Il est très utile de noter vos questions à l\'avance pour ne rien oublier.',
        },
        {
          question: 'Le médecin de ma consultation sera-t-il celui qui m\'anesthésiera le jour de l\'opération ?',
          answer: 'Pas nécessairement. Le SMARP fonctionne comme un groupe de 18 médecins anesthésistes-réanimateurs qui partagent les informations de chaque patient. Le médecin présent le jour de votre intervention aura accès à votre dossier complet constitué lors de la consultation, et assurera votre prise en charge en toute connaissance de votre situation.',
        },
      ],
    },
    {
      id: 'types',
      title: 'Les types d\'anesthésie',
      icon: 'medical_services',
      items: [
        {
          question: 'Quels sont les différents types d\'anesthésie ?',
          answer: 'Il en existe trois principaux : l\'anesthésie générale (vous êtes endormi(e) et inconscient(e) pendant toute l\'intervention), l\'anesthésie loco-régionale (une région du corps est anesthésiée, comme lors d\'une péridurale ou d\'un bloc nerveux — vous restez conscient(e)) et l\'anesthésie locale (seule une petite zone est insensibilisée, souvent réalisée par le chirurgien lui-même pour des actes mineurs).',
        },
        {
          question: 'Qui décide du type d\'anesthésie utilisé ?',
          answer: 'La décision est prise par votre médecin anesthésiste-réanimateur, en concertation avec vous et l\'équipe chirurgicale. Elle tient compte de votre état de santé général, de la nature et de la durée de l\'intervention, ainsi que de vos souhaits. Votre consentement éclairé est toujours requis.',
        },
        {
          question: 'Puis-je exprimer mes préférences concernant le type d\'anesthésie ?',
          answer: 'Absolument. Vos préférences sont prises en compte lors de la consultation pré-anesthésique. Votre médecin vous expliquera les avantages et inconvénients de chaque option dans votre cas précis. Certains choix peuvent toutefois être limités par des contraintes médicales ou chirurgicales liées à votre situation.',
        },
      ],
    },
    {
      id: 'preparation',
      title: 'Préparation et consignes avant l\'opération',
      icon: 'checklist',
      items: [
        {
          question: 'Combien de temps dois-je rester à jeun avant l\'opération ?',
          answer: 'En règle générale, il est recommandé de ne pas manger pendant les 6 heures précédant l\'anesthésie, et de ne pas boire pendant les 2 heures qui précèdent (eau claire uniquement, selon les instructions de votre équipe). Ces règles sont impératives pour votre sécurité : elles préviennent le risque d\'inhalation de liquide gastrique lors de l\'endormissement.',
        },
        {
          question: 'Dois-je arrêter certains de mes médicaments ?',
          answer: 'Certains médicaments doivent être interrompus avant l\'opération (anticoagulants, antidiabétiques oraux, certains anti-inflammatoires), tandis que d\'autres doivent être maintenus jusqu\'au jour J. Votre médecin anesthésiste vous donnera des consignes personnalisées lors de la consultation. Ne modifiez jamais un traitement sans avis médical.',
        },
        {
          question: 'Qu\'est-ce que la prémédication ?',
          answer: 'La prémédication est un médicament, généralement sous forme de comprimé ou de sirop, prescrit pour vous aider à vous détendre avant l\'intervention. Il est pris le matin de l\'opération. Votre médecin évaluera si elle est adaptée à votre cas et vous précisera les modalités de prise.',
        },
        {
          question: 'Dois-je retirer mes prothèses ou bijoux avant l\'opération ?',
          answer: 'Oui. Avant d\'entrer en salle d\'opération, vous devrez retirer vos bijoux, prothèses dentaires amovibles, lentilles de contact et tout dispositif métallique. Ces consignes vous seront rappelées par le personnel soignant le jour de l\'intervention.',
        },
      ],
    },
    {
      id: 'risks',
      title: 'Risques et effets secondaires',
      icon: 'info',
      items: [
        {
          question: 'Quels sont les effets courants après une anesthésie générale ?',
          answer: 'Les effets les plus fréquents sont temporaires et bénins : nausées et vomissements post-opératoires (bien contrôlés par les traitements modernes), maux de gorge ou voix légèrement altérée si une sonde d\'intubation a été utilisée, légère somnolence, troubles de concentration ou de mémoire passagers, et parfois une rougeur ou douleur au point d\'injection intraveineuse.',
        },
        {
          question: 'Y a-t-il des risques graves liés à l\'anesthésie ?',
          answer: 'Les complications sérieuses sont rares mais existent et doivent être connues. Elles incluent les réactions allergiques graves (choc anaphylactique), les complications respiratoires ou cardiovasculaires, et les lésions nerveuses dans le cadre des anesthésies loco-régionales. L\'ensemble de ces risques est évalué dès la consultation pré-anesthésique. Notre équipe est formée et équipée pour les anticiper, les détecter précocement et les traiter.',
        },
        {
          question: 'L\'anesthésie est-elle dangereuse ?',
          answer: 'L\'anesthésie moderne est extrêmement sûre. Grâce aux progrès de la pharmacologie, aux techniques de surveillance continue et aux protocoles rigoureux du SMARP, les risques graves restent très rares. La consultation pré-anesthésique, la présence permanente d\'un médecin spécialiste et la surveillance post-opératoire en SSPI constituent ensemble un filet de sécurité robuste.',
        },
        {
          question: 'Qu\'est-ce que le consentement éclairé et pourquoi est-il obligatoire ?',
          answer: 'Avant toute anesthésie, votre médecin a l\'obligation légale et éthique de vous informer de manière claire et complète sur la technique envisagée, ses bénéfices et ses risques, même les plus rares. Vous signez un document attestant que vous avez reçu et compris ces informations et que vous acceptez librement la procédure. Ce consentement peut être retiré à tout moment.',
        },
      ],
    },
    {
      id: 'recovery',
      title: 'Le réveil et la récupération',
      icon: 'self_improvement',
      items: [
        {
          question: 'Qu\'est-ce que la salle de réveil (SSPI) ?',
          answer: 'La Salle de Surveillance Post-Interventionnelle (SSPI) est la zone où vous êtes conduit(e) immédiatement après votre opération. Vos paramètres vitaux — tension artérielle, fréquence cardiaque, oxygénation, niveau de conscience et douleur — y sont surveillés en continu par du personnel infirmier spécialisé, sous la responsabilité directe d\'un médecin anesthésiste-réanimateur. Vous y restez jusqu\'à stabilisation complète.',
        },
        {
          question: 'Comment ma douleur sera-t-elle gérée au réveil ?',
          answer: 'La gestion de la douleur est une priorité absolue de notre équipe. Nous pratiquons l\'analgésie multimodale, c\'est-à-dire la combinaison de plusieurs techniques complémentaires (médicaments oraux, injectables, blocs nerveux régionaux) pour maximiser le contrôle de la douleur tout en réduisant les effets secondaires des antalgiques puissants. Votre niveau de douleur est évalué régulièrement.',
        },
        {
          question: 'Quand pourrai-je rentrer chez moi après une chirurgie ambulatoire ?',
          answer: 'Pour les interventions ambulatoires (sans hospitalisation), le retour à domicile est possible le jour même, une fois que votre médecin a validé votre état : douleur contrôlée, stabilité des constantes vitales, absence de nausées et capacité à vous déplacer. Vous devrez être accompagné(e) par un adulte responsable et recevoir des consignes de suivi écrites.',
        },
        {
          question: 'Puis-je conduire après une anesthésie générale ?',
          answer: 'Non. Il est formellement déconseillé de conduire dans les 24 heures suivant une anesthésie générale, en raison des effets résiduels des médicaments sur la vigilance et les réflexes. Prévoyez d\'être raccompagné(e) et évitez toute activité nécessitant une concentration soutenue.',
        },
      ],
    },
    {
      id: 'team',
      title: 'L\'équipe SMARP',
      icon: 'groups',
      items: [
        {
          question: 'Qui sont les médecins du SMARP ?',
          answer: 'Le SMARP (Société Mutualiste d\'Anesthésie-Réanimation de la Palle) réunit 18 médecins anesthésistes-réanimateurs diplômés et spécialisés. Ils exercent tous à la Clinique Mutualiste Chirurgicale de Saint-Étienne (39 boulevard de la Palle, 42030). Chaque médecin est membre de la Société Française d\'Anesthésie et de Réanimation (SFAR) et se forme régulièrement aux dernières avancées médicales.',
        },
        {
          question: 'Y a-t-il toujours un médecin anesthésiste disponible sur place ?',
          answer: 'Oui, sans exception. L\'un des principes fondateurs du SMARP est la permanence médicale continue. Un médecin anesthésiste-réanimateur est présent sur site 24 heures sur 24, 7 jours sur 7, 365 jours par an. Cette présence garantit une réponse immédiate à toute urgence post-opératoire.',
        },
        {
          question: 'Comment contacter le service avant mon intervention ?',
          answer: 'Vous pouvez nous joindre par téléphone au 04.77.42.27.00, par email à anesthesie@smarp42.fr, ou vous présenter directement à la Clinique Mutualiste Chirurgicale, 39 boulevard de la Palle, 42030 Saint-Étienne Cedex 2. En cas d\'urgence médicale, composez le 15 (SAMU) ou le 112.',
        },
      ],
    },
  ];
}
