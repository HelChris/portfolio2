import { useEffect, useId, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navigation } from '@/config/navigation';

type NavigationProps = {
    orientation?: 'horizontal' | 'vertical';
    onNavigate?: () => void;
    ariaLabel?: string;
};

export function Navigation({ orientation = 'horizontal', onNavigate, ariaLabel }: NavigationProps) {
    const [isOpen, setIsOpen] = useState(false);
    const menuId = useId();
    const toggleRef = useRef<HTMLButtonElement>(null);
    const listClasses = orientation === 'horizontal'
        ? 'flex-wrap justify-start gap-2 sm:justify-center'
        : 'flex-col gap-2';

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
                toggleRef.current?.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    const handleNavigate = () => {
        setIsOpen(false);
        onNavigate?.();
    };

    return (
        <nav className="site-navigation" aria-label={ariaLabel} id="top-navigation">
            <button
                ref={toggleRef}
                className={`site-navigation__toggle${isOpen ? ' is-open' : ''}`}
                type="button"
                aria-controls={menuId}
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setIsOpen((open) => !open)}
            >
                <span className="site-navigation__toggle-icon" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                </span>
            </button>
            <ul id={menuId} className={`${listClasses} site-navigation__list${isOpen ? ' is-open' : ''}`}>
                {navigation.map(({ label, to, end }) => (
                    <li key={to}>
                        <NavLink
                            to={to}
                            end={end}
                            onClick={handleNavigate}
                            className={({ isActive }) =>
                                [
                                    'inline-flex min-h-10 rounded-full items-center px-4 py-2 font-bold text-teal-deep no-underline transition-colors duration-200',
                                    'hover:bg-teal-bright hover:text-teal-deep',
                                    'focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-focus',
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