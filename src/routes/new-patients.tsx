import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight, Check, HeartHandshake } from 'lucide-react';
import { ClinicLayout, PageIntro } from '@/components/clinic/layout';
import { Button } from '@/components/ui/button';
import { clinic, pageHead } from '@/lib/clinic';
export const Route = createFileRoute('/new-patients')({ head: () => pageHead('New patients', 'Starting care at Southern Ontario Epilepsy Clinic: how referrals work, what to bring and what to expect at your first appointment.'), component: NewPatients });
function NewPatients() { return <ClinicLayout><PageIntro eyebrow="WELCOME" title="New to the clinic? Start here." text="Everything you need to begin your care with us, from referral to first appointment."/>
<section className="section container content-grid"><div className="content-copy">
<h2>Becoming a patient</h2><p>Care at Southern Ontario Epilepsy Clinic begins with a referral from an Ontario medical doctor. Once your referral is received, the clinic will contact you with appointment information.</p>
<h3>Your first steps</h3>
<div className="visit-checklist">{['Ask your physician for a referral to the clinic', 'Gather previous specialist notes and test reports', 'Prepare a full list of your medications, including vitamins', 'Note your questions — bring them to your appointment'].map(item => <p key={item}><Check size={18}/>{item}</p>)}</div>
<h3>What to expect</h3><p>Your first appointment is a conversation. Dr. Bercovici reviews your symptoms, medical history and previous investigations, and discusses what comes next. For Dr. Bercovici’s patients, EEG testing and follow-up can take place in the same clinic.</p>
<div className="hero-actions"><Button variant="clinic" asChild><Link to="/your-visit">Plan your first visit <ArrowUpRight/></Link></Button><Button variant="soft" asChild><Link to="/referrals">Referral information <ArrowUpRight/></Link></Button></div>
</div><aside className="referral-panel"><HeartHandshake size={30}/><h3>We’re here to help.</h3><p>Questions about becoming a patient? Our team can walk you through it.</p><Button variant="clinic" asChild><a href={`tel:${clinic.phone}`}>Call {clinic.phone} <ArrowUpRight/></a></Button><p className="mt-5">{clinic.address}<br/>{clinic.city}</p></aside></section></ClinicLayout>; }
