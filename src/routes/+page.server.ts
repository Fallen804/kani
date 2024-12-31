import { supabase } from '$lib/utils/supabaseClient';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');

		if (!email) {
			return { success: false, error: 'Email is required' };
		}

		const { error } = await supabase.from('ui').insert([{ email }]);

		// 23505 is a duplicate key error -> ignore this specific error and return success: true
		if (error && error.code !== '23505') {
			console.error('Error inserting mail', error);
			return { success: false, error: 'Oops, something went wrong...' };
		}

		return { success: true };
	}
};
