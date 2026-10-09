export const clinic = {
  name: 'Southern Ontario Epilepsy Clinic',
  phone: '416-620-7632', fax: '416-620-7633',
  address: '190 Sherway Drive, Suite 308', city: 'Toronto, ON M9C 5N2',
  doctor: 'Dr. Eduard Bercovici', credentials: 'MSc, MD, FRCP(C)',
  eegForm: 'https://seizuredoc.com/wp-content/uploads/2025/09/SOEC-EEG-requisition_2025.pdf',
  referrals: 'https://seizuredoc.com/referral/',
  directions: 'https://www.google.com/maps/search/?api=1&query=190+Sherway+Drive+Toronto+ON+M9C+5N2',
};
export const services = [
  { number: '01', title: 'Epilepsy care', text: 'Specialist care for epilepsy and seizure disorders, with a thoughtful approach to ongoing management.', icon: 'brain', to: '/epilepsy-care' },
  { number: '02', title: 'EEG testing', text: 'In-clinic testing to better understand your brain’s electrical activity. Testing and follow-up, in one place.', icon: 'activity', to: '/eeg-test' },
  { number: '03', title: 'General neurology', text: 'Neurological consultations, second opinions, and support through the transition from pediatric care.', icon: 'heart', to: '/neurology' },
  { number: '04', title: 'Epilepsy diet therapy', text: 'Ketogenic and Modified Atkins diet therapies for people living with refractory epilepsy.', icon: 'leaf', to: '/diet-therapy' },
] as const;
export function pageHead(title: string, description: string) {
  return { meta: [{ title: `${title} | SOEC` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Southern Ontario Epilepsy Clinic` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
