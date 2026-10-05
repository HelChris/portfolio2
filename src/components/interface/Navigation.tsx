import { NavLink } from 'react-router-dom';
import { navigation } from '@/config/navigation';

type NavigationProps = {
    orientation?: 'horizontal' | 'vertical';
    onNavigate?: () => void;
    ariaLabel?: string;
};

export function Navigation({ orientation = 'horizontal', onNavigate, ariaLabel }: NavigationProps) {
    const listClasses = orientation === 'horizontal'
        ? 'flex flex-wrap justify-start gap-2 sm:justify-center'
        : 'flex flex-col gap-2';

    return (
        <nav aria-label={ariaLabel} id="top-navigation">
            <ul className={listClasses}>
                {navigation.map(({ label, to, end }) => (
                    <li key={to}>
                        <NavLink
                            to={to}
                            end={end}
                            onClick={onNavigate}
                            className={({ isActive }) =>
                                [
                                    'inline-flex min-h-10 rounded-full items-center px-4 py-2 font-bold text-teal-deep no-underline transition-colors duration-200',
                                    'hover:bg-teal-bright hover:text-teal-deep',
                                    'focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-gold',
                                    isActive ? 'rounded-full text-teal-deep' : '',
                                ].join(' ')
                            }
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}