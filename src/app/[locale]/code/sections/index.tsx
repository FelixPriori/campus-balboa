import CodeOfConductSection from "./CodeOfConduct";

export default function sectionsRenderer(section: any) {
    switch (section.sectionName) {
        case "codeOfConduct":
            return <CodeOfConductSection key={section.sys.id} id={section.sys.id} title={section.title} anchor={section.anchor} content={section.content}/>
    }
}