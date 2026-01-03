
import React from 'react';
import { NavItem, Skill, Project } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Intelligence', href: '#about' },
  { label: 'Credentials', href: '#education' },
  { label: 'Arsenal', href: '#skills' },
  { label: 'Operations', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'Microsoft Sentinel' },
  { name: 'Splunk' },
  { name: 'QRadar' },
  { name: 'Elastic Stack' },
  { name: 'MS Defender' },
  { name: 'Darktrace' },
  { name: 'Wireshark' },
  { name: 'Log Analysis' },
  { name: 'Python' },
  { name: 'Linux CLI' },
  { name: 'Incident Response' },
  { name: 'Threat Hunting' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Advanced SIEM Orchestration',
    description: 'Developed custom KQL hunting queries for Microsoft Sentinel to identify advanced persistent threat (APT) patterns in enterprise cloud environments.',
    image: 'https://picsum.photos/seed/siem/600/400',
    tags: ['KQL', 'Sentinel', 'Hunting'],
    link: '#'
  },
  {
    title: 'Honeypot Network Lab',
    description: 'Architected a distributed honeypot system to capture and analyze brute-force attack vectors, visualizing telemetry via Splunk dashboards.',
    image: 'https://picsum.photos/seed/lab/600/400',
    tags: ['Splunk', 'Honeypots', 'Threat Intel'],
    link: '#'
  },
  {
    title: 'Phishing Triage Automation',
    description: 'Built a Python-based utility to automate the extraction and reputation checking of suspicious URLs and attachments from reported emails.',
    image: 'https://picsum.photos/seed/code/600/400',
    tags: ['Python', 'Automation', 'Analysis'],
    link: '#'
  }
];
