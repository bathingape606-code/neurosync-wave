import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight, FileDown, ClipboardList, Stethoscope, Leaf, Check } from 'lucide-react';
import { ClinicLayout, PageIntro } from '@/components/clinic/layout';
import { Button } from '@/components/ui/button';
import { clinic, pageHead } from '@/lib/clinic';
export const Route = createFileRoute('/referrals')({ head: () => pageHead('Referrals', 'How to refer a patient to Southern Ontario Epilepsy Clinic: EEG requisition forms, specialist referrals and eReferral information.'), component: Referrals });
function Referrals() { return <ClinicLayout><PageIntro eyebrow="FOR PHYSICIANS & PATIENTS" title="Referrals, made simple." text="A referral from an Ontario medical doctor is needed for specialist care. Here’s how the process works."/>
<section className="section container content-grid"><div className="content-copy">
<h2>How referrals work</h2><p>Patients need a referral from an Ontario medical doctor. Your physician can refer you for specialist epilepsy or neurology care, or directly for EEG testing using the clinic’s requisition form.</p>
<div className="care-list"><p><Check/>General epilepsy consultations</p><p><Check/>General neurology consultations</p><p><Check/>EEG testing requisitions</p><p><Check/>Ketogenic diet program referrals</p></div>
<h3>Referral forms</h3><p>The clinic’s referral page includes general epilepsy, general neurology and ketogenic diet referral forms, plus eReferral information for physicians.</p>
<div className="hero-actions"><Button variant="clinic" asChild><a href={clinic.referrals} target="_blank" rel="noreferrer">Clinic referral forms <ArrowUpRight/></a></Button><Button variant="soft" asChild><a href={clinic.eegForm} target="_blank" rel="noreferrer">EEG requisition PDF <FileDown/></a></Button></div>
</div><aside className="referral-panel"><ClipboardList size={30}/><h3>Questions about a referral?</h3><p>Our team can help with referral and appointment questions.</p><Button variant="clinic" asChild><a href={`tel:${clinic.phone}`}>Call {clinic.phone} <ArrowUpRight/></a></Button><p className="mt-5">Fax: {clinic.fax}</p><Link to="/contact" className="text-link">Contact & location <ArrowUpRight size={16}/></Link></aside></section>
<section className="section container reveal"><div className="section-heading"><div><span className="eyebrow">REFERRAL PATHWAYS</span><h2>Three ways in.</h2></div></div><div className="steps">
<div className="step"><span><Stethoscope size={16}/> SPECIALIST CARE</span><h3>Epilepsy & neurology.</h3><p>Your physician refers you for a consultation with Dr. Bercovici using the clinic’s referral forms or eReferral.</p></div>
<div className="step"><span><ClipboardList size={16}/> EEG TESTING</span><h3>Testing requisition.</h3><p>Physicians can refer patients directly for EEG testing with the clinic’s 2025 requisition form.</p></div>
<div className="step"><span><Leaf size={16}/> DIET THERAPY</span><h3>Ketogenic program.</h3><p>Referrals to the Adult Epilepsy Diet Clinic pathway are available through the clinic’s referral page.</p></div>
</div></section></ClinicLayout>; }
