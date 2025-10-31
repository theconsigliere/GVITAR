// navigate home page to /tuner
import { redirect } from '@sveltejs/kit';

export const load = async () => {
    throw redirect(307, '/tuner');
};
