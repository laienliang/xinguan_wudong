import { type ModuleConfig } from '/@/cool';

export default (): ModuleConfig => {
	return {
		order: 10,
		components: Object.values(import.meta.glob('./components/**/*.{vue,tsx}')),
		views: []
	};
};
