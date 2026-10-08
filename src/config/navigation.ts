export const routes = {
    home: '/',
    about: '/#about',
    projects: '/#projects',
    contact: '/#contact',
    readersrealm: '/readersrealm',
    spiritbid: '/spiritbid',
    heltech: '/heltech',
} as const;

export type RoutePath = (typeof routes)[keyof typeof routes];

export type NavigationItem = {
    label: string;
    to: RoutePath;
    end?: boolean;
};

export const navigation = [
    {
        label: 'Home',
        to: routes.home,
        end: true,
    },
    {
        label: 'About',
        to: routes.about,
    },
    {
        label: 'Projects',
        to: routes.projects,
    },
    {
        label: 'Contact',
        to: routes.contact,
    },
] satisfies readonly NavigationItem[];