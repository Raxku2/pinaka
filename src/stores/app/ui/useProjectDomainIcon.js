import { create } from 'zustand'

export const useProjectDomainIconStore = create((set) => ({
    iconMap: {
        fullstack: 'layers',
        frontend: 'web',
        backend: 'dns',
        database: 'database',
        api: 'api',
        cli: 'terminal',
        gui: 'web_asset',
        tui: 'wysiwyg',
        services: 'smart_toy',
        iot: 'devices_other',
        electronics: 'developer_board'
    },

}));

