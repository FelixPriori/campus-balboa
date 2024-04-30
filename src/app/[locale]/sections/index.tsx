import Hero from "./Hero";
import FeaturedSection from './Featured';
import CalendarSection from './Calendar';
import EventsSection from './Events';
import MissionsSection from "./Missions";
import AboutUsSection from "./AboutUs";
import Footer from './Footer';

export interface PageSectionProps {
    title: string
    anchor: string
    id: string;
    helpText?: string;
    content?: {
        json: any
        links: any
    }
}

export default function sectionsRenderer(section: any) {
    switch (section.sectionName) {
        case "featured":
            return <FeaturedSection key={section.sys.id} id={section.sys.id} title={section.title} anchor={section.anchor} />
        case "calendar":
            return <CalendarSection key={section.sys.id} id={section.sys.id} title={section.title} anchor={section.anchor} />
        case "events":
            return <EventsSection key={section.sys.id} id={section.sys.id} title={section.title} anchor={section.anchor} helpText={section.helpText} />
        case "missions":
            return <MissionsSection key={section.sys.id} id={section.sys.id} title={section.title} anchor={section.anchor} />
        case "about":
            return <AboutUsSection key={section.sys.id} id={section.sys.id} title={section.title} anchor={section.anchor} />
    }
}

export {
    Hero,
    Footer
}