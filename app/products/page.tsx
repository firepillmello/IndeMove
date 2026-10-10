import type { Metadata } from 'next';
import { ProductCatalog } from '@/components/ProductCatalog';
import { FinalCTA, PageIntro } from '@/components/UI';
export const metadata:Metadata={title:'Mobility & Home Solutions',description:'Explore mobility scooters, wheelchairs, walkers, lift chairs, ramps, and home-care solutions. Filter options around your everyday needs.'};
export default function Products(){return <><PageIntro eyebrow="Our solutions" title="Find a little more possibility." description="Start with what you want your day to look like. We’ll help you explore the equipment and home solutions that could get you there."/><section className="section"><div className="container"><ProductCatalog/><p className="image-disclaimer">All catalog entries and illustrations are mock examples. Ask a specialist about actual fit, availability, and pricing. Product guidance does not replace medical advice.</p></div></section><FinalCTA/></>;}
