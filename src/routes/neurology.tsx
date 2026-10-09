import { createFileRoute } from '@tanstack/react-router';
import { CareDetail } from '@/components/clinic/care-detail';
import { pageHead } from '@/lib/clinic';
export const Route = createFileRoute('/neurology')({ head: () => pageHead('General neurology', 'Neurological consultations, ongoing management and subspecialist referral pathways with Dr. Eduard Bercovici in Toronto.'), component: Neurology });
function Neurology() { return <CareDetail current="/neurology" title="General neurology" intro="A thoughtful assessment of neurological concerns, with specialist guidance on what comes next." sections={[
  { title: 'Understanding your concerns', text: 'As a general neurologist, Dr. Bercovici diagnoses and manages common neurological conditions. Consultations provide an opportunity to review your symptoms, medical history and previous investigations.' },
  { title: 'The right expertise for your needs', text: 'When specialized diagnostics such as nerve conduction studies are needed, or standard treatments have not been effective, Dr. Bercovici facilitates referrals to subspecialist colleagues.' },
  { title: 'A connected next step', text: 'The clinic offers neurological consultations and second opinions, as well as support during the transition from pediatric care. Ask your physician about a referral and bring relevant specialist notes and reports to your visit.' },
]}/>; }