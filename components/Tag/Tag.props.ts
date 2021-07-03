import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    size?: 's' | 'm';
    color?: 'red' | 'ghost' | 'primary' | 'green' | 'grey';
    href?: string;


}