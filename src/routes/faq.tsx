import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight, Plus, MessageCircleQuestion } from 'lucide-react';
import { ClinicLayout, PageIntro } from '@/components/clinic/layout';
import { Button } from '@/components/ui/button';
import { clinic, pageHead } from '@/lib/clinic';
export const Route = createFileRoute('/faq')({ head: () => pageHead('Frequently asked questions', 'Answers to common questions about referrals, appointments, EEG testing and visiting Southern Ontario Epilepsy Clinic.'), component: Faq });
const groups = [
  { title: 'Appointments & referrals', items: [
    ['Do I need a referral?', 'Yes. Patients need a referral from an Ontario medical doctor for specialist care. Physicians can also refer directly for EEG testing using the clinic’s requisition form.'],
    ['How do I get referred?', 'Ask your physician to use the clinic’s referral forms or eReferral. The referral page includes epilepsy, neurology and ketogenic diet forms.'],
    ['Can I get a second opinion?', 'The clinic offers second opinion consultations. Ask your physician about a referral and bring relevant specialist notes and reports to your visit.'],
  ]},
  { title: 'EEG testing', items: [
    ['How do I prepare for an EEG?', 'EEG preparation differs from a consultation. Review our test page and follow the individual instructions provided by the clinic for your appointment.'],
    ['Can my doctor send me just for an EEG?', 'Yes. Physicians can refer patients directly for EEG testing with the clinic’s 2025 requisition form.'],
  ]},
  { title: 'Your visit', items: [
    ['What should I bring?', 'Bring your health card, previous specialist notes, MRI reports and previous EEG results, a full list of medications including vitamins, and a witness to your episodes or a video if available.'],
    ['Where is the clinic?', `Queensway Professional Centre, ${clinic.address}, ${clinic.city}.`],
    ['How do I contact the clinic?', `Call ${clinic.phone} for appointment and referral questions. The clinic fax is ${clinic.fax}.`],
  ]},
] as const;
function Faq() { return <ClinicLayout><PageIntro eyebrow="COMMON QUESTIONS" title="Good questions, clear answers." text="The things patients and families ask us most, gathered in one place."/>
<section className="section container content-grid"><div className="content-copy">{groups.map(g => <div className="faq-section" key={g.title}><h2>{g.title}</h2>{g.items.map(([q, a]) => <details key={q}><summary>{q}<Plus size={18}/></summary><p>{a}</p></details>)}</div>)}</div>
<aside className="referral-panel"><MessageCircleQuestion size={30}/><h3>Still wondering?</h3><p>Our team is happy to help with anything not covered here.</p><Button variant="clinic" asChild><a href={`tel:${clinic.phone}`}>Call {clinic.phone} <ArrowUpRight/></a></Button><Link to="/contact" className="text-link mt-5">Contact & location <ArrowUpRight size={16}/></Link></aside></section></ClinicLayout>; }
