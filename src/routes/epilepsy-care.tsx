import { createFileRoute } from '@tanstack/react-router';
import { CareDetail } from '@/components/clinic/care-detail';
import { pageHead } from '@/lib/clinic';
export const Route = createFileRoute('/epilepsy-care')({ head: () => pageHead('Epilepsy care', 'Explore specialist epilepsy management, surgical workups, pregnancy care and neuromodulation at SOEC in Toronto.'), component: EpilepsyCare });
function EpilepsyCare() { return <CareDetail current="/epilepsy-care" title="Epilepsy care" intro="Specialist support for newly diagnosed and long-term epilepsy, with attention to the person behind the condition." sections={[
  { title: 'Care that follows your story.', text: 'Southern Ontario Epilepsy Clinic provides general epilepsy management and ongoing consultations with Dr. Eduard Bercovici. The clinic takes a multidisciplinary, patient-centred approach to seizure disorders.' },
  { title: 'Specialized pathways', text: 'Areas of care include epilepsy surgical workups, pregnancy management in epilepsy, and neuromodulation including Vagus Nerve Stimulator therapy. Your specialist can discuss which options are appropriate for your circumstances.' },
  { title: 'Continuity through change', text: 'The practice supports second opinion consultations and transitions from pediatric care. In-house EEG testing allows Dr. Bercovici’s patients to have testing and follow-up in the same clinic.' },
]}/>; }