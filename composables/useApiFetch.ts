export const useApiFetch = (url:string, opts = []) => {

    let token = useCookie('token')

    const headers = {
        Authorization:'',
        Project: ''
    }

    if (token.value)
    {
        headers['Authorization'] = 'Bearer '+ token.value
    }

    headers['Project'] = useRuntimeConfig().public.projectHash

    
    return useFetch(url, {
        ...opts,
        baseURL: useRuntimeConfig().public.apiBase,
        headers: { ...headers },
    })
}