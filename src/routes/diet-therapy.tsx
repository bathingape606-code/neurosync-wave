import { createFileRoute } from '@tanstack/react-router';
import { CareDetail } from '@/components/clinic/care-detail';
import { pageHead } from '@/lib/clinic';
export const Route = createFileRoute('/diet-therapy')({ head: () => pageHead('Epilepsy diet therapy', 'Learn about medically supervised Ketogenic and Modified Atkins diet therapy for adults with refractory epilepsy through Dr. Bercovici’s UHN program.'), component: DietTherapy });
function DietTherapy() { return <CareDetail current="/diet-therapy" title="Epilepsy diet therapy" intro="Specialized dietary treatment pathways for adults living with difficult-to-control epilepsy." sections={[
  { title: 'Another pathway in epilepsy care', text: 'Ketogenic and Modified Atkins diet therapies are options offered for refractory epilepsy. Refractory epilepsy refers to epilepsy that is difficult to control. Suitability should be discussed with your treating specialist.' },
  { title: 'Specialist-led support', text: 'Dr. Bercovici leads the Adult Epilepsy Diet Clinic at University Health Network (UHN). The diet therapy program is conducted through this clinic, connecting specialist epilepsy expertise with dietary treatment.' },
  { title: 'Explore a referral', text: 'The SOEC referral page includes ketogenic diet referral information. Ask your physician about the appropriate pathway, and contact the clinic with questions about referrals. Dietary treatment is an individual medical decision, not a replacement for your current care plan.' },
]}/>; }