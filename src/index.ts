export interface Env {
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		try {
			const url = new URL(new URL(request.url).searchParams.get('url') || '')
			const proxyRequest = new Request(url, request);
			return fetch(proxyRequest);
		}
		catch {
			return new Response('', {
				status: 500
			});
		}
	},
};
