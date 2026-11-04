/**
 * Wedding Application Types
 */

export interface GuestWish {
  id: string;
  name: string;
  status: 'hadir' | 'tidak_hadir' | 'ragu';
  attendeesCount: number;
  message: string;
  timestamp: string;
  isVIP?: boolean;
}

export interface LoveStoryMilestone {
  year: string;
  title: string;
  description: string;
  iconName: string;
}

export interface BankAccount {
  bank: string;
  accountNumber: string;
  accountHolder: string;
  logoText: string;
  color: string;
}

export interface ButterflyParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  wingPhase: number;
  wingSpeed: number;
  alpha: number;
  color: string;
  glowColor: string;
  life: number;
  maxLife: number;
  scale: number;
}
