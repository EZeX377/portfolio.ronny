    const interfaceState = { label: '02 / INTERFACE', title: ['Interfaces,', 'built for people.'],
      nav: ['Canvas', 'Layers', 'Components', 'Variants'],
      summary: 'Components, with clear states.', detail: 'Layout, forms, and responsive behaviour.',
      cards: [['01 / COMPONENT', 'Service component', 'Reusable interface'], ['02 / FORM', 'Application form', 'Fields & validation'], ['03 / STATES', 'State variants', 'Default / active / disabled'], ['04 / LAYOUT', 'Responsive layout', 'Desktop & mobile']],
      footer: 'UI/UX / RESPONSIVE DESKTOP' };
    export const heroStates = [
      { key: 'structure', label: '01 / STRUCTURE', title: ['Systems,', 'made clear.'],
        nav: ['Brief', 'Roles', 'Workflow', 'Scope'],
        summary: 'Map what the system needs.', detail: 'Roles, information, and decisions.',
        cards: [['01 / BRIEF', 'Requirements', 'Fields & rules'], ['02 / PEOPLE', 'Roles & ownership', 'People & permissions']],
        footer: 'REQUIREMENTS / SHARED DIRECTION' },
      { key: 'interface', ...interfaceState },
      { key: 'mobile', ...interfaceState, footer: 'UI/UX / RESPONSIVE MOBILE', bar: 'RONNY DAS / UI SYSTEM' },
      { key: 'delivery', label: '03 / DELIVERY', title: ['From design', 'to release.'],
        nav: ['Overview', 'Components', 'Release', 'Notes'],
        summary: 'Implementation, connected.', detail: 'Components → checks → deployment',
        cards: [['01', 'Design', 'Interface specs'], ['02', 'Build', 'Components'], ['03', 'Review', 'State checks'], ['04', 'Release', 'Deployment']],
        footer: 'DESIGN → BUILD → REVIEW → RELEASE' }
    ];
    export const heroSupporting = [
      { title: '01 / REQUIREMENTS BRIEF', rows: ['People & roles', 'Workflow states', 'Dependencies'], status: 'REQUIREMENTS → UI/UX' },
      { title: '02 / INTERFACE NOTES', rows: ['Layout & hierarchy', 'Components & states', 'Interaction details'], status: 'UI/UX → DEVELOPMENT' },
      { title: '02 / RESPONSIVE CHECK', rows: ['Desktop → mobile', 'Content reflow', 'Touch & navigation'], status: 'RESPONSIVE / WEB & MOBILE' },
      { title: '03 / DELIVERY CHECK', rows: ['Components & code', 'Review & state checks', 'Deployment & support'], status: 'DESIGN → DELIVERY' }
    ];
