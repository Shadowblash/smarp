import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../../core/directives/animate-on-scroll.directive';

interface Doctor {
  name: string;
  qualifications?: string[];
}

@Component({
  selector: 'app-home-team',
  imports: [],
  templateUrl: './home-team.html',
})
export class HomeTeam {
  protected readonly doctors: Doctor[] = [
    { name: 'Dr Jordan BAILLY' },
    {
      name: 'Dr Gérald BAUDRY',
      qualifications: [
        'DIU d’anesthésie pédiatrique',
        'DU européen thrombose et hémostase clinique',
      ],
    },
    { name: 'Dr Jordan BONSIGNORE' },
    {
      name: 'Dr Pierre BOUCHER',
      qualifications: [
        'Ancien chef de clinique des hôpitaux de Lyon',
        'Ancien praticien hospitalier des hôpitaux de Saint-Étienne',
        'DIU réanimation métabolique (Paris, 2012)',
      ],
    },
    {
      name: 'Dr Laetitia BURNOL',
      qualifications: [
        'Ancien chef de clinique des hôpitaux de Saint-Étienne',
        'Ancien praticien hospitalier des hôpitaux de Saint-Étienne',
        'DIU techniques ultrasoniques en anesthésie et réanimation',
        'DU suppléance hémodynamique et organes artificiels en réanimation',
      ],
    },
    { name: 'Dr Laurane CHALVET' },
    { name: 'Dr Paul Antoine CHATELARD' },
    { name: 'Dr Benoît CREMILLIEUX' },
    { name: 'Dr Magalie DUMAS' },
    {
      name: 'Dr Michaël FAURE',
      qualifications: [
        'DU hémodynamique en anesthésie et réanimation médico-chirurgicale',
        'DU suppléance hémodynamique et organes artificiels en réanimation',
        'DIU cours supérieur d’anesthésie et d’analgésie loco-régionale',
      ],
    },
    { name: 'Dr Julie GALLAND' },
    { name: 'Dr Léandre GIRARD' },
    { name: 'Dr Luca GUIZOUARN' },
    { name: 'Dr Matthis LEONARD' },
    {
      name: 'Dr Jérémy MALLARD',
      qualifications: [
        'Ancien interne des hôpitaux de Saint-Étienne',
        'Ancien assistant spécialiste des hôpitaux de Saint-Étienne',
      ],
    },
    { name: 'Dr Jean PASCAL' },
    { name: 'Dr Martin PETIT' },
    { name: 'Dr Norbert TAMISIER' },
    {
      name: 'Dr Marc VERCRUYSSE',
      qualifications: [
        'Ancien interne des hôpitaux de Saint-Étienne',
        'Ancien chef de clinique des hôpitaux de Saint-Étienne',
        'Master 2 ingénierie de la santé, parcours ingénierie de la neuromotricité',
        'DU médecine péri-opératoire, de réhabilitation précoce et de chirurgie ambulatoire',
      ],
    },
  ];

  private readonly expandedDoctors = new Set<string>();

  protected toggle(doctor: Doctor): void {
    if (!doctor.qualifications?.length) {
      return;
    }
    if (this.expandedDoctors.has(doctor.name)) {
      this.expandedDoctors.delete(doctor.name);
    } else {
      this.expandedDoctors.add(doctor.name);
    }
  }

  protected isExpanded(doctor: Doctor): boolean {
    return this.expandedDoctors.has(doctor.name);
  }
}
